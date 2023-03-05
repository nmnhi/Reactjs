import "../../App.scss";
import NewContent from "./Content";
import { ThemeContext } from "./ThemeContext";
import { useContext } from "react";

function Context() {
  const context = useContext(ThemeContext);
  return (
    <div className="mt-6">
      <button
        onClick={context.toggleTheme}
        className="px-3 py-1 border border-gray-400 rounded-lg"
      >
        Toggle theme
      </button>
      <NewContent />
    </div>
  );
}
export default Context;
