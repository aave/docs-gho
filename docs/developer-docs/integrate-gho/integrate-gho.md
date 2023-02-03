# Integrate GHO

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
