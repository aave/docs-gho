---
id: payments
title: Payments
---

import AaveGhostSrc from "@site/static/img/tools.png";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Payments

GHO is an ERC-20 contract which also implements EIP-2612 to support signature based approvals. This guide will walk-through the different methods for transferring GHO tokens as well as provide ideas, resources, and inspiration for hackathon projects.

## transfer

The simplest method for transferring ERC-20 tokens is `transfer` which can be used to send tokens to any address without a prior token approval. The limitation of `transfer` is that it must be executed directly by the token holder, so it cannot be used within a smart contract function call.

## transferFrom

To transfer tokens within a smart contract function, `transferFrom` is the method that is used. The `transferFrom` function requires the sender to have approved the `spender` address for at least the transfer `amount`. There are two methods which can be used to perform the approval:

### approve

The standard ERC-20 `approve` requires an on-chain transaction from the token holder to a approve a specified `spender` and `amount`.

### permit

EIP-2612 `permit` is a type of token approval which requires two components:

- A signed approval message from the token holder which encodes: owner, spender, amount, nonce, deadline, DOMAIN_SEPERATOR
- An on-chain `permit` transaction which can be executed from any address

The advantages to using `permit` in place of `approve` are that the gas cost of the transaction can be paid for by an address other than the token owner, and can reduce the number of transactions by batching the `permit` call with another action, an example of this is [supplyWithPermit](https://github.com/aave/aave-v3-core/blob/6070e82d962d9b12835c88e68210d0e63f08d035/contracts/protocol/pool/Pool.sol#L163) from Aave Protocol V3.

## Ideas

- SDK or widget to allow application to embed GHO as payment input and convert to their desired recipient chain/token
- Integration with Aave facilitator to borrow GHO on-demand for payments
- Application to improve user experience of managing GHO borrows and transfers
- Integration with Web2 <-> Web3 payment gateway
- Smart contract wallet integration

## Resources

- [transfer vs transferFrom](https://medium.com/coinmonks/how-knowing-this-difference-between-transfer-and-transferfrom-can-solve-your-bug-1438de88bc67)
- [JavaScript permit package](https://github.com/dmihal/eth-permit)
- [Permit2](https://github.com/Uniswap/permit2)
- [The Box - swap/bridge aggregator](https://www.decent.xyz/)
- [Aave Address Book - solidity & npm registry](https://github.com/bgd-labs/aave-address-book/)

## Inspiration

- https://ethglobal.com/showcase/pepay-gkkb0
- https://ethglobal.com/showcase/aatomato-mf0sy
- https://ethglobal.com/showcase/bounce-jxqoc
