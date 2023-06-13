# IUiGhoDataProvider

Defines the basic interface of the [`UiGhoDataProvider`](../UiGhoDataProvider.md).

This page shows the [structs](#structs) and [view](#view-methods) methods within the `IUiGhoDataProvider` interface. The source code is available on [GitHub](https://github.com/aave/gho-core/blob/main/src/contracts/facilitators/aave/misc/interfaces/IUiGhoDataProvider.sol).

## Structs

### GhoReserveData

```solidity
struct GhoReserveData {
    uint256 ghoBaseVariableBorrowRate;
    uint256 ghoDiscountedPerToken;
    uint256 ghoDiscountRate;
    uint256 ghoMinDebtTokenBalanceForDiscount;
    uint256 ghoMinDiscountTokenBalanceForDiscount;
    uint40 ghoReserveLastUpdateTimestamp;
    uint128 ghoCurrentBorrowIndex;
    uint256 aaveFacilitatorBucketLevel;
    uint256 aaveFacilitatorBucketMaxCapacity;
}
```
### GhoUserData

```solidity
struct GhoUserData {
    uint256 userGhoDiscountPercent;
    uint256 userDiscountTokenBalance;
    uint256 userPreviousGhoBorrowIndex;
    uint256 userGhoScaledBorrowBalance;
}
```

## View Methods

### getGhoReserveData

```solidity
function getGhoReserveData() external view returns (GhoReserveData memory)
```

Returns data of the GHO reserve and the Aave Facilitator.

#### Return Values:

| Type        | Description                   |
| ----------- | ----------------------------- |
| `GhoReserveData` | An object with information related to the GHO reserve and the Aave Facilitator |

### getGhoUserData

```solidity
function getGhoUserData(address user) external view returns (GhoUserData memory)
```

Returns data of the user's position on GHO.

#### Input Parameters:

| Name        | Type      | Description                    |
| ----------- | --------- | ------------------------------ |
| user | `address` | The address of the user |

#### Return Values:

| Type        | Description                   |
| ----------- | ----------------------------- |
| `GhoUserData` | An object with information related to the user's position with regard to GHO |