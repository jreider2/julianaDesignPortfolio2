import React from 'react';
import Image from "next/image";

import styles from "./header.module.css";

export default function Header ({ image, heading, subheading }) {
    return (
        <div className={styles.headerContainer} > 
            <h1 className={styles.heading}>{heading}</h1>
            <h2 className={styles.subheading}>{subheading}</h2>
            <div className={styles.imageWrapper}>
                <Image
                    src={image}
                    alt="Use Case Image"
                    sizes="100vw"
                    style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "contain"
                    }} />
            </div>
        </div>
    );
}