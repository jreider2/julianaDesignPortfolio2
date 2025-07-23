import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import mentraHero from '../../public/images/mentraOSUseCaseImg.png'
import mentraFlow1 from '../../public/images/mentraDiptic.png'

import Header from '../useCaseGenerics/header';
import Overview from '../useCaseGenerics/overview';
import BackButton from '../useCaseGenerics/backButton';
import SectionTopper from '../useCaseGenerics/sectionTopper';
import Card from '../useCaseGenerics/card';
import styles from "./useCase.module.css";

// data
import {text} from '../constants/mentraOSConstants';
import {boarder} from '../constants/convoscopeConstants';

export default function MentraOSUseCase(){

    return (
        <div className={styles.useCaseContainer}>
            <Header 
                heading="MentraOS" 
                subheading="End-to-end product overhaul for a seed-stage, YC-backed startup."
                image={mentraHero}
                />
            
            <SectionTopper
                sectionTitletxt="Highlights"
                sectionSubtitleTxt="Discover, install, and manage smart glasses apps."
                isAtTop={true}
            />

            <Card
                p1={<div><span className={`emphasis`}>Smart glasses need an app ecosystem.</span> MentraOS creates the first comprehensive app store for smart glasses, allowing users to discover new apps, install them seamlessly, and manage their entire smart glasses experience from one place.</div>}
                bullets={null}
                className={`${styles.marginBottomNone}`}
            >
                {/* <div className={`bodyText ${styles.cardBody2} ${styles.marginBottom1} ${styles.marginTopNone}`}>
                    <span className={`emphasis`}>Intuitive app discovery</span> makes it easy to find the perfect apps for your smart glasses, whether you're looking for productivity tools, entertainment, or utilities.
                </div> */}
                <div className={`${styles.imageWrapper2} ${styles.marginBottom2}`}>
                    <Image
                        src={mentraFlow1}
                        alt="MentraOS App Store Interface"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }}
                    />
                </div>
            </Card>

            {/* <Card 
                p1={<div><span className={`emphasis`}>Complete device management.</span> Beyond just app discovery, MentraOS provides comprehensive control over your smart glasses settings, app permissions, and device configuration.</div> }
                className={`${styles.marginBottomNone}`}
            >
                <div className={styles.imageWrapper2}>
                    <Image
                        src={mentraFlow2}
                        alt="App Management Interface"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} 
                    />
                </div>

                <div className={`bodyText ${styles.cardBody2}`}>
                    <span className={`emphasis`}>One-tap app control.</span> Turn apps on and off, manage permissions, and control app settings directly from the MentraOS interface.
                </div>

                <div className={styles.imageWrapper2}>
                    <Image
                        src={mentraHero}
                        alt="Device Settings Management"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} 
                    />
                </div>
                <br></br><br></br><br></br>
            </Card> */}

            {boarder}

            <SectionTopper
                sectionTitletxt="The Problem"
                sectionSubtitleTxt="How can we make smart glasses truly useful when there's no easy way to discover and manage apps?"
                topParagraphHTML={<div className={'bodyText'}><span className={`emphasis`}>Smart glasses are the future of computing. </span> But without a proper app ecosystem, they're just expensive accessories. Users need a way to discover new apps, install them easily, and manage their smart glasses experience without jumping between multiple apps and settings menus.</div>}
            />

            {boarder}

            <Overview
                myRole="Product Designer"
                timeline="Q2 - Present 2025"
                status="Available in the App Store"
                team={<div>Myself<br/>Couple of Founders<br/>Handful of Engineers</div>}
                overviewText={text}
                classNameOuterContainer={`${styles.marginTopNone}`}
            />

            <Card className={`${styles.marginBottomNone}`}
            >
                <div className={`${styles.cardCallout} ${styles.marginBottom2} ${styles.marginTop}`}>
                 More MentraOS <span className={`${styles.whiteTxt}`}>coming soon </span> as we build the future of smart glasses apps.
                </div>
            </Card>

            <BackButton />

        </div>
    );
}; 