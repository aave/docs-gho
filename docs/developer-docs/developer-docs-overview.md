---
id: overview
title: Developer Docs
sidebar_position: 1
---

<img src="https://aave.com/governanceGhosts.svg" width="100%" />

<h1 className="text--center">GHO is for builders</h1>

<div className="button-group">
<a href="#learn-gho">
    <button className="clickable-button">Learn GHO</button>
</a>

<a href="#integrate-gho">
    <button className="clickable-button">Integrate GHO</button>
</a>

</div>

### Quick Links

- <a className="links-list" href="/gho-contracts/overview">GHO deployed contracts</a>
- <a className="links-list" href="https://github.com/aave/gho">GHO contract source</a>
- <a className="links-list" href="https://docs.aave.com/developers/deployed-contracts/deployed-contracts">Aave protocol deployed contracts</a>
- <a className="links-list" href="https://github.com/aave/aave-v3-core">Aave V3 contracts</a>
- <a className="links-list" href="#aave-utilities">Javascript SDK</a>
- <a className="links-list" href="https://github.com/bgd-labs/aave-address-book">Solidity + Javascript Address Registry</a>

## Learn GHO

GHO is an ERC20 token minted from contracts designated as facilitators. At launch there are two proposed facilitators:

- Aave V3 Pool
- Flashmint facilitator

![GHO_Architecture Diagram](../assets/GHO_Architecture_dark.png#gh-dark-mode-only)
![GHO_Architecture Diagram](../assets/GHO_Architecture.png#gh-light-mode-only)

Each facilitator has an individual cap for the amount of GHO available to be minted.

### Aave V3 Pool Facilitator

Interacting with GHO via the Aave Pool facilitator is very similar to interacting with a typical reserve asset. Below are the technical guides for all GHO actions along with their contract references.

### Minting

Minting occurs through the `borrow` function of the Pool where GHO is listed, so to mint GHO the process is identical to borrowing any other reserve where you must supply collateral then are enabled to borrow up to a maximum collateral factor.

GHO can be added to an eMode category, which modifies the collateral factor and liquidation treshold. This can be queried with the following fields from the [integrating gho](#integrate-gho) section.

`reserve.eModeCategoryId` : id of eMode category reserve belongs to
`user.userEModeCategoryId`: user's active eMode category

Since GHO is created and not borrowed from suppliers, GHO is not subject to restrictions available liquidity, and instead the facilitator cap and collateralization requirements define the limits to which GHO can be minted as calculated below.

`availableFAcilitatorCap = ghoReserveData.aaveFacilitatorButcketMaxCapacity - ghoReserveData.aaveFacilitatorBucketLevel`

### Repay


Discount is applied, estimate the cumultate effects on the calculator

### Liquidation

One limitation to available liquidity is market depth

Link to liquidation docs



Discount

### Flashmint Facilitator

Since GHO is not borrowed like a typical Aave reserve, a separate facilitator is used in place to replicate the `flashloan` functionality of the Aave Pool.

The flashmint facilitator has a separate minting cap than the Aave Pool. Since all flashmint transactions are returned in a single transaction, no GHO is ever minted against this facilitator and the cap is applied to each transaction.

Flashmint is useful for a variety of applications such as liquidations, debt swap, peg arbitrage. More details on this facilitator can be found [here](./flashmint-facilitator/GhoFlashMinter.md).


## Integrate GHO

TODO: Edit this section

GHO is operated on the public blockchain making it accessible to interface with any type of application.

Any Ethereum address can access the full functionality of GHO, and the real-time status + complete historical record of GHO transactions can be verified by anyone at anytime.

This guide explains the best practices for integrating GHO into a variety of common application types.

1.  [Types of Integrations](#types-of-integations)
    - a. [Smart Contracts](#smart-contracts)
    - b. [Frontend](#frontend)
    - c. [Data Analytics](#data-analytics)
2.  [Core Functions](#core-functions)
    - a. [mint](#mint)
    - b. [repay](#repay)
    - c. [flashmint](#flashmint)
3.  [Data](#data)
    - a. [Live Data](#live-data)
    - b. [Historical Data](#historical-data)

<br />

## Types of Integrations

GHO can be integrated into virtually any application because all data and functionality occurs through public blockchain. This guide will give a tutorial on best practices for the most common categories of integration types

### Smart Contracts

TODO

### Frontend

[Aave Utilities](https://github.com/aave/aave-utilities) is a JavaScript SDK which can be used to greatly simplify the process of integrating GHO data and functionality.

Setup instructions are available in the Aave Utilities README, and specific examples of using the SDK for GHO can be found in the [data](#data) and [core function](#core-functions) sections.

### Data Analytics

The current state of GHO, and the complete historical record data is accessible to any application with blockchain querying capabilities. The contract addresses and abis for GHO contracts are available in the contract docs.

The [data](#data) section goes into detail with integrating most common live and historical data queries for JavaScript and Python applications.

<br />

## Core Functions

### mint

Minting GHO occurs seamlessly through the `borrow` function of the Aave V3 Pool contract.

TODO

<details>
    <summary>Solidity</summary>

</details>

<details>
    <summary>JavaScript</summary>
    
</details>

<details>
    <summary>Python</summary>
    
</details>

### repay

TODO

<details>
    <summary>Solidity</summary>

</details>

<details>
    <summary>JavaScript</summary>
    
</details>

<details>
    <summary>Python</summary>
    
</details>

### flashmint

TODO

<details>
    <summary>Solidity</summary>

</details>

<details>
    <summary>JavaScript</summary>
    
</details>

<details>
    <summary>Python</summary>
    
</details>

## Data

### Live Data

Link to updated aave-utilities README + add sample code for UiGhoDataProvider expansion

### Historical Data

Link to integrating aave protocol data guide + add sample code for GHO event querying and subgraph once ready
