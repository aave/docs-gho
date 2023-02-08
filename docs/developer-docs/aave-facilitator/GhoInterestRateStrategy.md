# GhoInterestRateStrategy

This contract implements the calculation of the GHO interest rates.

The variable borrow interest rate is fixed at deployment time. The Aave Governance can update the interest rate by deploying a brand new contract and injecting it to the GHO reserve.

The `GhoInterestRateStrategy` contract inherits the [`IReserveInterestRateStrategy`](https://github.com/aave/aave-v3-core/blob/master/contracts/interfaces/IReserveInterestRateStrategy.sol) interface.

This page shows the external [`view methods`](#view-methods) within the `GhoInterestRateStrategy` contract. The source code is available on [GitHub](https://github.com/aave/gho/blob/main/src/contracts/facilitators/aave/interestStrategy/GhoInterestRateStrategy.sol).

## View Methods

### calculateInterestRates

```solidity
function calculateInterestRates(DataTypes.CalculateInterestRatesParams memory params)
    public
    view
    override
    returns (
      uint256,
      uint256,
      uint256
    )
```

Calculates the interest rates depending on the reserve’s state and configurations.

:::info

As the variable rate is fixed for the current interest rate strategy, parameters are not used for the interest rate calculation. No matter what the parameters are, the `liquidityRate` and `stableRate` will be 0. The interest rate returned, `variableBorrowRate`, is the fixed value decided by Aave Governance.

:::

#### Input Parameters:

| Name     | Type                                                                                                   | Description                                       |
| -------- | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------- |
| `params` | https://github.com/aave/aave-v3-core/blob/master/contracts/protocol/libraries/types/DataTypes.sol#L247 | The parameters needed to calculate interest rates |

#### Return Values:

| Name               | Type    | Description                                                                                            |
| ------------------ | ------- | ------------------------------------------------------------------------------------------------------ |
| liquidityRate      | uint256 | The liquidity rate = 0                                                                                 |
| stableBorrowRate   | uint256 | The stable borrow rate = 0                                                                             |
| variableBorrowRate | uint256 | The variable borrow rate decided by Aave Governance, expressed in ray (27 decimal fixed point number). |
