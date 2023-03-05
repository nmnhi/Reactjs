"use strict";
exports.__esModule = true;
var react_1 = require("react");
var client_1 = require("react-dom/client");
require("./index.scss");
var App_1 = require("./App");
var reportWebVitals_1 = require("./reportWebVitals");
var ThemeContext_1 = require("./Components/ContextAnduseContext/ThemeContext");
// Fake comment
function emitComment(id) {
    setInterval(function () {
        window.dispatchEvent(new CustomEvent("lesson-" + id, {
            detail: "N\u1ED9i dung comment c\u1EE7a lesson " + id
        }));
    }, 2000);
}
emitComment(1);
emitComment(2);
emitComment(3);
var root = client_1["default"].createRoot(document.getElementById("root"));
root.render(react_1["default"].createElement(ThemeContext_1.ThemeProvider, null,
    react_1["default"].createElement(App_1["default"], null)));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals_1["default"]();
