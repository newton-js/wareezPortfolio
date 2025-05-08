 /* eslint-disable react/prop-types */
import pics from "../assets/pics.jpeg";
import lolly from "../assets/lollysResume.pdf";
import styles from "./Aside.module.css";
function Aside({toggle}) {
  return (
    <div className={`${styles.container} ${toggle===false ? styles.hidden : ""}`}>
      <div className={styles.imgBox}>
        <img className={styles.img} src={pics} alt="" />
      </div>
      <ul className={styles.mainList}>
        <li>ABOUT</li>
        <li>EXPERIENCE</li>
        <li>EDUCATION</li>
        <li>PROJECTS</li>
        <li>SKILLS</li>
        <li>INTEREST</li>
        <li>AWARDS</li>
        <li><a className={styles.resume} href={lolly}>RESUME</a></li>
      </ul>
    </div>
  );
}

export default Aside;
