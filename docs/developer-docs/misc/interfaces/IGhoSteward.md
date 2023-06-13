# IGhoSteward

Defines the basic interface of the [`GhoSteward`](../GhoSteward.md).

This page shows the [structs](#structs), [events](#events), [write](#write-methods) and [view](#view-methods) methods within the `IGhoSteward` interface. The source code is available on [GitHub](https://github.com/aave/gho-core/blob/main/src/contracts/misc/interfaces/IGhoSteward.sol).

## Structs

### Debounce

```solidity
struct Debounce {
    uint40 borrowRateLastUpdated;
    uint40 bucketCapacityLastUpdated;
}
```

## Events

### StewardExpirationUpdated

```solidity
event StewardExpirationUpdated(uint40 oldStewardExpiration, uint40 newStewardExpiration)
```

Emitted when the steward expiration is updated.

#### Input Parameters

| Name                 | Type     | Description                                              |
| -------------------- | -------- | -------------------------------------------------------- |
| oldStewardExpiration | `uint40` | The old expiration unix time of the steward (in seconds) |
| newStewardExpiration | `uint40` | The new expiration unix time of the steward (in seconds) |

## Write Methods

### updateBorrowRate

```solidity
function updateBorrowRate(uint256 newBorrowRate) external
```

Updates the borrow rate of GHO, only if:

- respects the debounce duration (5 day pause between updates must be respected)
- the update changes up to 0.50% upwards or downwards

:::info
Only callable by Risk Council.
:::

#### Input Parameters

| Name          | Type      | Description                                                                       |
| ------------- | --------- | --------------------------------------------------------------------------------- |
| newBorrowRate | `uint256` | The new variable borrow rate (expressed in ray) (e.g. 0.0150e27 results in 1.50%) |

### updateBucketCapacity

```solidity
function updateBucketCapacity(uint128 newBucketCapacity) external
```

Updates the Bucket Capacity of the Aave V3 Ethereum Pool Facilitator, only if:

- respects the debounce duration (5 day pause between updates must be respected)
- the update changes up to 100% upwards

:::info
Only callable by Risk Council.
:::

#### Input Parameters

| Name              | Type      | Description                                |
| ----------------- | --------- | ------------------------------------------ |
| newBucketCapacity | `uint128` | The new bucket capacity of the facilitator |

### extendStewardExpiration

```solidity
function extendStewardExpiration() external
```

Extends the steward expiration date by `STEWARD_LIFESPAN`.

:::info
Only callable by Aave Short Executor.
:::

## View Methods

### MINIMUM_DELAY

```solidity
function MINIMUM_DELAY() external view returns (uint256)
```

Returns the minimum delay that must be respected between updating a specific parameter twice.

#### Return Values

| Type      | Description                                              |
| --------- | -------------------------------------------------------- |
| `uint256` | The minimum delay between parameter updates (in seconds) |

### BORROW_RATE_CHANGE_MAX

```solidity
function BORROW_RATE_CHANGE_MAX() external view returns (uint256)
```

Returns the maximum percentage change for borrow rate updates. The new borrow rate can only differ up to this percentage.

#### Return Values

| Type      | Description                                                                                        |
| --------- | -------------------------------------------------------------------------------------------------- |
| `uint256` | The maximum percentage change for borrow rate updates (e.g. 0.0050e4 is 50, which results in 0.5%) |

### STEWARD_LIFESPAN

```solidity
function STEWARD_LIFESPAN() external view returns (uint40)
```

Returns the lifespan of the steward.

#### Return Values

| Type     | Description                              |
| -------- | ---------------------------------------- |
| `uint40` | The lifespan of the steward (in seconds) |

### POOL_ADDRESSES_PROVIDER

```solidity
function POOL_ADDRESSES_PROVIDER() external view returns (address)
```

Returns the address of the Pool Addresses Provider of the Aave V3 Ethereum Facilitator.

#### Return Values

| Type      | Description                                                              |
| --------- | ------------------------------------------------------------------------ |
| `address` | The address of the PoolAddressesProvider of Aave V3 Ethereum Facilitator |

### GHO_TOKEN

```solidity
function GHO_TOKEN() external view returns (address)
```

Returns the address of the Gho Token.

#### Return Values

| Type      | Description                 |
| --------- | --------------------------- |
| `address` | The address of the GhoToken |

### RISK_COUNCIL

```solidity
function RISK_COUNCIL() external view returns (address)
```

Returns the address of the Risk Council.

#### Return Values

| Type      | Description                    |
| --------- | ------------------------------ |
| `address` | The address of the RiskCouncil |

### getTimelock

```solidity
function getTimelock() external view returns (Debounce memory)
```

Returns the timelock values for all parameters updates.

#### Return Values

| Type     | Description                                                |
| -------- | ---------------------------------------------------------- |
| `struct` | The [Debounce struct](#debounce) with parameters' timelock |

### getStewardExpiration

```solidity
function getStewardExpiration() external view returns (uint40)
```

Returns the expiration time of the steward.

#### Return Values

| Type     | Description                                          |
| -------- | ---------------------------------------------------- |
| `uint40` | The expiration unix time of the steward (in seconds) |

### getAllStrategies

```solidity
function getAllStrategies() external view returns (address[] memory)
```

Returns the list of Interest Rate Strategies for GHO.

#### Return Values

| Type        | Description                                   |
| ----------- | --------------------------------------------- |
| `address[]` | An array of GhoInterestRateStrategy addresses |
