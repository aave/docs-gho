---
sidebar_position: 2
---

# Borrow GHO

Borrowing GHO is actually minting GHO ‘under the hood’. GHO will be borrowed by users (or borrowers) via [Facilitators](../how-gho-works/gho-facilitators.md). As with all borrowing on the Aave Protocol, a user must supply collateral (at a specific collateral ratio) to mint GHO.

## Borrowing on the Aave Interface

The video below shows how to borrow GHO using the Aave Protocol interface. This gives an overview of the process and steps involved before looking at how to mint GHO from a smart contract level.

<video controls width="100%" autoPlay>
  <source src="https://gho.infura-ipfs.io/ipfs/QmVFGEyoMTaoYnMCL9oDEg2zwaxK9G2T2vqEHUN7tu8Qtk"/>
</video>

## Minting GHO

GHO is created (‘[minted](../../developer-docs/overview#minting)’) by Facilitators. GHO is collateralized by the supply of crypto assets in excess of the value of GHO to be minted. This over-collateralization is intended as a stabilization mechanism to reduce the impact of any price fluctuations on the value of the underlying collateral during periods of volatility.

![Borrow Diagram](../../assets/GHO_borrow_process.png#gh-dark-mode-only)
![Borrow Diagram](../../assets/GHO_borrow_process_dark.png#gh-light-mode-only)

When borrowing GHO, based upon standard collateralization requirements built into the smart contracts, new GHO and GHO Debt Tokens are automatically generated and transferred to the user.

During a borrow transaction, the Bucket level for the Facilitator is updated to reflect the new amount of GHO minted.

The borrow action fails if the amount requested exceeds the Bucket capacity assigned to the Facilitator.

### Example Scenario

- The user supplies 1 ETH as collateral to the Aave Protocol
- The user receives 1aWETH in their wallet in return
- The user borrows (mints) 10 GHO
  - The GHO borrow rate can be discounted by holding stkAAVE
- They receive 10 debt tokens
- The debt becomes 10.00000008 variableDebtEthGHO because of interest after a short period of time.

It is important to take note of health factors, as with any other assets. Changes in the collateral price will impact the user's health factor, and if the health factor falls below 1, their collateral can be liquidated.
