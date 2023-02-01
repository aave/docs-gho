# GhoDiscountRateStrategy

This contract implements the calculation of the discount rate depending on the current strategy.

The `GhoDiscountRateStrategy` contract inherits the [`IGhoDiscountRateStrategy`](./interfaces/IGhoDiscountRateStrategy) interface.

This page shows the public [`constant state variables`](#constant-state-variables), and external [`pure methods`](#pure-methods) within the `GhoDiscountRateStrategy` contract. The source code is available on [GitHub](https://github.com/aave/gho/blob/main/src/contracts/facilitators/aave/interestStrategy/GhoDiscountRateStrategy.sol).

<aside>

:::tip **Debt and Discount Token**

Debt Token = GHO, the discounted token
Discount Token = stkAAVE, per the initial design OR current configuration
:::

</aside>

## Constant State Variables

### GHO_DISCOUNTED_PER_DISCOUNT_TOKEN

```solidity
uint256 public constant GHO_DISCOUNTED_PER_DISCOUNT_TOKEN = 100e18
```

The amount of debt that is entitled to get a discount per unit of discount token (stkAAVE).

Expressed with the number of decimals of the discounted token (GHO).

### DISCOUNT_RATE

```solidity
uint256 public constant DISCOUNT_RATE = 2000
```

The percentage of discount to apply to the part of the debt that is entitled to get a discount.

Expressed in bps. For example, a value of 2000 results in 20.00%.

### MIN_DISCOUNT_TOKEN_BALANCE

```solidity
uint256 public constant MIN_DISCOUNT_TOKEN_BALANCE = 1e18
```

The minimum balance amount of discount token (stkAAVE) a user must hold to be entitled to a discount.

Expressed with the number of decimals of the discount token (stkAAVE).

### MIN_DEBT_TOKEN_BALANCE

```solidity
uint256 public constant MIN_DEBT_TOKEN_BALANCE = 1e18
```

Minimum balance amount of debt token (variableDebtGHO) to be entitled to a discount.

Expressed with the number of decimals of the debt token (GHO).

## Pure Methods

### calculateDiscountRate

```solidity
function calculateDiscountRate(uint256 debtBalance, uint256 discountTokenBalance)
    external
    pure
    override
    returns (uint256)
```

Calculates the discount rate depending on the debt token (GHO) and discount token (stkAAVE) balances.

The `debtBalance` and `discountTokenBalance` must be above the [`MIN_DEBT_TOKEN_BALANCE`](#mindebttokenbalance) and [`MIN_DISCOUNT_TOKEN_BALANCE`](#mindiscounttokenbalance)` respectively, to receive a discount.

Please see the [Discount Rate](../../fundamental-concepts/gho-discount-strategy) page for more information and examples of the discount rate implementation.

### Input Parameters:

| Name                 | Type      | Description                                      |
| -------------------- | --------- | ------------------------------------------------ |
| debtBalance          | `uint256` | The debt balance of the user                     |
| discountTokenBalance | `uint256` | The discount token (stkAAVE) balance of the user |

### Return Values:

| Type      | Description                                                                |
| --------- | -------------------------------------------------------------------------- |
| `uint256` | The discount rate, as a percentage - the maximum can be 10000bps = 100.00% |
