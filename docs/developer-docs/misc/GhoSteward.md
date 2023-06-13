# GhoSteward

This helper contract manages risk parameters of the GHO reserve within the Aave Facilitator.

:::info
This contract must be granted `PoolAdmin` in the Aave V3 Ethereum Pool and `BucketManager` in GHO Token.

Only the Risk Council is able to action contract's functions.

Only the Aave DAO is able to extend the steward's lifespan.
:::

This page shows the public [constant state variables](#constant-state-variables), [immutable state variables](#immutable-state-variables), external [write](#write-methods) and [view](#view-methods) methods within the `GhoSteward` contract. The source code is available on [GitHub](https://github.com/aave/gho-core/blob/main/src/contracts/misc/GhoSteward.sol).

## Constant State Variables

### MINIMUM_DELAY

```solidity
uint256 public constant MINIMUM_DELAY = 5 days
```

The minimum delay that must be respected between updating a specific parameter twice.

### BORROW_RATE_CHANGE_MAX

```solidity
uint256 public constant BORROW_RATE_CHANGE_MAX = 0.0050e4
```

The maximum percentage change for borrow rate updates (e.g. 0.0050e4 is 50, which results in 0.5%). The new borrow rate can only differ up to this percentage.

### STEWARD_LIFESPAN

```solidity
uint40 public constant STEWARD_LIFESPAN = 60 days
```

The lifespan of the steward.

## Immutable State Variables

### POOL_ADDRESSES_PROVIDER

```solidity
address public immutable POOL_ADDRESSES_PROVIDER
```

The address of the PoolAddressesProvider of Aave V3 Ethereum Facilitator.

### GHO_TOKEN

```solidity
address public immutable GHO_TOKEN
```

The address of the GhoToken.

### RISK_COUNCIL

```solidity
address public immutable RISK_COUNCIL
```

The address of the RiskCouncil.

## Write Methods

### updateBorrowRate

```solidity
function updateBorrowRate(uint256 newBorrowRate) external onlyRiskCouncil
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
function updateBucketCapacity(uint128 newBucketCapacity) external onlyRiskCouncil
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
function extendStewardExpiration() external onlyOwner
```

Extends the steward expiration date by `STEWARD_LIFESPAN`.

:::info
Only callable by the Aave Short Executor.
:::

Emits the [`StewardExpirationUpdated`](./interfaces/IGhoSteward.md#stewardexpirationupdated) event.

## View Methods

### getTimelock

```solidity
function getTimelock() external view returns (Debounce memory)
```

Returns the timelock values for all parameters updates.

#### Return Values

| Type     | Description                                                                |
| -------- | -------------------------------------------------------------------------- |
| `struct` | The [Debounce struct](interfaces/IGhoSteward.md) with parameters' timelock |

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
