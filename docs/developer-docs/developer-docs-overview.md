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

GHO is an ERC20 token minted from contracts designated as [Facilitators](../concepts/how-gho-works/gho-facilitators.md). It has been proposed to the Aave community that the [Aave V3 Ethereum Pool](../concepts/how-gho-works/gho-facilitators.md#aave-v3-ethereum-pool) and [FlashMinter](../concepts/how-gho-works/gho-facilitators.md#flashminter) Facilitator will be the first Facilitators of GHO.

The Aave Pool facilitator will facilitate the minting and burning of GHO through the standard `borrow` and `repay` function which are utilizaed by all other Aave reserves. The flashminter facilitator will provide flashloan functionality to GHO which is not available by default.

![GHO_Architecture Diagram](../assets/GHO_Architecture_dark.png#gh-dark-mode-only)
![GHO_Architecture Diagram](../assets/GHO_Architecture.png#gh-light-mode-only)

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

See [core functions](#core-functions) for GHO borrowing integrations.

### Repay

GHO is [repaid](../concepts/fundamental-concepts/repay-liquidate-gho.md) just like any other asset, by approving the Pool contract to spend GHO tokens (by approval transaction or [signed permit](https://github.com/aave/aave-utilities#signERC20Approval) and `repayWithPermit`).

What is different about GHO is the calculation of accrued interest. See the [discount dynamics](#discount-dynamics) section for more info on how accrued interest affects balances for repayment.

See [core functions](#core-functions) for GHO repay integrations.

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
2.  [GHO SDK](#gho-sdk)
    - a. [setup](#setup)
    - b. [borrow](#borrow)
    - c. [repay](#repay-1)
    - d. [FlashMint](#flashmint)
    - e. [Interface Live Data](#interface-live-data)
3.  [Data](#data)
    - a. [Live Data](#live-data)
    - b. [Historical Data](#historical-data)

## Types of Integrations

GHO can be integrated into virtually any application because all data and functionality occur through a public blockchain. This guide will give a tutorial on best practices for the most common categories of integration types

### Smart Contracts

Check out the [deployed GHO contracts](./contracts-overview.md) to get started with contract integrations.

### Frontend

[Aave Utilities](https://github.com/aave/aave-utilities) is a JavaScript SDK that can be used to greatly simplify the process of integrating GHO data and functionality.

It provides imports for fetching data, formatting data, and building transactions. Tutorials with sample code for utilizaing this SDK can be found [here](#gho-sdk)

### Data Analytics

The current state of GHO, and the complete historical record data are accessible to any application with blockchain querying capabilities. The contract addresses and ABIs for GHO contracts are available in the contract docs.

The [data](#data) section goes into detail about integrating the most common live and historical data queries for JavaScript and Python applications.

## GHO SDK

### setup

The [Aave Utilities Javascript SDK](https://github.com/aave/aave-utilities) is a utilty for fetching data and building transactions. Since GHO is under active development, it is not available in the main package versions. GHO versions are published from [this branch](https://github.com/aave/aave-utilities/pull/445) and the current version in use on the [GHO testnet app](https://gho.aave.com) are listed below:

```
npm install @aave/math-utils@1.13.6-b2b7613127eb1278aa61a20d618e3b6d95782bb2.0
npm install @aave/contract-helpers@1.13.6-b2b7613127eb1278aa61a20d618e3b6d95782bb2.0
```

or 

```
yarn add @aave/math-utils@1.13.6-b2b7613127eb1278aa61a20d618e3b6d95782bb2.0
yarn add @aave/contract-helpers@1.13.6-b2b7613127eb1278aa61a20d618e3b6d95782bb2.0
```

### borrow

The most common method of minting GHO is through the `borrow` of the Aave Pool facilitator. Other factilitators such as the [flashminter](#flashminter-facilitator) will have different methods for interacting with GHO.

The `borrow` method can be accessed from the `Pool` import of the contract-helpers package. The pre-requisite to `borrow` is that the address incurring the borrow position must have sufficient collateral. This is achieved by the caller supplying collateral or if the caller has been approved a credit delegation and passes in the delegators address in the `onBehalfOf` field.

<details>
<summary>Sample Code (JavaScript)</summary>

```js
import { Pool, InterestRate } from '@aave/contract-helpers';

const pool = new Pool(provider, {
  POOL: '0x3De59b6901e7Ad0A19621D49C5b52cC9a4977e52', // Goerli GHO market
  WETH_GATEWAY: '0x9c402E3b0D123323F0FCed781b8184Ec7E02Dd31', // Goerli GHO market
});

/*
- @param `user` The ethereum address that will receive the borrowed amount 
- @param `reserve` The ethereum address of the reserve asset 
- @param `amount` The amount to be borrowed, in human readable units (e.g. 2.5 ETH)
- @param `interestRateMode`//Whether the borrow will incur a stable (InterestRate.Stable) or variable (InterestRate.Variable) interest rate
- @param @optional `debtTokenAddress` The ethereum address of the debt token of the asset you want to borrow. Only needed if the reserve is ETH mock address 
- @param @optional `onBehalfOf` The ethereum address for which user is borrowing. It will default to the user address 
*/
const txs: EthereumTransactionTypeExtended[] = await lendingPool.borrow({
  user,
  reserve: '0xcbE9771eD31e761b744D3cB9eF78A1f32DD99211', // Goerli GHO market
  amount,
  interestRateMode,
  debtTokenAddress: '0x80aa933EfF12213022Fd3d17c2c59C066cBb91c7', // Goerli GHO market
  onBehalfOf,
  referralCode,
});
```
Submit transaction using [these instructions](https://github.com/aave/aave-utilities#submitting-transactions).
</details>

### repay

Repay also occurs seamlessly through the `repay` function of the Aave V3 Pool contract. Since repay transfers assets, the Pool must be approved as a spender of the tokens. There are two routes for approval: 

- Approve via txn -> repay
- Approve via signed message -> repayWithPermit

There are instructions for both routes below:

<details>
<summary>Repay Sample Code (JavaScript)</summary>

```js
import { Pool } from '@aave/contract-helpers';

const pool = new Pool(provider, {
  POOL: '0x3De59b6901e7Ad0A19621D49C5b52cC9a4977e52', // Goerli GHO market
  WETH_GATEWAY: '0x9c402E3b0D123323F0FCed781b8184Ec7E02Dd31', // Goerli GHO market
});

/*
- @param `user` The ethereum address that will make the deposit 
- @param `reserve` The ethereum address of the reserve 
- @param `amount` The amount to be deposited 
- @param `interestRateMode` // Whether stable (InterestRate.Stable) or variable (InterestRate.Variable) debt will be repaid
- @param @optional `onBehalfOf` The ethereum address for which user is depositing. It will default to the user address
*/
const txs: EthereumTransactionTypeExtended[] = await pool.repay({
  user,
  reserve: '0xcbE9771eD31e761b744D3cB9eF78A1f32DD99211', // Goerli GHO market
  amount,
  interestRateMode,
  onBehalfOf,
});
```
Will return an array with repay transaction and optionally an approval transaction. Submit transaction(s) using [these instructions](https://github.com/aave/aave-utilities#submitting-transactions).
</details>

<details>
<summary>RepayWithPermit Sample Code (JavaScript)</summary>

```js
import { Pool } from '@aave/contract-helpers';

const pool = new Pool(provider, {
  POOL: '0x3De59b6901e7Ad0A19621D49C5b52cC9a4977e52', // Goerli GHO market
  WETH_GATEWAY: '0x9c402E3b0D123323F0FCed781b8184Ec7E02Dd31', // Goerli GHO market
});

// Generate payload to be signed by user
const approvalMsg = await pool.signERC20Approval({
   user,
   reserve,
   amount,
   deadline, // determined by you
  )
})

// User signs with wallet method such as ethers signTypedDataV4 and passed as signature variable in next call

/*
- @param `user` The ethereum address that will make the deposit 
- @param `reserve` The ethereum address of the reserve 
- @param `amount` The amount to be deposited 
- @param `interestRateMode` // Whether stable (InterestRate.Stable) or variable (InterestRate.Variable) debt will be repaid
- @param @optional `onBehalfOf` The ethereum address for which user is depositing. It will default to the user address
*/
const txs: EthereumTransactionTypeExtended[] = await pool.repayWithPermit({
  user,
  reserve: '0xcbE9771eD31e761b744D3cB9eF78A1f32DD99211', // Goerli GHO market
  amount,
  interestRateMode,
  onBehalfOf,
  signature,
});
```
Will return an array with repay transaction and optionally an approval transaction. Submit transaction(s) using [these instructions](https://github.com/aave/aave-utilities#submitting-transactions).

</details>

### flashmint

Coming soon to GHO SDK. In the meantime, can be accessed by following the [contracts documentation](./flashmint-facilitator/GhoFlashMinter.md). 

### Interface Live Data

There are several view contracts used to provide a summarized data source for market, incentives, and gho data. The utilities SDK exposes helper methods to fetch and format data from these contracts. To setup these packages see the [setup](#setup) section.

<details>
<summary>Sample Code (JavaScript)</summary>

```js
import { ethers } from 'ethers';
import { dayjs } from 'dayjs';
import {
  UiPoolDataProvider,
  UiIncentiveDataProvider,
  ChainId,
  GhoService,
} from '@aave/contract-helpers';
import {
  formatGhoReserveData,
  formatGhoUserData,
  formatReservesAndIncentives,
  formatUserSummaryAndIncentives,
} from '@aave/math-utils';

// ES5 Alternative imports
//  const {
//    ChainId,
//    UiIncentiveDataProvider,
//    UiPoolDataProvider,
//    GhoService,
//  } = require('@aave/contract-helpers');
//  const {
//    formatGhoReserveData,
//    formatGhoUserData,
//    formatReservesAndIncentives,
//    formatUserSummaryAndIncentives,
//  } = require('@aave/math-utils');
//  const ethers = require('ethers');

// Sample RPC address for querying ETH goerli
const provider = new ethers.providers.JsonRpcProvider(
  'https://eth-goerli.public.blastapi.io',
);

// User address to fetch data for, insert address here
const currentAccount = '0x464C71f6c2F760DdA6093dCB91C24c39e5d6e18c';

// View contract used to fetch all reserves data (including market base currency data), and user reserves
// Using Aave V3 Eth goerli address for demo
const poolDataProviderContract = new UiPoolDataProvider({
  uiPoolDataProviderAddress: '0x3De59b6901e7Ad0A19621D49C5b52cC9a4977e52', // Goerli GHO Market
  provider,
  chainId: ChainId.goerli,
});
const currentTimestamp = dayjs().unix()

// View contract used to fetch all reserve incentives (APRs), and user incentives
// Using Aave V3 Eth goerli address for demo
const incentiveDataProviderContract = new UiIncentiveDataProvider({
  uiIncentiveDataProviderAddress:
    '0xF67B25977cEFf3563BF7F24A531D6CEAe6870a9d', // Goerli GHO Market
  provider,
  chainId: ChainId.goerli,
});

const ghoService = new GhoService({
    provider,
    uiGhoDataProviderAddress: '0xE914D574975a1Cd273388035Db4413dda788c0E5', // Goerli GHO Market
});

async function fetchContractData() {
  // Object containing array of pool reserves and market base currency data
  // { reservesArray, baseCurrencyData }
  const reserves = await poolDataProviderContract.getReservesHumanized({
    lendingPoolAddressProvider: '0x4dd5ab8Fb385F2e12aDe435ba7AFA812F1d364D0', // Goerli GHO Market
  });

  // Object containing array or users aave positions and active eMode category
  // { userReserves, userEmodeCategoryId }
  const userReserves = await poolDataProviderContract.getUserReservesHumanized({
    lendingPoolAddressProvider: '0x4dd5ab8Fb385F2e12aDe435ba7AFA812F1d364D0', // Goerli GHO Market
    user: currentAccount,
  });

  // Array of incentive tokens with price feed and emission APR
  const reserveIncentives =
    await incentiveDataProviderContract.getReservesIncentivesDataHumanized({
      lendingPoolAddressProvider: '0x4dd5ab8Fb385F2e12aDe435ba7AFA812F1d364D0', // Goerli GHO Market
    });

  // Dictionary of claimable user incentives
  const userIncentives =
    await incentiveDataProviderContract.getUserReservesIncentivesDataHumanized({
      lendingPoolAddressProvider: '0x4dd5ab8Fb385F2e12aDe435ba7AFA812F1d364D0', // Goerli GHO Market
      user: currentAccount,
    });

   const ghoReserveData = await ghoService.getGhoReserveData();
   const ghoUserData = await ghoService.getGhoUserData(currentAccount);

  const formattedGhoReserveData = formatGhoReserveData({
    ghoReserveData,
  });
  const formattedGhoUserData = formatGhoUserData({
    ghoReserveData,
    ghoUserData,
    currentTimestamp,
  });

  const formattedPoolReserves = formatReservesAndIncentives({
    reserves: reserves.reservesData,
    currentTimestamp,
    marketReferenceCurrencyDecimals: reserves.baseCurrencyData.marketReferenceCurrencyDecimals,
    marketReferencePriceInUsd: reserves.baseCurrencyData.marketReferenceCurrencyPriceInUsd,
    reserveIncentives: reserveIncentives,
  })

  const userSummary = formatUserSummaryAndIncentives({
    currentTimestamp,
    marketReferencePriceInUsd: reserves.baseCurrencyData.marketReferenceCurrencyPriceInUsd,
    marketReferenceCurrencyDecimals: reserves.baseCurrencyData.marketReferenceCurrencyDecimals,
    userReserves: userReserves.userReserves,
    formattedReserves: formattedPoolReserves,
    userEmodeCategoryId: userReserves.userEmodeCategoryId,
    reserveIncentives: reserveIncentives,
    userIncentives: userIncentives,
  });

let formattedUserSummary = userSummary;
  // Factor discounted GHO interest into cumulative user fields
  if (formattedGhoUserData.userDiscountedGhoInterest > 0) {
    const userSummaryWithDiscount = formatUserSummaryWithDiscount({
      userGhoDiscountedInterest: formattedGhoUserData.userDiscountedGhoInterest,
      user,
      marketReferenceCurrencyPriceUSD: Number(
        formatUnits(reserves.baseCurrencyData.marketReferenceCurrencyPriceInUsd, USD_DECIMALS)
      ),
    });
    formattedUserSummary = {
      ...userSummary,
      ...userSummaryWithDiscount,
    };
  }

   console.log({ formattedGhoReserveData, formattedGhoUserData, formattedPoolReserves, formattedUserSummary });
}

fetchContractData();
```
</details>

<br />

## Data

All facilitator transactions occur through smart contracts, so querying the real-time state of facilitator and market data is possible through contract queries. The following guides will give sample code fetch live and historical data for GHO directly from contract queries and events.

### Live Data

To query live data for GHO, there are several view contracts which can give summarized information of markets, incentives, and gho data respectively:

- UiPoolDataProvider: Queries for all market and user data
- UiIncentiveDataProvider: QUeries for all available and user claimable incentives
- UiGhoDataProvider: Queries for Aave Pool facilitator and user discount

A complete example of fetching and formatting data from these contracts can be found in the GHO SDK [live data](#interface-live-data) section. These steps could also be adapted for other languages or use cases.

### Historical Data

Transactions of the GHO facilitator are queryable through events on the GHO contracts. In the future there will be indexed alternatives such as subgraphs, dashbaords, and tailored endpoints for GHO data, but for now this data is only through event queries. 

Shown below are 2 methods for generalized event queries using RPCs and the Etherscan API which can be used with the GHO deployed contracts to index historical data for GHO integrations.

Note: An archival node may be necessary for the rpcUrl to query historical events

<details>
<summary>Query Events RPC</summary>

```js
const { providers, Contract, utils } = require("ethers");
// REPLACE WITH YOUR DATA HERE
const abi = require("./yourAbi.json");
const contractAddress = "0x0";
const contractStartBlock = 1; // deployment block of the contract, to avoid filtering from genesis block
const rpcUrl = "https://eth-mainnet.public.blastapi.io"; // eth mainnet example
async function fetchEvents() {
  // Connect to an Ethereum node
  const provider = new providers.JsonRpcProvider("rpcUrk");
  // Create a Contract object
  const contract = new Contract(contractAddress, abi, provider);
  // Define the filter options
  const filter = {
    fromBlock: 0,
    toBlock: "latest",
    address: contractAddress,
  };
  // Get the events from the contract
  const events = await contract.provider.getLogs(filter);
  // Loop through the events and log them
  for (const event of events) {
    const eventJson = utils.parseLog(event);
    console.log(eventJson);
  }
}
fetchEvents();
```
</details>

<details>
<summary>Query Events Etherscan API</summary>

```js
const ethers = require("ethers");
const request = require("request-promise-native");
// REPLACE WITH YOUR DATA HERE
const abi = require("./yourAbi.json");
const contractAddress = "0x0";
const contractStartBlock = 1; // deployment block of the contract, to avoid filtering from genesis block
const ETHERSCAN_API_KEY = "";
async function fetchEvents() {
  // Set up the API key and base URL for the Etherscan API
  const baseUrl = "https://api.etherscan.io/api";
  const contractInterface = new ethers.utils.Interface(abi);
  // Set the initial page and block number
  let page = 1;
  let blockNumber = "latest";
  const PAGE_SIZE = 1000;
  // Loop through each transaction
  while (true) {
    // Set up the options for the API request
    const options = {
      url: `${baseUrl}`,
      qs: {
        module: "account",
        action: "txlist",
        address: contractAddress,
        startblock: contractStartBlock,
        endblock: blockNumber,
        page: page,
        sort: "asc",
        apikey: ETHERSCAN_API_KEY,
      },
      json: true,
    };
    // Send the API request
    const response = await request(options);
    for (const tx of response.result) {
      // Check if this transaction was sent to the contract
      if (tx.to.toLowerCase() === contractAddress.toLowerCase()) {
        // Add the transaction to the array
        const decodedData = contractInterface.decodeFunctionData(
          tx.input.slice(0, 10),
          tx.input
        );
        // Use decoded data here
      }
    }
    if (response.result.length < PAGE_SIZE) {
      break;
    } else {
      page += 1;
    }
  }
}
fetchEvents();
```
</details>