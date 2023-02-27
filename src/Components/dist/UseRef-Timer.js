"use strict";
exports.__esModule = true;
var react_1 = require("react");
// Lưu các giá trị qua một tham chiếu bên ngoài
// function component
function UseRefTimer() {
    var _a = react_1.useState(60), count = _a[0], setCount = _a[1];
    var timer;
    var timerId = react_1.useRef(timer);
    var prevCount = react_1.useRef(timer);
    var h1Ref = react_1.useRef(timer);
    react_1.useEffect(function () {
        prevCount.current = count;
    }, [count]);
    react_1.useEffect(function () {
        console.log(h1Ref.current);
    });
    var handleStart = function () {
        timerId.current = setInterval(function () {
            setCount(function (prevCount) { return prevCount - 1; });
        }, 1000);
    };
    var handleStop = function () {
        clearInterval(timerId.current);
    };
    console.log(count, prevCount.current);
    return (React.createElement("div", null,
        React.createElement("h1", { ref: h1Ref }, count),
        React.createElement("button", { onClick: handleStart, className: "px-3 py-1 border border-gray-400 rounded-lg" }, "Start"),
        React.createElement("button", { onClick: handleStop, className: "px-3 py-1 border border-gray-400 rounded-lg ml-2" }, "Stop")));
}
exports["default"] = UseRefTimer;
