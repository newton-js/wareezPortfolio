import styles from "./Experience.module.css";
import EachExperience from "../components/EachExperience";

function Experience() {
  return (
    <div className={styles.container}>
      <h1 className={styles.sectionHeader}>EXPERIENCE</h1>
      <div className={styles.experienceBox}>
        <EachExperience
          position={"AI TRAINER"}
          duration={"August 2024 - present"}
          title={"OUTLIER"}
        >
          Developed and curated increasingly challenging coding scenarios to
          help retrain models, improving accuracy and the quality of
          AI-generated code solutions. Gained Optimized LLM-generated python,
          JavaScript code by applying best for efficiency and scalability Guided
          AI models to develop production-ready frontend (React.js, Next.js) and
          backend (Django, SQL) logic, ensuring good standards were met.
        </EachExperience>
        <EachExperience
          position={"WEB DEVELOPER"}
          duration={"December 2021 - March 2024"}
          title={"NEWCORE TECHNOLOGIES"}
        >
          Completed a MERN stack development training, gaining hands-on skills
          in building full-stack web applications. Gained hands-on experience
          with Amazon web services and developed user interfaces with Modern Web
          (JavaScript, React.js, and Node.js) development tools, technologies,
          and best practices. Developed and customized high-quality websites for
          clients, ensuring responsive designs and cross-browser compatibility
          to enhance user experience.
        </EachExperience>
        <EachExperience
          position={"INTERN"}
          duration={"December 2019 - December 2021"}
          title={"COSCHARIS"}
        >
          Collaboratively administrate empowered markets via plug-and-play
          networks. Dynamically procrastinate B2C users after installed base
          benefits. Dramatically visualize customer directed convergence without
          revolutionary ROI. Diagnose vehicle brain box ansd other components
        </EachExperience>
      </div>
    </div>
  );
}

export default Experience;
