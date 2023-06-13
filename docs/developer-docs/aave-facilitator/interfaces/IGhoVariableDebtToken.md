# IGhoVariableDebtToken

Defines the basic interface of the [`GhoVariableDebtToken`](../GhoVariableDebtToken).

The `IGhoVariableDebtToken` interface inherits the [`IVariableDebtToken`](https://github.com/aave/aave-v3-core/blob/master/contracts/interfaces/IVariableDebtToken.sol) interface.

This page shows the [events](#events), [write](#write-methods) and [view](#view-methods) methods within the `IGhoVariableDebtToken` interface. The source code is available on [GitHub](https://github.com/aave/gho-core/blob/main/src/contracts/facilitators/aave/tokens/interfaces/IGhoVariableDebtToken.sol).

## Events

### ATokenSet

```solidity
event ATokenSet(address indexed aToken)
```

Emitted when the address of the GHO [`aToken is set`](../GhoVariableDebtToken#setatoken).

#### Input Parameters:

| Name   | Type      | Description                             |
| ------ | --------- | --------------------------------------- |
| aToken | `address` | The address of the `GhoAToken` contract |

### DiscountRateStrategyUpdated

```solidity
event DiscountRateStrategyUpdated(
    address indexed oldDiscountRateStrategy,
    address indexed newDiscountRateStrategy
)
```

Emitted when the [discount rate strategy is updated](../GhoVariableDebtToken#updatediscountratestrategy).

#### Input Parameters:

| Name                    | Type      | Description                                    |
| ----------------------- | --------- | ---------------------------------------------- |
| oldDiscountRateStrategy | `address` | The address of the old GhoDiscountRateStrategy |
| newDiscountRateStrategy | `address` | The address of the new GhoDiscountRateStrategy |

### DiscountTokenUpdated

```solidity
event DiscountTokenUpdated(address indexed oldDiscountToken, address indexed newDiscountToken)
```

Emitted when the [discount token is updated](../GhoVariableDebtToken#updatediscounttoken).

#### Input Parameters:

| Name             | Type      | Description                           |
| ---------------- | --------- | ------------------------------------- |
| oldDiscountToken | `address` | The address of the old discount token |
| newDiscountToken | `address` | The address of the new discount token |

### DiscountPercentUpdated

```solidity
event DiscountPercentUpdated(
    address indexed user,
    uint256 oldDiscountPercent,
    uint256 indexed newDiscountPercent
)
```

Emitted when the internal function [`_refreshDiscountPercent()`](https://github.com/aave/gho/blob/main/src/contracts/facilitators/aave/tokens/GhoVariableDebtToken.sol#L507) is called, which updates the discount percent of the user according to current discount rate strategy.

#### Input Parameters:

| Name               | Type      | Description                                                   |
| ------------------ | --------- | ------------------------------------------------------------- |
| user               | `address` | The address of the user                                       |
| oldDiscountPercent | `uint256` | The old discount percent of the user                          |
| newDiscountPercent | `uint256` | The new discount percent of the user                          |

## Write Methods

### setAToken

```solidity
function setAToken(address ghoAToken) external
```

Sets a reference to the GHO aToken.

#### Input Parameters:

| Name      | Type      | Description                           |
| --------- | --------- | ------------------------------------- |
| ghoAToken | `address` | The address of the GhoAToken contract |

### updateDiscountRateStrategy

```solidity
function updateDiscountRateStrategy(address newDiscountRateStrategy) external
```

Updates the Discount Rate Strategy.

#### Input Parameters:

| Name                    | Type      | Description                                     |
| ----------------------- | --------- | ----------------------------------------------- |
| newDiscountRateStrategy | `address` | The address of GhoDiscountRateStrategy contract |

### updateDiscountToken

```solidity
function updateDiscountToken(address newDiscountToken) external
```

Updates the Discount Token.

#### Input Parameters:

| Name             | Type      | Description                           |
| ---------------- | --------- | ------------------------------------- |
| newDiscountToken | `address` | The address of DiscountToken contract |

### updateDiscountDistribution

```solidity
function updateDiscountDistribution(
    address sender,
    address recipient,
    uint256 senderDiscountTokenBalance,
    uint256 recipientDiscountTokenBalance,
    uint256 amount
) external
```

Updates the discount percents of the users when a discount token transfer occurs.

#### Input Parameters:

| Name                          | Type      | Description                                    |
| ----------------------------- | --------- | ---------------------------------------------- |
| sender                        | `address` | The address of the sender                      |
| recipient                     | `address` | The address of the recipient                   |
| senderDiscountTokenBalance    | `uint256` | The sender discount token balance              |
| recipientDiscountTokenBalance | `uint256` | The recipient discount token balance           |
| amount                        | `uint256` | The amount of discount token being transferred |

### decreaseBalanceFromInterest

```solidity
function decreaseBalanceFromInterest(address user, uint256 amount) external
```

Decrease the `amount` of interests accumulated by the `user`.

#### Input Parameters:

| Name   | Type      | Description               |
| ------ | --------- | ------------------------- |
| user   | `address` | The address of the user   |
| amount | `uint256` | The value to be decreased |

### rebalanceUserDiscountPercent

```solidity
function rebalanceUserDiscountPercent(address user) external
```

Rebalances the discount percent of a `user`.

#### Input Parameters:

| Name | Type      | Description             |
| ---- | --------- | ----------------------- |
| user | `address` | The address of the user |

## View Methods

### getAToken

```solidity
function getAToken() external view returns (address)
```

Returns the `address` of the GHO aToken.

#### Return Values:

| Type      | Description                           |
| --------- | ------------------------------------- |
| `address` | The address of the GhoAToken contract |

### getDiscountRateStrategy

```solidity
function getDiscountRateStrategy() external view returns (address)
```

Returns the `address` of the Discount Rate Strategy.

#### Return Values:

| Type      | Description                                     |
| --------- | ----------------------------------------------- |
| `address` | The address of GhoDiscountRateStrategy contract |

### getDiscountToken

```solidity
function getDiscountToken() external view returns (address)
```

Returns the `address` of the Discount Token.

#### Return Values:

| Type      | Description                  |
| --------- | ---------------------------- |
| `address` | The address of DiscountToken |

### getDiscountPercent

```solidity
function getDiscountPercent(address user) external view returns (uint256)
```

Returns the discount percent being applied to the debt interest of the `user`.

#### Input Parameters:

| Name | Type      | Description             |
| ---- | --------- | ----------------------- |
| user | `address` | The address of the user |

#### Return Values:

| Type      | Description                             |
| --------- | --------------------------------------- |
| `uint256` | The discount percent (expressed in bps) |

### getBalanceFromInterest

```solidity
function getBalanceFromInterest(address user) external view returns (uint256)
```

Returns the amount of interests accumulated by the `user`.

#### Input Parameters:

| Name | Type      | Description             |
| ---- | --------- | ----------------------- |
| user | `address` | The address of the user |

#### Return Values:

| Type      | Description                                     |
| --------- | ----------------------------------------------- |
| `uint256` | The amount of interests accumulated by the user |
