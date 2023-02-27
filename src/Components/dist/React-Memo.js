"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Content_Memo_1 = require("./Content-Memo");
// 1. memo() => Higher Order Component (HOC)
// 2. useCallback()
//  - Reference type
//  - React memo()
// Hook
// HOC
// Render props
function Memo() {
    var _a = react_1.useState(0), count = _a[0], setCount = _a[1];
    var handleIncrease = function () {
        setCount(function (prevCount) { return prevCount + 1; });
    };
    return (React.createElement("div", null,
        React.createElement(Content_Memo_1["default"], { count: count }),
        React.createElement("h1", null, count),
        React.createElement("button", { onClick: handleIncrease, className: "px-3 py-1 border border-gray-400 rounded-lg" }, "Click me")));
}
exports["default"] = Memo;
