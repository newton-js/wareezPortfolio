import { FaCss3, FaHtml5, FaJs, FaNode, FaPython, FaReact } from 'react-icons/fa';
import styles from './Skills.module.css';
import { FaC } from 'react-icons/fa6';
function Skills() {
    return (
        <div className={styles.container}>
            <h1>SKILLS</h1>
            <p>PROGRAMMING LANGUAGES & TOOLS</p>
            <ul className={styles.logoList}>
                <li><FaHtml5 className={styles.icons}/></li>
                <li><FaCss3 className={styles.icons}/></li>
                <li><FaJs className={styles.icons}/></li>
                <li><FaReact className={styles.icons}/></li>
                <li><FaNode className={styles.icons}/></li>
                <li><FaPython className={styles.icons}/></li>
                <li><FaC className={styles.icons} /></li>
                <li></li>
            </ul>
        </div>
    )
}

export default Skills
