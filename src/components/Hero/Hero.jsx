import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Colin Swart</h1>
        <p className={styles.description}>
          I'm a full-stack developer with with experience in various languages, including JavaScript (Vite-React), Python (Django framework), C# (.NET) and more. If you would like to know more about me, click on Contact Me!
        </p>
        <a href="mailto:colinswart0@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heropic-porfolio.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};