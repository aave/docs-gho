# IGhoDiscountRateStrategy

Defines the basic interface of the [`GhoDiscountRateStrategy`](../GhoDiscountRateStrategy).

This page shows the [view](#view-methods) methods within the `IGhoDiscountRateStrategy` interface. The source code is available on [GitHub](https://github.com/aave/gho-core/blob/main/src/contracts/facilitators/aave/tokens/interfaces/IGhoDiscountRateStrategy.sol).

## View Methods

### calculateDiscountRate

```solidity
function calculateDiscountRate(
    uint256 debtBalance, 
    uint256 discountTokenBalance
) external view returns (uint256)
```

Calculates the discount rate depending on the debt and discount token balances.

#### Input Parameters:

| Name                 | Type      | Description                            |
| -------------------- | --------- | -------------------------------------- |
| debtBalance          | `uint256` | The debt balance of the user           |
| discountTokenBalance | `uint256` | The discount token balance of the user |

#### Return Values:

| Type      | Description                                                             |
| --------- | ----------------------------------------------------------------------- |
| `uint256` | The discount rate, as a percentage - the maximum can be 10000 = 100.00% |
