"use strict";
exports.__esModule = true;
var react_1 = require("react");
var UseReducerTodo_1 = require("./UseReducerTodo");
// Mounted & Unmounted
// Mount là thời điểm đưa 1 component vào sử dụng còn unmounted là thời đưa component ra khỏi và không sử dụng nó nữa
function Mounted() {
    var _a = react_1.useState(false), show = _a[0], setShow = _a[1];
    return (React.createElement("div", null,
        React.createElement("button", { onClick: function () { return setShow(!show); }, className: "px-4 py-2 border border-gray-400 rounded-lg" }, "Show"),
        show && React.createElement(UseReducerTodo_1["default"], null)));
}
exports["default"] = Mounted;
