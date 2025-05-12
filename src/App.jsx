import Experience from "./pages/Experience";
import Hero from "./pages/Hero";
// import Nav from "./components/Nav";
import styles from "./App.module.css";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Interest from "./pages/Interest";
import Award from "./pages/Award";
import Aside from "./pages/Aside";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { useState } from "react";
import Project from "./pages/Project";

function App() {
  const [sidebar, setSidebar] = useState(false);
  function handleSidebar (){
    setSidebar(() => !sidebar)
  }
  return (
    <div className={styles.container}>
      <Aside toggle={sidebar} setToggle={setSidebar}/>
      {sidebar ? 
      <IoMdClose onClick={handleSidebar} className={styles.menu} /> :
      <IoMdMenu onClick={handleSidebar} className={styles.menu}/> }
      <main className={styles.main}>
        <Hero />
        <Experience />
        <Project />
        <Education />
        <Skills />
        <Interest />
        <Award />
      </main>
    </div>
  );
}


export default App;
