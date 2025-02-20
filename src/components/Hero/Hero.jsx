import React from "react";
import styles from "./Hero.module.css";
import heroImage from '../../../assets/hero/heroImage.png';

export const Hero = () => {
    return (
        <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Priyanshi</h1>
        <p className={styles.description}>
          I'm a Web developer with 3 years of experience using React and
          NodeJS. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:patelpriyanshi197@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      
    <img src={heroImage}  alt="Hero image of me" className={styles.heroImg} />

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
    )
}