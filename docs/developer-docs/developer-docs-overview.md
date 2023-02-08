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

- <a className="links-list" href="contracts-overview">
    Deployed GHO Contracts
  </a>
- <a className="links-list" href="https://github.com/aave/gho">
    GHO Contract Source Code
  </a>
- <a
  className="links-list"
  href="https://docs.aave.com/developers/deployed-contracts/deployed-contracts"
  > Deployed Aave Protocol Contracts
  </a>
- <a className="links-list" href="https://github.com/aave/aave-v3-core">
    Aave V3 Contract Source Code
  </a>
- <a className="links-list" href="#frontend">
    Aave Utilities JavaScript SDK
  </a>
- <a
  className="links-list"
  href="https://github.com/bgd-labs/aave-address-book"
  > Solidity and JavaScript Address Registry
  </a>

## Learn GHO

- a. [Aave V3 Ethereum Pool Facilitator](#aave-v3-ethereum-pool-facilitator)
  1. [Mint](#minting)
  2. [Repay](#repay)
  3. [Liquidate](#liquidation)
- b. [FlashMinter Facilitator](#flashminter-facilitator)
- c. [Discount Dynamics](#discount-dynamics)

GHO natively fits into the existing Aave Protocol as a new asset, meaning that interacting with the protocol to borrow GHO will be similar to interacting with other assets in the Aave market:

![GHO_Architecture Diagram](../assets/GHO_Architecture_dark.png#gh-dark-mode-only)
![GHO_Architecture Diagram](../assets/GHO_Architecture.png#gh-light-mode-only)

GHO is an ERC20 token minted from contracts designated as [Facilitators](../concepts/how-gho-works/gho-facilitators.md). It has been proposed to the Aave community that the [Aave V3 Ethereum Pool](../concepts/how-gho-works/gho-facilitators.md#aave-v3-ethereum-pool) and [FlashMinter](../concepts/how-gho-works/gho-facilitators.md#flashminter) Facilitator will be the first Facilitators of GHO.

A Facilitator can trustlessly mint and burn GHO tokens through various strategies. The Aave DAO assigns each Facilitator a Bucket with a specified Capacity, which is the upward limit of GHO that a specific Facilitator can mint. This limit is defined and can be changed by the Aave DAO.

![Facilitator Diagram](../assets/facilitator_dark.png#gh-dark-mode-only)
![Facilitator Diagram](../assets/facilitator.png#gh-light-mode-only)

### Aave V3 Ethereum Pool Facilitator

Interacting with GHO via the Aave Pool Facilitator is very similar to interacting with a typical reserve asset. Below are the technical guides for all GHO actions along with their contract references.

### Minting

[Minting](../concepts/fundamental-concepts/borrow-gho.md) occurs through the `borrow()` function of the Pool where GHO is listed. To mint GHO, the process is identical to borrowing any other reserve. To mint, an address must have sufficient collateral which is performed by approving and then calling `supply()` on the Aave Pool with an eligible collateral asset. Once an address has sufficient collateral, it is able to borrow up to a maximum collateral factor determined by it's collateral asset composition.

GHO can be added to an eMode category, which modifies the collateral factor and liquidation threshold. This can be queried with the following fields from the [integrating GHO](#integrate-gho) section.

`reserve.eModeCategoryId`: id of eMode category reserve belongs to
`user.userEModeCategoryId`: user's active eMode category

Since GHO is created and not borrowed from suppliers, GHO is not subject to restrictions on available liquidity, and instead, the Facilitator cap and collateralization requirements define the limits to which GHO can be minted as calculated below.

`availableFacilitatorCap = ghoReserveData.aaveFacilitatorButcketMaxCapacity - ghoReserveData.aaveFacilitatorBucketLevel`

### Repay

GHO is [repaid](../concepts/fundamental-concepts/repay-liquidate-gho.md) just like any other asset, by approving the Pool contract to spend GHO tokens (by approval transaction or [signed permit](https://github.com/aave/aave-utilities#signERC20Approval) and `repayWithPermit`).

What is different about GHO is the calculation of accrued interest. See the [discount dynamics](#discount-dynamics) section for more info on how accrued interest affects balances for repayment.

### Liquidation

When an address has a GHO borrow position, they are eligible to be liquidated under the same conditions as any other collateralized address. If the health factor of a GHO borrow falls below one, which occurs when the sum of borrow value exceeds the weighted average of liquidation thresholds of collateral assets, then any address is eligible to make a `liquidationCall` on the Pool contract.

The `liquidationCall` repays up to 100% of the GHO borrow position in exchange for an equivalent USD valuation of the collateral plus a liquidation bonus.

See the developers [liquidation guide](https://docs.aave.com/developers/guides/liquidations) for more information.

### FlashMinter Facilitator

Since GHO is not borrowed like a typical Aave reserve, a separate Facilitator is used in place to replicate the `flashloan` functionality of the Aave Pool.

The FlashMinter Facilitator has a separate minting cap from the Aave Pool. Since all FlashMint transactions are returned in a single transaction, no GHO is ever minted against this Facilitator and the cap is applied to each transaction.

FlashMint is useful for a variety of applications such as liquidations, debt swaps, and peg arbitrage. More details on this Facilitator can be found [here](./flashmint-facilitator/GhoFlashMinter.md).

### Discount Dynamics

The [discount rate strategy](../concepts/fundamental-concepts/gho-discount-strategy) contract defines the parameters of a user's discount. The strategy can be updated by governance and the key parameters are a maximum discount percent (such as 20%), a discount token (such as stkAAVE), and an amount of gho borrowed at a discounted percent per discount token owned (such as 100 GHO per 1 stkAAVE).

The discount is not applied continuously as a GHO borrower accrues interest. Interest is compounded at the base borrow rate and the discount is applied when the borrow balance is queried by calling `balanceOf` directly or from an internal call such as `repay` or `liquidate`.

![GHO Discount Diagram](../assets/RepayAndLiquidateDark.png#gh-dark-mode-only)
![GHO DIscount Diagram](../assets/RepayAndLiquidate.png#gh-light-mode-only)

## Integrate GHO

GHO is operated on the public blockchain making it accessible to plug into any type of application.

The ability of an application to interact with the data and functionality of GHO is limited only by the connection to access the public blockchain.

Any Ethereum address can access the full functionality of GHO, and the real-time status and complete historical record of GHO transactions can be verified by anyone at any time.

This guide explains the best practices for integrating GHO into a variety of common application types.

1.  [Types of Integrations](#types-of-integrations)
    - a. [Smart Contracts](#smart-contracts)
    - b. [Frontend](#frontend)
    - c. [Data Analytics](#data-analytics)
2.  [Core Functions](#core-functions)
    - a. [mint](#mint)
    - b. [repay](#repay-1)
    - c. [FlashMint](#flashmint)
3.  [Data](#data)
    - a. [Live Data](#live-data)
    - b. [Historical Data](#historical-data)

## Types of Integrations

GHO can be integrated into virtually any application because all data and functionality occur through a public blockchain. This guide will give a tutorial on best practices for the most common categories of integration types

### Smart Contracts

Check out the [deployed GHO contracts](./contracts-overview.md) to get started with contract integrations.

### Frontend

[Aave Utilities](https://github.com/aave/aave-utilities) is a JavaScript SDK that can be used to greatly simplify the process of integrating GHO data and functionality.

Setup instructions are available in the Aave Utilities README, and complete examples of using the SDK for GHO can be found in the [data](#data) and [core functions](#core-functions) sections.

### Data Analytics

The current state of GHO, and the complete historical record data are accessible to any application with blockchain querying capabilities. The contract addresses and ABIs for GHO contracts are available in the contract docs.

The [data](#data) section goes into detail about integrating the most common live and historical data queries for JavaScript and Python applications.

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

Link to integrating Aave Protocol data guide and add sample code for GHO event querying and subgraph once ready

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
