import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/coding.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Fullstack Developer</h3>
              <p>
                I'm a frontend and back-end developer with experience in building responsive
                and optimized sites, such as the website you are currently viewing.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/server.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Cloud Practitioning</h3>
              <p>
                I am actively furthering my knowledge with Cloud-based technologies with providers such as Microsoft Azure and Amazon AWS.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/hacker.png")} alt="Hacker Icon" />
            <div className={styles.aboutItemText}>
              <h3>Security Analyst/Penetration Tester</h3>
              <p>
                I am actively educating myself in security with sites such as HackTheBox and TryHackMe 
                and firmly believe that security is the most vital aspect of software development.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};