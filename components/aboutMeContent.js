import React from 'react';
import Image from "next/image";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

import woodsPic from '/public/images/woodsGoodQuality.jpg'
import familyPic from '/public/images/marriagePicHighQuality.jpg';
import hillsPic from '/public/images/hillsJuliana.jpg';
import configPic from '/public/images/configJuliana.jpg';

import styles from "./aboutMeContent.module.css";

export default function AboutMeContent({ children, home }) {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    return (
        <div className={styles.fullContent}>
            <motion.div className={styles.titleContainer}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <h1 className={styles.title}>about me</h1>

                <h2 className={styles.subtitle}>I’m Juliana, a software engineer turned product designer. </h2>
            </motion.div>
            <motion.div className={styles.flexContainer1}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1 }}
            >
                {/* Flexbox container 1 */}
                <div className={`${styles.imageContainer} ${styles.roundedCorners} ${styles.imageSize1}`}>
                    <Image
                        src={configPic}
                        alt="Image"
                        fill
                        sizes="100vw"
                        style={{
                            objectFit: "cover",
                            objectPosition: "top"
                        }} />
                </div>
                <div className={styles.f1Text1}>
                    <p>My experience as a senior software engineer at a top-tier consulting firm, working across sectors
                        like B2C software, govtech, fintech, and natural gas, taught me to
                        <span className={styles.emphasis}> quickly grasp complex information </span>
                        and turn challenges into manageable solutions. Some of my work has affected millions of people.</p>
                    <p>This
                        <span className={styles.emphasis}> foundation in analytical thinking </span>
                        and problem-solving paved the way for my transition to product design.
                        As a product designer I am able to find a deeper satisfaction in blending those skills with my visual
                        problem-solving abilities, and my aesthetic sense, on a daily basis.</p>
                </div>
            </motion.div>
            <div className={styles.flexContainer2}>
                {/* Flexbox container 2 */}
                <p> My <span className={styles.emphasis2}> </span>pursuit of learning
                    how to best design useable products,
                    combined with my experience in development,
                    has enabled me 
                    <span className={styles.emphasis2}> to view design through a unique lens.</span>
                </p>
            </div>
            <div className={styles.flexContainer1}>
                {/* Flexbox container 3 */}
                <div className={styles.f1Text1}>
                    <h3 className={styles.midTitle}>Arts and Science</h3>
                    <p>My BA in Philosophy and English, followed by a
                        <span className={styles.emphasis}> Masters in Computer Science</span>
                        , has equipped me with a unique blend of creative and analytical skills.
                        This mix is perfect for product design, where understanding technical and
                        business constraints is as important as presenting information in a user-friendly way.
                    </p>
                </div>
                <div className={`${styles.imageContainer} ${styles.roundedCorners} ${styles.imageSize2}`}>
                    <Image
                        src={hillsPic}
                        alt="Image"
                        fill
                        sizes="100vw"
                        style={{
                            objectFit: "cover",
                            objectPosition: "bottom"
                        }} />
                </div>
            </div>
            <div className={`${styles.flexContainer1} ${styles.addedPadding}`}>
                {/* Flexbox container 4 */}
                <div className={`${styles.imageContainer} ${styles.roundedCorners} ${styles.imageSize3}`}>
                    <Image
                        src={woodsPic}
                        alt="Image"
                        fill
                        sizes="100vw"
                        style={{
                            objectFit: "cover",
                            objectPosition: "20% 100%"
                        }} />
                </div>
                <div className={styles.f1Text1}>
                    <h3 className={styles.midTitle}>Collaboration, Communication, and Mentorship</h3>
                    <p className={styles.removeBottomMargin}>My consultancy background underlines the importance of teamwork, proactive communication, and adaptability.
                        These skills, along with my experience as an ESL teacher in Japan, and
                        <span className={styles.emphasis}> mentoring young engineers</span>
                        , have ingrained a strong sense of mentorship and collaboration in me, which I eagerly bring to the world of design.
                    </p>
                </div>
            </div>
            <motion.p
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 5 }
                }}
                transition={{ delay: .5, duration: 1 }}
                className={styles.callout}
            >
                Let’s create something
                <span className={styles.calloutEmphasis}> amazing together.</span>
            </motion.p>
            <div className={`${styles.flexContainer1}`}>
                {/* Flexbox container 5 */}
                <div className={styles.f1Text1}>
                    <h3 className={styles.midTitle}>A Peek into My World</h3>
                    <p>Outside of work, I'm an avid needlepointer, a devoted dog mom to my poodle,
                        and a partner in adventure to my husband.
                        Whether it's swimming, hiking, or reading my favorite poets,
                        I cherish these moments that bring additional
                        <span className={styles.emphasis}> balance and joy to my life.</span>
                    </p>
                    <h3 className={styles.midTitle}>Looking Ahead</h3>
                    <p>I'm excited to use my
                        <span className={styles.emphasis}>
                            {' '} methodical nature, technical background, and creative insights {' '}
                        </span>
                        to create products that are not only visually appealing
                        but also functional and intuitive.
                    </p>
                </div>
                <div className={`${styles.imageContainer} ${styles.roundedCorners} ${styles.imageSize4}`}>
                    <Image
                        src={familyPic}
                        alt="Image"
                        fill
                        sizes="100vw"
                        style={{
                            objectFit: "cover"
                        }} /> {/*layout="fill" objectFit="cover" */}
                </div>
            </div>
        </div>
    );
}
