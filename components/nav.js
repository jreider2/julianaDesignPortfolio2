import Link from 'next/link';
import styles from './nav.module.css'; // Import the CSS module
import React from 'react';

const Nav = React.forwardRef((props, ref) => {

  const scrollToWork = () => {
    ref.current.scrollIntoView({behavior: 'smooth'});
  }
  
  return (
    <nav className={styles.nav}>

      <div className={styles.logoContainer}>
        <div className={styles.circle}></div>
        <Link href="/">
          <span className={styles.navLink}>juliana reider</span>
        </Link>
      </div>

      <div className={styles.centerLinks}>
        <div className={styles.linkContainer}>
          <div className={styles.circleSmall}></div>
          {props.home ? 
          <a onClick={() => scrollToWork()}>
            <span className={styles.navLink} onClick={scrollToWork}>work</span>
          </a> :
          <Link href="/">
          <span className={styles.navLink}>work</span>
        </Link>}
        </div>

        <div className={styles.linkContainer}>
          <div className={styles.circleSmall}></div>
          <Link href="/about">
            <span className={styles.navLink}>about</span>
          </Link>
        </div>

      </div>

      <Link href="https://www.linkedin.com/in/juliana-reider/">
        <span className={styles.navLink + " " + styles.primaryCTA}>contact</span>
      </Link>
    </nav>
  );
});

export default Nav;