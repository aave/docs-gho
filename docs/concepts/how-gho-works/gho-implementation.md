---
sidebar_position: 1
---

# GHO Implementation

While interacting with GHO is similar to interacting with other assets within the Aave Protocol, the implementation of and user interaction with GHO as an asset in the Aave pool is quite different. The way that GHO is configured has differences that help it to maintain price stability.

## GHO is minted and burned by the smart contracts on demand when a user borrows and repays, respectively

GHO is not supplied to the Aave pool.

### Other Assets

All other assets must be supplied to the Aave Protocol by users, and only once supplied, can they be borrowed from the reserve. For example, if a user deposits USDC and would like to borrow LINK, another user must have supplied LINK for the user to later borrow it.

This is not required for GHO.

### GHO

If a user supplies USDC and would like to borrow GHO, there is no requirement for a user to have supplied GHO. Instead, the Aave Protocol calls the GHO contract mints GHO on demand. When repaying GHO debt, GHO is burned via smart contracts when the amount repaid exceeds the interest to pay, rather than going back to the suppliers.

This provides more flexibility than regular assets in the pool as GHO is minted on demand, the user does not have to rely on assets being supplied.

Facilitators will have the ability to mint GHO. Please see the [Facilitators](gho-facilitators.md) page to read about the role that Facilitators play for GHO.

## The GHO Oracle Price is Fixed at One U.S. Dollar

No matter what the market price is, the Aave Protocol will always value 1 GHO at the equivalent value of 1 USD, regardless of market price. This helps to maintain stability.

As the price is fixed, it creates immediate opportunities to help GHO maintain its peg.

For example, when the GHO price is above the peg, users can mint 1 GHO for $1 worth of debt. If the price of GHO is above $1 in the market, users can sell GHO for more than $1. This increases the supply of GHO while decreasing the asset price. The minter can later repay their debt at $1 while keeping the difference of what they sold GHO for. When the price of GHO is below the peg, minters can acquire 1 GHO on the market for less than $1 and pay off $1 worth of debt. This action shrinks the supply of GHO while increasing the asset price.

GHO is an over-collateralized asset, where every GHO is backed by more than $1 of collateral. This model has proved its resilience in the DeFi ecosystem for years.

## Interest Rates are Defined by Aave Governance

GHO borrow interest and discount rates are set by the Aave DAO. Aave Governance can periodically set the interest rates to help maintain stability with supply and demand.

### Other Assets

For a normal reserve within the Aave Protocol, interest rates are based on the utilization of that reserve. For example, if 10% of the supplied assets are borrowed, there will be a low-interest rate. If 90% of the supplied assets are borrowed, there will be a high-interest rate.

With GHO, there are no suppliers, which means that interest rates work differently.

### GHO

The interest rate is stable and will be adapted periodically depending on market conditions by Aave Governance to help control price stability. If the price of GHO increases, the interest rate should decrease to encourage the creation of GHO (i.e., GHO supply expands -> GHO rebalances down). If the GHO price decreases, the interest rate should increase to incentivize repayment (i.e., GHO supply contracts -> GHO prices rebalance up).

Please see the [Interest and Discount Rates](interest-rate-discount-model.md) page for more information.

## Repaid Interest is Re-directed to the Aave DAO Rather Than to Suppliers

### Other Assets

Normally, most of the interest earned on borrowed crypto assets is directed to the users that supplied the corresponding asset, and a small amount of this is directed to the Aave DAO.

### GHO

If GHO is not supplied, there are no suppliers to pay and therefore GHO does not have a reserve. All the interest accrued on positions will be paid to the Aave DAO.

## Facilitators

If approved by the Aave community, the [Aave V3 Ethereum Pool](./gho-facilitators.md#aave-v3-ethereum-pool) and [FlashMinter](./gho-facilitators.md#flashminter) Facilitator will be the first Facilitators on Ethereum Mainnet. In the future, there may be other Facilitators. Facilitators will have the ability to mint GHO and will be able to apply different strategies to their generation of GHO.

### Collateral

All assets that are enabled for use as collateral on the Aave Protocol can be used to back GHO.

### Liquidations

GHO works in the same way as assets already on the Aave Protocol. If the value of users’ collateral drops due to market conditions and their health factors decrease, liquidations can occur.

### Flashloan

GHO can be [FlashMinted](../fundamental-concepts/flashmint.md) via the FlashMinter Facilitator. This provides the same functionality as a flashloan in the current Aave pool; however, it is implemented differently from how flashloans are integrated today.

### Isolation Mode

[Isolation mode](https://docs.aave.com/developers/whats-new/isolation-mode) on V3 Aave Governance can limit exposure to the amount of GHO that can be minted based on collateral from riskier assets. If the community determines that a specific asset weight in GHO collateral is ‘too high,’ limits can be changed by a governance vote as Aave Governance sees fit. In this example, isolation mode reduces risk and keeps GHO collateralized.

### Bridges

Bridging support and logic will be dependent upon bridges that will support GHO.
