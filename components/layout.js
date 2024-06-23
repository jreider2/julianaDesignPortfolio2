import Head from 'next/head';
import Link from 'next/link';

import styles from './layout.module.css';

import Nav from './nav';
import Footer from './Footer';
import React from 'react';

export const siteTitle = "Juliana Alexis-Reider Bhattacharya's Portfolio";

const Layout = React.forwardRef(({ children, home }, ref) => {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Juliana Reider's Portfolio"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        <Nav ref={ref} home={home} />
      </header>
      <main>
        {children} {/* Content specific to each page */}
      </main>
      {/* {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )} */}
      <Footer />
    </div>
  );
});

export default Layout;