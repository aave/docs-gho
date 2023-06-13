# GhoInterestRateStrategy

This contract implements the calculation of the GHO interest rates, which defines a fixed variable borrow rate.

The variable borrow interest rate is fixed at deployment time. The rest of the parameters are zeroed.

The `GhoInterestRateStrategy` contract inherits the [`IDefaultInterestRateStrategy`](https://github.com/aave/aave-v3-core/blob/master/contracts/interfaces/IDefaultInterestRateStrategy.sol) interface.

This page shows the public [constant state variables](#constant-state-variables), external [view](#view-methods) and [pure](#pure-methods) methods within the `GhoInterestRateStrategy` contract. The source code is available on [GitHub](https://github.com/aave/gho-core/blob/main/src/contracts/facilitators/aave/interestStrategy/GhoInterestRateStrategy.sol).

## Constant State Variables

### OPTIMAL_USAGE_RATIO

```solidity
uint256 public constant OPTIMAL_USAGE_RATIO = 0
```

The optimal usage ratio at which the pool aims to obtain most competitive borrow rates, expressed in ray.

### OPTIMAL_STABLE_TO_TOTAL_DEBT_RATIO

```solidity
uint256 public constant OPTIMAL_STABLE_TO_TOTAL_DEBT_RATIO = 0
```

The optimal stable to total debt ratio of the reserve, expressed in ray.

### MAX_EXCESS_USAGE_RATIO

```solidity
uint256 public constant MAX_EXCESS_USAGE_RATIO = 0
```

The max excess usage ratio above the optimal, expressed in ray.

### MAX_EXCESS_STABLE_TO_TOTAL_DEBT_RATIO

```solidity
uint256 public constant MAX_EXCESS_STABLE_TO_TOTAL_DEBT_RATIO = 0
```

The max excess stable to total debt ratio above the optimal, expressed in ray.

## View Methods

### getBaseVariableBorrowRate

```solidity
function getBaseVariableBorrowRate() external view override returns (uint256)
```

Returns the base variable borrow rate.

#### Return Values:

| Type      | Description                                     |
| --------- | ----------------------------------------------- |
| `uint256` | The base variable borrow rate, expressed in ray |

### getMaxVariableBorrowRate

```solidity
function getMaxVariableBorrowRate() external view override returns (uint256) 
```

Returns the maximum variable borrow rate.

#### Return Values:

| Type      | Description                                        |
| --------- | -------------------------------------------------- |
| `uint256` | The maximum variable borrow rate, expressed in ray |

### calculateInterestRates

```solidity
function calculateInterestRates(
  DataTypes.CalculateInterestRatesParams memory
) public view override returns (uint256, uint256, uint256)
```

Calculates the interest rates depending on the reserve’s state and configurations.

:::info

As the variable rate is fixed for the current interest rate strategy, parameters are not used for the interest rate calculation. No matter what the parameters are, the `liquidityRate` and `stableRate` will be 0. The interest rate returned, `variableBorrowRate`, is the fixed value decided by Aave Governance.

:::

#### Input Parameters:

| Name                         | Description                                       |
| ---------------------------- | ------------------------------------------------- |
| CalculateInterestRatesParams | The parameters needed to calculate interest rates |

#### Return Values:

| Type      | Description                                              |
| --------- | -------------------------------------------------------- |
| `uint256` | 0                                                        |
| `uint256` | 0                                                        |
| `uint256` | The base variable borrow rate decided by Aave Governance |

## Pure Methods

### getVariableRateSlope1

```solidity
function getVariableRateSlope1() external pure returns (uint256)
```

Returns the variable rate slope below optimal usage ratio. It's the variable rate when usage ratio > 0 and <= OPTIMAL_USAGE_RATIO.

:::info
Returns 0.
:::

### getVariableRateSlope2

```solidity
function getVariableRateSlope2() external pure returns (uint256)
```
Returns the variable rate slope above optimal usage ratio. It's the variable rate when usage ratio > OPTIMAL_USAGE_RATIO.

:::info
Returns 0.
:::

### getStableRateSlope1

```solidity
function getStableRateSlope1() external pure returns (uint256)
```

Returns the stable rate slope below optimal usage ratio. It's the stable rate when usage ratio > 0 and <= OPTIMAL_USAGE_RATIO.

:::info
Returns 0.
:::

### getStableRateSlope2

```solidity
function getStableRateSlope2() external pure returns (uint256)
```

Returns the stable rate slope above optimal usage ratio. It's the variable rate when usage ratio > OPTIMAL_USAGE_RATIO.

:::info
Returns 0.
:::

### getStableRateExcessOffset

```solidity
function getStableRateExcessOffset() external pure returns (uint256)
```

Returns the stable rate excess offset. It's an additional premium applied to the stable when stable debt > OPTIMAL_STABLE_TO_TOTAL_DEBT_RATIO.

:::info
Returns 0.
:::

### getBaseStableBorrowRate

```solidity
function getBaseStableBorrowRate() public pure returns (uint256)
```

Returns the base stable borrow rate.

:::info
Returns 0.
:::