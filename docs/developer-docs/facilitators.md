---
id: facilitators
title: Facilitators
---

import AaveGhostSrc from "@site/static/img/tools.png";

# Facilitators

The GHO token has a simple yet flexible design. See for yourself by viewing the [contract source](https://etherscan.deth.net/token/0x40d16fc0246ad3160ccc09b8d0d3a2cd28ae6c2f).

The core mechanism of the GHO contract is _facilitators_. A facilitator is an address with the ability to mint GHO up to a specified threshold. Facilitators can only be approved by Aave Governance through on-chain proposal voting.

The initial proposal for GHO launched two faciltiators: Aave Protocol and Flashmint. The Aave Protocol facilitator operates similarly to borrowing a standard Aave reserve token: the `borrow` function is called but in the case of GHO, liquidity is minted instead of being allocated from token suppliers.

The flashmint facilitator operates simiarly to the `flashloan` functionality of the Aave Protocol, enabling GHO to be minted and burned within a single transaction.

The generic nature of the GHO facilitator model creates a large design space for potential facilitators, some ideas are listed below.

## Ideas

- Existing DeFi protocols as potential facilitator
- New facilitator protocol to acheive strategic goal for Aave DAO: peg stability, treasury management, etc.
- Interest rate or bonding curve mechanisms (potential upgrade to Aave Protocol facilitator or entirely new facilitator)
- Systems for verifying off-chain collateral

## Resources

- [Flashmint Facilitator](https://github.com/aave/gho-core/blob/main/src/contracts/facilitators/flashMinter/GhoFlashMinter.sol)
- [Aave Protocol Facilitator](https://github.com/aave/gho-core/blob/51be44756a1013eaead43f25142a6ab723646ec3/src/contracts/facilitators/aave/tokens/GhoAToken.sol#L4)
- [GHO Facilitator Governance Framework](https://snapshot.org/#/aave.eth/proposal/0x49486dc5964267bf67f034bb6146cd93ffe6c9e3a85c7368334b48b8e5057776)
- [Aave Address Book - solidity & npm registry](https://github.com/bgd-labs/aave-address-book/)
