import React from "react";
import styles from "./App.module.css";

// import ThemeUI from "./ThemeUI";
import Projects from "./Projects";
import logo1024 from "./logo1024.png";

function App() {
  return (
    <div className={styles.app}>
      <header className={styles["App-header"]}>
        <img alt="logo" src={logo1024} width="256px" height="256px" />
        <h1>NONISSUE</h1>
        <ul>
          <li>
            <a href="https://github.com/nonissue">Github</a>
          </li>
          <li>
            <a href="https://instagram.com/nonissue">IG</a>
          </li>
          <li>
            <a href="mailto:hi@nonissue.org">Mail</a>
          </li>
        </ul>
      </header>
      <Projects />
      {/* <ThemeUI /> */}
    </div>
  );
}

export default App;
