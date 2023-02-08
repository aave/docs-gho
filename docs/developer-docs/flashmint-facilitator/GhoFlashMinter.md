# GhoFlashMinter

This contract enables FlashMinting of GHO. It is based heavily on the [EIP3156](https://eips.ethereum.org/EIPS/eip-3156) reference implementation.

The `GhoFlashMinter` contract inherits the [`IGhoFlashMinter`](./interfaces/IGhoFlashMinter) interface.

This page shows the public [`constant`](#constant-state-variables) and [`immutable`](#immutable-state-variables) state variables, and external [`write`](#write-methods) and [`view`](#view-methods) methods within the `GhoFlashMinter` contract. The source code is available on [GitHub](https://github.com/aave/gho/blob/main/src/contracts/facilitators/flashMinter/GhoFlashMinter.sol).

## Constant State Variables

### CALLBACK_SUCCESS

```solidity
bytes32 public constant CALLBACK_SUCCESS = keccak256('ERC3156FlashBorrower.onFlashLoan')
```

Hash of the `ERC3156FlashBorrower.onFlashLoan` that must be returned by the `onFlashLoan` callback.

### MAX_FEE

```solidity
  uint256 public constant MAX_FEE = 10000
```

The maximum percentage fee of the FlashMinted amount that the flashFee can be set to (in bps).

## Immutable State Variables

### ADDRESSES_PROVIDER

```solidity
IPoolAddressesProvider public immutable override ADDRESSES_PROVIDER
```

The address of the PoolAddressesProvider

## Write Methods

### flashLoan

```solidity
function flashLoan(
    IERC3156FlashBorrower receiver,
    address token,
    uint256 amount,
    bytes calldata data
) external override returns (bool)
```

Initiates a FlashMint. GHO is the only supported token.

From the [`IERC3156FlashLender`](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/interfaces/IERC3156FlashLender.sol#L37) interface.

Emits the [`FlashMint`](./interfaces/IGhoFlashMinter#FlashMint) event.

#### Input Parameters:

| Name     | Type                    | Description                                                              |
| -------- | ----------------------- | ------------------------------------------------------------------------ |
| receiver | `IERC3156FlashBorrower` | The receiver of the tokens in the loan, and the receiver of the callback |
| token    | `address`               | The loan currency. Only GHO is supported                                 |
| amount   | `uint256`               | The amount of tokens to FlashMint                                        |
| data     | `bytes`                 | Arbitrary data structure, intended to contain user-defined parameters    |

#### Return Values:

| Type   | Description                                                         |
| ------ | ------------------------------------------------------------------- |
| `bool` | Returns `true` if the operation was successful. If failed, reverts. |

### distributeFeesToTreasury

```solidity
function distributeFeesToTreasury() external virtual override
```

Distribute accumulated fees to the GHO treasury.

Emits the [`FeesDistributedToTreasury`](../flashmint-facilitator/interfaces/IGhoFlashMinter#FeesDistributedToTreasury) event.

### updateFee

```solidity
function updateFee(uint256 newFee) external onlyPoolAdmin
```

Updates the percentage fee. It is the percentage of the flash-minted amount that needs to be repaid. The fee is expressed in bps. A value of 100, results in 1.00%.

The `newFee` must be less than the [`MAX_FEE`](#max_fee).

Emits the `[FeeUpdated](../flashMinter/interfaces/IGhoFlashMinter.md#feeupdated)` event.

#### Input Parameters:

| Name   | Type      | Description                     |
| ------ | --------- | ------------------------------- |
| newFee | `uint256` | The new percentage fee (in bps) |

### updateGhoTreasury

```solidity
function updateGhoTreasury(address newGhoTreasury) external override onlyPoolAdmin
```

Updates the address of the GHO treasury, where FlashMint fees are sent.

Emits the [`GhoTreasuryUpdated`](../flashmint-facilitator/interfaces/IGhoFlashMinter#ghotreasuryupdated) event.

#### Input Parameters:

| Name           | Type      | Description                    |
| -------------- | --------- | ------------------------------ |
| newGhoTreasury | `address` | The address of the GhoTreasury |

## View Methods

### maxFlashLoan

```solidity
function maxFlashLoan(address token) external view override returns (uint256)
```

The amount of currency available to be FlashMinted. GHO is the only supported token. Returns 0 if any other address other than GHO is passed.

From the [`IERC3156FlashLender`](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/interfaces/IERC3156FlashLender.sol#L20) interface.

#### Input Parameters:

| Name  | Type      | Description             |
| ----- | --------- | ----------------------- |
| token | `address` | The loan currency (GHO) |

#### Return Values:

| Type      | Description                                  |
| --------- | -------------------------------------------- |
| `uint256` | The amount of token that can be FlashMinted. |

### flashFee

```solidity
function flashFee(address token, uint256 amount) external view override returns (uint256)
```

The fee to be charged for a given loan. GHO is the only supported token.

From the [`IERC3156FlashLender`](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/interfaces/IERC3156FlashLender.sol#L28) interface.

#### Input Parameters:

| Name   | Type      | Description               |
| ------ | --------- | ------------------------- |
| token  | `address` | The loan currency         |
| amount | `uint256` | The amount of tokens lent |

#### Return Values:

| Type      | Description                                                                      |
| --------- | -------------------------------------------------------------------------------- |
| `uint256` | The amount of token to be charged for the loan, on top of the returned principal |

### getFee

```solidity
function getFee() external view returns (uint256)
```

Returns the percentage of each flash mint taken as a fee.

#### Return Values:

| Type      | Description                                                                                            |
| --------- | ------------------------------------------------------------------------------------------------------ |
| `uint256` | The percentage fee of the FlashMinted amount that needs to be repaid, on top of the principal (in bps) |

### getGhoTreasury

```solidity
function getGhoTreasury() external view returns (address)
```

Returns the address of the GHO treasury.

#### Return Values:

| Type      | Description                             |
| --------- | --------------------------------------- |
| `address` | The address of the GhoTreasury contract |
