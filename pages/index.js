import { useRef, useEffect } from 'react';
import Head from 'next/head';
import { getSortedPostsData } from '../lib/posts';
import { motion } from 'framer-motion';

// components
import Layout, { siteTitle } from '../components/layout';
import TeaserCard from '../components/teasercard';

// images=
import undoHover from '/public/images/undoHover.png'

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
        </Head>
        <div className={styles.heroContainer}>
          <div className={styles.heroSection}>

            <motion.h1
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            ><span className={styles.EngineersLens}>Engineer's Lens</span><br></br>
              <span className={styles.designerVision}>Designer's Vision</span></motion.h1>

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
        <TeaserCard title="Comet" description="Using design to reimagine source control management." image="/images/undoHover.png" link={"/comet"}></TeaserCard>
        <TeaserCard title="Convoscope" description="Designing an experimental AI interface with MIT Media Lab researchers." image="/images/tempImg.png" link={"/convoScope"}></TeaserCard>
        <TeaserCard title="Thought Filter" description="First designer for a B2B content marketing SaaS tool." image="/images/macx2.png" link={"/thoughtFilter"}></TeaserCard>

      </Layout >
    </>

  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}