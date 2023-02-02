# IGhoFacilitator

Interface to define the behavior of a GhoFacilitator. Designed to be implemented by Facilitators, to add common logic related to GHO Treasury.

This page shows the [`events`](#events), and [`write`](#write-methods) methods within the `IGhoFacilitator` interface. The source code is available on [GitHub](https://github.com/aave/gho/blob/main/src/contracts/gho/interfaces/IGhoFacilitator.sol).

## Events

### FeesDistributedToTreasury

```solidity
event FeesDistributedToTreasury(
    address indexed ghoTreasury,
    address indexed asset,
    uint256 amount
)
```

Emitted when fees are distributed to the GHO Treasury.

Emitted in the [`GhoAToken`](../../aave-facilitator/GhoAToken#distributeFeesToTreasury) and [`GhoFlashMinter`](../../flashmint-facilitator/GhoFlashMinter#distributefeestotreasury) contracts.

| Name        | Type      | Description                                             |
| ----------- | --------- | ------------------------------------------------------- |
| ghoTreasury | `address` | The address of the ghoTreasury                          |
| asset       | `address` | The address of the asset transferred to the ghoTreasury |
| amount      | `uint256` | The amount of the asset transferred to the ghoTreasury  |

### GhoTreasuryUpdated

```solidity
event GhoTreasuryUpdated(address indexed oldGhoTreasury, address indexed newGhoTreasury)
```

Emitted when the GHO Treasury address is updated.

Emitted in the [`GhoAToken`](../../aave-facilitator/GhoAToken#updateghotreasury) and [`GhoFlashMinter`](../../flashmint-facilitator/GhoFlashMinter#updateghotreasury) contracts.

## Write Methods

### distributeFeesToTreasury

```solidity
function distributeFeesToTreasury() external
```

Distribute fees to the GHO Treasury.

Facilitators may opt to delay the distribution of GHO fees to the treasury (i.e gas optimization) or on every user action making this function complementary or not necessary.

### updateGhoTreasury

```solidity
function updateGhoTreasury(address newGhoTreasury) external
```

Updates the address of the GHO Treasury.

🚨The GHO Treasury is where revenue fees are sent to. Update carefully.

### Input Parameters:

| Name           | Type      | Description                     |
| -------------- | --------- | ------------------------------- |
| newGhoTreasury | `address` | The address of the GHO Treasury |

### getGhoTreasury

```solidity
function getGhoTreasury() external view returns (address)
```

Returns the address of the GHO Treasury.

### Return Values:

| Type      | Description                              |
| --------- | ---------------------------------------- |
| `address` | The address of the GHO Treasury contract |
