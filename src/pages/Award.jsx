import styles from './Award.module.css'
function Award() {
    return (
        <div className={styles.container}>
            <h1>AWARDS & CERTIFICATIONS</h1>
            <ul>
                <li> <p>Deep Generative AI Certification (Udemy) (01/2023) Generative AI, including machine learning fundamentals, deep generative models, natural language processing (NLP), andimageandvideo generation.</p></li>
                <li> <p>Newcore Internship Certificate</p></li>
                <li> <p>Google Analytics Certified Developer</p></li>
            </ul>
        </div>
    )
}

export default Award
