---
sidebar_position: 6
---

# Arbitrage

Users can always borrow, repay and liquidate GHO at 1 US Dollar. By fixing the price of GHO to $1, immediate arbitrage opportunities are created. Arbitrage is a stabilizing factor for GHO and is necessary to help maintain the peg at 1 USD.

The example situations below help to understand GHO arbitrage opportunities.

## GHO Price is Above Peg

When the market price of GHO is above $1, there is the incentive to generate new GHO and sell on the market, repaying once the price has lowered enough to be profitable.

If the GHO price is above the peg ($1) in the market, users can mint 1 GHO for $1 worth of debt, and sell their GHO for more than $1. The minter can later repay their debt at $1 while keeping the difference of what they sold GHO at. This increases the supply of GHO while decreasing the price of GHO.

For example:

- The price of GHO in the protocol is $1

- The price of GHO on the market is above peg, at $1.05

- A user mints 1 GHO from the Aave protocol for $1

- This user can then sell their GHO on the market for $1.05

- This increases the supply of GHO on the market

- As there is more GHO available on the market, the price of GHO should decrease (due to supply and demand) to $1

- The user can then buy GHO on the market at $1

- The user can repay their $1 worth of debt to the Aave protocol

- The user keeps the difference of what they sold their GHO at, $0.05 profit

## GHO Price is Below Peg

When the market price of GHO is below $1, there is an incentive for borrowers to purchase GHO at a discounted price and repay/liquidate, earning on the difference.

If the GHO price is below peg ($1) in the market, minters can acquire 1 GHO on the market for less than $1, and pay off $1 worth of debt. This action shrinks the supply of GHO while increasing the asset price.

For example:

- The price of GHO in the protocol is $1

- The price of GHO on the market is below peg, at $0.95

- A user who already has a borrow position can acquire GHO from the market for $0.95

- The user can repay their $1 worth of GHO debt for less than $1 (with the GHO they acquired for $0.95)

This should increase the demand for GHO, and therefore decrease the supply of GHO on the market, while increasing the price.

## Flashminting

[FlashMinting](../fundamental-concepts/flashmint.md) provides the same functionality as the current flashloan standard and can be used in the same way flashloans are regularly used for arbitrage within the Aave protocol. Therefore, FlashMinting can be used for arbitrage between assets, without needing to have the principal amount (borrow position) to execute the arbitrage.
