---
id: contracts-overview
title: GHO Contracts
---

## Deployments

- [Ethereum Mainnet](#ethereummainnet-gho-deployment)
- [Sepolia Testnet](#sepolia-deployment)
- [Goerli Launch Testnet (deprecated)](#goerli-gho-deployment)
- [Sepolia Launch Testnet (deprecated)](#sepolia-gho-deployment)

### Ethereum Mainnet Deployment {#goerli-gho-deployment}

Source code: <https://github.com/aave/gho-core/>

| Name                     | Address                                                                                                               |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------- |
| GhoOracle                | [0xD110cac5d8682A3b045D5524a9903E031d70FCCd](https://etherscan.io/address/0xD110cac5d8682A3b045D5524a9903E031d70FCCd) |
| GhoATokenImpl            | [0x2f32A274e02FA356423CE5e97a8e3155c1Ac396b](https://etherscan.io/address/0x2f32A274e02FA356423CE5e97a8e3155c1Ac396b) |
| GhoVariableDebtTokenImpl | [0x3FEaB6F8510C73E05b8C0Fdf96Df012E3A144319](https://etherscan.io/address/0x3FEaB6F8510C73E05b8C0Fdf96Df012E3A144319) |
| GhoStableDebtTokenImpl   | [0x05b435C741F5ab03C2E6735e23f1b7Fe01Cc6b22](https://etherscan.io/address/0x05b435C741F5ab03C2E6735e23f1b7Fe01Cc6b22) |
| GhoInterestRateStrategy  | [0x16E77D8a7192b65fEd49B3374417885Ff4421A74](https://etherscan.io/address/0x16E77D8a7192b65fEd49B3374417885Ff4421A74) |
| GhoDiscountRateStrategy  | [0x4C38Ec4D1D2068540DfC11DFa4de41F733DDF812](https://etherscan.io/address/0x4C38Ec4D1D2068540DfC11DFa4de41F733DDF812) |
| GhoToken                 | [0x40D16FC0246aD3160Ccc09B8D0D3A2cD28aE6C2f](https://etherscan.io/address/0x40D16FC0246aD3160Ccc09B8D0D3A2cD28aE6C2f) |
| GhoFlashMinter           | [0xb639D208Bcf0589D54FaC24E655C79EC529762B8](https://etherscan.io/address/0xb639D208Bcf0589D54FaC24E655C79EC529762B8) |
| Payload                  | [0x16765d275c00Caa7Ec9a30D1629fD42121c3ae6B](https://etherscan.io/address/0x16765d275c00Caa7Ec9a30D1629fD42121c3ae6B) |
| Create2Helper            | [0xeCEBeDBF26013Fb55A5b0a275191A90984E5Ae5e](https://etherscan.io/address/0xeCEBeDBF26013Fb55A5b0a275191A90984E5Ae5e) |
| UiGhoDataProvider        | [0x379c1EDD1A41218bdbFf960a9d5AD2818Bf61aE8](https://etherscan.io/address/0x379c1EDD1A41218bdbFf960a9d5AD2818Bf61aE8) |

:::info
Aave Protocol deployed contract addresses: See [here](https://docs.aave.com/developers/deployed-contracts/v3-mainnet/ethereum-mainnet)
:::

### Sepolia Testnet {#sepolia-deployment}

The maintained testnet deployment for GHO is the same Sepolia V3 market as the core Aave Protocol. A full list of addresses can be found [here](https://github.com/bgd-labs/aave-address-book/blob/main/src/AaveV3Sepolia.sol). This market can be accessed through [gho.aave.com](https://gho.aave.com) or [app.aave.com](https://app.aave.com) UIs.

| Contract                  | Address                                     |
| ------------------------- | ------------------------------------------- |
| GhoToken                  | 0xc4bF5CbDaBE595361438F8c6a187bDc330539c60  |
| GhoATokenImpl             | 0xD4BDb51fB96996CA24a5C49E7b57f94a1850Fa30` |
| GhoDiscountRateStrategy   | 0x19cdecE64EDE475ba0EB114ff4E319d64Ef8ECCf  |
| GhoInterestRateStrategy   | 0x521247B4d0a51E71DE580dA2cBF99EB40a44b3Bf  |
| GhoOracle                 | 0x00f7fecFAEbEd9499e1f3f9d04E755a21E5fc47C  |
| GhoStableDebtTokenImpl    | 0x2aa7819F2e88aF4cfF8FD0869ABdB97E336101Ee  |
| GhoVariableDebtTokenImpl  | 0xd4FEA5bD40cE7d0f7b269678541fF0a95FCb4b68  |
| GhoFlashMinter            | 0xB5d0ef1548D9C70d3E7a96cA67A2d7EbC5b1173E  |
| UiGhoDataProvider         | 0x69B9843A16a6E9933125EBD97659BA3CCbE2Ef8A  |
| GhoSteward                | 0x4bF0c2c74717a4e538cfe25DD389C21A139E0096  |
| StkAaveTokenV3Proxy       | 0x56033E114c61183590d39BA847400F02022Ebe47  |
| StkAaveTokenV3Impl        | 0xf556C102F47d806E21E8E78438E58ac06A14A29E  |
| GhoATokenProxy            | 0xd190eF37dB51Bb955A680fF1A85763CC72d083D4  |
| GhoStableDebtTokenProxy   | 0xdCA691FB9609aB814E59c62d70783da1c056A9b6  |
| GhoVariableDebtTokenProxy | 0x67ae46EF043F7A4508BD1d6B94DB6c33F0915844  |

### Goerli Launch Testnet (deprecated) {#goerli-gho-deployment}

Source code: https://github.com/aave/gho-core/pull/242/commits/c0999cb908d1037bb0515b88eb3cf15321cd3d60

| Name                                    | Address                                                                                                                      |
| :-------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------- |
| PoolAddressesProvider                   | [0x4dd5ab8Fb385F2e12aDe435ba7AFA812F1d364D0](https://goerli.etherscan.io/address/0x4dd5ab8Fb385F2e12aDe435ba7AFA812F1d364D0) |
| Pool-Proxy                              | [0x617Cf26407193E32a771264fB5e9b8f09715CdfB](https://goerli.etherscan.io/address/0x617Cf26407193E32a771264fB5e9b8f09715CdfB) |
| UiIncentiveDataProviderV3               | [0xF67B25977cEFf3563BF7F24A531D6CEAe6870a9d](https://goerli.etherscan.io/address/0xF67B25977cEFf3563BF7F24A531D6CEAe6870a9d) |
| UiPoolDataProviderV3                    | [0x3De59b6901e7Ad0A19621D49C5b52cC9a4977e52](https://goerli.etherscan.io/address/0x3De59b6901e7Ad0A19621D49C5b52cC9a4977e52) |
| ACLManager                              | [0x9C94757E231AdF6c90f89259DFA0841a1bf8172f](https://goerli.etherscan.io/address/0x9C94757E231AdF6c90f89259DFA0841a1bf8172f) |
| AaveOracle                              | [0xcb601629B36891c43943e3CDa2eB18FAc38B5c4e](https://goerli.etherscan.io/address/0xcb601629B36891c43943e3CDa2eB18FAc38B5c4e) |
| PoolConfigurator-Proxy                  | [0x04eA6B2a9E82Bd58bC95B8eA2b90496356dD969F](https://goerli.etherscan.io/address/0x04eA6B2a9E82Bd58bC95B8eA2b90496356dD969F) |
| PoolAddressesProviderRegistry           | [0x9B0FCD353468Eb9002bbF7cEA04e7EdA3AC188Ed](https://goerli.etherscan.io/address/0x9B0FCD353468Eb9002bbF7cEA04e7EdA3AC188Ed) |
| SupplyLogic                             | [0xae56b52ce982f6931783D35973EAb0cF71ee40a8](https://goerli.etherscan.io/address/0xae56b52ce982f6931783D35973EAb0cF71ee40a8) |
| BorrowLogic                             | [0xACf4be18be7D4eA90851f90A2816c2022bc5f9D0](https://goerli.etherscan.io/address/0xACf4be18be7D4eA90851f90A2816c2022bc5f9D0) |
| LiquidationLogic                        | [0xc428e1F850230a9F8B5f01301ea911c6df631ae1](https://goerli.etherscan.io/address/0xc428e1F850230a9F8B5f01301ea911c6df631ae1) |
| EModeLogic                              | [0xF7Ff469aAe15970f93e78Ec9e213e3b888B90179](https://goerli.etherscan.io/address/0xF7Ff469aAe15970f93e78Ec9e213e3b888B90179) |
| BridgeLogic                             | [0x7248a8Aaab397846CF6AA2B2E63CcdbBd771Bb06](https://goerli.etherscan.io/address/0x7248a8aaab397846cf6aa2b2e63ccdbbd771bb06) |
| ConfiguratorLogic                       | [0x16563750F712a218f8747Ae5681fD27f8665D645](https://goerli.etherscan.io/address/0x16563750F712a218f8747Ae5681fD27f8665D645) |
| FlashLoanLogic                          | [0xD290dDEf7D981d412DCBB56321FFD2a10aAb4A62](https://goerli.etherscan.io/address/0xD290dDEf7D981d412DCBB56321FFD2a10aAb4A62) |
| PoolLogic                               | [0x1687724da566D868D43a4163d741E156E74901DF](https://goerli.etherscan.io/address/0x1687724da566D868D43a4163d741E156E74901DF) |
| TreasuryProxy                           | [0x1A47958e231848C664863D213bC27b018934477D](https://goerli.etherscan.io/address/0x1A47958e231848C664863D213bC27b018934477D) |
| Treasury-Controller                     | [0x32ceB13aDe3D8B6951Fd00cE3cFaB6B7204B3d68](https://goerli.etherscan.io/address/0x32ceB13aDe3D8B6951Fd00cE3cFaB6B7204B3d68) |
| Treasury-Implementation                 | [0xbC3D79539C63E1372537527A3d882b2b81fD959c](https://goerli.etherscan.io/address/0xbC3D79539C63E1372537527A3d882b2b81fD959c) |
| Faucet                                  | [0x1265305F033156bbF8Ba54fE45DD5685BEc4Cc44](https://goerli.etherscan.io/address/0x1265305F033156bbF8Ba54fE45DD5685BEc4Cc44) |
| StakeAave-Proxy                         | [0xb85B34C58129a9a7d54149e86934ed3922b05592](https://goerli.etherscan.io/address/0xb85B34C58129a9a7d54149e86934ed3922b05592) |
| StakeAave-REV-1-Implementation          | [0x5A64c27c6d80eDC04DDCd47535E3aAfd37710f4F](https://goerli.etherscan.io/address/0x5A64c27c6d80eDC04DDCd47535E3aAfd37710f4F) |
| StakeAave-REV-2-Implementation          | [0xc6Bd39c5Eb353723Bbbd53ffAB47e75EE20fc197](https://goerli.etherscan.io/address/0xc6Bd39c5Eb353723Bbbd53ffAB47e75EE20fc197) |
| StakeAave-REV-3-Implementation          | [0xFD75CDBac86e3Da29fD9f0b3b0ED1A1eF347Dc49](https://goerli.etherscan.io/address/0xFD75CDBac86e3Da29fD9f0b3b0ED1A1eF347Dc49) |
| PoolDataProvider                        | [0xB7d8ff9949dB06D8387C28332045b8F734641755](https://goerli.etherscan.io/address/0xB7d8ff9949dB06D8387C28332045b8F734641755) |
| AAVE-TestnetPriceAggregator             | [0xFAa450873a4b162D32f545a85e678C13Ca8d4Ae9](https://goerli.etherscan.io/address/0xFAa450873a4b162D32f545a85e678C13Ca8d4Ae9) |
| DAI-TestnetPriceAggregator              | [0x3D9069811D8ABFaFBf16Fa07FC875E39D4dd29DA](https://goerli.etherscan.io/address/0x3D9069811D8ABFaFBf16Fa07FC875E39D4dd29DA) |
| USDC-TestnetPriceAggregator             | [0xb56b714beF6892Bb4b1C342557bb6a1dD3Cb8cb7](https://goerli.etherscan.io/address/0xb56b714beF6892Bb4b1C342557bb6a1dD3Cb8cb7) |
| WETH-TestnetPriceAggregator             | [0xD54126c116372F2D524eCfc8831E936C999a894B](https://goerli.etherscan.io/address/0xD54126c116372F2D524eCfc8831E936C999a894B) |
| LINK-TestnetPriceAggregator             | [0x1445d6061cd1Bf04b8301292f25E1D7d027CdE04](https://goerli.etherscan.io/address/0x1445d6061cd1Bf04b8301292f25E1D7d027CdE04) |
| Pool-Implementation                     | [0x02947bD4aDc7F0f8a162B04c39D6965b1CD8c19C](https://goerli.etherscan.io/address/0x02947bD4aDc7F0f8a162B04c39D6965b1CD8c19C) |
| PoolConfigurator-Implementation         | [0xfbCAdF5e18D0CdF16Da9B5C5056Ba67Dfa625Ad8](https://goerli.etherscan.io/address/0xfbCAdF5e18D0CdF16Da9B5C5056Ba67Dfa625Ad8) |
| ReservesSetupHelper                     | [0x969d947289840d6284E1D2EFBB27Ae0920A7D53f](https://goerli.etherscan.io/address/0x969d947289840d6284E1D2EFBB27Ae0920A7D53f) |
| EmissionManager                         | [0xC9f3b10c05a3e2a49F8165AC29b9275f85DE06cD](https://goerli.etherscan.io/address/0xC9f3b10c05a3e2a49F8165AC29b9275f85DE06cD) |
| IncentivesV2-Implementation             | [0xC1Ae238718a07CB8905E16bFbc8DCe5E52CebE35](https://goerli.etherscan.io/address/0xC1Ae238718a07CB8905E16bFbc8DCe5E52CebE35) |
| IncentivesProxy                         | [0x8688FEF353f4940061b4893d563de1C487Aa92Fd](https://goerli.etherscan.io/address/0x8688FEF353f4940061b4893d563de1C487Aa92Fd) |
| PullRewardsTransferStrategy             | [0x1bEBa913DCD423f71A9c964A35f39E46661E90f0](https://goerli.etherscan.io/address/0x1bEBa913DCD423f71A9c964A35f39E46661E90f0) |
| StakedTokenTransferStrategy             | [0x1A34998D0cC925709d60A36A95d0fD774688cE74](https://goerli.etherscan.io/address/0x1A34998D0cC925709d60A36A95d0fD774688cE74) |
| AToken                                  | [0x877880d5E01b483add2f3223B709a26b622F0852](https://goerli.etherscan.io/address/0x877880d5E01b483add2f3223B709a26b622F0852) |
| DelegationAwareAToken                   | [0x54472E4e254dc12d15e0862eaaafd3C828F375E9](https://goerli.etherscan.io/address/0x54472E4e254dc12d15e0862eaaafd3C828F375E9) |
| StableDebtToken                         | [0xEe27a567B18ef957dd2BFBE027F09Ea3ecC35722](https://goerli.etherscan.io/address/0xEe27a567B18ef957dd2BFBE027F09Ea3ecC35722) |
| VariableDebtToken                       | [0x80aa933EfF12213022Fd3d17c2c59C066cBb91c7](https://goerli.etherscan.io/address/0x80aa933EfF12213022Fd3d17c2c59C066cBb91c7) |
| ReserveStrategy-rateStrategyVolatileOne | [0x13Bdaf61b68b917114D4A356c2098D703D4C4aB7](https://goerli.etherscan.io/address/0x13Bdaf61b68b917114D4A356c2098D703D4C4aB7) |
| ReserveStrategy-rateStrategyStableOne   | [0xD740CB1d7c48795E32AcbA5c6A6b6E9ACBdD33F0](https://goerli.etherscan.io/address/0xD740CB1d7c48795E32AcbA5c6A6b6E9ACBdD33F0) |
| ReserveStrategy-rateStrategyStableTwo   | [0x4218E9D70F2fc2C44745E33DbfA7f7E90b19C783](https://goerli.etherscan.io/address/0x4218E9D70F2fc2C44745E33DbfA7f7E90b19C783) |
| AAVE-AToken                             | [0xAC4D92980562Ac11Af46C6C7CEdD7C819C2028D0](https://goerli.etherscan.io/address/0xAC4D92980562Ac11Af46C6C7CEdD7C819C2028D0) |
| AAVE-VariableDebtToken                  | [0xCB62E1d181179d1D86D3877e221D1EdE0bDD8841](https://goerli.etherscan.io/address/0xCB62E1d181179d1D86D3877e221D1EdE0bDD8841) |
| AAVE-StableDebtToken                    | [0x1721dDa383B02ec058Ee7B47596F61246eAD0069](https://goerli.etherscan.io/address/0x1721dDa383B02ec058Ee7B47596F61246eAD0069) |
| DAI-AToken                              | [0x7402b9625D1712426807952b798e3180dC38876F](https://goerli.etherscan.io/address/0x7402b9625D1712426807952b798e3180dC38876F) |
| DAI-VariableDebtToken                   | [0x76f5D888234e88599c12D46A2a55Fece923cf48c](https://goerli.etherscan.io/address/0x76f5D888234e88599c12D46A2a55Fece923cf48c) |
| DAI-StableDebtToken                     | [0x00b5314dcDA79F235a9EDE5dA53e63A9747c3f22](https://goerli.etherscan.io/address/0x00b5314dcDA79F235a9EDE5dA53e63A9747c3f22) |
| USDC-AToken                             | [0xdC916609281306558E0e8245bFBf90EFd3eCAb96](https://goerli.etherscan.io/address/0xdC916609281306558E0e8245bFBf90EFd3eCAb96) |
| USDC-VariableDebtToken                  | [0x908636F60d276a3b30C13F300065E1Cf43bf49cf](https://goerli.etherscan.io/address/0x908636F60d276a3b30C13F300065E1Cf43bf49cf) |
| USDC-StableDebtToken                    | [0x8117853a7Ecf500b27f5e5901c326B3840E58784](https://goerli.etherscan.io/address/0x8117853a7Ecf500b27f5e5901c326B3840E58784) |
| WETH-AToken                             | [0x49871B521E44cb4a34b2bF2cbCF03C1CF895C48b](https://goerli.etherscan.io/address/0x49871B521E44cb4a34b2bF2cbCF03C1CF895C48b) |
| WETH-VariableDebtToken                  | [0x86065184932b2e2E7bC2BC953Cd3d131d2497cDe](https://goerli.etherscan.io/address/0x86065184932b2e2E7bC2BC953Cd3d131d2497cDe) |
| WETH-StableDebtToken                    | [0xCEa68d3acD31b0d9d5E52f15Ce2662592C24aFc9](https://goerli.etherscan.io/address/0xCEa68d3acD31b0d9d5E52f15Ce2662592C24aFc9) |
| LINK-AToken                             | [0x601c61Fc4eEe64a4b1f5201125b788dc1585746b](https://goerli.etherscan.io/address/0x601c61Fc4eEe64a4b1f5201125b788dc1585746b) |
| LINK-VariableDebtToken                  | [0x91eFc3Ff5fBD2f9b2aE8880Bb1d52Db3e01A261d](https://goerli.etherscan.io/address/0x91eFc3Ff5fBD2f9b2aE8880Bb1d52Db3e01A261d) |
| LINK-StableDebtToken                    | [0x98413Db84158e6f4dEaa0F4d098240a7FdfA7060](https://goerli.etherscan.io/address/0x98413Db84158e6f4dEaa0F4d098240a7FdfA7060) |
| MockFlashLoanReceiver                   | [0x79A9D8009eFa62AE3C885aaD2a382c85FD90f87a](https://goerli.etherscan.io/address/0x79A9D8009eFa62AE3C885aaD2a382c85FD90f87a) |
| WrappedTokenGatewayV3                   | [0x9c402E3b0D123323F0FCed781b8184Ec7E02Dd31](https://goerli.etherscan.io/address/0x9c402E3b0D123323F0FCed781b8184Ec7E02Dd31) |
| WalletBalanceProvider                   | [0x03C8d0c46834921c4468C15A03E5d76Ae5CA3133](https://goerli.etherscan.io/address/0x03C8d0c46834921c4468C15A03E5d76Ae5CA3133) |
| UiIncentiveDataProviderV3               | [0xF67B25977cEFf3563BF7F24A531D6CEAe6870a9d](https://goerli.etherscan.io/address/0xF67B25977cEFf3563BF7F24A531D6CEAe6870a9d) |
| UiPoolDataProviderV3                    | [0x3De59b6901e7Ad0A19621D49C5b52cC9a4977e52](https://goerli.etherscan.io/address/0x3De59b6901e7Ad0A19621D49C5b52cC9a4977e52) |
| GhoToken                                | [0xcbE9771eD31e761b744D3cB9eF78A1f32DD99211](https://goerli.etherscan.io/address/0xcbE9771eD31e761b744D3cB9eF78A1f32DD99211) |
| GhoOracle                               | [0xDD714B0A68b9c81C6878688c5dc6238f8AC8eadD](https://goerli.etherscan.io/address/0xDD714B0A68b9c81C6878688c5dc6238f8AC8eadD) |
| UiGhoDataProvider                       | [0xeb939bA0D4CFA94a401569dD1056161ed2b49798](https://goerli.etherscan.io/address/0xeb939bA0D4CFA94a401569dD1056161ed2b49798) |
| GhoAToken                               | [0xdC25729a09241d24c4228f1a0C27137770cF363e](https://goerli.etherscan.io/address/0xdC25729a09241d24c4228f1a0C27137770cF363e) |
| StableDebtToken                         | [0x4461AC7d40EFBE8c9E37cC341dA380c57a9B2B78](https://goerli.etherscan.io/address/0x4461AC7d40EFBE8c9E37cC341dA380c57a9B2B78) |
| GhoVariableDebtToken                    | [0x7caBc754a0f1187b1A60BC9375508e07b362bDad](https://goerli.etherscan.io/address/0x7caBc754a0f1187b1A60BC9375508e07b362bDad) |
| GhoInterestRateStrategy                 | [0xF13b45F8FfF9342DC2b9EaD0D8442138ab8FA401](https://goerli.etherscan.io/address/0xF13b45F8FfF9342DC2b9EaD0D8442138ab8FA401) |
| GhoDiscountRateStrategy                 | [0xB82a29C9a83C52AbBc61327296B4Bb4Fa52050dA](https://goerli.etherscan.io/address/0xB82a29C9a83C52AbBc61327296B4Bb4Fa52050dA) |
| StakedTokenV2Rev4Impl                   | [0x324E0714991286d096723F2f24Ad20AAd3b5563A](https://goerli.etherscan.io/address/0x324E0714991286d096723F2f24Ad20AAd3b5563A) |
| GhoFlashMinter                          | [0x0cBf106fD14D1dFb320e7bfaA466FDCEC6471d46](https://goerli.etherscan.io/address/0x0cBf106fD14D1dFb320e7bfaA466FDCEC6471d46) |
| AaveStakingHelper                       | [0xe914d574975a1cd273388035db4413dda788c0e5](https://goerli.etherscan.io/address/0xe914d574975a1cd273388035db4413dda788c0e5) |
| StakeUIHelper                           | [0x02119C949D827ca1FaFFDb17B14E6A9dEE04f410](https://goerli.etherscan.io/address/0x02119C949D827ca1FaFFDb17B14E6A9dEE04f410) |

<br />

Goerli GHO Market Reserves

| Token                     | Address                                                                                                                      |
| :------------------------ | :--------------------------------------------------------------------------------------------------------------------------- |
| AAVE-TestnetMintableERC20 | [0xE205181Eb3D7415f15377F79aA7769F846cE56DD](https://goerli.etherscan.io/address/0xE205181Eb3D7415f15377F79aA7769F846cE56DD) |
| DAI-TestnetMintableERC20  | [0xD77b79BE3e85351fF0cbe78f1B58cf8d1064047C](https://goerli.etherscan.io/address/0xD77b79BE3e85351fF0cbe78f1B58cf8d1064047C) |
| USDC-TestnetMintableERC20 | [0x69305b943C6F55743b2Ece5c0b20507300a39FC3](https://goerli.etherscan.io/address/0x69305b943C6F55743b2Ece5c0b20507300a39FC3) |
| WETH-TestnetMintableERC20 | [0x84ced17d95F3EC7230bAf4a369F1e624Ae60090d](https://goerli.etherscan.io/address/0x84ced17d95F3EC7230bAf4a369F1e624Ae60090d) |
| LINK-TestnetMintableERC20 | [0x2166903C38B4883B855eA2C77A02430a27Cdfede](https://goerli.etherscan.io/address/0x2166903C38B4883B855eA2C77A02430a27Cdfede) |
| GhoToken                  | [0xcbE9771eD31e761b744D3cB9eF78A1f32DD99211](https://goerli.etherscan.io/address/0xcbE9771eD31e761b744D3cB9eF78A1f32DD99211) |

<br />

### Sepolia Launch Testnet (deprecated) {#sepolia-gho-deployment}

Version: https://github.com/aave/gho-core/pull/242/commits/c0999cb908d1037bb0515b88eb3cf15321cd3d60

| Name                                    | Address                                                                                                                       |
| :-------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------- |
| PoolAddressesProvider                   | [0x6861730cFf157d3Ef3Fe987f526Ec5e1235B2f45](https://sepolia.etherscan.io/address/0x6861730cFf157d3Ef3Fe987f526Ec5e1235B2f45) |
| Pool-Proxy                              | [0xFF634a7b623E7e7ED49Cd6e9110b9F49b7Ef0Ec4](https://sepolia.etherscan.io/address/0xFF634a7b623E7e7ED49Cd6e9110b9F49b7Ef0Ec4) |
| UiPoolDataProviderV3                    | [0x25c682B532CFFDe7E2E657a4Dc9A277d87b5788C](https://sepolia.etherscan.io/address/0x25c682B532CFFDe7E2E657a4Dc9A277d87b5788C) |
| UiIncentiveDataProviderV3               | [0xA5c352032806D3F5935eEA7b67Dfe97eCfB0d7Cc](https://sepolia.etherscan.io/address/0xA5c352032806D3F5935eEA7b67Dfe97eCfB0d7Cc) |
| ACLManager                              | [0xBb3919fcF5338f338a0E900F121dbF7f70e1FbB6](https://sepolia.etherscan.io/address/0xBb3919fcF5338f338a0E900F121dbF7f70e1FbB6) |
| AaveOracle                              | [0xE952Af00cd4Bf5417bE2b590A313D02C4c35361c](https://sepolia.etherscan.io/address/0xE952Af00cd4Bf5417bE2b590A313D02C4c35361c) |
| PoolConfigurator-Proxy                  | [0x5f7808221c2CbBca65a3581b9509CFc279789FB2](https://sepolia.etherscan.io/address/0x5f7808221c2CbBca65a3581b9509CFc279789FB2) |
| BorrowLogic                             | [0x15405D8afA05f74b4a48FE15f876445958003264](https://sepolia.etherscan.io/address/0x15405D8afA05f74b4a48FE15f876445958003264) |
| BridgeLogic                             | [0x42EEAe12e924F4BEDA8d921F53488Cb232C5f853](https://sepolia.etherscan.io/address/0x42EEAe12e924F4BEDA8d921F53488Cb232C5f853) |
| ConfiguratorLogic                       | [0x9E35AF5E2aF6d4AAB8Ad4E1E0eD983A3E9291414](https://sepolia.etherscan.io/address/0x9E35AF5E2aF6d4AAB8Ad4E1E0eD983A3E9291414) |
| EModeLogic                              | [0x8a88Bb514FFC90C760A20b354A26468CBEC148e6](https://sepolia.etherscan.io/address/0x8a88Bb514FFC90C760A20b354A26468CBEC148e6) |
| FlashLoanLogic                          | [0xAf900986fA43c37a38325DfEDb7e8414c011E149](https://sepolia.etherscan.io/address/0xAf900986fA43c37a38325DfEDb7e8414c011E149) |
| LiquidationLogic                        | [0x8B7867d5bEd71BBD1852Ed5E6E49ebA03C0b02B2](https://sepolia.etherscan.io/address/0x8B7867d5bEd71BBD1852Ed5E6E49ebA03C0b02B2) |
| PoolAddressesProviderRegistry           | [0x7fBd08323FF00E3Ca2dD4EaeABa22C56C1fC17FC](https://sepolia.etherscan.io/address/0x7fBd08323FF00E3Ca2dD4EaeABa22C56C1fC17FC) |
| PoolLogic                               | [0x06797Ea3A61A832A88bB850D177833560bec922a](https://sepolia.etherscan.io/address/0x06797Ea3A61A832A88bB850D177833560bec922a) |
| StakeAave-Proxy                         | [0x47805f115eD9Dffc3506c9cB9805725FAe1cA9d3](https://sepolia.etherscan.io/address/0x47805f115eD9Dffc3506c9cB9805725FAe1cA9d3) |
| StakeAave-REV-1-Implementation          | [0x92D7540913a5F7DEa4E7a8F91dcCB6be39FC1aa9](https://sepolia.etherscan.io/address/0x92D7540913a5F7DEa4E7a8F91dcCB6be39FC1aa9) |
| StakeAave-REV-2-Implementation          | [0x8D613f634A8B198b8595998D33f28A94A8eBF3b2](https://sepolia.etherscan.io/address/0x8D613f634A8B198b8595998D33f28A94A8eBF3b2) |
| StakeAave-REV-3-Implementation          | [0x6BaA06079c274e28eee6ed635216663Bd72244F9](https://sepolia.etherscan.io/address/0x6BaA06079c274e28eee6ed635216663Bd72244F9) |
| SupplyLogic                             | [0xa157BF72450C55780Be145250B6b442d5B04cAcB](https://sepolia.etherscan.io/address/0xa157BF72450C55780Be145250B6b442d5B04cAcB) |
| Treasury-Controller                     | [0x4a3Bddb67ef9B9ddc8C96A5b3BdEf57d8E3d9abc](https://sepolia.etherscan.io/address/0x4a3Bddb67ef9B9ddc8C96A5b3BdEf57d8E3d9abc) |
| Treasury-Implementation                 | [0xd5a85B41848ebE7267A79b6A7Bd1a46628E80256](https://sepolia.etherscan.io/address/0xd5a85B41848ebE7267A79b6A7Bd1a46628E80256) |
| TreasuryProxy                           | [0x7A5364dc658a8B5920E07F4DDb54A6F128707409](https://sepolia.etherscan.io/address/0x7A5364dc658a8B5920E07F4DDb54A6F128707409) |
| Pool-Implementation                     | [0xf13da2ACbbc3bC9d517e5321Bd7C34CC72f0DE03](https://sepolia.etherscan.io/address/0xf13da2ACbbc3bC9d517e5321Bd7C34CC72f0DE03) |
| PoolConfigurator-Implementation         | [0x68628ddcdA6865627F41116ee28BD14AC3179f2B](https://sepolia.etherscan.io/address/0x68628ddcdA6865627F41116ee28BD14AC3179f2B) |
| ReservesSetupHelper                     | [0x2d09b7Faa27D10974f0c078EFa04087A1748A7B6](https://sepolia.etherscan.io/address/0x2d09b7Faa27D10974f0c078EFa04087A1748A7B6) |
| EmissionManager                         | [0xC9A008AaAaE5B8459E6f4D95B183de06e56459E0](https://sepolia.etherscan.io/address/0xC9A008AaAaE5B8459E6f4D95B183de06e56459E0) |
| IncentivesV2-Implementation             | [0xCf6f5277793eCB8ce4DE29F5117F572042a46348](https://sepolia.etherscan.io/address/0xCf6f5277793eCB8ce4DE29F5117F572042a46348) |
| IncentivesProxy                         | [0x15b0e99DB5cB98b35919DC8866F62adaA12aBB36](https://sepolia.etherscan.io/address/0x15b0e99DB5cB98b35919DC8866F62adaA12aBB36) |
| PullRewardsTransferStrategy             | [0x87F2fF7b4e37d42C70ed6eE4B7a9361f5810b003](https://sepolia.etherscan.io/address/0x87F2fF7b4e37d42C70ed6eE4B7a9361f5810b003) |
| Faucet                                  | [0xc1bFB9323bF7d2aE66e064A4d46FDD21e65464f3](https://sepolia.etherscan.io/address/0xc1bFB9323bF7d2aE66e064A4d46FDD21e65464f3) |
| StakedTokenTransferStrategy             | [0x8B3F24585021f28305b4D336C0C5432dcCa73D0D](https://sepolia.etherscan.io/address/0x8B3F24585021f28305b4D336C0C5432dcCa73D0D) |
| DelegationAwareAToken-Test              | [0x417B33a245fBcDE502007A26B944656776a3f430](https://sepolia.etherscan.io/address/0x417B33a245fBcDE502007A26B944656776a3f430) |
| ReserveStrategy-rateStrategyVolatileOne | [0xD2f5403725ba2c3300E1D0fD8D1B055540efC757](https://sepolia.etherscan.io/address/0xD2f5403725ba2c3300E1D0fD8D1B055540efC757) |
| ReserveStrategy-rateStrategyStableOne   | [0x78612Fcb888B195ABfc83a18a8dFFF8058960151](https://sepolia.etherscan.io/address/0x78612Fcb888B195ABfc83a18a8dFFF8058960151) |
| ReserveStrategy-rateStrategyStableTwo   | [0x56e32355b43926b4237FDDBE856183c44A8B93f3](https://sepolia.etherscan.io/address/0x56e32355b43926b4237FDDBE856183c44A8B93f3) |
| MockFlashLoanReceiver                   | [0x81E42Fa50636c405f9cea58bEd927031c7091EdE](https://sepolia.etherscan.io/address/0x81E42Fa50636c405f9cea58bEd927031c7091EdE) |
| WrappedTokenGatewayV3                   | [0xd45a6502E4d3e9e66829Bb07a4eB4f662873417b](https://sepolia.etherscan.io/address/0xd45a6502E4d3e9e66829Bb07a4eB4f662873417b) |
| WalletBalanceProvider                   | [0x894ef447CF3C97F267999244B1D130Bd746153E6](https://sepolia.etherscan.io/address/0x894ef447CF3C97F267999244B1D130Bd746153E6) |
| GhoToken                                | [0x5d00fab5f2F97C4D682C1053cDCAA59c2c37900D](https://sepolia.etherscan.io/address/0x5d00fab5f2F97C4D682C1053cDCAA59c2c37900D) |
| GhoOracle                               | [0xE6bD2F379D8C45DA43acc12d9fCCE7A70f02A480](https://sepolia.etherscan.io/address/0xE6bD2F379D8C45DA43acc12d9fCCE7A70f02A480) |
| GhoAToken                               | [0x204dC7Fa1040BD2106527753C3f2b9eE4c8c2e61](https://sepolia.etherscan.io/address/0x204dC7Fa1040BD2106527753C3f2b9eE4c8c2e61) |
| StableDebtToken                         | [0x1200b3265edEf57CA80f3e917BadEDe6e133159F](https://sepolia.etherscan.io/address/0x1200b3265edEf57CA80f3e917BadEDe6e133159F) |
| GhoVariableDebtToken                    | [0x2f7E653ff781d086C3BEcfb1Ca4381Ae22bECD03](https://sepolia.etherscan.io/address/0x2f7E653ff781d086C3BEcfb1Ca4381Ae22bECD03) |
| GhoInterestRateStrategy                 | [0xc7fb35995C25292A3764a19FF5B97fCd3310Fe3d](https://sepolia.etherscan.io/address/0xc7fb35995C25292A3764a19FF5B97fCd3310Fe3d) |
| GhoDiscountRateStrategy                 | [0xb6EEaFb1aDe5E47F8b411c6E386E2613c46D7121](https://sepolia.etherscan.io/address/0xb6EEaFb1aDe5E47F8b411c6E386E2613c46D7121) |
| StakedTokenV2Rev4Impl                   | [0x6005b38F31FB19a63Ea991e610D0b0b905567FA7](https://sepolia.etherscan.io/address/0x6005b38F31FB19a63Ea991e610D0b0b905567FA7) |
| GhoFlashMinter                          | [0x9664803466436AD9364CB897183B3b6D5ac4DDE7](https://sepolia.etherscan.io/address/0x9664803466436AD9364CB897183B3b6D5ac4DDE7) |
| UiGhoDataProvider                       | [0xCC3B9A84d5AbC04fb73B2a8Fa67Be4335d55D594](https://sepolia.etherscan.io/address/0xCC3B9A84d5AbC04fb73B2a8Fa67Be4335d55D594) |
| GhoManager                              | [0x4D485AcC40DB1152DF3E49dd553eeCc88a44abE7](https://sepolia.etherscan.io/address/0x4D485AcC40DB1152DF3E49dd553eeCc88a44abE7) |
| AaveStakingHelper                       | [0xbd885E8EfaE50CBfD43AC7155d8E0b5276aeB8ac](https://sepolia.etherscan.io/address/0xbd885E8EfaE50CBfD43AC7155d8E0b5276aeB8ac) |
| StakeUIHelper                           | [0x8a1c29681c0b01d09ed5487418A812C7b6924BBf](https://sepolia.etherscan.io/address/0x8a1c29681c0b01d09ed5487418A812C7b6924BBf) |

<br />

GHO Sepolia Market Reserves

| Name                      | Address                                                                                                                       |
| :------------------------ | :---------------------------------------------------------------------------------------------------------------------------- |
| AAVE-TestnetMintableERC20 | [0xf9aBBc6E64f3Cb3cb237EbcAB95A252365BBd0D0](https://sepolia.etherscan.io/address/0xf9aBBc6E64f3Cb3cb237EbcAB95A252365BBd0D0) |
| DAI-TestnetMintableERC20  | [0xe5118E47e061ab15Ca972D045b35193F673bcc36](https://sepolia.etherscan.io/address/0xe5118E47e061ab15Ca972D045b35193F673bcc36) |
| LINK-TestnetMintableERC20 | [0xe97aacf2F1248484003d3208CF4060ec262c6b03](https://sepolia.etherscan.io/address/0xe97aacf2F1248484003d3208CF4060ec262c6b03) |
| USDC-TestnetMintableERC20 | [0xEbCC972B6B3eB15C0592BE1871838963d0B94278](https://sepolia.etherscan.io/address/0xEbCC972B6B3eB15C0592BE1871838963d0B94278) |
| WETH-TestnetMintableERC20 | [0xA1A245cc76414DC143687D9c3DE1152396f352D6](https://sepolia.etherscan.io/address/0xA1A245cc76414DC143687D9c3DE1152396f352D6) |
| GhoToken                  | [0x5d00fab5f2F97C4D682C1053cDCAA59c2c37900D](https://sepolia.etherscan.io/address/0x5d00fab5f2F97C4D682C1053cDCAA59c2c37900D) |
