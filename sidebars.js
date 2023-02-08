/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // docsSideBar: [{type: 'autogenerated', dirName: '.'}],
  // docsSideBar2: [{type: 'autogenerated', dirName: './gho-faq'}],
  docs: [
    'concepts/overview',
    'concepts/why-gho',
     {
      type: 'category',
      label: 'How GHO works',
      link: 
      {
        type: 'doc',
        id:   'concepts/how-gho-works/how-gho-works',
      },
      items: [
      'concepts/how-gho-works/gho-facilitators',
      'concepts/how-gho-works/gho-governance',
      'concepts/how-gho-works/gho-implementation',
      'concepts/how-gho-works/interest-rate-discount-model',
      'concepts/how-gho-works/risk-man-mitigations'
      ],
      },
      {
      type: 'category',
      label: 'Fundamentals',
      items: [
        'concepts/fundamental-concepts/borrow-gho',
        'concepts/fundamental-concepts/supply-gho',
        'concepts/fundamental-concepts/repay-liquidate-gho',
        'concepts/fundamental-concepts/gho-discount-strategy',
        'concepts/fundamental-concepts/flashmint',
        'concepts/fundamental-concepts/arbitrage',
      ]
    },
    'concepts/faq',
  ],
  developers: [
    'developer-docs/overview',
    {
      type: 'category',
      label: 'GHO',
      items: [
        'developer-docs/GHO/ERC20',
        'developer-docs/GHO/GhoOracle',
        'developer-docs/GHO/gho-token',
        {
          label: 'Interfaces',
          type: 'category',
          items: [
            'developer-docs/GHO/interfaces/IERC20Burnable',
            'developer-docs/GHO/interfaces/IERC20Mintable',
            'developer-docs/GHO/interfaces/IGhoFacilitator',
            'developer-docs/GHO/interfaces/IGhoToken'
          ]
        }
      ],
    },
    {
      type: 'category',
      label: 'Aave Facilitator',
      items: [
        'developer-docs/aave-facilitator/GhoAToken',
        'developer-docs/aave-facilitator/GhoDiscountRateStrategy',
        'developer-docs/aave-facilitator/GhoInterestRateStrategy',
        'developer-docs/aave-facilitator/GhoVariableDebtToken',

        {
          label: 'Interfaces',
          type: 'category',
          items: [
            'developer-docs/aave-facilitator/interfaces/IGhoAToken',
            'developer-docs/aave-facilitator/interfaces/IGhoDiscountRateStrategy',
            'developer-docs/aave-facilitator/interfaces/IGhoVariableDebtToken'
          ]
        }
      ],
    },
      {
      type: 'category',
      label: 'FlashMinter Facilitator',
      items: [
        'developer-docs/flashmint-facilitator/GhoFlashMinter',
        {
          label: 'Interfaces',
          type: 'category',
          items: [
            'developer-docs/flashmint-facilitator/interfaces/IGhoFlashMinter',
          ]
        }
      ],
    },
        'developer-docs/contracts-overview'
    ]
};
  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */


module.exports = sidebars;
