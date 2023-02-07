---
sidebar_position: 5
---

# FlashMint

FlashMinting is an important transaction for GHO as it helps to facilitate arbitrage and the ability to liquidate users.

:::info
Developers see here:
:::

## Flashloan vs FlashMinting

In the current Aave pool, if an asset is supplied, a user is able to perform a Flash Loan transaction with this asset. As GHO is not supplied, performing a Flash Loan is not possible. There is no problem with this, however, the GHO reserve is configured to disable native flashloans.

Therefore, FlashMinting has been introduced. FlashMinting provides the same functionality and follows the current [Flash Loan](https://docs.aave.com/developers/guides/flash-loans) standard (ERC3156) as in the Aave Protocol. Allowing users to access the liquidity of the FlashMint Facilitator for one transaction, as long as the amount taken plus the fee is returned or (if allowed) debt position is opened by the end of the transaction.

The [FlashMinter](../how-gho-works/gho-facilitators.md) Facilitator is an entity that enables FlashMinting. The FlashMinter has a GHO limit to mint and will be proposed as an initial Facilitator to the Aave DAO.

## Execution Flow

For developers, a helpful mental model to consider when developing a solution is as follows:

1. Your contract calls the FlashMinter Facilitator, requesting to FlashMint a certain amount of GHO using `flashLoan()`.
2. If the requested amount is lower or equal to the Facilitator's capacity, the FlashMinter Facilitator mints and transfers the GHO amount to your contract, then calls `onFlashLoan()` on receiver contract.
3. Your contract, now holding the FlashMinted amount, executes any arbitrary operation in its code.
   - You approve the FlashMinter Facilitator for FlashMinted amount + fee. If you are an authorized flashborrower by the Aave DAO, your fee is 0.
   - You return the keccak hash of `ERC3156FlashBorrower.onFlashLoan` so the FlashMint Facilitator ensures the receiver is ERC3156 complaint.
   - If any of these conditions are not met or the amount owing is not available (due to lack of balance or approval), then the transaction is reverted.
4. All of the above happens in 1 transaction (hence in a single block).

## Step by step

1. **Setting Up**

Your contract that receives the FlashMinted amount of GHO must conform to the ERC3156 standard. The `IERC3156FlashBorrower.sol` interface defines the relevant `onFlashLoan()` function that needs to be overridden by your arbitrary code.

Also note that since the owed GHO amount will be pulled from your contract, your contract must give allowance to the FlashMinter Facilitator to pull those funds to pay back the FlashMinted amount + fee.

2. **Calling `flashLoan()`**

To call the flash loan method of the FlashMinter Faciltiator, we need to pass in the relevant parameter.
There are 3 ways you can do this:

**From an EOA ('normal' Ethereum account)**
To use an EOA, send a transaction to the relevant Pool calling the flashLoan() function. See FlashMinter api docs for parameter details, ensuring you use your contract address from step 1 for the receiver.

**From a different contract**
Similar to sending a transaction from an EOA as above, ensure the receiver is your contract address from step 1.

**From the same contract**
If you want to use the same contract as in step 1, use `address(this)` for the receiver parameter in the flash loan method.

3. **Completing the flash loan**

Once you have performed your logic with the FlashMinted asset (in your `onFlashLoan()` function), you will need to pay back the FlashMinted amount plus the fee.

**Paying back the FlashMinted asset**
Ensure your contract has the relevant amount + fee to payback the borrowed asset. You can calculate this by taking the sum of the amount and fee values passed into the `onFlashLoan()` function.
You do not need to transfer the owed amount back to the FlashMint Facilitator. The funds will be automatically pulled at the conclusion of your operation.

**Returning the correct value in `onFlashLoan()`**
The FlashMinter Facilitator checks the returned value of `onFlashLoan()` to validate it is ERC3156 complaint. The correct value to return is the keccak hash of `ERC3156FlashBorrower.onFlashLoan` string.
