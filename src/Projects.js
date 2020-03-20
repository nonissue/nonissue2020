/** @jsx jsx */
import { jsx } from "theme-ui";
import styles from "./Projects.module.css";
export default function Projects(props) {
  return (
    <article
      sx={{
        // applies width 100% to all viewport widths,
        // width 50% above the first breakpoint,
        // and 25% above the next breakpoint
        width: ["100%", "50%", "35%"],
        // color: "primary",
        fontSize: 2
        // boxShadow: "0 0 1px 3px rgba(0, 0, 0, .125)"
      }}
    >
      <h3>Assorted Projects</h3>
      <ul>
        <li>
          <span className={styles["project-title"]}>Plainest Starter</span>
          <code>React + Netlify Functions</code>
          {/* {"  ⤑ "} */}
          <br />
          <a href="https://start-plain.netlify.com">
            https://start-plain.netlify.com
          </a>
        </li>
        <li>
          <span className={styles["project-title"]}>Collate Music</span>
          <code>React + NextJS + Now</code>
          {/* {"  ⤑ "} */}
          <br />
          <a href="https://music-next.nonissue.now.sh">
            https://music-next.nonissue.now.sh
          </a>
        </li>
        <li>
          <span className={styles["project-title"]}>Plainsite</span>
          <code>React + Netlify Functions</code>
          {/* {"  ⤑ "} */}
          <br />
          <a href="https://plainest.site">https://plainest.site</a>
        </li>
      </ul>
    </article>
  );
}
