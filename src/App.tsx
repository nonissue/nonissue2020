import React from "react";
import styles from "./App.module.css";
import logo512 from "./logo512.png";

function App() {
  return (
    <div className={styles.app}>
      <header className={styles["App-header"]}>
        <img alt="logo" src={logo512} width="256px" height="256px" />
        <h1>NONISSUE</h1>
        <ul>
          <li>
            <a href="https://nonissue.org">Web</a>
          </li>
          <li>
            <a href="https://instagram.com/nonissue">IG</a>
          </li>
          <li>
            <a href="mailto:hi@nonissue.org">Mail</a>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default App;
