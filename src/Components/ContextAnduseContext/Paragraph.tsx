import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Paragraphs() {
  const context = useContext(ThemeContext);
  return (
    <div>
      <p className={context.theme}>
        Context provide a way to pass data through the component tree without
        having to pass props down manually at every level
      </p>
    </div>
  );
}
export default Paragraphs;
