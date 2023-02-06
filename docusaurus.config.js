// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GHO Document Hub',
  tagline: 'GHO is a decentralized, multi-collateralized stablecoin pegged to the U.S. dollar.',
  favicon: 'img/logo.svg',

  // Set the production url of your site here
  url: 'https://ghodocs.aave.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Aave Protocol', // Usually your GitHub org/user name.
  projectName: 'GHO', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/', // Serve the docs at the site's root
          remarkPlugins: [math],
          rehypePlugins: [katex],
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'GHO Docs',
        logo: {
          alt: 'GHO Logo',
          src: 'img/logo.svg',
          srcDark: 'img/logo_dark.svg',
        },
        items: [
        {
          to: 'concepts/overview',
          label: 'Concepts',
          position: 'left',
          className: 'V3_active',
        },
         {
          to: '/developer-docs/overview',
          label: 'Developers',
          position: 'left',
          className: 'V3_active',
        },
     {
          to: '/resources',
          label: 'Resources',
          position: 'left',
          className: 'V3_active',
        },        // {
        //   to: '/sdk/overview',
        //   label: 'SDK',
        //   position: 'left',
        //   className: 'V3_active',
        // },
        {
          label: 'Techpaper',
          to: 'https://github.com/aave/gho/blob/main/techpaper/GHO_Technical_Paper.pdf',
          position: 'right',
          className: 'persistent',
        },
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'GHO Docs',
          // },
        {
          href: 'https://github.com/aave/gho',
          label: 'GitHub',
          position: 'right',
          className: 'persistent',
        },
          {to: 'https://docs.aave.com', label: 'Aave Docs', position: 'right', className: 'persistent'},
          {
            href: 'https://app.aave.com',
            label: 'App',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Developers',
            items: [
              {
                label: 'Developers Home',
                to: '/developer-docs/overview',
              },
              {
                label: 'Bug Bounty',
                to: 'https://github.com/aave/bug-bounty',
              },
              {
                label: 'GHO Deployed Contracts',
                to: '/gho-contracts/overview',
              },
            ],
          },
          {
            title: 'Github',
            items: [
              {
                label: 'GHO Contracts',
                href: 'https://github.com/aave/gho',
              },
              {
                label: 'Aave Interface',
                href: 'https://github.com/aave/interface',
              },
              {
                label: 'Aave Utilities SDK',
                href: 'https://github.com/aave/aave-utilities',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/CvKUrqM',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/aaveaave',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/aave',
              },
            ],
          },
        ]
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['solidity']
      },
    }),
};

module.exports = config;