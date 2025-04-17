import React from 'react';
import Image from "next/image";
import styles from './box.module.css';

export default function Card ({ className, icon, txt, children, ...props}) {
    return (
        <div className={`${styles.outerContainer} ${className}` }>
            <div className={`${styles.container} ${styles.marginboxOuter}`}>
                <div className={styles.iconContainer}>
                    <Image
                        src={icon}
                        alt="error loading image"
                        width={24}
                        height={24}
                        style={{
                            width: "100%",
                            height: "auto"
                        }} />
                </div>
                {/* TEXT */}
                <div className={`bodyText ${styles.text} `}>{txt}</div>
                {children}
            </div>
        </div>
    );
}