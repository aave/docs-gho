---
id: overview
title: Developer Docs
sidebar_position: 1
---

![GHO Builders](../assets/gho.svg)

<p>^ placeholder ^</p>

<h1 className="text--center">GHO is for builders</h1>

<a href="/developer-docs/integrate-gho">
    <button className="clickable-button">Integrate GHO</button>
</a>

### Quick Links

- <a className="links-list" href="/gho-contracts/overview">GHO deployed contracts</a>
- <a className="links-list" href="https://github.com/aave/gho">GHO contract source</a>
- <a className="links-list" href="https://docs.aave.com/developers/deployed-contracts/deployed-contracts">Aave deployed contracts</a>
- <a className="links-list" href="https://github.com/aave/aave-v3-core">Aave V3 contract source</a>
- <a className="links-list" href="https://github.com/aave/aave-utilities">Aave Utilities SDK</a>

## GHO Technical Overview

GHO is minted from facilitators. At launch there are two proposed facilitators:

- Aave V3 Pool
- Flashmint facilitator

Each facilitator has an individual cap for the amount of GHO available to be minted.

### Aave V3 Pool Facilitator

Interacting with GHO through the Pool facilitator will feel very similar to a standard token with a few changes.

### Minting

Minting occurs through the borrow function of the Pool, so to mint GHO the process is identical to borrowing any other Aave reserve"
`supply collateral -> borrow up to max LTV`

Since GHO is created and not borrowed from suppliers, GHO is not subject to restrictions available liquidity, and instead the facilitator cap and collateralization requirements define the limits to which GHO can be minted.

### Repay

TODO

### Liquidation

TODO

### Flashmint Facilitator

Since GHO is not borrowed like a typical Aave reserve, a separate facilitator is used in place to replicate the `flashloan` functionality of the Aave Pool.

Flashmint is useful for a variety of applications such as liquidations, debt swap, peg arbitrage. More details on this facilitator can be found [here](./flashmint-facilitator/GhoFlashMinter.md)
