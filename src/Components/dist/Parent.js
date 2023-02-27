"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Children_1 = require("./Children");
function Parent() {
    var _a = react_1.useState(0), count = _a[0], setCount = _a[1];
    var handleIncrease = react_1.useCallback(function () {
        setCount(function (prevCount) { return prevCount + 1; });
    }, []);
    return (React.createElement("div", null,
        React.createElement(Children_1["default"], { onIncrease: handleIncrease }),
        React.createElement("h1", null, count)));
}
exports["default"] = Parent;
