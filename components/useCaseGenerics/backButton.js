import React from 'react';
import { useRouter } from 'next/router';
import styles from './backButton.module.css'; 

export default function BackButton ({ onClick }) {
    const router = useRouter();

    const handleClick = () => {
      router.push('/');
    };

  return (
    <div className={`${styles.buttonContainer}`}>
        <button className={styles.button} onClick={handleClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="24" viewBox="0 0 27 24" fill="none">
                <path d="M18.7059 12H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12.3529 18L6 12L12.3529 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className={styles.buttonText}>Back</span>
        </button>
    </div>
  );
};