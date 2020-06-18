/** @jsx jsx */
import { jsx, Heading, Text, Styled } from 'theme-ui';
import styles from './Projects.module.css';
export default function Projects(props) {
  return (
    <article
      className={styles.projects}
      sx={{
        // applies width 100% to all viewport widths,
        // width 50% above the first breakpoint,
        // and 25% above the next breakpoint
        width: ['100%', '50%', '35%'],
        color: 'text',
        fontSize: 3,
        // boxShadow: '0 0 1px 3px rgba(0, 0, 0, .125)',
      }}
    >
      {/* <Heading as='h1'>Theme UI + Create React App</Heading> */}
      <Styled.h2>Assorted Projects</Styled.h2>
      {/* <Text variant='test'>Assorted Projects</Text> */}
      <ul>
        <li>
          <span className={styles['project-title']}>Plainest Starter</span>
          <code>React + Netlify Functions</code>
          {/* {"  ⤑ "} */}
          <br />
          <a href='https://start-plain.netlify.com'>
            https://start-plain.netlify.com
          </a>
        </li>
        <li>
          <span className={styles['project-title']}>Collate Music</span>
          <code>React + NextJS + Now</code>
          {/* {"  ⤑ "} */}
          <br />
          <a href='https://music-next.nonissue.now.sh'>
            https://music-next.nonissue.now.sh
          </a>
        </li>
        <li>
          <span className={styles['project-title']}>Plainsite</span>
          <code>React + Netlify Functions</code>
          {/* {"  ⤑ "} */}
          <br />
          <a href='https://plainest.site'>https://plainest.site</a>
        </li>
        <li>
          <span className={styles['project-title']}>
            Hammerspoon Configuration
          </span>
          <code>Lua + AppleScript + macOS automation</code>
          {/* {"  ⤑ "} */}
          <br />
          <a href='https://github.com/nonissue/hammerspoon'>
            https://github.com/nonissue/hammerspoon
          </a>
        </li>
        <li>
          <span className={styles['project-title']}>Dotfiles</span>
          <code>Fish + Tmux + Neovim + VSCode</code>
          {/* {"  ⤑ "} */}
          <br />
          <a href='https://github.com/nonissue/dotfiles'>
            https://github.com/nonissue/dotfiles
          </a>
        </li>
      </ul>
    </article>
  );
}
