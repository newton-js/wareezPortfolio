import { FaGithub, FaLinkedin, FaMailBulk, FaTwitter } from "react-icons/fa";
import lolly from "../assets/lollysResume.pdf";
import styles from "./Hero.module.css";
function Hero() {
  return (
    <div className={styles.hero}>
      <h1 className={styles.heroName}>
        WAREEZ <span>YUSUF</span>
      </h1>
      <p>
        2492 Bromus path· Oshawa Ontario, CO L1J0k7 · (647) 467-8022 ·
        <span className={styles.email}>lohleez@gmail.com</span>
      </p>
      <p className={styles.heroText}>
        I am experienced in leveraging agile frameworks to provide a AI synopsis
        for high level overviews. Iterative approaches to corporate strategy
        foster collaborative thinking to further the overall value proposition.
      </p>
      <ul className={styles.logoList}>
        <li>
          <a href="http://www.linkedin.com/in/wareez-yusuf-0b6413334">
            <FaLinkedin className={styles.icon} />
          </a>
        </li>

        <li>
          <a href="https://github.com/Pizzle587">
            <FaGithub className={styles.icon} />
          </a>
        </li>

        <li>
          <a href="http://lohleez@gmail.com">
            <FaMailBulk className={styles.icon} />
          </a>
        </li>
        <li>
          <a href="http://">
            <FaTwitter className={styles.icon} />
          </a>
        </li>
      </ul>
      <a className={styles.resume} href={lolly}>
        RESUME
      </a>
    </div>
  );
}

export default Hero;
