import { useRef, useEffect, useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

// components
import Layout, { siteTitle } from '../components/layout';
import TeaserCard from '../components/teasercard';

// styles
import arrowStyles from '../components/arrowDown.module.css';
import styles from '../styles/Home.module.css';

// Create a custom hook
function useDeviceCheck() {
  const [deviceInfo, setDeviceInfo] = useState({
    isMobile: false,
    isSafari: false,
    isLoading: true
  });

  useEffect(() => {
    // Move checks here
    const isMobileDevice = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const isSafariBrowser = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    
    setDeviceInfo({
      isMobile: isMobileDevice,
      isSafari: isSafariBrowser,
      isLoading: false
    });
  }, []);

  return deviceInfo;
}

export default function Home({ allPostsData }) {
  const workRef = useRef(null);
  const { isMobile, isSafari, isLoading } = useDeviceCheck();

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
            {(!isLoading && !isMobile && !isSafari) ? (
              <>
                <motion.div 
                  className={`${styles.blob} ${styles.blob1}`}
                  animate={{
                    rotate: [0, 360],
                    x: [0, 200, 200, 200, 0],      
                    y: [0, -200, -200, 100, 0],
                    scale: [1, 1.1, .8, 1.3, 1],
                  }}
                  transition={{
                    duration: 30,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                />
                <motion.div 
                  className={`${styles.blob} ${styles.blob2}`}
                  animate={{
                    x: [0, -300, 0, 300, 0],
                    y: [0, 200, 0, 300, 0],
                    scale: [1, 1, 1.79, 1.15, 1],
                  }}
                  transition={{
                    duration: 24,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                />
                <motion.div 
                  className={`${styles.blob} ${styles.blob3}`}
                  animate={{
                    x: [0, -250, 0, -400, 0],
                    y: [0, -250, 0, 250, 0],
                    scale: [1, .8, .9, 1.02, 1],
                  }}
                  transition={{
                    duration: 19,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                />
              </>
            ) : (
              !isLoading && <div className={styles.staticBackground} />
            )}
            
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
            </div>

          </div>
        
        <div className={styles.ghost} ref={workRef}></div>

        <div className={styles.teaserCardsContainer}>
          {/* Teaser cards showcase my key projects and case studies */}
          <TeaserCard
              title="Mentra" 
              description="End-to-end product overhaul for a seed-stage, YC-backed startup." 
              image="/images/mentraOsUseCaseImg2.png"
              titleClassName={styles.shortTitle}
              link={"/MentraOS"}
          />

          <TeaserCard 
            title="Comet" 
            description="Using design to reimagine source control management." 
            image="/images/cometUseCaseImg.webp"
            titleClassName={styles.shortTitle}
            link={"/comet"}
          />

          <TeaserCard 
            title="Convoscope" 
            description="Augmenting cross-disciplinary collaboration for researchers with AI." 
            image="/images/convoUseCaseImg.webp"
            link={"/convoScope"}
          />

          <TeaserCard 
            title="Canopy" 
            description="A cryptocurrency investment and goal setting tool." 
            image="/images/canopyUseCaseImg.webp"
            titleClassName={styles.shortTitle}
            link={"/canopy"}
          />

          <TeaserCard 
            title="Thought Filter" 
            description="First designer for a generative AI SaaS tool for freelance writers and creators." 
            image="/images/thoughtfilterUseCaseImg.webp"
            link={"/thoughtFilter"}
          />
        </div>
    </div>
      </Layout >
    </>
  );
}
