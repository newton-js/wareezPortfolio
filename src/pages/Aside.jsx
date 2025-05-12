 /* eslint-disable react/prop-types */
import pics from "../assets/pics.jpeg";
import lolly from "../assets/lollysResume.pdf";
import styles from "./Aside.module.css";
function Aside({toggle, setToggle}) {

  return (
    <div className={`${styles.container} ${toggle===false ? styles.hidden : ""}`}>
      <div className={styles.imgBox}>
        <img className={styles.img} src={pics} alt="" />
      </div>
      <ul  className={styles.mainList} onClick={(e) => {
        e.preventDefault();
        console.log(e.target);
        const id = e.target.getAttribute("href");
        console.log(id);
        document.querySelector(id).scrollIntoView()
        setToggle(false)
      }}>
        <li><a href="#hero">ABOUT</a></li>
        <li><a href="#experience">EXPERIENCE</a></li>
        <li><a href="#education">EDUCATION</a></li>
        <li><a href="#projects">PROJECTS</a></li>
        <li><a href="#skills">SKILLS</a></li>
        <li><a href="#interest">INTEREST</a></li>
        <li><a href="#awards">AWARDS</a></li>
        <li><a className={styles.resume} href={lolly}>RESUME</a></li>
      </ul>
    </div>
  );
}

export default Aside;
