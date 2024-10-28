import { useRef } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Image from 'next/image';

// components
import Layout, { siteTitle } from '../components/layout';
import TeaserCard from '../components/teasercard';

// styles
import arrowStyles from '../components/arrowDown.module.css';
import styles from '../styles/Home.module.css';

export default function Home({ allPostsData }) {
  const workRef = useRef(null);
  const scrollToWork = () => {
    workRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <Layout ref={workRef} home>
        <Head>
          <title>{siteTitle}</title>
          <link rel="preload" href="/fonts/MuseoModerno.woff2" as="font" type="font/woff2" crossorigin />
          <link rel="preload" href="/fonts/SFProRounded.woff2" as="font" type="font/woff2" crossorigin />
          <link rel="preload" as="image" href="/images/lightCirlce_mainPage.webp" />
        </Head>
        <div className={styles.heroContainer}>
          <div className={styles.heroSection}>
            <Image
              src="/images/lightCirlce_mainPage.webp"
              alt="Hero Background"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center bottom' }}
              priority
            />
            <motion.h1
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <span className={styles.EngineersLens}>Engineer's Lens</span><br />
              <span className={styles.designerVision}>Designer's Vision</span>
            </motion.h1>

            <motion.div className={styles.subheadContainer}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <h2>hi! i’m juliana, an engineer turned product designer.</h2>
              <h2 className={styles.subhead2}>my methodical nature merges aesthetics with functionality.</h2>
            </motion.div>

            <motion.div onClick={() => scrollToWork()}
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              transition={{ delay: 2, duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
              className={arrowStyles.arrowDown}>↓</motion.div>
          </div>
        </div>
        <div className={styles.ghost} ref={workRef}></div>
        <TeaserCard title="Comet" description="Using design to reimagine source control management." image="/images/cometTeaser.png" link={"/comet"}></TeaserCard>
        <TeaserCard title="Convoscope" description="Designing an experimental AI interface with MIT Media Lab researchers." image="/images/tempImg.png" link={"/convoScope"}></TeaserCard>
        <TeaserCard title="Thought Filter" description="First designer for a B2B content marketing SaaS tool." image="/images/tfTeaser.png" link={"/thoughtFilter"}></TeaserCard>

      </Layout >
    </>
  );
}
