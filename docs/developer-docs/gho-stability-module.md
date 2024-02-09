# GHO Stability Module

## Overview

A Peg Stability Module (PSM) is a contract that enables the conversion of two tokens at a predetermined ratio. The GHO Stability Module (GSM) leverages the benefits of existing PSM models while innovating upon them in several ways to help further maintain GHO’s peg. The GSM is designed to facilitate conversions between GHO and governance-approved tokens, underpinned by a suite of features designed for flexible operations and risk management.

Key components include [Price Strategies](#price-strategy), [Fee Strategies](#fee-strategy), support for ERC-4626 tokenized vault positions, freezes based on oracle [Price Bounds](#conversion-freezes-and-oracle-price-bounds), [Exposure Caps](#exposure-cap), and [Last Resort Liquidations](#last-resort-liquidations).

This multifaceted approach underscores the GSM's role not just as a technical solution but as a strategic asset for peg maintenance and risk mitigation.

## Deployed Contracts

| Name                      | Address                                                                                                               |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| GSMRegistry               | [0x167527DB01325408696326e3580cd8e55D99Dc1A](https://etherscan.io/address/0x167527DB01325408696326e3580cd8e55D99Dc1A) |
| GSMFixedFeeStrategy       | [0xD4478A76aCeA81D3768A0ACB6e38f25eEB6Eb1B5](https://etherscan.io/address/0xD4478A76aCeA81D3768A0ACB6e38f25eEB6Eb1B5) |
| GSMUSDC                   | [0x0d8eFfC11dF3F229AA1EA0509BC9DFa632A13578](https://etherscan.io/address/0x0d8eFfC11dF3F229AA1EA0509BC9DFa632A13578) |
| GSMUSDT                   | [0x686F8D21520f4ecEc7ba577be08354F4d1EB8262](https://etherscan.io/address/0x686F8D21520f4ecEc7ba577be08354F4d1EB8262) |
| GSMUSDCFixedPriceStrategy | [0x430BEdcA5DfA6f94d1205Cb33AB4f008D0d9942a](https://etherscan.io/address/0x430BEdcA5DfA6f94d1205Cb33AB4f008D0d9942a) |
| GSMUSDTFixedPriceStrategy | [0x4c707764cbFB4FFa078e169e6b8A6AdbE7526a2c](https://etherscan.io/address/0x4c707764cbFB4FFa078e169e6b8A6AdbE7526a2c) |
| GSMUSDCOracleSwapFreezer  | [0xef6beCa8D9543eC007bceA835aF768B58F730C1f](https://etherscan.io/address/0xef6beCa8D9543eC007bceA835aF768B58F730C1f) |
| GSMUSDTOracleSwapFreezer  | [0x71381e6718b37C12155CB961Ca3D374A8BfFa0e5](https://etherscan.io/address/0x71381e6718b37C12155CB961Ca3D374A8BfFa0e5) |

## Architecture

Terminology: "exogenous" is used throughout this guide to refer to the non-GHO token in a module instance

### GSMRegistry

The `GSMRegistry` is a smart contract that stores a list of all GSM instances. This contract is owned by the Aave Governance Short Executor.

### GSM

Each token pairing in the stability module has a `GSM` or `GSM4626` contract instance that acts as the GHO facilitator and entry-point for buy and sell functionality.

The `GSM4626` contract is a special instance of the `GSM` that supports ERC-4626 tokenized vault shares as the exogenous token.

The parameters and periphery contracts that dictate module operations are detailed below:

### Price Strategy

The GSM introduces a flexible Price Strategy framework, enabling the module to adapt its pricing mechanism based on market conditions or strategic objectives. This system supports both fixed and dynamic pricing strategies, allowing for adjustments in response to real-time market data or predetermined conditions. The initial implementation focuses on a fixed 1:1 pricing strategy for simplicity and stability, with provisions for future adaptation to dynamic strategies as dictated by DAO governance.

### Fee Strategy

Each `GSM` instance has a `FeeStrategy` contract that determines a percentage fee for buy and sell conversions that is allocated to the Aave DAO treasury.

### Exposure Cap

The exposure cap is a parameter determined by Aave DAO Governance that sets the maximum amount of an exogenous token the stability module can hold.

### Conversion Freezes and Oracle Price Bounds

In case the price of the exogenous token deviates from a determined ratio, the freeze role can be utilized by the Aave DAO or assigned to an entity (autonomous agents or contracts) to respond and halt conversions.

An implementation of the freeze role is the `OracleSwapFreezer` contract. This contract utilizes Chainlink oracles and price bounds determined by Aave Governence to freeze/unfreeze based on oracle conditions.

### Last Resort Liquidations

In case of a rapid increase in risk in an exogenous token, the GSM features Last Resort Liquidations to liquidate the exogenous token. This contract role allows in the worst-case scenarios for the DAO to pause GSM functionality and liquidate the underlying balance of exogenous tokens.
