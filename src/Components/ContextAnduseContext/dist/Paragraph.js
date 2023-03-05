"use strict";
exports.__esModule = true;
var react_1 = require("react");
var ThemeContext_1 = require("./ThemeContext");
function Paragraphs() {
    var context = react_1.useContext(ThemeContext_1.ThemeContext);
    return (React.createElement("div", null,
        React.createElement("p", { className: context.theme }, "Context provide a way to pass data through the component tree without having to pass props down manually at every level")));
}
exports["default"] = Paragraphs;
