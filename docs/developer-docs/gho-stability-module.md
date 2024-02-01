# GHO Stability Module

## Overview

A Peg Stability Module (PSM) is a contract that enables the conversion of two tokens at a predetermined ratio. This mechanism has proven effective for numerous stablecoin projects in preserving the stability of exchange rates. Using this model as inspiration, the GHO Stability Module (GSM) for GHO leverages the benefits of existing models whilst innovating upon them in several ways to help further maintain GHO’s peg.

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

0xef6beCa8D9543eC007bceA835aF768B58F730C1f

## Architecture

Terminology: "exgonous" is used througout this guide to refer to the non-GHO token in a module instance

### GsmRegistry

The `GsmRegistry` is a contract that stores a list of all Gsm instances.

### Gsm

Each token pairing in the stability module has a `Gsm` or `Gsm4626` contract instance that acts as the GHO facilitator and entry-point for buy and sell functionality.

The `Gsm4626` contract is a special instance of the `Gsm` that supports ERC-4626 tokenized vault shares as the exogonous token.

The parameters and periphery contracts that dictate module operations are detailed below:

### Price Strategy

The GSM introduces the concept of Price Strategies that provide the ability to adjust the pricing ratio between GHO and the exogenous token, based on different strategies. The `PriceStrategy` oversee the calculation of the price ratio for a module instance, and:

- Can be fixed.
- Can be dynamic, based on price oracles and markets, linear curves, stableswap curves, etc.

### Fee Strategy

Each `Gsm` instance has a `FeeStrategy` contract that determines a percentage fee for buy and sell conversions that is allocated to the Aave DAO treasury.

### Exposure Cap

The exposure cap is a DAO controlled parameter that determines the maximum amount of exogonous tokens the stability module can hold.

### Price Bounds and Swap Freezes

In case the price of the exogenous token deviates from the 1:1 ratio, trading can be stopped using Price Bounds and Swap Freezes.

Price Bounds and Swap Freezes are enabled by the `OracleSwapFreezer`. This contract has a function that utilizes an oracle to factor the price of the exogenous token, and if it is outside of a parameterized bound, react accordingly to freeze conversions.

### Last Resort Liquidations

In case of a rapid increase in risk in an exogenous token, the GSM features Last Resort Liquidations to liquidate the exogenous token. This contract role allows in the worst-case scenarios for the DAO to pause GSM functionality and liquidate the underyling balance of exegonous tokens.
