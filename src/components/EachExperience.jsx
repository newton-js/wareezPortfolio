import styles from "./EachExperience.module.css";
// eslint-disable-next-line react/prop-types
function EachExperience({ position, duration, title, children }) {
  return (
    <div className={styles.container}>
      <div className={styles.flex}>
        <h3>{position}</h3>
        <p>{duration}</p>
      </div>
      <p className={styles}>{title}</p>
      <p className={styles.text}>{children}</p>
    </div>
  );
}

export default EachExperience;
