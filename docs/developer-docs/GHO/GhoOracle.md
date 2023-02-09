# GhoOracle

The price feed for GHO is fixed and denominated in USD. The price is fixed at 1 USD, using 8 decimals.

The Aave Protocol will be programmed to always use to price of 1 GHO = $1. This is different from using market pricing via oracles for other crypto assets. This creates stabilizing [arbitrage](../../concepts/fundamental-concepts/arbitrage) opportunities when the price of GHO fluctuates.

This page shows the public [constant state variables](#constant-state-variables), and [pure](#pure-methods) methods within the `GhoOracle` contract. The source code is available on [GitHub](https://github.com/aave/gho-core/blob/main/src/contracts/facilitators/aave/oracle/GhoOracle.sol).

## Constant State Variables

### GHO_PRICE

```solidity
int256 public constant GHO_PRICE = 1e8
```

Fixed at 1 USD, formatted with 8 decimals.

## Pure Methods

### latestAnswer

```solidity
function latestAnswer() external pure returns (int256)
```

Returns the [price](#ghoprice) of a unit of GHO (USD denominated).

The GHO price is fixed at 1 USD.

#### Return Values:

| Type     | Description                                  |
| -------- | -------------------------------------------- |
| `int256` | The price of a unit of GHO (with 8 decimals) |

### decimals

```solidity
function decimals() external pure returns (uint8)
```

Returns the number of decimals the price is formatted with, 8.

#### Return Values:

| Type    | Description               |
| ------- | ------------------------- |
| `uint8` | 8: the number of decimals |
