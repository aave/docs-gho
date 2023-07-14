import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import SearchBar from '@theme/SearchBar'

import styles from './index.module.css';
import Head from '@docusaurus/Head';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <meta name="description" content="GHO is a decentralized overcollateralized stablecoin, transparent and native to the Aave Protocol. " />
      <meta property="og:url" content="https://docs.gho.xyz/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="GHO Document Hub | Stablecoin by Aave" />
      <meta property="og:description" content="GHO is a decentralized overcollateralized stablecoin, transparent and native to the Aave Protocol. " />
      <meta property="og:image" content="https://docs.gho.xyz/img/gho-docs-og.jpg"/>
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="docs.gho.xyz" />
      <meta property="twitter:url" content="https://docs.gho.xyz/" />
      <meta name="twitter:title" content="GHO Document Hub | Stablecoin by Aave" />
      <meta name="twitter:description" content="GHO is a decentralized overcollateralized stablecoin, transparent and native to the Aave Protocol. " />
      <meta name="twitter:image" content="https://docs.gho.xyz/img/gho-docs-og.jpg" />
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 className={clsx('hero__title', styles.heroTitle)}>{siteConfig.title}</h1>
        <p className={clsx('hero__subtitle', styles.heroSubtitle)}>{siteConfig.tagline}</p>
        {/* <div className={styles.searchBarWrapper}>
          <SearchBar />
        </div> */}
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
      className="asd"
    >
      <Head>
        <script src="https://cdn.usefathom.com/script.js" data-spa="auto" data-site="JMPWOKPX" defer></script>
      </Head>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
