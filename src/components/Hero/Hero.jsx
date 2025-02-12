import React from "react";
import styles from "./Hero.module.css";

export const Hero = () => {
    return (
        <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Priyanshi</h1>
        <p className={styles.description}>
          I'm a Web developer with 3 years of experience using React and
          NodeJS. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src="./react-portfolio/assets/hero/heroImage.png"
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
    )
}