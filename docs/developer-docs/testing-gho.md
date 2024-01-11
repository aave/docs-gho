---
id: testing-guide
title: Testing Guide
---

# Testing Guide

There are two primary methods for testing GHO: _testnet_ and _fork networks_

## Testnet

GHO is currently available for testing on the Sepolia testnet. You can access the Sepolia V3 testnet market by visiting [gho.aave.com](https://gho.aave.com) or [app.aave.com](https://app.aave.com) (enter testnet mode in top right corner).

To acquire test GHO, visit the test market from one of links above -> use the faucet tab to acquire any token in the market -> supply these tokens -> borrow GHO

## Fork Networks

A fork network takes the state of a blockchain and turns it into a sandbox where you can perform any state modification for free. Fork networks are especially useful when testing scenarios which depend on external contracts that only exist on mainnet, since these contract will exist at the same addresses on the fork network.

### Create Fork Network

There are several tools to create a fork network: Tenderly, Foundry, and Hardhat are some of the most notable. When a fork is generated with any of these tools, you will generate an rpc url which you can use in a wallet, application, or script to interact with the fork.

Tenderly is particularly useful for fork testing as it generates a public rpc url, and has a built in dashboard for executing transactions and debugging.

More details on generating fork networks with these tools:

- [Tenderly Fork](https://docs.tenderly.co/simulations-and-forks/forks)
- [Foundry Fork](https://book.getfoundry.sh/forge/fork-testing)
- [Hardhat Fork](https://hardhat.org/hardhat-network/docs/guides/forking-other-networks)

You can acquire GHO on a fork network by impersonating [an address with GHO](https://etherscan.io/token/0x40d16fc0246ad3160ccc09b8d0d3a2cd28ae6c2f#balances) and transferring tokens to your address.

### Connect Fork Network to UI

The [app.aave.com](https://app.aave.com) has variables which can be set via the browser console to enable the UI to connect to a fork network. See [this guide](https://github.com/aave/interface/blob/main/CONTRIBUTING.md#running-against-a-chain-fork) for details on how to generate and run these commands.
