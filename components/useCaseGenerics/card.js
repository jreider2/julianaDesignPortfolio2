import React from 'react';
import Image from "next/image";
import styles from "./card.module.css";
import useCaseStyles from "../convoscope/useCase.module.css";

export default function Card ({ className, p1, bullets, image1, image2, video1, children}) {
    return (
        <div className={`${styles.outterContainer} ${className}`}>
            {p1 && (
                <div className={`bodyText ${styles.cardBody}`}>
                    {p1}
                </div>
            )}
            
            {video1 && (
                <div className={styles.imageWrapper}>
                    <video controls loop muted width="100%" height="auto">
                        <source src={video1} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            )}

            {image1 && (
                <div className={styles.imageWrapper}>
                    <Image
                        src={image1}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
                </div>
            )}

            

            
            {image2 && (
                <div className={styles.imageWrapper}>
                    <Image
                        src={image2}
                        alt="Use Case Image"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
                </div>
            )}

            {bullets}
            {children}
        </div>
    );
}