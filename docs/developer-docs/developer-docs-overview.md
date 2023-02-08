---
id: overview
title: Developer Docs
sidebar_position: 1
---

import AaveGhostSrc from "@site/static/img/Aave_ghost.png";

<div className="ghost-container">
  <img className="ghost-image" src={AaveGhostSrc} alt="aave ghost" />
</div>

<h1 className="builders-title">GHO is for builders</h1>

<div className="button-group">
<a href="#learn-gho">
    <button className="clickable-button">Learn GHO</button>
</a>

<a href="#integrate-gho">
    <button className="clickable-button">Integrate GHO</button>
</a>
</div>

### Quick Links

- <a className="links-list" href="developer-docs/contracts-overview">
    GHO deployed contracts
  </a>
- <a className="links-list" href="https://github.com/aave/gho">
    GHO contract source
  </a>
- <a
  className="links-list"
  href="https://docs.aave.com/developers/deployed-contracts/deployed-contracts"
  > Aave Protocol deployed contracts
  > </a>
- <a className="links-list" href="https://github.com/aave/aave-v3-core">
    Aave V3 contracts
  </a>
- <a className="links-list" href="#frontend">
    Javascript SDK
  </a>
- <a
  className="links-list"
  href="https://github.com/bgd-labs/aave-address-book"
  > Solidity + Javascript Address Registry
  > </a>

## Learn GHO

