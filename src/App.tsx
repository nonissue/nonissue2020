import React from "react";
import styles from "./App.module.css";
import logo512 from "./logo512.png";

function App() {
  return (
    <div className={styles.app}>
      <header className={styles["App-header"]}>
        <img alt="logo" src={logo512} width="128px" height="128px" />
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
      <article>
        <h3>Assorted Projects</h3>
        <ul>
          <li>
            Plainest Starter <code>React/Netlify Functions</code>
            {"  ⤑ "}
            <a href="https://start-plain.netlify.com">
              https://start-plain.netlify.com
            </a>
          </li>
          <li>
            Collate Music <code>React/NextJS/Now</code>
            {"  ⤑ "}
            <a href="https://music-next.nonissue.now.sh">
              https://music-next.nonissue.now.sh
            </a>
          </li>
          <li>
            Plainsite <code>React/Netlify Functions</code>
            {"  ⤑ "}
            <a href="https://plainest.site">https://plainest.site</a>
          </li>
        </ul>
      </article>
    </div>
  );
}

export default App;
