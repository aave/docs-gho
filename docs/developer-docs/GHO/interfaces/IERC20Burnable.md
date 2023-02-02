# IERC20Burnable

The interface of a burnable ERC20 token.

This page shows the [`write methods`](#write-methods) within the `IERC20Burnable` interface. The source code is available on [GitHub](https://github.com/aave/gho/blob/main/src/contracts/gho/interfaces/IERC20Burnable.sol).

## Write Methods

### burn

```solidity
function burn(uint256 amount) external
```

Destroys an `amount` tokens from the caller.

### Input Parameters:

| Name   | Type      | Description                     |
| ------ | --------- | ------------------------------- |
| amount | `uint256` | The amount of tokens to destroy |
