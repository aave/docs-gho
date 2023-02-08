# IGhoAToken

Defines the basic interface of the [`GhoAToken`](../GhoAToken.md).

The `IGhoAToken` interface inherits the [`IAToken`](https://github.com/aave/aave-v3-core/blob/master/contracts/interfaces/IAToken.sol) and [`IGhoFacilitator`](../../GHO/interfaces/IGhoFacilitator) interface.

This page shows the [`events`](#events), [`write`](#write-methods) and [`view`](#view-methods) methods within the `IGhoAToken` interface. The source code is available on [GitHub](https://github.com/aave/gho/blob/main/src/contracts/facilitators/aave/tokens/interfaces/IGhoAToken.sol).

## Events

### VariableDebtTokenSet

```solidity
event VariableDebtTokenSet(address indexed variableDebtToken)
```

Emitted when a reference to the GHO [variable debt token is set](../GhoAToken.md#setvariabledebttoken).

#### Input Parameters:

| Name              | Type      | Description                                        |
| ----------------- | --------- | -------------------------------------------------- |
| variableDebtToken | `address` | The address of the `GhoVariableDebtToken` contract |

## Write Methods

### setVariableDebtToken

```solidity
function setVariableDebtToken(address GhoVariableDebtToken) external
```

Sets a reference to the GHO variable debt token.

#### Input Parameters:

| Name                 | Type      | Description                                        |
| -------------------- | --------- | -------------------------------------------------- |
| GhoVariableDebtToken | `address` | The address of the `GhoVariableDebtToken` contract |

## View Methods

### getVariableDebtToken

```solidity
function getVariableDebtToken() external view returns (address)
```

Returns the `address` of the GHO variable debt token.

#### Return Values:

| Type      | Description                                        |
| --------- | -------------------------------------------------- |
| `address` | The address of the `GhoVariableDebtToken` contract |