- a. [Aave Pool Facilitator](#aave-pool-facilitator)
  1. [Mint](#mint)
  2. [Repay](#repay)
  3. [Liquidate](#liquidate)
- b. [FlashMinter Facilitator](#flashmint-facilitator)
- c. [Discount Dynamics](#discount-dynamics)

GHO is an ERC20 token minted from contracts designated as Facilitators. At launch there are two proposed Facilitators:

- Aave Pool
- FlashMint

![GHO_Architecture Diagram](../assets/GHO_Architecture_dark.png#gh-dark-mode-only)
![GHO_Architecture Diagram](../assets/GHO_Architecture.png#gh-light-mode-only)

Each Facilitator has an individual cap for the amount of GHO available to be minted.

### Aave Pool Facilitator

Interacting with GHO via the Aave Pool Facilitator is very similar to interacting with a typical reserve asset. Below are the technical guides for all GHO actions along with their contract references.

### Minting

Minting occurs through the `borrow` function of the Pool where GHO is listed, so to mint GHO the process is identical to borrowing any other reserve. In order to mint, an address must have sufficient collateral which is performed by approving then calling `supply` on the Aave Pool with an eligible collateral asset.
Once an address it is able to borrow up to a maximum collateral factor determined by it's colateral asset composition.

GHO can be added to an eMode category, which modifies the collateral factor and liquidation treshold. This can be queried with the following fields from the [integrating gho](#integrate-gho) section.

`reserve.eModeCategoryId` : id of eMode category reserve belongs to
`user.userEModeCategoryId`: user's active eMode category

Since GHO is created and not borrowed from suppliers, GHO is not subject to restrictions available liquidity, and instead the Facilitator cap and collateralization requirements define the limits to which GHO can be minted as calculated below.

`availableFacilitatorCap = ghoReserveData.aaveFacilitatorButcketMaxCapacity - ghoReserveData.aaveFacilitatorBucketLevel`

### Repay

GHO is repaid just like any other asset, by approving the Pool contract to spend GHO tokens (by approval tx or [signed permit](https://github.com/aave/aave-utilities#signERC20Approval) and `repayWithPermit`).

What is different about GHO is the calculation of accrued interest. See the [discount dynamics](#discount-dynamics) section for more info on how accrued interest affect balances for repayment.

### Liquidation

When an address has a GHO borrow position, they are eligible to be liquidated under the same conditions as any other collateralized address. If the health factor of a GHO borrow falls below one, which occurs when the sum of borrow value exceeds to weighted average of liquidation thresholds of collateral assets, then any address is eligible to make a `liquidationCall` on the Pool contract.

The `liqidationCall` repays up to 100% of the GHO borrow position in exchange for an equivalent USD valuation of collateral plus a liquidation bonus.

See the developers [liquidation guide](https://docs.aave.com/developers/guides/liquidations) for more information.

### FlashMinter Facilitator

Since GHO is not borrowed like a typical Aave reserve, a separate Facilitator is used in place to replicate the `flashloan` functionality of the Aave Pool.

The FlashMinter Facilitator has a separate minting cap than the Aave Pool. Since all FlashMint transactions are returned in a single transaction, no GHO is ever minted against this Facilitator and the cap is applied to each transaction.

FlashMint is useful for a variety of applications such as liquidations, debt swap, peg arbitrage. More details on this Facilitator can be found [here](./flashmint-facilitator/GhoFlashMinter.md).

### Discount Dynamics

The [discount rate strategy](concepts/fundamental-concepts/gho-discount-strategy) contract defines the parameters of a user's discount. The strategy can updated by governance and the key parameters are a maximum discount percent (such as 20%), a discount token (such as stkAAVE), and an amount of gho borrowed at a discounted percent per discount token owned (such as 100 GHO per 1 stkAAVE).

The discount is not applied continuously as a GHO borrower accrues interest. Interest is compounded at the base borrow rate and the discount is applied when the borrow balance is queried by calling `balanceOf` directly or from an internal call such as `repay` or `liquidate`.

![GHO Discount Diagram](../assets/RepayAndLiquidateDark.png#gh-dark-mode-only)
![GHO DIscount Diagram](../assets/RepayAndLiquidate.png#gh-light-mode-only)

## Integrate GHO

GHO is operated on the public blockchain making it accessible to plug into any type of application.

The ability for an application to interact with the data and functionality of GHO is limited only by the connection to access public blockchain.

Any Ethereum address can access the full functionality of GHO, and the real-time status + complete historical record of GHO transactions can be verified by anyone at anytime.

This guide explains the best practices for integrating GHO into a variety of common application types.

1.  [Types of Integrations](#types-of-integations)
    - a. [Smart Contracts](#smart-contracts)
    - b. [Frontend](#frontend)
    - c. [Data Analytics](#data-analytics)
2.  [Core Functions](#core-functions)
    - a. [mint](#mint)
    - b. [repay](#repay)
    - c. [FlashMint](#flashmint)
3.  [Data](#data)
    - a. [Live Data](#live-data)
    - b. [Historical Data](#historical-data)

<br />

## Types of Integrations

GHO can be integrated into virtually any application because all data and functionality occurs through public blockchain. This guide will give a tutorial on best practices for the most common categories of integration types

### Smart Contracts

Checkout the [GHO contracts hub](./contracts-overview.md) to get started with contract integrations.

### Frontend

[Aave Utilities](https://github.com/aave/aave-utilities) is a JavaScript SDK which can be used to greatly simplify the process of integrating GHO data and functionality.

Setup instructions are available in the Aave Utilities README, and complete examples of using the SDK for GHO can be found in the [data](#data) and [core function](#core-functions) sections.

### Data Analytics

The current state of GHO, and the complete historical record data is accessible to any application with blockchain querying capabilities. The contract addresses and abis for GHO contracts are available in the contract docs.

The [data](#data) section goes into detail with integrating most common live and historical data queries for JavaScript and Python applications.

<br />

## Core Functions

### setup

### mint

Minting GHO occurs seamlessly through the `borrow` function of the Aave V3 Pool contract.

<details>
    <summary>Sample Code (Javascript)</summary>
    
```js
```

</details>

### repay

<details>
    <summary>Sample Code (Javascript)</summary>
    
```js
```

</details>

### FlashMint

<details>
    <summary>Sample Code (Javascript)</summary>
    
```js
```

</details>

<br />

## Data

### Live Data

<details>
    <summary>Sample Code (Javascript)</summary>
    
```js
```

</details>

### Historical Data

Link to integrating Aave Protocol data guide + add sample code for GHO event querying and subgraph once ready

<details>
    <summary>Query Events RPC</summary>

```js

```

</details>

<details>
    <summary>Query Events Etherscan API</summary>

```js

```

</details>
