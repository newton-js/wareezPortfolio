import styles from "./Education.module.css";
import EachExperience from "../components/EachExperience";

function Education() {
  return (
    <div className={styles.container}>
      <h1 className={styles.sectionHeader}>EDUCATION</h1>
      <div className={styles.educationBox}>
        <EachExperience
          position={"FLEMING COLLEGE, Toronto ON"}
          duration={"August 2024 - Present"}
          title={"MASTER OF SCIENCE"}
        >
          <p className={styles.course}>
          Artificial Intelligence
          </p>
          <p className={styles.gpa}> GPA 3.2 / 4.0 </p>
        </EachExperience>
        <EachExperience
          position={"KWARA STATE UNIVERSITY"}
          duration={"August 2014 - June 2019"}
          title={"BACHELOR OF ENGINEERING"}
        >
          <p className={styles.course}>
            Mechanical Engineering - Web Development Track
          </p>
          <p className={styles.gpa}> GPA 3.12/ 4.0 </p>
        </EachExperience>
        <EachExperience
          position={"AOCOED INTERNATIONAL SCHOOL"}
          duration={"December 2005 - March 2010"}
          title={"HIGH SCHOOL"}
        >
          <p className={styles.course}>Science Class - Web Development Track</p>
          <p className={styles.gpa}>Outstanding </p>
        </EachExperience>
      </div>
    </div>
  );
}

export default Education;
