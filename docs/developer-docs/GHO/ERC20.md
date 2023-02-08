# ERC20

This abstract contract is a gas-efficient ERC20 and EIP-2612 implementation. It is a modified version of [`Solmate ERC20`](https://github.com/transmissions11/solmate/blob/34d20fc027fe8d50da71428687024a29dc01748b/src/tokens/ERC20.sol) implementing the basic [`IERC20`](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/IERC20.sol).

The contract is `ERC20` compliant and inherits the standard [`IERC20`](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/IERC20.sol) interface.

This page is split up differently (than other contract pages) showing the public [metadata](#metadata-storage), [`ERC20`](#erc20-storage) and [`EIP-2612`](#eip-2612-storage) storage variables, and the [`ERC20`](#erc20-logic) and [`EIP-2612`](#eip-2612-logic) logic within the `ERC20` contract. The source code is available on [GitHub](https://github.com/aave/gho/blob/main/src/contracts/gho/ERC20.sol).

## Metadata Storage

### name

```solidity
string public name
```

The name of the token.

### symbol

```solidity
string public symbol
```

The symbol of the token.

### decimals

```solidity
uint8 public immutable decimals
```

The number of decimals the token uses.

## ERC20 Storage

### totalSupply

```solidity
uint256 public totalSupply
```

The total supply of tokens.

## EIP-2612 Storage

```solidity
bytes32 public constant PERMIT_TYPEHASH = keccak256(‘Permit(address owner,address spender,uint256 value,uint256 nonce,uint256 deadline)’)
```

## ERC20 Logic

### approve

```solidity
function approve(address spender, uint256 amount) public virtual returns (bool)
```

Allows the `spender` to withdraw from the account up to the `amount`.

#### Input Parameters:

| Name    | Type      | Description                                           |
| ------- | --------- | ----------------------------------------------------- |
| spender | `address` | The address of the user to approve to withdraw tokens |
| amount  | `uint256` | The amount of tokens the spender can withdraw         |

#### Return Values:

| Type   | Description                                                     |
| ------ | --------------------------------------------------------------- |
| `bool` | Returns true if the operation was successful, reverts otherwise |

### transfer

```solidity
function transfer(address to, uint256 amount) public virtual returns (bool)
```

Transfers the `amount` of tokens to the `to` address.

#### Input Parameters:

| Name   | Type      | Description                       |
| ------ | --------- | --------------------------------- |
| to     | `address` | The address to send the tokens to |
| amount | `unit256` | The amount of tokens to transfer  |

#### Return Values:

| Type   | Description                                                     |
| ------ | --------------------------------------------------------------- |
| `bool` | Returns true if the operation was successful, reverts otherwise |

### transferFrom

```solidity
function transferFrom(
    address from,
    address to,
    uint256 amount
) public virtual returns (bool)
```

Transfers the `amount` of tokens from the `from` address to the `to` address.

#### Input Parameters:

| Name   | Type      | Description                             |
| ------ | --------- | --------------------------------------- |
| from   | `address` | The address to transfer the tokens from |
| to     | `to`      | The address to transfer the tokens to   |
| amount | `uint256` | The amount of tokens to transfer        |

#### Return Values:

| Type   | Description                                                     |
| ------ | --------------------------------------------------------------- |
| `bool` | Returns true if the operation was successful, reverts otherwise |

## EIP-2612 Logic

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
  ) public virtual
```

Allows a user to permit another account (or contract) to use their funds using a signed message. This enables gas-less transactions and single approval/transfer transactions. Allow passing a signed message to approve spending.

#### Input Parameters:

| Name     | Type      | Description                                                       |
| -------- | --------- | ----------------------------------------------------------------- |
| owner    | `address` | The owner of the funds                                            |
| spender  | `address` | The spender of the funds                                          |
| value    | `uint256` | The amount the spender is permitted to spend                      |
| deadline | `uint256` | The deadline timestamp, use type(uint256).max for max/no deadline |
| v        | `uint8`   | The V signature parameter                                         |
| r        | `bytes32` | The R signature parameter                                         |
| s        | `bytes32` | The S signature parameter                                         |

### DOMAIN_SEPARATOR

```solidity
function DOMAIN_SEPARATOR() public view virtual returns (bytes32)
```

Gets the domain separator for the token. Returns the cached value if the chainId matches cache, otherwise recomputes separator.

#### Return Values:

| Type      | Description                                        |
| --------- | -------------------------------------------------- |
| `bytes32` | The domain separator of the token at current chain |
