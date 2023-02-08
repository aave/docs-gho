# IGhoFlashMinter

Defines the behavior of the [GHOFlashMinter](../GhoFlashMinter).

The `IGhoFlashMinter` interface inherits the [`IERC3156FlashLender`](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/interfaces/IERC3156FlashLender.sol) and [`IGhoFacilitator`](../../GHO/interfaces/IGhoFacilitator.md) interfaces.

This page shows the [events](#events), [write](#write-methods) and [view](#view-methods) methods within the `IGhoFlashMinter` interface. The source code is available on [GitHub](https://github.com/aave/gho/blob/main/src/contracts/facilitators/flashMinter/interfaces/IGhoFlashMinter.sol).

## Events

### FeeUpdated

```solidity
event FeeUpdated(uint256 oldFee, uint256 newFee)
```

Emitted when the percentage [fee is updated](../GhoFlashMinter#updatefee).

| Name   | Type     | Description          |
| ------ | -------- | -------------------- |
| oldFee | `uint256 | The old fee (in bps) |
| newFee | `uint256 | The new fee (in bps) |

### FlashMint

```solidity
event FlashMint(
    address indexed receiver,
    address indexed initiator,
    address asset,
    uint256 indexed amount,
    uint256 fee
)
```

Emitted when a [FlashMint](../GhoFlashMinter.md#flashloan) occurs.

| Name      | Type      | Description                                                                      |
| --------- | --------- | -------------------------------------------------------------------------------- |
| receiver  | `address` | The receiver of the FlashMinted tokens (it is also the receiver of the callback) |
| initiator | `address` | The address initiating the FlashMint                                             |
| asset     | `address` | The asset being FlashMinted. Always GHO                                          |
| amount    | `uint256` | The principal being FlashMinted                                                  |
| fee       | `uint256` | The fee returned on top of the principal                                         |

## Write Methods

### updateFee

```solidity
function updateFee(uint256 newFee) external
```

Updates the percentage fee. It is the percentage of the flash-minted amount that needs to be repaid. The fee is expressed in bps. A value of 100, results in 1.00%

#### Input Parameters:

| Name   | Type      | Description                     |
| ------ | --------- | ------------------------------- |
| newFee | `uint256` | The new percentage fee (in bps) |

## View Methods

### ADDRESSES_PROVIDER

```solidity
function ADDRESSES_PROVIDER() external view returns (IPoolAddressesProvider)
```

Returns the address of the Aave Pool Addresses Provider contract.

#### Return Values:

| Type                     | Description                              |
| ------------------------ | ---------------------------------------- |
| `IPoolAddressesProvider` | The address of the PoolAddressesProvider |

### MAX_FEE

```solidity
function MAX_FEE() external view returns (uint256)
```

Returns the maximum value the fee can be set to.

#### Return Values:

| Type      | Description                                                                                    |
| --------- | ---------------------------------------------------------------------------------------------- |
| `uint256` | The maximum percentage fee of the flash-minted amount that the flashFee can be set to (in bps) |

### getFee

```solidity
function getFee() external view returns (uint256)
```

Returns the percentage of each flash mint taken as a fee.

#### Return Values:

| Type      | Description                                                                                             |
| --------- | ------------------------------------------------------------------------------------------------------- |
| `uint256` | The percentage fee of the flash-minted amount that needs to be repaid, on top of the principal (in bps) |
