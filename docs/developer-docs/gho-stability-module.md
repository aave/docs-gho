# GHO Stability Module

## Overview

A Peg Stability Module (PSM) is a contract that enables the conversion of two tokens at a predetermined ratio. The GHO Stability Module (GSM) leverages the benefits of existing PSM models while innovating upon them in several ways to help further maintain GHO’s peg. The GSM is designed to facilitate conversions between GHO and governance-approved tokens, underpinned by a suite of features designed for flexible operations and risk management.

Key components include [Price Strategies](#price-strategy), [Fee Strategies](#fee-strategy), support for ERC-4626 tokenized vault positions, oracle-based [Price Bounds](#price-bounds-and-swap-freezes), [Exposure Caps](#exposure-cap), and [Last Resort Liquidations](#last-resort-liquidations).

This multifaceted approach underscores the GSM's role not just as a technical solution but as a strategic asset for peg maintenance and risk mitigation.

## Deployed Contracts

| Name                      | Address                                                                                                               |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| GsmRegistry               | [0x167527DB01325408696326e3580cd8e55D99Dc1A](https://etherscan.io/address/0x167527DB01325408696326e3580cd8e55D99Dc1A) |
| GsmFixedFeeStrategy       | [0xD4478A76aCeA81D3768A0ACB6e38f25eEB6Eb1B5](https://etherscan.io/address/0xD4478A76aCeA81D3768A0ACB6e38f25eEB6Eb1B5) |
| GsmUSDC                   | [0x0d8eFfC11dF3F229AA1EA0509BC9DFa632A13578](https://etherscan.io/address/0x0d8eFfC11dF3F229AA1EA0509BC9DFa632A13578) |
| GsmUSDT                   | [0x686F8D21520f4ecEc7ba577be08354F4d1EB8262](https://etherscan.io/address/0x686F8D21520f4ecEc7ba577be08354F4d1EB8262) |
| GsmUSDCFixedPriceStrategy | [0x430BEdcA5DfA6f94d1205Cb33AB4f008D0d9942a](https://etherscan.io/address/0x430BEdcA5DfA6f94d1205Cb33AB4f008D0d9942a) |
| GsmUSDTFixedPriceStrategy | [0x4c707764cbFB4FFa078e169e6b8A6AdbE7526a2c](https://etherscan.io/address/0x4c707764cbFB4FFa078e169e6b8A6AdbE7526a2c) |
| GsmUSDCOracleSwapFreezer  | [0xef6beCa8D9543eC007bceA835aF768B58F730C1f](https://etherscan.io/address/0xef6beCa8D9543eC007bceA835aF768B58F730C1f) |
| GsmUSDTOracleSwapFreezer  | [0x71381e6718b37C12155CB961Ca3D374A8BfFa0e5](https://etherscan.io/address/0x71381e6718b37C12155CB961Ca3D374A8BfFa0e5) |

## Architecture

Terminology: "exogenous" is used throughout this guide to refer to the non-GHO token in a module instance

### GsmRegistry

The `GsmRegistry` is a smart contract that stores a list of all Gsm instances. This contract is owned by the Aave Governance Short Executor.

### Gsm

Each token pairing in the stability module has a `Gsm` or `Gsm4626` contract instance that acts as the GHO facilitator and entry-point for buy and sell functionality.

The `Gsm4626` contract is a special instance of the `Gsm` that supports ERC-4626 tokenized vault shares as the exogenous token.

The parameters and periphery contracts that dictate module operations are detailed below:

### Price Strategy

The GSM introduces a flexible Price Strategy framework, enabling the module to adapt its pricing mechanism based on market conditions or strategic objectives. This system supports both fixed and dynamic pricing strategies, allowing for adjustments in response to real-time market data or predetermined conditions. The initial implementation focuses on a fixed 1:1 pricing strategy for simplicity and stability, with provisions for future adaptation to dynamic strategies as dictated by DAO governance.

### Fee Strategy

Each `Gsm` instance has a `FeeStrategy` contract that determines a percentage fee for buy and sell conversions that is allocated to the Aave DAO treasury.

### Exposure Cap

The exposure cap is a DAO controlled parameter that determines the maximum amount of exogenous tokens the stability module can hold.

### Price Bounds and Swap Freezes

In case the price of the exogenous token deviates from the 1:1 ratio, trading can be stopped using Price Bounds and Swap Freezes.

Price Bounds and Swap Freezes are enabled by the `OracleSwapFreezer`. This contract has a function that utilizes an oracle to factor the price of the exogenous token, and if it is outside of a parameterized bound, react accordingly to freeze conversions.

### Last Resort Liquidations

In case of a rapid increase in risk in an exogenous token, the GSM features Last Resort Liquidations to liquidate the exogenous token. This contract role allows in the worst-case scenarios for the DAO to pause GSM functionality and liquidate the underlying balance of exogenous tokens.
