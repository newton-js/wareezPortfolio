import EachExperience from "../components/EachExperience";
import document from "../assets/wareezProject.pdf"
import styles from "./Project.module.css";
function Project() {
  return (
    <div id="projects" className={styles.container}>
      <h1 className={styles.sectionHeader}>PROJECTS</h1>
      <div className={styles.experienceBox}>
        <EachExperience
          position={""}
          duration={"05/ 2025"}
          title={"AI in Transportation"}
        >
          License Plate Recognition is widely used for automated identication of
          vehicle registration plates for security purpose and law enforcement.
          By combining computer vision techniques with Optical Character
          Recognition (OCR) we can extract license plate numbers from images
          enabling applications in areas like security, trac management and toll
          systems. <a className={styles.link} href={document}>documentation here</a> 
        </EachExperience>
        <EachExperience
          position={""}
          duration={"05/ 2024"}
          title={"AI in Business/Finance"}
        >
          Credit Card Default Prediction Using AWS SageMaker's XG-Boost
          Algorithm (AutoPilot)
        </EachExperience>

        <EachExperience
          position={""}
          duration={"07/ 2023"}
          title={"AI in Business/Marketing"}
        >
          Mall Customer Segmentation Using Autoencoders and UnsupervisedMachine
          Learning Algorithms
        </EachExperience>

        <EachExperience
          position={""}
          duration={"05/ 2023"}
          title={"EMOTION AI"}
        >
          Emotion Classification and Key Facial Points Detection UsingAI
        </EachExperience>
      </div>
    </div>
  );
}

export default Project;
