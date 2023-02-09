# GhoToken

The `GhoToken` contract inherits the [`ERC20`](ERC20) and [`Ownable`](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol) contracts, and the [`IGhoToken`](./interfaces/IGhoToken) interface.

This page shows the external [write](#write-methods) and [view](#view-methods) methods within the `GhoToken` contract. The source code is available on [GitHub](https://github.com/aave/gho-core/blob/main/src/contracts/gho/GhoToken.sol).

## Write Methods

### mint

```solidity
function mint(address account, uint256 amount) external override
```

Mints the requested `amount` of tokens to the `account` address.

Only Facilitators with enough bucket capacity available can mint. The bucket level increases upon minting (`newBucketLevel = currentBucketLevel + amount`), and must be less than or equal to the bucket capacity.

Emits the [`FacilitatorBucketLevelUpdated`](./interfaces/IGhoToken.md#facilitatorbucketlevelupdated) event.
To track all Facilitator activity, follow this event.

#### Input Parameters:

| Name    | Type      | Description                          |
| ------- | --------- | ------------------------------------ |
| account | `address` | The address receiving the GHO tokens |
| amount  | `uint256` | The amount to mint                   |

### burn

```solidity
function burn(uint256 amount) external override
```

Burns the requested `amount` of tokens from the account address.

The amount of tokens to burn must be greater than 0.

Only active Facilitators (capacity > 0) can burn. The bucket level decreases upon burning (`newBucketLevel = currentBucketLevel - amount`).

Emits the [`FacilitatorBucketLevelUpdated`](./interfaces/IGhoToken.md#facilitatorbucketlevelupdated) event.

#### Input Parameters:

| Name   | Type      | Description        |
| ------ | --------- | ------------------ |
| amount | `uint256` | The amount to burn |

### addFacilitator

```solidity
function addFacilitator(
    address facilitatorAddress,
    Facilitator memory facilitatorConfig
) external onlyOwner
```

Add the Facilitator passed with the parameters to the Facilitators list.

The Facilitator must not have already been added and must have a [`label`](./interfaces/IGhoToken.md#facilitator). The bucket configuration must be valid, with the [`bucketLevel`](./interfaces/IGhoToken.md#facilitator) equal to 0.

Emits the [`FacilitatorAdded`](./interfaces/IGhoToken.md#facilitatoradded) event.

#### Input Parameters:

| Name               | Type          | Description                            |
| ------------------ | ------------- | -------------------------------------- |
| facilitatorAddress | `address`     | The address of the Facilitators to add |
| facilitatorConfig  | `Facilitator` | The configuration of the Facilitator   |

The [`Facilitator`](./interfaces/IGhoToken.md#facilitator) struct is composed of the following fields:

| Name     | Type      | Description                                                   |
| -------- | --------- | ------------------------------------------------------------- |
| capacity | `uint128` | The capacity of the bucket assigned to a specific Facilitator |
| level    | `uint128` | The bucket level                                              |
| label    | `string`  | The label of the Facilitator bucket                           |

### removeFacilitator

```solidity
function removeFacilitator(address facilitatorAddress) external onlyOwner
```

Remove the Facilitator from the Facilitators list.

The Facilitator must exist as a current Facilitator, and must have a [`bucketLevel`](./interfaces/IGhoToken.md#facilitator) equal to 0.

Emits the [`FacilitatorRemoved`](./interfaces/IGhoToken.md#facilitatorremoved) event.

#### Input Parameters:

| Name               | Type      | Description                               |
| ------------------ | --------- | ----------------------------------------- |
| facilitatorAddress | `address` | The address of the Facilitators to remove |

### setFacilitatorBucketCapacity

```solidity
function setFacilitatorBucketCapacity(address facilitator, uint128 newCapacity) external onlyOwner
```

Sets the bucket capacity for the `facilitator`.

The owner of the contract is able to increase/decrease the bucket capacity for the given `facilitator`.

Emits the [`FacilitatorBucketCapacityUpdated`](./interfaces/IGhoToken.md#facilitatorbucketcapacityupdated) event.

#### Input Parameters:

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

#### Input Parameters:

| Name        | Type      | Description                    |
| ----------- | --------- | ------------------------------ |
| facilitator | `address` | The address of the Facilitator |

#### Return Values:

| Type        | Description                   |
| ----------- | ----------------------------- |
| Facilitator | The Facilitator configuration |

The [`Facilitator`](./interfaces/IGhoToken.md#facilitator) struct is composed of the following fields:

| Name     | Type      | Description                                                   |
| -------- | --------- | ------------------------------------------------------------- |
| capacity | `uint128` | The capacity of the bucket assigned to a specific Facilitator |
| level    | `uint128` | The bucket level                                              |
| label    | `string`  | The label of the Facilitator bucket                           |

### getFacilitatorBucket

```solidity
function getFacilitatorBucket(address facilitator) external view returns (uint256, uint256)
```

Returns the `facilitator` bucket configuration.

#### Input Parameters:

| Name        | Type      | Description                    |
| ----------- | --------- | ------------------------------ |
| facilitator | `address` | The address of the Facilitator |

#### Return Values:

| Type      | Description                              |
| --------- | ---------------------------------------- |
| `uint128` | The capacity of the Facilitator’s bucket |
| `uint128` | The level of the Facilitator’s bucket    |

### getFacilitatorsList

```solidity
function getFacilitatorsList() external view returns (address[] memory)
```

Returns the list of addresses of the active Facilitators.

#### Return Values:

| Type        | Description                            |
| ----------- | -------------------------------------- |
| `address[]` | The list of the Facilitators addresses |
