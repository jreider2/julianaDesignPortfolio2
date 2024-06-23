import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from "next/image";
import { motion } from 'framer-motion';

import LinkedInIcon from '/public/images/linkedin.png';
import GitHubIcon from '/public/images/github.png';

import styles from './footer.module.css';

export default function Footer() {
  const router = useRouter();
  const isConvoPage = router.pathname === '/convoScope';

  return (
    <div className={`${styles.footer} ${isConvoPage ? styles.convoscopeFooter : ''}`}>
      <div className={styles.innerContainer}>
        <p>portfolio coded with love
          <span className={styles.separator}></span> 
            {'  '}
          <a href="https://github.com/jreider2/nextjs-blog" target="_blank">
            <Image
              src={GitHubIcon}
              alt="github"
              className={styles.GitHubIcon}
              width={20}
              height={20}
              style={{
                maxWidth: "100%",
                height: "auto"
              }} />
          </a>
        </p>
        <p>
            email {' '}
            <a href="mailto:jreider@luc.edu" className={styles.email}>
              jreider@luc.edu
            </a>
          </p>
          <div className={styles.linksContainer}>
          <Link href="/" className={styles.homeLink}>
            home
          </Link>
          <a href="images/JulianaResume.pdf" target="_blank" className={styles.resumeLink}>
            resume
          </a>
          <a href="https://www.linkedin.com/in/juliana-reider/" target="_blank">
            <Image
              src={LinkedInIcon}
              alt="linkedIn"
              className={styles.LinkedInIcon}
              width={20}
              height={20}
              style={{
                maxWidth: "100%",
                height: "auto"
              }} />
          </a>
          {/* <a href="https://github.com/jreider2/nextjs-blog" target="_blank">
            <Image src={GitHubIcon} alt="github" className={styles.GitHubIcon} width={20} height={20} />
          </a> */}
        </div>
      </div>
    </div>
  );
}