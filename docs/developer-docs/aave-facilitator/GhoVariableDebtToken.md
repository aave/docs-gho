# GhoVariableDebtToken

Implements a variable debt token to track the borrowing positions of users at variable rate mode for GHO.

:::info
It is important to note, although it is based on the VariableDebtToken implementation of the Aave Protocol, the interest rate mode is not variable as it is fixed by the Aave Governance.
:::

:::caution
A number of [operations](#not-supported-methods), such as transfer and approve, are disabled since it is a non-transferable token.
:::

The `GhoVariableDebtToken` contract inherits the [`DebtTokenBase`](https://github.com/aave/aave-v3-core/blob/master/contracts/protocol/tokenization/base/DebtTokenBase.sol), [`ScaledBalanceTokenBase`](https://github.com/aave/aave-v3-core/blob/master/contracts/protocol/tokenization/base/ScaledBalanceTokenBase.sol) contracts, and the [`IGhoVariableDebtToken`](./interfaces/IGhoVariableDebtToken.md) interface.

This page shows the public [`constant state variables`](#constant-state-variables), [`structs`](#structs), external [`write methods`](#write-methods), and the [`not supported methods`](#not-supported-methods) within the `GhoVariableDebtToken` contract. The source code is available on [GitHub](https://github.com/aave/gho/blob/main/src/contracts/facilitators/aave/tokens/GhoVariableDebtToken.sol).

## Constant State Variables

### DEBT_TOKEN_REVISION

```solidity
uint256 public constant DEBT_TOKEN_REVISION = 0x1
```

The revision number of the contract.

## Structs

### GhoUserState

```solidity
struct GhoUserState {
    uint128 accumulatedDebtInterest;
    uint16 discountPercent;
    uint40 rebalanceTimestamp;
}
```

| Name                    | Type      | Description                                              |
| ----------------------- | --------- | -------------------------------------------------------- |
| accumulatedDebtInterest | `uint128` | The accumulated debt interest of the user                |
| discountPercent         | `uint16`  | The discount percent of the user (expressed in bps)      |
| rebalanceTimestamp      | `uint40`  | The timestamp when the user’s discount can be rebalanced |

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

Emits the [`Initialized`](https://github.com/aave/aave-v3-core/blob/master/contracts/interfaces/IInitializableDebtToken.sol#L23)` event.

### Input Parameters:

| Name                 | Type                        | Description                                                   |
| -------------------- | --------------------------- | ------------------------------------------------------------- |
| initializingPool     | `IPool`                     | The pool contract that is initializing this contract          |
| underlyingAsset      | `address`                   | The address of the underlying asset of this aToken            |
| incentivesController | `IAaveIncentivesController` | The smart contract managing potential incentives distribution |
| debtTokenDecimals    | `uint8`                     | The decimals of the debtToken, same as the underlying asset’s |
| debtTokenName        | `string`                    | The name of the token                                         |
| debtTokenSymbol      | `string`                    | The symbol of the token                                       |
| params               | `bytes`                     | A set of encoded parameters for additional initialization     |

### mint

```solidity
function mint(
    address user,
    address onBehalfOf,
    uint256 amount,
    uint256 index
) external virtual override onlyPool returns (bool, uint256)
```

- Mints the debt token to the `onBehalfOf` address. Implements the basic logic to mint a scaled balance token.
- The user’s interest is accumulated here.
- The discount percent of the user is applied to the accumulated interest.
- DiscountPercent is rebalanced and “locked for the next period of time”

### Input Parameters:

| Name       | Type       | Description                                                                                                                                                      |
| ---------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| user       | `addres`s` | The address performing the mint. The address receives the borrowed underlying, being the delegatee in case of credit delegation, or same as onBehalfOf otherwise |
| onBehalfOf | `address`  | The address of the user that will receive the scaled debt tokens tokens                                                                                          |
| amount     | `uint256`  | The amount of debt tokens being minted                                                                                                                           |
| index      | `uint256`  | The next variable debt liquidity index of the reserve                                                                                                            |

### Return Values:

| Type      | Description                                                        |
| --------- | ------------------------------------------------------------------ |
| `bool`    | true if the the previous balance of the user is 0, false otherwise |
| `uint256` | The scaled total debt of the reserve                               |

### burn

```solidity
function burn(
    address from,
    uint256 amount,
    uint256 index
) external override onlyPool returns (uint256)
```

Burns the user variable debt token. Implements the basic logic to burn a scaled balance token.

### Input Parameters:

| Name   | Type      | Description                                    |
| ------ | --------- | ---------------------------------------------- |
| from   | `address` | The address from which the debt will be burned |
| amount | `uint256` | The amount being burned                        |
| index  | `uint256` | The variable debt index of the reserve         |

### Return Values:

| Type      | Description                          |
| --------- | ------------------------------------ |
| `uint256` | The scaled total debt of the reserve |

### setAToken

```solidity
function setAToken(address ghoAToken) external override onlyPoolAdmin
```

Sets a reference to the [`GhoAToken`](GhoAToken.md) contract. Checks the AToken has not already been set.

This function can only be called by the Pool Admin.

Emits the [`ATokenSet`](./interfaces/IGhoVariableDebtToken#atokenset) event.

### Input Parameters:

| Name      | Type      | Description                           |
| --------- | --------- | ------------------------------------- |
| ghoAToken | `address` | The address of the GhoAToken contract |

### updateDiscountRateStrategy

```solidity
function updateDiscountRateStrategy(address newDiscountRateStrategy)
    external
    override
    onlyPoolAdmin
```

Updates the Discount Rate Strategy.

This function can only be called by the [Pool Admin].

Emits the [`DiscountRateStrategyUpdated`](./interfaces/IGhoVariableDebtToken.md#discountratestrategyupdated) event.

### Input Parameters:

| Name                    | Type      | Description                                      |
| ----------------------- | --------- | ------------------------------------------------ |
| newDiscountRateStrategy | `address` | The address of the DiscountRateStrategy contract |

### updateDiscountToken

```solidity
function updateDiscountToken(address newDiscountToken) external override onlyPoolAdmin
```

Updates the Discount Token.

This function can only be called by the [Pool Admin].

Emits the [`DiscountTokenUpdated`](./interfaces/IGhoVariableDebtToken.md#discounttokenupdated) event.

### Input Parameters:

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
  ) external override onlyDiscountToken
```

Updates the discount percents of the users when a discount token transfer occurs.

This function is automatically called when `stkAAVE` tokens are transferred into the user’s address.

This function can only be called by the discount token.

Emits the [`Transfer`](https://github.com/aave/aave-v3-core/blob/master/contracts/dependencies/openzeppelin/contracts/IERC20.sol#L73) and [`Mint`](https://github.com/aave/aave-v3-core/blob/master/contracts/interfaces/IScaledBalanceToken.sol#L18) events.

### Input Parameters:

| Name                          | Type      | Description                                    |
| ----------------------------- | --------- | ---------------------------------------------- |
| sender                        | `address` | The address of the sender                      |
| recipient                     | `address` | The address of the recipient                   |
| senderDiscountTokenBalance    | `uint256` | The sender discount token balance              |
| recipientDiscountTokenBalance | `uint256` | The recipient discount token balance           |
| amount                        | `uint256` | The amount of discount token being transferred |

### decreaseBalanceFromInterest

```solidity
function decreaseBalanceFromInterest(address user, uint256 amount) external override onlyAToken
```

Decreases the amount of interest accumulated by the user.

This function can only be called by the AToken.

### Input Parameters:

| Name   | Type      | Description               |
| ------ | --------- | ------------------------- |
| user   | `address` | The address of the user   |
| amount | `uint256` | The value to be decreased |

### rebalanceUserDiscountPercent

```solidity
function rebalanceUserDiscountPercent(address user) external override
```

Rebalances the discount percent of a user.

This can only be called if the the discount lock period has finished and the user has a discount rate to be rebalanced.

Emits the [`Transfer`](https://github.com/aave/aave-v3-core/blob/master/contracts/dependencies/openzeppelin/contracts/IERC20.sol#L73) and [`Mint`](https://github.com/aave/aave-v3-core/blob/master/contracts/interfaces/IScaledBalanceToken.sol#L18) events.

### Input Parameters:

| Name | Type      | Description             |
| ---- | --------- | ----------------------- |
| user | `address` | The address of the user |

### updateDiscountLockPeriod

```solidity
function updateDiscountLockPeriod(uint256 newLockPeriod) external override onlyPoolAdmin
```

Updates the discount percent lock period.

This function can only be called by the [Pool Admin].

Emits the [`DiscountLockPeriodUpdated`](./interfaces/IGhoVariableDebtToken.md#discountlockperiodupdated) event.

### Input Parameters:

| Name          | Type      | Description                                       |
| ------------- | --------- | ------------------------------------------------- |
| newLockPeriod | `uint256` | The new discount percent lock period (in seconds) |

## View Methods

### balanceOf

```solidity
function balanceOf(address user) public view virtual override returns (uint256)
```

Returns the amount of tokens owned by the `user`.

Standard [`ERC20`](https://github.com/aave/aave-v3-core/blob/master/contracts/dependencies/openzeppelin/contracts/IERC20.sol#L16) method.

### Input Parameters:

| Name | Type      | Description             |
| ---- | --------- | ----------------------- |
| user | `address` | The address of the user |

### Return Values:

| Type      | Description                            |
| --------- | -------------------------------------- |
| `uint256` | The amount of tokens owned by the user |

### totalSupply

```solidity
function totalSupply() public view virtual override returns (uint256)
```

Returns the amount of tokens in existence.

It does not account for active discounts of the users. The discount is deducted from the user’s debt at repayment / liquidation time, so this function always return a greater or equal value than the actual total supply.

Standard [`ERC20`](https://github.com/aave/aave-v3-core/blob/master/contracts/dependencies/openzeppelin/contracts/IERC20.sol#L11) method.

### Return Values:

| Type      | Description                                                                         |
| --------- | ----------------------------------------------------------------------------------- |
| `uint256` | The amount of tokens in existence (without accounting for active discounts on debt) |

### UNDERLYING_ASSET_ADDRESS

```solidity
function UNDERLYING_ASSET_ADDRESS() external view override returns (address)
```

Returns the address of the underlying asset of this debtToken, GHO for variableDebtGHO.

### Return Values:

| Type      | Description                         |
| --------- | ----------------------------------- |
| `address` | The address of the underlying asset |

### getAToken

```solidity
function getAToken() external view override returns (address)
```

Returns the address of the [`GhoAToken`](GhoAToken.md) contract.

### Return Values:

| Type      | Description                           |
| --------- | ------------------------------------- |
| `address` | The address of the GhoAToken contract |

### getDiscountRateStrategy

```solidity
function getDiscountRateStrategy() external view override returns (address)
```

Returns the address of the Discount Rate Strategy.

### Return Values:

| Type      | Description                                      |
| --------- | ------------------------------------------------ |
| `address` | The address of the DiscountRateStrategy contract |

### getDiscountToken

```solidity
function getDiscountToken() external view override returns (address)
```

Returns the address of the Discount Token.

### Return Values:

| Type      | Description                   |
| --------- | ----------------------------- |
| `address` | The address of Discount Token |

### getDiscountPercent

```solidity
function getDiscountPercent(address user) external view override returns (uint256)
```

Returns the discount percent that will be applied to the accumulated borrow interest of the user.

### Input Parameters:

| Name | Type      | Description             |
| ---- | --------- | ----------------------- |
| user | `address` | The address of the user |

### Return Values:

| Type      | Description                             |
| --------- | --------------------------------------- |
| `uint256` | The discount percent (expressed in bps) |

### getBalanceFromInterest

```solidity
function getBalanceFromInterest(address user) external view override returns (uint256)
```

Returns the amount of interest accumulated by the user.

### Input Parameters:

| Name | Type      | Description             |
| ---- | --------- | ----------------------- |
| user | `address` | The address of the user |

### Return Values:

| Type      | Description                                    |
| --------- | ---------------------------------------------- |
| `uint256` | The amount of interest accumulated by the user |

### getDiscountLockPeriod

```solidity
function getDiscountLockPeriod() external view override returns (uint256)
```

Returns the discount percent lock period.

### Return Values:

| Type      | Description                                   |
| --------- | --------------------------------------------- |
| `uint256` | The discount percent lock period (in seconds) |

### getUserRebalanceTimestamp

```solidity
function getUserRebalanceTimestamp(address user) external view override returns (uint256)
```

Returns the timestamp at which a user’s discount percent can be rebalanced.

### Input Parameters:

| Name | Type      | Description                                                   |
| ---- | --------- | ------------------------------------------------------------- |
| user | `address` | The address of the user’s rebalance timestamp being requested |

### Return Values:

| Type      | Description                                               |
| --------- | --------------------------------------------------------- |
| `uint256` | The time when a user’s discount percent can be rebalanced |

## NOT SUPPORTED METHODS

The following methods automatically revert with the error code `80`. The methods show `OPERATION_NOT_SUPPORTED` as they are not permitted to be executed.

Being non-transferrable, the debt token does not implement any of the standard ERC20 functions for transfer and allowance.

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
function transferFrom(
    address,
    address,
    uint256
) external virtual override returns (bool)
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
