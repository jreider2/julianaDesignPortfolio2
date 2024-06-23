import React from 'react';

import styles from "./sectionTopper.module.css";

export default function SectionTopper ({ sectionTitletxt, sectionSubtitleTxt, topParagraphHTML }) {
    return (
        <div className={styles.sectionContainer} >
            <div className={styles.titleContainer}>
                <svg className={styles.circle}
                xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 7 7" fill="none">
                    <circle cx="3.5" cy="3.5" r="3.5" fill="#D5DCF4"/>
                </svg>
                <span className={styles.sectionTitle}>{sectionTitletxt}</span>
            </div>
            
            <div className={styles.sectionSubtitle}>{sectionSubtitleTxt}</div>
            {topParagraphHTML}
        </div>
    );
}