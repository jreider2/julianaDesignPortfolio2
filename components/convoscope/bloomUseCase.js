import React, { useState, useEffect } from 'react';
import canopyHero from '../../public/images/canopyCover.png'

import Header from '../useCaseGenerics/header';
import Overview from '../useCaseGenerics/overview';
import BackButton from '../useCaseGenerics/backButton';

import styles from "./useCase.module.css";

// data
import { text} from '../constants/cometConstants.js';
import { boarder} from '../constants/convoscopeConstants';


export default function BloomUseCase(){

    return (
        <div className={styles.useCaseContainer}>
            <Header 
                heading="Canopy" 
                subheading="Coming Soon: A Cryptocurrency Investment and Goal Setting Tool."
                image={canopyHero}
                />
            {/* <Overview
                myRole="Product Designer"
                responsibilities=""
                timeline="TBD"
                status="Designs in Flight"
                team={<div>Team of One
                </div>}
                overviewText={text}
            /> */}
{/* 
            {boarder} */}

            <BackButton />

        </div>
    );
};