# GHO FAQ

## What is GHO?

GHO is a decentralized multi-collateral stablecoin that is fully backed, transparent and native to the Aave Protocol.

## How is the value of GHO kept stable?

GHO is kept stable through market efficiencies. It is envisioned that if GHO were to be valued > $1, the market would [arbitrage](../concepts/fundamental-concepts/arbitrage.md) the value back to $1 as it would be profitable to swap GHO for other stablecoins. If GHO were to be valued < $1, then it would be profitable to pay back debt, and will result in GHO total supply decreasing as debt is repaid will help the peg to be restored.

## How to mint GHO?

Borrowers and suppliers can mint GHO using assets they have supplied into V3 as collateral on Ethereum markets, while continuing to earn interests on their underlying assets.

## How to borrow GHO

The GHO pool will function differently from existing assets but to borrow it will work similarly as other available assets on the different markets in the protocol. 

1. Supply Collateral
2. Borrow GHO
3. Repay GHO and Accrued Interest (real-time)
4. Repaid interest will be redirected to the DAO, rather than an asset supplier, contributing to the DAO treasury

The video below shows how to borrow GHO using the Aave Protocol interface.

<video controls width="100%" autoPlay>
  <source src="https://gho.infura-ipfs.io/ipfs/QmVFGEyoMTaoYnMCL9oDEg2zwaxK9G2T2vqEHUN7tu8Qtk"/>
</video>

## How is GHO different from the other assets listed on the Aave markets?

Unlike many stablecoins, the oracle price for GHO is fixed. Decentralized stablecoins such as GHO are transparent and cannot be changed. Interest rates are defined by the Aave DAO and repaid interest is redirected to the DAO instead of the asset suppliers. Discounts are available to borrowers staking AAVE in the Safety Module.

## Which assets can be used as collateral to borrow GHO?

Assets that are available in the Aave Protocol can be used to back GHO. Initially, the Ethereum V3 pool will be the first facilitator to launch because of V3’s extensive risk-mitigation features, including e-mode, isolation mode, and supply caps.

## Who manages the GHO supply?

The Aave DAO will manage the supply of GHO, the interest rates and determine risk parameters.

## What is a Facilitator and what does it mean for GHO?

GHO introduces the concept of [Facilitators](../concepts/how-gho-works/gho-facilitators.md). A Facilitator (e.g., a protocol, an entity, etc.) has the ability to trustlessly mint (and burn) GHO tokens. To be added as a Facilitator they would have to be approved by Aave Governance. Various Facilitators will be able to apply different strategies to their generation of GHO.

## Can you explain more about the discount model for GHO?

Users that have staked AAVE tokens in the Safety Module (stkAave) are eligible for a discount on GHO.

For each stkAave there will be a discount on the borrowing rate for 100 GHO. The discount model is interchangeable and can be redesigned and replaced if needed by The Aave DAO. The first decision regarding the GHO interest and discount rates can be seen [here](../concepts/fundamental-concepts/gho-discount-strategy.md).

## Is only stkAAVE used for discount or is aBPT eligible? If not, why?

Currently only stkAAVE.

## Can GHO be flashloaned?

GHO can be [FlashMinted](../concepts/fundamental-concepts/flashmint.md). FlashMinting provides the same functionality and follows the current Flashloan standard (ERC3156) as in the Aave Protocol.
