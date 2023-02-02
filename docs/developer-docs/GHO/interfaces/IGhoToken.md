# IGhoToken

The interface of the [`GhoToken`](../gho-token.md).

The `IGhoToken` interface inherits the [`IERC20Burnable`](IERC20Burnable.md)`, `[IERC20Mintable](IERC20Mintable.md)`, and `[IERC20](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/IERC20.sol)` interfaces.

This page shows the [`structs`](#structs), [`events`](#events), and [`write`](#write-methods) and [`view`](#view-methods) methods within the `IGhoToken` interface. The source code is available on [GitHub](https://github.com/aave/gho/blob/main/src/contracts/gho/interfaces/IGhoToken.sol).

## Structs

### Facilitator

```solidity
struct Facilitator {
    uint128 bucketCapacity;
    uint128 bucketLevel;
    string label;
}
```

A [`Facilitator`](https://github.com/aave/gho/blob/main/src/contracts/gho/interfaces/IGhoToken.sol#L18) can trustlessly generate (and burn) GHO tokens.

| Name           | Type      | Description                                                   |
| -------------- | --------- | ------------------------------------------------------------- |
| bucketCapacity | `uint128` | The capacity of the bucket assigned to a specific Facilitator |
| bucketLevel    | `uint128` | The bucket level                                              |
| label          | `string`  | The label of the Facilitator bucket                           |

## Events

### FacilitatorAdded

```solidity
event FacilitatorAdded(
    address indexed facilitatorAddress,
    bytes32 indexed label,
    uint256 bucketCapacity
)
```

Emitted when a new Facilitator is [added](https://github.com/aave/gho/blob/main/src/contracts/gho/GhoToken.sol#L135).

### Input Parameters:

| Name               | Type      | Description                                            |
| ------------------ | --------- | ------------------------------------------------------ |
| facilitatorAddress | `address` | The address of the new Facilitator                     |
| label              | `bytes32` | A hashed human readable identifier for the Facilitator |
| bucketCapacity     | `uint256` | The initial capacity of the Facilitator’s bucket       |

### FacilitatorRemoved

```solidity
event FacilitatorRemoved(address indexed facilitatorAddress)
```

Emitted when a Facilitator is [removed](https://github.com/aave/gho/blob/main/src/contracts/gho/GhoToken.sol#L155).

### Input Parameters:

| Name               | Type      | Description                            |
| ------------------ | --------- | -------------------------------------- |
| facilitatorAddress | `address` | The address of the removed Facilitator |

### FacilitatorBucketCapacityUpdated

```solidity
event FacilitatorBucketCapacityUpdated(
    address indexed facilitatorAddress,
    uint256 oldCapacity,
    uint256 newCapacity
)
```

Emitted when the bucket capacity of a Facilitator is [`updated`](../gho-token.md#setfacilitatorbucketcapacity).

### Input Parameters:

| Name               | Type      | Description                                                           |
| ------------------ | --------- | --------------------------------------------------------------------- |
| facilitatorAddress | `address` | The address of the Facilitator whose bucket capacity is being changed |
| oldCapacity        | `uint256` | The old capacity of the bucket                                        |
| newCapacity        | `uint256` | The new capacity of the bucket                                        |

### FacilitatorBucketLevelUpdated

```solidity
event FacilitatorBucketLevelUpdated(
    address indexed facilitatorAddress,
    uint256 oldLevel,
    uint256 newLevel
  )
```

Emitted when the bucket level has changed. This occurs when tokens have been [`minted`](../gho-token.md#mint) and [`burned`](../gho-token.md#burn).

### Input Parameters:

| Name               | Type      | Description                                                        |
| ------------------ | --------- | ------------------------------------------------------------------ |
| facilitatorAddress | `address` | The address of the Facilitator whose bucket level is being changed |
| oldLevel           | `uint256` | The old level of the bucket                                        |
| newLevel           | `uint256` | The new level of the bucket                                        |

## Write Methods

### addFacilitator

```solidity
function addFacilitator(
    address facilitatorAddress,
    Facilitator memory facilitatorConfig
) external
```

Adds the Facilitator passed with the parameters to the Facilitators list.

### Input Parameters:

| Name               | Type          | Description                           |
| ------------------ | ------------- | ------------------------------------- |
| facilitatorAddress | `address`     | The address of the facilitator to add |
| facilitatorConfig  | `facilitator` | The configuration of the facilitator  |

### removeFacilitator

```solidity
function removeFacilitator(address facilitatorAddress) external
```

Remove the Facilitator from the Facilitators list.

### Input Parameters:

| Name               | Type      | Description                              |
| ------------------ | --------- | ---------------------------------------- |
| facilitatorAddress | `address` | The address of the facilitator to remove |

### setFacilitatorBucketCapacity

```solidity
function setFacilitatorBucketCapacity(address facilitator, uint128 newCapacity) external
```

Set the bucket capacity of the `facilitator`.

### Input Parameters:

| Name        | Type      | Description                    |
| ----------- | --------- | ------------------------------ |
| facilitator | `address` | The address of the Facilitator |
| newCapacity | `uint128` | The new capacity of the bucket |

## View Methods

### getFacilitator

```solidity
function getFacilitator(address facilitator) external view returns (Facilitator memory)
```

Returns the `facilitator` data.

### Input Parameters:

| Name        | Type       | Description                    |
| ----------- | ---------- | ------------------------------ |
| facilitator | `address ` | The address of the facilitator |

### Return Values:

| Type          | Description                   |
| ------------- | ----------------------------- |
| `facilitator` | The facilitator configuration |

### getFacilitatorBucket

```solidity
function getFacilitatorBucket(address facilitator) external view returns (uint256, uint256)
```

Returns the bucket configuration of the `facilitator`.

### Input Parameters:

| Name        | Type      | Description                    |
| ----------- | --------- | ------------------------------ |
| facilitator | `address` | The address of the facilitator |

### Return Values:

| Type      | Description                              |
| --------- | ---------------------------------------- |
| `uint256` | The capacity of the facilitator’s bucket |
| `uint256` | The level of the facilitator’s bucket    |

### getFacilitatorsList

```solidity
function getFacilitatorsList() external view returns (address[] memory)
```

Returns the list of addresses of the active facilitators.

### Return Values:

| Type        | Description                            |
| ----------- | -------------------------------------- |
| `address[]` | The list of the facilitators addresses |
