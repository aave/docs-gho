# Resources

# Security & Audits

GHO has been implemented with security as priority. The system has been designed to be safe and secure, and we have spent all the necessary resources in order to ensure that the protocol matches the highest security standards.

Below are the links to all audit reports and formal verification for GHO

## Audit Round 1

| Auditor       | Date       | Report                                                                                                         |
| ------------- | ---------- | -------------------------------------------------------------------------------------------------------------- |
| ABDK          | 27-01-2022 | [ABDK_GHO](https://github.com/aave/aave-v3-core/blob/master/audits/27-01-2022_ABDK_AaveV3.pdf)                 |
| OpenZeppelin  | 01-11-2021 | [OpenZeppelin_GHO](https://github.com/aave/aave-v3-core/blob/master/audits/01-11-2021_OpenZeppelin_AaveV3.pdf) |
| Trail of Bits | 07-01-2022 | [SigmaPrime_GHO](https://github.com/aave/aave-v3-core/blob/master/audits/07-01-2022_TrailOfBits_AaveV3.pdf)    |

## Technical Paper

The technical paper for GHO can be found [here](https://github.com/aave/gho/blob/main/techpaper/GHO_Technical_Paper.pdf)

## Community Resources

### GHO Videos

### Articles on GHO

### Podcasts on GHO

## Glossary

| Term                   | Definition                                                                                                                                                                                                                                                                                     |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AAVE                   | The native asset of the Aave ecosystem, which constitutes the foundation of governance and safety for the Aave Protocol.                                                                                                                                                                       |
| Aave Protocol          | Decentralized protocol providing permissionless access to pooled money markets for cryptographic assets.                                                                                                                                                                                       |
| Arbitrage              | The concept of taking advantage of a difference in prices in multiple markets to make a profit.                                                                                                                                                                                                |
| Bucket                 |                                                                                                                                                                                                                                                                                                |
| Bucket Capacity        | Represents the upward limit of GHO that a specific Facilitator can generate.                                                                                                                                                                                                                   |
| Bucket Level           | The amount of GHO tokens generated per each Facilitator.                                                                                                                                                                                                                                       |
| Cooldown Period        | The time required prior to unstaking tokens, this is currently set to 864,000 seconds (10 days). Users can only withdraw their assets from the Security Module after the cooldown period ends and the unstake window is active.                                                                |
| Debt Token             | GHO, the discounted token.                                                                                                                                                                                                                                                                     |
| Discount Lock Period   | The minimum amount of time a user is entitled to a discounted interest rate without performing additional actions (expressed in seconds).                                                                                                                                                      |
| Discount Model         | Users that have staked AAVE tokens in the safety module (stkAAVE) are eligible for a discount on GHO. For each stkAAVE there will be a discount on the borrowing rate for 100 GHO. The discount model is subject to Aave Governance and can change.                                            |
| Discount Rate Strategy | Users that have staked AAVE tokens in the safety module (stkAAVE) are eligible for a discount on GHO. For each stkAAVE there will be a discount on the borrowing rate for 100 GHO.                                                                                                             |
| Discount Threshold     | The maximum amount of GHO that can be generated at discount through the borrow interaction within the Aave Protocol, per stkAAVE held.                                                                                                                                                         |
| Discount Token         | The token that grants discounts off of the the debt interest. Per the current configuration, only stkAAVE is eligible for the GHO borrowing discount.                                                                                                                                          |
| Facilitator            | A Facilitator can be a protocol or an entity within the crypto ecosystem, that has the ability to trustlessly mint (and burn) GHO tokens. They are assigned by the Aave Governance.                                                                                                            |
| Maximum Capacity       | The maximum capacity of GHO tokens that a facilitator can mint                                                                                                                                                                                                                                 |
| Ray                    | For internal calculations and to reduce the impact of rounding errors, the concept of Ray Math is used. A Ray is a unit with 27 decimals of precision. All the rates are expressed in Ray.                                                                                                     |
| Reward Token           | The AAVE token is the reward token accrued when a user stakes in the Safety Module.                                                                                                                                                                                                            |
| Safety Incentives      | Represents the part of the periodic issuance of AAVE used to incentivize users to stake AAVE in the Safety Module (SM).                                                                                                                                                                        |
| Safety Module          | A smart contract-based risk mitigation tool that is leveraged in the event of a shortfall event. This component is in charge of shielding the protocol from insolvency, protecting the liquidity providers from risks resulting in loss of funds, such as liquidation and smart contract risk. |
| Shortfall Event        | Event in the Aave Protocol causing a state of deficit for the liquidity providers.                                                                                                                                                                                                             |
| Stablecoin             | Digital currencies pegged to reserve assets as a stabilization mechanism to prevent fluctuations in value.                                                                                                                                                                                     |
| Staked Token           | The AAVE token is staked in the Safety Module, stkAAVE.                                                                                                                                                                                                                                        |
| stkAAVE                | Represents a tokenized share of the Safety Module. When a user stakes AAVE in the Safety Module, the user receives an                                                                                                                                                                          |