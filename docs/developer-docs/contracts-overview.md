---
id: contracts-overview
title: Deployed GHO Contracts
---

<details>
    <summary>Goerli Deployment</summary>
    - **Purpose:** GHO Community testnet
- **Version:** https://github.com/aave/gho/pull/242/commits/c0999cb908d1037bb0515b88eb3cf15321cd3d60

## Addresses

```jsx
Accounts after deployment
========
┌─────────┬──────────────────────────────────┬──────────────────────────────────────────────┬────────────────────────┐
│ (index) │               name               │                   account                    │        balance         │
├─────────┼──────────────────────────────────┼──────────────────────────────────────────────┼────────────────────────┤
│    0    │            'deployer'            │ '0x2892e37624Ec31CC42502f297821109700270971' │ '1.861302195616845423' │
│    1    │            'aclAdmin'            │ '0x2892e37624Ec31CC42502f297821109700270971' │ '1.861302195616845423' │
│    2    │         'emergencyAdmin'         │ '0x2892e37624Ec31CC42502f297821109700270971' │ '1.861302195616845423' │
│    3    │           'poolAdmin'            │ '0x2892e37624Ec31CC42502f297821109700270971' │ '1.861302195616845423' │
│    4    │ 'addressesProviderRegistryOwner' │ '0x2892e37624Ec31CC42502f297821109700270971' │ '1.861302195616845423' │
│    5    │       'treasuryProxyAdmin'       │ '0xBB2dcd4EB3cAb01656cEb5340B1A55bc25b46364' │ '0.049895229958848198' │
│    6    │      'incentivesProxyAdmin'      │ '0xBB2dcd4EB3cAb01656cEb5340B1A55bc25b46364' │ '0.049895229958848198' │
│    7    │   'incentivesEmissionManager'    │ '0x2892e37624Ec31CC42502f297821109700270971' │ '1.861302195616845423' │
│    8    │     'incentivesRewardsVault'     │ '0x2892e37624Ec31CC42502f297821109700270971' │ '1.861302195616845423' │
└─────────┴──────────────────────────────────┴──────────────────────────────────────────────┴────────────────────────┘

Deployments
===========
┌─────────────────────────────────────────┬──────────────────────────────────────────────┐
│                 (index)                 │                   address                    │
├─────────────────────────────────────────┼──────────────────────────────────────────────┤
│      PoolAddressesProviderRegistry      │ '0x9B0FCD353468Eb9002bbF7cEA04e7EdA3AC188Ed' │
│               SupplyLogic               │ '0xae56b52ce982f6931783D35973EAb0cF71ee40a8' │
│               BorrowLogic               │ '0xACf4be18be7D4eA90851f90A2816c2022bc5f9D0' │
│            LiquidationLogic             │ '0xc428e1F850230a9F8B5f01301ea911c6df631ae1' │
│               EModeLogic                │ '0xF7Ff469aAe15970f93e78Ec9e213e3b888B90179' │
│               BridgeLogic               │ '0x7248a8Aaab397846CF6AA2B2E63CcdbBd771Bb06' │
│            ConfiguratorLogic            │ '0x16563750F712a218f8747Ae5681fD27f8665D645' │
│             FlashLoanLogic              │ '0xD290dDEf7D981d412DCBB56321FFD2a10aAb4A62' │
│                PoolLogic                │ '0x1687724da566D868D43a4163d741E156E74901DF' │
│              TreasuryProxy              │ '0x1A47958e231848C664863D213bC27b018934477D' │
│           Treasury-Controller           │ '0x32ceB13aDe3D8B6951Fd00cE3cFaB6B7204B3d68' │
│         Treasury-Implementation         │ '0xbC3D79539C63E1372537527A3d882b2b81fD959c' │
│               Faucet-Test               │ '0x1265305F033156bbF8Ba54fE45DD5685BEc4Cc44' │
│             StakeAave-Proxy             │ '0xb85B34C58129a9a7d54149e86934ed3922b05592' │
│     StakeAave-REV-1-Implementation      │ '0x5A64c27c6d80eDC04DDCd47535E3aAfd37710f4F' │
│     StakeAave-REV-2-Implementation      │ '0xc6Bd39c5Eb353723Bbbd53ffAB47e75EE20fc197' │
│     StakeAave-REV-3-Implementation      │ '0xFD75CDBac86e3Da29fD9f0b3b0ED1A1eF347Dc49' │
│       PoolAddressesProvider-Test        │ '0x4dd5ab8Fb385F2e12aDe435ba7AFA812F1d364D0' │
│          PoolDataProvider-Test          │ '0xB7d8ff9949dB06D8387C28332045b8F734641755' │
│    AAVE-TestnetPriceAggregator-Test     │ '0xFAa450873a4b162D32f545a85e678C13Ca8d4Ae9' │
│     DAI-TestnetPriceAggregator-Test     │ '0x3D9069811D8ABFaFBf16Fa07FC875E39D4dd29DA' │
│    USDC-TestnetPriceAggregator-Test     │ '0xb56b714beF6892Bb4b1C342557bb6a1dD3Cb8cb7' │
│    WETH-TestnetPriceAggregator-Test     │ '0xD54126c116372F2D524eCfc8831E936C999a894B' │
│    LINK-TestnetPriceAggregator-Test     │ '0x1445d6061cd1Bf04b8301292f25E1D7d027CdE04' │
│           Pool-Implementation           │ '0x02947bD4aDc7F0f8a162B04c39D6965b1CD8c19C' │
│     PoolConfigurator-Implementation     │ '0xfbCAdF5e18D0CdF16Da9B5C5056Ba67Dfa625Ad8' │
│           ReservesSetupHelper           │ '0x969d947289840d6284E1D2EFBB27Ae0920A7D53f' │
│             ACLManager-Test             │ '0x9C94757E231AdF6c90f89259DFA0841a1bf8172f' │
│             AaveOracle-Test             │ '0xcb601629B36891c43943e3CDa2eB18FAc38B5c4e' │
│             Pool-Proxy-Test             │ '0x617Cf26407193E32a771264fB5e9b8f09715CdfB' │
│       PoolConfigurator-Proxy-Test       │ '0x04eA6B2a9E82Bd58bC95B8eA2b90496356dD969F' │
│             EmissionManager             │ '0xC9f3b10c05a3e2a49F8165AC29b9275f85DE06cD' │
│       IncentivesV2-Implementation       │ '0xC1Ae238718a07CB8905E16bFbc8DCe5E52CebE35' │
│             IncentivesProxy             │ '0x8688FEF353f4940061b4893d563de1C487Aa92Fd' │
│       PullRewardsTransferStrategy       │ '0x1bEBa913DCD423f71A9c964A35f39E46661E90f0' │
│       StakedTokenTransferStrategy       │ '0x1A34998D0cC925709d60A36A95d0fD774688cE74' │
│               AToken-Test               │ '0x877880d5E01b483add2f3223B709a26b622F0852' │
│       DelegationAwareAToken-Test        │ '0x54472E4e254dc12d15e0862eaaafd3C828F375E9' │
│          StableDebtToken-Test           │ '0xAc08Af18C2E9b7B62facacd048d2F89a25024474' │
│         VariableDebtToken-Test          │ '0x46Dbc9aeF756a594a61fcbB35902F24103044cBf' │
│ ReserveStrategy-rateStrategyVolatileOne │ '0x13Bdaf61b68b917114D4A356c2098D703D4C4aB7' │
│  ReserveStrategy-rateStrategyStableOne  │ '0xD740CB1d7c48795E32AcbA5c6A6b6E9ACBdD33F0' │
│  ReserveStrategy-rateStrategyStableTwo  │ '0x4218E9D70F2fc2C44745E33DbfA7f7E90b19C783' │
│            AAVE-AToken-Test             │ '0xAC4D92980562Ac11Af46C6C7CEdD7C819C2028D0' │
│       AAVE-VariableDebtToken-Test       │ '0xCB62E1d181179d1D86D3877e221D1EdE0bDD8841' │
│        AAVE-StableDebtToken-Test        │ '0x1721dDa383B02ec058Ee7B47596F61246eAD0069' │
│             DAI-AToken-Test             │ '0x7402b9625D1712426807952b798e3180dC38876F' │
│       DAI-VariableDebtToken-Test        │ '0x76f5D888234e88599c12D46A2a55Fece923cf48c' │
│        DAI-StableDebtToken-Test         │ '0x00b5314dcDA79F235a9EDE5dA53e63A9747c3f22' │
│            USDC-AToken-Test             │ '0xdC916609281306558E0e8245bFBf90EFd3eCAb96' │
│       USDC-VariableDebtToken-Test       │ '0x908636F60d276a3b30C13F300065E1Cf43bf49cf' │
│        USDC-StableDebtToken-Test        │ '0x8117853a7Ecf500b27f5e5901c326B3840E58784' │
│            WETH-AToken-Test             │ '0x49871B521E44cb4a34b2bF2cbCF03C1CF895C48b' │
│       WETH-VariableDebtToken-Test       │ '0x86065184932b2e2E7bC2BC953Cd3d131d2497cDe' │
│        WETH-StableDebtToken-Test        │ '0xCEa68d3acD31b0d9d5E52f15Ce2662592C24aFc9' │
│            LINK-AToken-Test             │ '0x601c61Fc4eEe64a4b1f5201125b788dc1585746b' │
│       LINK-VariableDebtToken-Test       │ '0x91eFc3Ff5fBD2f9b2aE8880Bb1d52Db3e01A261d' │
│        LINK-StableDebtToken-Test        │ '0x98413Db84158e6f4dEaa0F4d098240a7FdfA7060' │
│          MockFlashLoanReceiver          │ '0x79A9D8009eFa62AE3C885aaD2a382c85FD90f87a' │
│          WrappedTokenGatewayV3          │ '0x9c402E3b0D123323F0FCed781b8184Ec7E02Dd31' │
│          WalletBalanceProvider          │ '0x03C8d0c46834921c4468C15A03E5d76Ae5CA3133' │
│        UiIncentiveDataProviderV3        │ '0xF67B25977cEFf3563BF7F24A531D6CEAe6870a9d' │
│          UiPoolDataProviderV3           │ '0x3De59b6901e7Ad0A19621D49C5b52cC9a4977e52' │
│                GhoToken                 │ '0xcbE9771eD31e761b744D3cB9eF78A1f32DD99211' │
│               GhoOracle                │ '0xDD714B0A68b9c81C6878688c5dc6238f8AC8eadD'  │
│             UiGhoDataProvider           │ '0xE914D574975a1Cd273388035Db4413dda788c0E5' │
│                GhoAToken                │ '0xbC249A1D91DbD54CEEfBBdC66e01FC515FA3980c' │
│             StableDebtToken             │ '0x4461AC7d40EFBE8c9E37cC341dA380c57a9B2B78' │
│          GhoVariableDebtToken           │ '0x7caBc754a0f1187b1A60BC9375508e07b362bDad' │
│         GhoInterestRateStrategy         │ '0xF13b45F8FfF9342DC2b9EaD0D8442138ab8FA401' │
│         GhoDiscountRateStrategy         │ '0xB82a29C9a83C52AbBc61327296B4Bb4Fa52050dA' │
│          StakedTokenV2Rev4Impl          │ '0x324E0714991286d096723F2f24Ad20AAd3b5563A' │
│             GhoFlashMinter              │ '0x0cBf106fD14D1dFb320e7bfaA466FDCEC6471d46' │
└─────────────────────────────────────────┴──────────────────────────────────────────────┘
Reserves
┌────────────────────────────────┬──────────────────────────────────────────────┐
│            (index)             │                   address                    │
├────────────────────────────────┼──────────────────────────────────────────────┤
│ AAVE-TestnetMintableERC20-Test │ '0xE205181Eb3D7415f15377F79aA7769F846cE56DD' │
│ DAI-TestnetMintableERC20-Test  │ '0xD77b79BE3e85351fF0cbe78f1B58cf8d1064047C' │
│ USDC-TestnetMintableERC20-Test │ '0x69305b943C6F55743b2Ece5c0b20507300a39FC3' │
│ WETH-TestnetMintableERC20-Test │ '0x84ced17d95F3EC7230bAf4a369F1e624Ae60090d' │
│ LINK-TestnetMintableERC20-Test │ '0x2166903C38B4883B855eA2C77A02430a27Cdfede' │
│            GhoToken            │ '0xcbE9771eD31e761b744D3cB9eF78A1f32DD99211' │
└────────────────────────────────┴──────────────────────────────────────────────┘

```

## Stake UI Helpers:

```jsx
AaveStakingHelper 0xe914d574975a1cd273388035db4413dda788c0e5
StakeUIHelper 0x02119C949D827ca1FaFFDb17B14E6A9dEE04f410
```

</details>
