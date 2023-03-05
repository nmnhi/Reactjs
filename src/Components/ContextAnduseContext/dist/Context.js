"use strict";
exports.__esModule = true;
require("../../App.scss");
var Content_1 = require("./Content");
var ThemeContext_1 = require("./ThemeContext");
var react_1 = require("react");
// Context
// CompA => CompB => CompC
// Them: Dark/Light
// 1. Create Context
// 2. Provider
// 3. Consumer
function Context() {
    var context = react_1.useContext(ThemeContext_1.ThemeContext);
    return (React.createElement("div", { className: "mt-6" },
        React.createElement("button", { onClick: context.toggleTheme, className: "px-3 py-1 border border-gray-400 rounded-lg" }, "Toggle theme"),
        React.createElement(Content_1["default"], null)));
}
exports["default"] = Context;
