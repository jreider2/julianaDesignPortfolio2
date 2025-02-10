import React, { useState, useEffect } from 'react';
import canopyHero from '../../public/images/canopyCover.png'

import Header from '../useCaseGenerics/header';
import Overview from '../useCaseGenerics/overview';
import BackButton from '../useCaseGenerics/backButton';
import SectionTopper from '../useCaseGenerics/sectionTopper';
import Card from '../useCaseGenerics/card';
import Image from 'next/image';
import styles from "./useCase.module.css";

    // data
import {text} from '../constants/canopyConstants';
import {boarder} from '../constants/convoscopeConstants';


export default function BloomUseCase(){

    return (
        <div className={styles.useCaseContainer}>
            <Header 
                heading="Canopy" 
                subheading="Nurture your crypto, watch your future bloom."
                image={canopyHero}
                />
            {<Overview
                myRole="Product Designer"
                timeline="Q4 2024 to Q1 2025"
                status="In the oven"
                team={<div>Team of One
                </div>}
                overviewText={text}
            />}

            {boarder}

            <SectionTopper
                sectionTitletxt="The Problem"
                sectionSubtitleTxt="How can we help regular people build their financial future with crypto?"
                topParagraphHTML={<div className={'bodyText'}><span className={`emphasis`}>Crypto is the future of finance. </span> The traditional financial system serves the interests of the wealthy. A decentralized financial system leveraging crypto rebalances power in favor of regular people. And yet, crypto is complex, intimidating, and confusing for many.</div>}
            />

            {boarder}

            <SectionTopper
                sectionTitletxt="Highlights"
                sectionSubtitleTxt="Unlocking the power of crypto."
                topParagraphHTML={<div className={'bodyText'}>Canopy makes the user's goals the center of the experience. When you invest, you're building towards something. Crypto is a means to an end: The future you're building towards.</div>}
            />

            <Card
                p1={<p><span className={`emphasis`}> Hyperbolic discounting leads people to favor the short term.</span> Canopy combats this by making the financial future concrete, visualizating progress, and reinforcing goals. </p>}
                // bullet1="AI listens to conversation"
                // bullet2="Surfaces relevant information"
                //image2={dataPic1}
                video1="/video/branchDropdownMergeFlow.mp4"
                bullets={null}
                className={`${styles.marginBottomNone}`}
            >
                <div className={`bodyText ${styles.cardBody2} ${styles.marginBottom1} ${styles.marginTopNone}`}>
                    <span className={`emphasis`}>Utilizing the goal gradient effect</span> causes people to persist through the hard parts of the journey when they might otherwise give up.
                </div>
                <div className={`${styles.imageWrapper2} ${styles.marginBottom2}`}>
                    <Image
                        src={canopyHero}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }}
                    />
                </div>
            
            </Card>

            <Card 
                p1={<div><span className={`emphasis`}>Building wealth is a long term project.</span> Canopy uses recurring investments and well-chosen defaults to help users stay on track. </div> }
                className={`${styles.marginBottomNone}`}
            >
                <div className={styles.imageWrapper2}>
                    {canopyHero && (
                        <Image
                            src={canopyHero}
                            alt="Speaker Highlight"
                            sizes="100vw"
                            style={{
                                width: "100%",
                                height: "auto",
                                objectFit: "contain"
                            }} 
                        />
                    )}
                </div>

                <div className={`bodyText ${styles.cardBody2}`}>
                    <span className={`emphasis`}>Demistify and communicate.</span> Canopy makes the process of buying crypto easy to understand and execute.
                </div>

                <div className={styles.imageWrapper2}>
                    {canopyHero && (
                        <Image
                            src={canopyHero}
                            alt="Participant View"
                            sizes="100vw"
                            style={{
                                width: "100%",
                                height: "auto",
                                objectFit: "contain"
                            }} 
                        />
                    )}
                </div>
                <br></br><br></br><br></br>

            </Card>

            <Card className={`${styles.marginBottomNone}`}
            >
                <div className={`${styles.cardCallout} ${styles.marginBottom2} ${styles.marginTop}`}>
                This is just the beginning. <br></br>More Canopy <span className={`${styles.whiteTxt}`}>coming soon </span> to a computer near you.
                </div>
            </Card>

            <BackButton />

        </div>
    );
};