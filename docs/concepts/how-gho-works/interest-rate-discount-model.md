---
sidebar_position: 2
---

# Interest and Discount Rate Models

## Interest Rate Model

Compared to other assets within the Aave Protocol, GHO smart contracts do not follow the usual supply and demand dynamics that can often impact interest rates.

For GHO, the Aave Protocol integration requires interest rates to be determined by a coordination entity, specifically [Aave Governance](https://governance.aave.com/). The interest rates are set by Aave Governance, which statically adjusts interest rates depending on the need for the GHO supply to contract or expand.

Any changes to the interest rates require a governance proposal. This design works as a stability mechanism and retains the Aave Protocol’s borrow interest rate model flexibility. It will be possible in the future to implement any interest rate strategy the Aave Governance community sees fit.

### Interest Rates

The interest rate is the cornerstone of GHO stability, and, as in all decentralized protocols, it is built into the code.

The GHO price is fixed to $1 on the Aave Protocol; however, the price of GHO can be different in other markets (please see the [Arbitrage](../fundamental-concepts/arbitrage.md) page for further information). When this happens, Aave Governance can vote to increase or decrease the interest rates to encourage users to mint GHO or repay their GHO.

### GHO Price is Above 1 Dollar

If the market price of GHO is above 1 USD, Aave Governance can decrease the interest rate, as a lower interest rate may encourage additional users to access GHO.

### GHO Price is Below 1 Dollar

If the market price of GHO is below 1 USD, Aave Governance can increase the interest rate. This encourages more users to pay back their GHO positions which will decrease the outstanding GHO supply.

## Discount Rate Model

Given the nature of the asset, this integration allows for innovative features that provide greater utility for Aave Governance and community participants. The implementation of GHO includes a [Discount Strategy](../fundamental-concepts/gho-discount-strategy.md) mechanism, which allows for Safety Module participants (i.e., stkAAVE holders) to access a discount on the GHO borrow rate. The strategy sets a certain amount of GHO at discount per stkAAVE supplied and a discount on the interest rates that can vary from 0% (i.e., no discount) to 100% (i.e., full discount).

Discounts are available to borrowers staking AAVE in the Safety Module, which is a smart contract-based risk mitigation tool that is leveraged in the event of a shortfall event. By contributing to the Safety Module, users assume the risk that their stake will be slashed to cover the deficit in the event of bad debt arising in the Aave Protocol. To incentivize users to participate in staking and reward them for assuming this risk, users staking AAVE can receive a discount on their interest rate.

The configuration of the discount rate is controlled by Aave Governance.

### For each stkAAVE there will be a discount on the borrowing rate for 100 GHO

:::info

The parameters provided below are examples only. The initial parameters for the interest rate and discount model are subject to community discussions and a voting.

:::

For each stkAAVE, a user can receive a 50% discount on interest for 100 GHO, at an interest rate of 3%. If a user stakes 1 AAVE and borrows 100 GHO, they have borrowed the maximum amount of GHO available to them at a discount. Their interest rate is 50% of 3% → 1.5%. If a user instead borrows 200 GHO, 100 of that GHO will be at a 1.5% interest rate and 100 of the GHO will be at a 3% interest rate. Their effective interest rate will be 2.25%.

:::caution

The example above provides a simplified example of the discount rate for stkAAVE holders. Please see [GHO Discount Strategy](../fundamental-concepts/gho-discount-strategy.md) for detailed implementation.

:::

## Discount Rate Changes

The discount model is designed to be updated easily. Therefore, if Aave Governance determines that a different strategy is required, it can be implemented efficiently.

The discount rate is always available to a user but can only be locked for a certain period of time.

When a user receives a discount, it is assigned to them and can be locked for a certain time period (e.g., 6 months). After the 6 months have passed, if Aave Governance has set a new discount strategy and the user receives another discount rate, it may not be the same as it will have changed to the rate updated by Aave Governance.

This may also happen if a user triggers a discount update, such as borrowing and repaying GHO and updating their stkAAVE balance.

Please see the [Discount Rate Strategy](../fundamental-concepts/gho-discount-strategy.md) page for more information on the technical implementation of the discount rate.
