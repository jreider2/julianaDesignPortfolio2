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
          {/* <link rel="preload" href="/fonts/MuseoModerno.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
          <link rel="preload" href="/fonts/SFProRounded.woff2" as="font" type="font/woff2" crossOrigin="anonymous" /> */}
        </Head>
        <div className={styles.heroContainer}>
          <div className={styles.heroSection}>
            <motion.div 
              className={`${styles.blob} ${styles.blob1}`}
              animate={{
                rotate: [0, -360],
                x: [0, 300, 0, -300, 0],
                y: [0, -300, 0, 300, 0],
                scale: [1, 1.1, 1, 1.1, 1],
              }}
              transition={{
                duration: 10,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            />
            <motion.div 
              className={`${styles.blob} ${styles.blob2}`}
              animate={{
                rotate: [0, -360],
                x: [0, -300, 0, 300, 0],
                y: [0, 200, 0, 300, 0],
                scale: [1, 1.79, 1, 1.15, 1],
              }}
              transition={{
                duration: 12,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            />
            <motion.div 
              className={`${styles.blob} ${styles.blob3}`}
              animate={{
                rotate: [0, -360],
                x: [0, 250, 0, -250, 0],
                y: [0, -250, 0, 250, 0],
                scale: [1, 1.5, 1, 1.05, 1],
              }}
              transition={{
                duration: 11,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            />
            <div className={styles.contentWrapper}>
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
                <h2>hi! i'm juliana, an engineer turned product designer.</h2>
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

        <div className={styles.teaserCardsContainer}>
          <TeaserCard title="Canopy" description="A cryptocurrency investment and goal setting tool." image="/images/canopyCover.png" link={"/bloom"}></TeaserCard>

          <TeaserCard title="Convoscope" description="Augmenting cross-disciplinary collaboration for researchers with AI." image="/images/convoscopeCover.png" link={"/convoScope"}></TeaserCard>

          <TeaserCard title="Comet" description="Using design to reimagine source control management." image="/images/cometTeaser.webp" link={"/comet"}></TeaserCard>

          <TeaserCard title="Thought Filter" description="First designer for a generative AI SaaS tool for freelance writers and creators." image="/images/editWithAiCurvedCorners.png" link={"/thoughtFilter"}></TeaserCard>
        </div>
    </div>
      </Layout >
    </>
  );
}
