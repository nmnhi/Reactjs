"use strict";
exports.__esModule = true;
var react_1 = require("react");
function ContentMemo(_a) {
    var count = _a.count;
    console.log("re-render");
    return (React.createElement("div", null,
        React.createElement("h1", null,
            "Hello World ",
            count)));
}
exports["default"] = react_1.memo(ContentMemo);
