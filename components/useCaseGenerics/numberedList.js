import React from 'react';
import styles from "./numberedList.module.css"

export default function numberedList({takeaways}) {
  return (
    <>
        <ol>
          {takeaways.map((item, index) => (
            <li key={index} className={styles.listItem}>{item}</li>
          ))}
        </ol>
    </>
  );
}
