# GhoStableDebtToken

Implements a non-usable and reverting stable debt token, only used for listing configuration purposes.

:::info
All write operations revert and read functions return 0.
:::

The `GhoStableDebtToken` contract inherits the [`DebtTokenBase`](https://github.com/aave/aave-v3-core/blob/master/contracts/protocol/tokenization/base/DebtTokenBase.sol), [`IncentivizedERC20`](https://github.com/aave/aave-v3-core/blob/master/contracts/protocol/tokenization/base/IncentivizedERC20.sol) contracts, and the [`IStableDebtToken`](https://github.com/aave/aave-v3-core/blob/master/contracts/interfaces/IStableDebtToken.sol) interface.

This page shows the public [constant state variables](#constant-state-variables), external [write](#write-methods), [view](#view-methods) and [pure](#pure-methods) methods, and the ['not supported methods'](#not-supported-methods) within the `GhoStableDebtToken` contract. The source code is available on [GitHub](https://github.com/aave/gho-core/blob/main/src/contracts/facilitators/aave/tokens/GhoStableDebtToken.sol).

## Constant State Variables

### DEBT_TOKEN_REVISION

```solidity
uint256 public constant DEBT_TOKEN_REVISION = 0x1
```

The revision number of the contract.

## Write Methods

### initialize

```solidity
function initialize(
    IPool initializingPool,
    address underlyingAsset,
    IAaveIncentivesController incentivesController,
    uint8 debtTokenDecimals,
    string memory debtTokenName,
    string memory debtTokenSymbol,
    bytes calldata params
  ) external override initializer
```

Initializes the debt token.

Emits the [`Initialized`](https://github.com/aave/aave-v3-core/blob/master/contracts/interfaces/IInitializableDebtToken.sol#L23) event.

#### Input Parameters:

| Name                 | Type                        | Description                                                   |
| -------------------- | --------------------------- | ------------------------------------------------------------- |
| initializingPool     | `IPool`                     | The pool contract that is initializing this contract          |
| underlyingAsset      | `address`                   | The address of the underlying asset of this aToken            |
| incentivesController | `IAaveIncentivesController` | The smart contract managing potential incentives distribution |
| debtTokenDecimals    | `uint8`                     | The decimals of the debtToken, same as the underlying asset’s |
| debtTokenName        | `string`                    | The name of the token                                         |
| debtTokenSymbol      | `string`                    | The symbol of the token                                       |
| params               | `bytes`                     | A set of encoded parameters for additional initialization     |

## View Methods

### UNDERLYING_ASSET_ADDRESS

```solidity
function UNDERLYING_ASSET_ADDRESS() external view override returns (address) 
```

Returns the address of the underlying asset of this stableDebtToken (e.g. WETH for stableDebtWETH).

#### Return Values:

| Type      | Description                         |
| --------- | ----------------------------------- |
| `uint256` | The address of the underlying asset |

## Pure Methods

### getAverageStableRate

```solidity
function getAverageStableRate() external pure virtual override returns (uint256)
```

:::info
All read functions return 0.
:::

### getUserLastUpdated

```solidity
function getUserLastUpdated(address user) external pure virtual override returns (uint40)
```

#### Input Parameters:

| Name | Type      | Description             |
| ---- | --------- | ----------------------- |
| user | `address` | The address of the user |

:::info
All read functions return 0.
:::

### getUserStableRate

```solidity
function getUserStableRate(address user) external pure virtual override returns (uint256)
```

#### Input Parameters:

| Name | Type      | Description             |
| ---- | --------- | ----------------------- |
| user | `address` | The address of the user |

:::info
All read functions return 0.
:::

### balanceOf

```solidity
function balanceOf(address account) public pure virtual override returns (uint256)
```

#### Input Parameters:

| Name    | Type      | Description                |
| ------- | --------- | -------------------------- |
| account | `address` | The address of the account |

:::info
All read functions return 0.
:::

### getSupplyData

```solidity
function getSupplyData() external pure override returns (uint256, uint256, uint256, uint40)
```

:::info
All read functions return 0.
:::

### getTotalSupplyAndAvgRate

```solidity
function getTotalSupplyAndAvgRate() external pure override returns (uint256, uint256) 
```

:::info
All read functions return 0.
:::

### getTotalSupplyLastUpdated

```solidity
function getTotalSupplyLastUpdated() external pure override returns (uint40)
```

:::info
All read functions return 0.
:::

### totalSupply

```solidity
function totalSupply() public pure virtual override returns (uint256)
```

:::info
All read functions return 0.
:::

### principalBalanceOf

```solidity
function principalBalanceOf(address user) external pure virtual override returns (uint256)
```

Returns the principal debt balance of the user.

#### Input Parameters:

| Name | Type      | Description             |
| ---- | --------- | ----------------------- |
| user | `address` | The address of the user |

:::info
All read functions return 0.
:::

## NOT SUPPORTED METHODS

The methods show `OPERATION_NOT_SUPPORTED` as they are not permitted to be executed.

Being non-transferrable, the debt token does not implement any of the standard ERC20 functions for transfer and allowance.

### mint

```solidity
function mint(
    address,
    address,
    uint256,
    uint256
) external virtual override onlyPool returns (bool, uint256, uint256)
```

:::danger Not supported by design.
:::

### burn

```solidity
function burn(address, uint256) external virtual override onlyPool returns (uint256, uint256)
```

:::danger Not supported by design.
:::

### transfer

```solidity
function transfer(address, uint256) external virtual override returns (bool)
```

:::danger Not supported by design.
:::

### allowance

```solidity
function allowance(address, address) external view virtual override returns (uint256)
```

:::danger Not supported by design.
:::

### approve

```solidity
function approve(address, uint256) external virtual override returns (bool)
```

:::danger Not supported by design.
:::

### transferFrom

```solidity
function transferFrom(address, address, uint256) external virtual override returns (bool)
```

:::danger Not supported by design.
:::

### increaseAllowance

```solidity
function increaseAllowance(address, uint256) external virtual override returns (bool)
```

:::danger Not supported by design.
:::

### decreaseAllowance

```solidity
function decreaseAllowance(address, uint256) external virtual override returns (bool)
```

:::danger Not supported by design.
:::
