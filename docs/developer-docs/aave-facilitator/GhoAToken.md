# GhoAToken

The implementation of the interest bearing token for the Aave protocol.

:::info

GHO cannot be supplied to the Aave Protoco. However, the GhoAToken is required as it contains logic for GHO to work as a reserve with the Aave Protocol.

:::

The `GhoAToken` contract inherits the [`VersionedInitializable`](https://github.com/aave/aave-v3-core/blob/master/contracts/protocol/libraries/aave-upgradeability/VersionedInitializable.sol), [`ScaledBalanceTokenBase`](https://github.com/aave/aave-v3-core/blob/master/contracts/protocol/tokenization/base/ScaledBalanceTokenBase.sol) and [`EIP712Base`](https://github.com/aave/aave-v3-core/blob/master/contracts/protocol/tokenization/base/EIP712Base.sol) contracts, and the [`IGhoAToken`](./interfaces/IGhoAToken.md) interface.

This page shows the public [`constant state variables`](#constant-state-variables), external [`write`]#write-methods) and [`view`](#view-methods) methods, and the [`not permitted methods`](#not-permitted-methods) within the `GhoAToken` contract. The source code is available on [GitHub](https://github.com/aave/gho/blob/main/src/contracts/facilitators/aave/tokens/GhoAToken.sol).

## Constant State Variables

The external state variables

### PERMIT_TYPEHASH

```solidity
bytes32 public constant PERMIT_TYPEHASH =
    keccak256('Permit(address owner,address spender,uint256 value,uint256 nonce,uint256 deadline)')
```

### ATOKEN_REVISION

```solidity
uint256 public constant ATOKEN_REVISION = 0x1
```

## Write Methods

### initialize

```solidity
function initialize(
    IPool initializingPool,
    address treasury,
    address underlyingAsset,
    IAaveIncentivesController incentivesController,
    uint8 aTokenDecimals,
    string calldata aTokenName,
    string calldata aTokenSymbol,
    bytes calldata params
  ) external override initializer
```

Initializes the `aToken`.

Emits the [`Initialized`](https://github.com/aave/aave-v3-core/blob/master/contracts/interfaces/IInitializableAToken.sol#L24) event.

### Input Parameters:

| Name                 | Type                        | Description                                                         |
| -------------------- | --------------------------- | ------------------------------------------------------------------- |
| initializingPool     | `IPool`                     | The pool contract that is initializing this contract                |
| treasury             | `address`                   | The address of the Aave treasury, receiving the fees on this aToken |
| underlyingAsset      | `address`                   | The address of the underlying asset of this aToken, GHO             |
| incentivesController | `IAaveIncentivesController` | The smart contract managing potential incentives distribution       |
| aTokenDecimals       | `uint8`                     | The decimals of the aToken, same as the underlying asset’s, 18      |
| aTokenName           | `string`                    | The name of the aToken, ghoAToken                                   |
| aTokenSymbol         | `string`                    | The symbol of the aToken, GHO                                       |
| params               | `bytes`                     | A set of encoded parameters for additional initialization           |

### transferUnderlyingTo

```solidity
function transferUnderlyingTo(address target, uint256 amount) external virtual override onlyPool
```

Transfers the underlying asset to `target`.

It performs a mint of GHO on behalf of the `target`. Used by the Pool to transfer assets in `borrow()`.

### Input Parameters:

| Name   | Type      | Description                           |
| ------ | --------- | ------------------------------------- |
| target | `address` | The recipient of the underlying token |
| amount | `uint256` | The amount getting transferred        |

### handleRepayment

```solidity
function handleRepayment(
    address user,
    address onBehalfOf,
    uint256 amount
) external virtual override onlyPool
```

Handles the underlying received by the aToken after the transfer has been completed.

This function transfers the debt interest repaid by a user to the GHO treasury. It burns all the repaid GHO.

### Input Parameters:

| Name       | Type      | Description                                                      |
| ---------- | --------- | ---------------------------------------------------------------- |
| user       | `address` | The user executing the repayment                                 |
| onBehalfOf | `address` | The address of the user who will get their debt reduced/removed. |
| amount     | `uint256` | The amount getting repaid                                        |

### distributeFeesToTreasury

```solidity
function distributeFeesToTreasury() external virtual override
```

Distribute accumulated fees to the GHO treasury.

Emits the [`FeesDistributedToTreasury`](../GHO/interfaces/IGhoFacilitator#feesdistributedtotreasury) event.

### rescueTokens

```solidity
function rescueTokens(
    address token,
    address to,
    uint256 amount
) external override onlyPoolAdmin
```

Rescues and transfers the tokens locked in this contract to the recipient.

The underlying asset, GHO, cannot be rescued.

### Input Parameters:

| Name   | Type      | Description                     |
| ------ | --------- | ------------------------------- |
| token  | `address` | The address of the token        |
| to     | `address` | The address of the recipient    |
| amount | `uint256` | The amount of token to transfer |

### setVariableDebtToken

```solidity
function setVariableDebtToken(address ghoVariableDebtToken) external override onlyPoolAdmin
```

Sets a reference to the GHO variable debt token. The variable debt token must not already be set.

Emits the [`VariableDebtTokenSet`](./interfaces/IGhoAToken.md#variabledebttokenset) event.

### Input Parameters:

| Name                 | Type       | Description                               |
| -------------------- | ---------- | ----------------------------------------- |
| ghoVariableDebtToken | `address ` | The address of the `GHOVariableDebtToken` |

### updateGhoTreasury

```solidity
function updateGhoTreasury(address newGhoTreasury) external override onlyPoolAdmin
```

Updates the address of the GHO treasury, where interest earned by the protocol is sent.

Emits the [`GhoTreasuryUpdated`](#ghotreasuryupdated)` event.

### Input Parameters:

| Name           | Type      | Description                    |
| -------------- | --------- | ------------------------------ |
| newGhoTreasury | `address` | The address of the GhoTreasury |

## View Methods

For `balanceOf` and `totalSupply` methods, both return zero. The reason is that GHO cannot be supplied to the Aave Protocol. However, the GhoAToken is required as it contains logic for GHO to work as a reserve with the Aave Protocol.

### balanceOf

```solidity
function balanceOf(address user)
    public
    view
    virtual
    override(IncentivizedERC20, IERC20)
    returns (uint256)
```

Returns zero at `GhoAToken`.

Standard [`ERC20`](https://github.com/aave/aave-v3-core/blob/master/contracts/dependencies/openzeppelin/contracts/IERC20.sol#L16) method.

### Input Parameters:

| Name | Type      | Description             |
| ---- | --------- | ----------------------- |
| user | `address` | The address of the user |

### Return Values:

| Type      | Description |
| --------- | ----------- |
| `uint256` | 0           |

### totalSupply

```solidity
function totalSupply() public view virtual override(IncentivizedERC20, IERC20) returns (uint256)
```

Returns zero at `GhoAToken`.

Standard [`ERC20`](https://github.com/aave/aave-v3-core/blob/master/contracts/dependencies/openzeppelin/contracts/IERC20.sol#L11) method.

### Return Values:

| Type      | Description |
| --------- | ----------- |
| `uint256` | 0           |

### RESERVE_TREASURY_ADDRESS

```solidity
function RESERVE_TREASURY_ADDRESS() external view override returns (address)
```

Returns the `address` of the Aave treasury.

### Return Values:

| Type      | Description                      |
| --------- | -------------------------------- |
| `address` | The address of the Aave treasury |

### UNDERLYING_ASSET_ADDRESS

```solidity
function UNDERLYING_ASSET_ADDRESS() external view override returns (address)
```

Returns the `address` of GHO as it is the underlying asset of this aToken.

### Return Values:

| Type      | Description                              |
| --------- | ---------------------------------------- |
| `address` | The address of the underlying asset, GHO |

### DOMAIN_SEPARATOR

```solidity
function DOMAIN_SEPARATOR() public view override(IAToken, EIP712Base) returns (bytes32)
```

Overrides the base function to fully implement [`IAToken`](https://github.com/aave/aave-v3-core/blob/master/contracts/interfaces/IAToken.sol).

Gets the domain separator for the token. Return cached value if chainId matches cache, otherwise recomputes separator.

See [`EIP712Base.DOMAIN_SEPARATOR()`](https://github.com/aave/aave-v3-core/blob/master/contracts/protocol/tokenization/base/EIP712Base.sol#L32) for more detailed documentation.

### Return Values:

| Type      | Description                                            |
| --------- | ------------------------------------------------------ |
| `bytes32` | The domain separator of the token on the current chain |

### nonces

```solidity
function nonces(address owner) public view override(IAToken, EIP712Base) returns (uint256)
```

Overrides the base function to fully implement [`IAToken`](https://github.com/aave/aave-v3-core/blob/master/contracts/interfaces/IAToken.sol).

Returns the nonce of the `owner`.

See [`EIP712Base.nonces()`](https://github.com/aave/aave-v3-core/blob/master/contracts/protocol/tokenization/base/EIP712Base.sol#L44) for more detailed documentation.

### Input Parameters:

| Name  | Type      | Description              |
| ----- | --------- | ------------------------ |
| owner | `address` | The address of the owner |

### Return Values:

| Type      | Description            |
| --------- | ---------------------- |
| `uint256` | The nonce of the owner |

### getVariableDebtToken

```solidity
function getVariableDebtToken() external view override returns (address)
```

Returns the `address` of the GHO variable debt token.

### Return Values:

| Type      | Description                                        |
| --------- | -------------------------------------------------- |
| `address` | The address of the `GhoVariableDebtToken` contract |

### getGhoTreasury

```solidity
function getGhoTreasury() external view override returns (address) {
```

Returns the `address` of the GHO treasury.

### Return Values:

| Type      | Description                             |
| --------- | --------------------------------------- |
| `address` | The address of the GhoTreasury contract |

## NOT PERMITTED METHODS

The following methods automatically revert with the error from Aave V3 `OPERATION_NOT_SUPPORTED` as they are not permitted to be executed.

For example, `[mint()`](#mint) is not permitted as it is not possible to supply GHO into the pool.

### mint

```solidity
function mint(
    address caller,
    address onBehalfOf,
    uint256 amount,
    uint256 index
) external virtual override onlyPool returns (bool)
```

Not permitted by design.

### burn

```solidity
function burn(
    address from,
    address receiverOfUnderlying,
    uint256 amount,
    uint256 index
  ) external virtual override onlyPool
```

Not permitted by design.

### mintToTreasury

```solidity
function mintToTreasury(uint256 amount, uint256 index) external virtual override onlyPool
```

Not permitted by design.

### transferOnLiquidation

```solidity
function transferOnLiquidation(
    address from,
    address to,
    uint256 value
) external virtual override onlyPool
```

Not permitted by design.

### permit

```solidity
function permit(
    address owner,
    address spender,
    uint256 value,
    uint256 deadline,
    uint8 v,
    bytes32 r,
    bytes32 s
) external
```

Not permitted by design.
