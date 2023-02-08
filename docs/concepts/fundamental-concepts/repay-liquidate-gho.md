---
sidebar_position: 3
---

# Repay and Liquidate GHO

When a user repays their GHO (or is liquidated), that user’s GHO is burned by the Facilitator.

## Repaying on the Aave Interface

The video below shows how to repay GHO using the Aave Protocol interface. This gives an overview of the process and steps involved before looking at how to repay GHO from a smart contract level.

<video controls width="100%" autoPlay>
  <source src="https://gho.infura-ipfs.io/ipfs/QmPyAUsHBv385WgBaWB2rvrAyzAzGzuqRPzsnPUj5Jtsix"/>
</video>

## Repaying or Liquidating GHO

When repaying (or liquidating) GHO, first there are automatic smart contract-based collateralization checks. GHO is then returned to the pool from the user (or liquidator) and burned.

Normal assets direct the majority of interest earned to users who have supplied the corresponding asset, and a small portion is directed to the DAO. In this instance, since there are no suppliers to pay, the interest (accrued by minters of GHO) that is repaid is automatically transferred to the Aave DAO treasury. While the original amount of GHO is burned, and the Bucket level for the Facilitator is decreased.

![Repay Diagram](../../assets/Repay_and_liquidate_dark.png#gh-dark-mode-only)
![Repay Diagram](../../assets/Repay_and_liquidate.png#gh-light-mode-only)

### Example Scenario

- The user has 10 debt tokens
- The user purchases 90 GHO tokens on the market, ending up with 100 GHO tokens.
- The debt becomes 10.00000008 variableDebtEthGHO because of interest after a short period of time.
- The user has to approve for the Aave Protocol to pull funds from them to repay
- The user then repays their GHO debt position (using the repayWithPermit() function)
  - The 10.00000008 GHO gets repaid to the Aave Protocol and 10.00000008 variable debt tokens are burned.
  - The principal part, 10 GHO, gets burned by the Aave Facilitator and the interest earned, 0.00000008 GHO, is transferred to the GHO treasury.

## Liquidations

Users can be liquidated on their GHO borrow positions, the same as any other asset in the Aave protocol.

When a liquidation occurs, liquidators repay up to 50% of the outstanding borrowed amount on behalf of the borrower. In return, they can buy the collateral at a discount and keep the difference (liquidation penalty) as a bonus.

It is important to be mindful of price fluctuations due to market conditions, as changes in the collateral price will impact the health factor and may lead to liquidations. If the health factor goes below 1, the liquidation of collateral might be triggered. To avoid liquidations more collateral can be supplied or borrow positions can be repaid.

### FlashMint

[FlashMinting](flashmint.md) provides the same functionality as the current flashloan standard. Therefore, FlashMinting can be used to liquidate borrow positions, the same way flashloans are regularly used to liquidate user positions within the Aave protocol. Additionally, users approved by the Aave DAO as “_FlashBorrowers_” have the ability to execute flash mints free of charge. This works in the same way as the “flashLoan” function of the Aave V3 protocol.

For more information, please read the liquidation pages in the [FAQs](https://docs.aave.com/faq/liquidations) and [V3 Developer Docs](https://docs.aave.com/developers/guides/liquidations).
