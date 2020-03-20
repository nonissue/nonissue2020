/** @jsx jsx */
import { jsx } from "theme-ui";

export default function ThemeUI(props) {
  return (
    <div
      sx={{
        fontWeight: "bold",
        fontSize: 6, // picks up value from `theme.fontSizes[4]`
        color: "primary" // picks up value from `theme.colors.primary`
      }}
    >
      Hello
    </div>
  );
}
