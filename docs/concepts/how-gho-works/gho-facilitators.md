# Facilitators

## What is a Facilitator?

GHO introduces the concept of Facilitators. A Facilitator can trustlessly mint and burn GHO tokens through various strategies. These strategies can be enacted by different entities that may employ varying strategies for integrating GHO (each entity, a Facilitator). The Aave DAO assigns each Facilitator a Bucket with a specified Capacity, which is the upward limit of GHO that a specific Facilitator can mint. This limit is defined and can be changed by the Aave DAO.

![Facilitator Diagram](../../assets/facilitator_dark.png#gh-dark-mode-only)
![Facilitator Diagram](../../assets/facilitator.png#gh-light-mode-only)

## Current Facilitators

It has been proposed to the Aave community that the Aave V3 Ethereum Pool and FlashMinter Facilitator will be the first Facilitators of GHO.

### Aave V3 Ethereum Pool

The Aave V3 Ethereum Pool has been proposed to the Aave DAO to serve as one of the initial Facilitators on the Ethereum Mainnet due to the risk-reducing features of this version of the protocol, including efficiency mode (“eMode”), isolation mode, siloed borrowing, and caps. In addition, it will assist with bootstrapping the GHO supply in a decentralized and permissionless fashion.

The Aave Protocol is a liquidity protocol available on Ethereum and various other L1 and L2 networks. Aave allows users to supply a range of assets and borrow against them while simultaneously earning yield, as well as participating in liquidations. The Aave Protocol operates on an overcollateralized model. Accordingly, GHO will be overcollateralized as well.

### FlashMinter

The FlashMinter Facilitator is an entity that enables [FlashMinting](../fundamental-concepts/flashmint.md). FlashMinting is especially important for GHO as it will help to facilitate arbitrage, provide instant liquidity, and have the ability to liquidate users.

As FlashMinting provides the same functionality as the current [flashloan](https://docs.aave.com/developers/guides/flash-loans) standard, it works very much the same (e.g. everything must be returned and there will be a fee).

### Become a Facilitator

Each Facilitator must be approved by Aave Governance. Aave Governance will be able to determine and assign a Facilitator a specific Bucket capacity to bootstrap GHO liquidity and the GHO market.

Frameworks on how to apply to become a Facilitator will be open to community discussion.

## Facilitator Strategies

GHO will be minted through various strategies. Eventually, Facilitators will be able to apply different strategies to their generation of GHO. This will allow Aave Governance to manage its exposure to different strategies across the ecosystem, and some strategies may help GHO maintain its peg.

As it will be up to Facilitators to decide their minting strategies, we expect to see exciting creativity in this area. For example, the Aave V3 Pool, one of the proposed initial Facilitators of GHO, operates on an overcollateralized model. As a result, GHO will be overcollateralized.

Aave Governance may attract varied Facilitators in different ways. If new and additional Facilitators are approved by Aave Governance, the possibilities are endless.

## Facilitator Technical Fundamentals

A Facilitator ($F$) can trustlessly generate and burn GHO tokens. Each Facilitator is assigned a Bucket ($B$) with a specified Capacity ($C$). The Capacity ($C$) represents the upward limit of GHO that a specific Facilitator can generate. The amount of GHO tokens generated per each Facilitator is called Level ($L$). Fundamentally, all Facilitators must adhere to the following equation:

Given a set of Facilitators $F_0, F_1, ...F_{N − 1}$ each of which is associated with a certain Bucket with capacity ($CB_t$) and a current Bucket level at a given time ($LB_t$). The Available Supply ($AS_{GHO_t}$), is the maximum amount of GHO available to be minted through all the Facilitators at a given time ($t$), defined as follows:

$$
AS_{GHO_t} = \sum_{n=0}^{N-1} max(0, CB(n)_{t} - LB(n)_{t})
$$

:::info

It is important to note the exception to this preliminary equation. As the Bucket Capacity can be changed by the Aave DAO, there is the possibility that a Facilitator could result in having more GHO minted than its initial Capacity. This may occur if the Bucket’s Capacity has been lowered by the Aave DAO.

:::

Facilitators can be different in technical nature. As stablecoins can differ depending on the stabilization mechanisms they employ, with GHO, the idea is to employ multiple stabilization mechanisms, in a controlled fashion via the Aave DAO by properly balancing each Bucket capacity to not compromise overall system collateralization and stability.
