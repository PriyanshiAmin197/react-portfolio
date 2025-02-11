import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={"./react-portfolio/assets/contact/emailIcon.png"} alt="Email icon" />
          <a href="mailto:patelpriyanshi197@gmail.com">patelpriyanshi197@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={"./react-portfolio/assets/contact/linkedinIcon.png"}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/priyanshi-amin-006515193/">linkedin.com/priyanshi-amin</a>
        </li>
        <li className={styles.link}>
          <img src={"./react-portfolio/assets/contact/githubIcon.png"} alt="Github icon" />
          <a href="https://github.com/PriyanshiAmin197">github.com/PriyanshiAmin197</a>
        </li>
      </ul>
    </footer>
  );
};