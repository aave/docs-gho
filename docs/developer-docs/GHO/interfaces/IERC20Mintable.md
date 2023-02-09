# IERC20Mintable

The interface of a mintable ERC20 token.

This page shows the [write](#write-methods) methods within the `IERC20Mintable` interface. The source code is available on [GitHub](https://github.com/aave/gho-core/blob/main/src/contracts/gho/interfaces/IERC20Mintable.sol).

## Write Methods

### mint

```solidity
function mint(address account, uint256 amount) external
```

Creates an `amount` of new tokens for the `account` address.

#### Input Parameters:

| Name    | Type      | Description                      |
| ------- | --------- | -------------------------------- |
| account | `address` | The address to create tokens for |
| amount  | `uint256` | The amount of tokens to create   |
