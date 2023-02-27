"use strict";
exports.__esModule = true;
var react_1 = require("react");
function Children(_a) {
    var onIncrease = _a.onIncrease;
    console.log("Re-render");
    return (React.createElement("div", null,
        React.createElement("button", { onClick: onIncrease, className: "px-3 py-1 border border-gray-400 rounded-lg" }, "Click me!"),
        React.createElement("h1", null, "Hello World")));
}
exports["default"] = react_1.memo(Children);
