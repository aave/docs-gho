# UiGhoDataProvider

Data provider of GHO token as a reserve within the Aave Protocol

The `UiGhoDataProvider` contract inherits the [`IUiGhoDataProvider`](./interfaces/IUiGhoDataProvider.md) interface.

This page shows the public [immutable state variables](#immutable-state-variables) and external [view](#view-methods) methods within the `UiGhoDataProvider` contract. The source code is available on [GitHub](https://github.com/aave/gho-core/blob/main/src/contracts/facilitators/aave/misc/UiGhoDataProvider.sol).

## Immutable State Variables

### POOL

```solidity
IPool public immutable POOL
```

The address of the Pool contract.  

### GHO

```solidity
IGhoToken public immutable GHO
```

The address of the Gho Token.

## View Methods

### getGhoReserveData

```solidity
function getGhoReserveData() public view override returns (GhoReserveData memory) 
```

Returns data of the GHO reserve and the Aave Facilitator.

#### Return Values:

| Type             | Description                                                                    |
| ---------------- | ------------------------------------------------------------------------------ |
| `GhoReserveData` | An [object](interfaces/IUiGhoDataProvider.md#ghoreservedata) with information related to the GHO reserve and the Aave Facilitator |

### getGhoUserData

```solidity
function getGhoUserData(address user) public view override returns (GhoUserData memory) 
```

Returns data of the user's position on GHO.

#### Input Parameters:

| Name | Type      | Description          |
| ---- | --------- | -------------------- |
| user | `address` | The address the user |

#### Return Values:

| Type          | Description                                                                  |
| ------------- | ---------------------------------------------------------------------------- |
| `GhoUserData` | An [object](interfaces/IUiGhoDataProvider.md#ghouserdata) with information related to the user's position with regard to GHO |