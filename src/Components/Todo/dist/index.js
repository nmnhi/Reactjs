"use strict";
exports.__esModule = true;
var react_1 = require("react");
var reducer_1 = require("./reducer");
var action_1 = require("./dist/action");
var logger_1 = require("./logger");
// Dispatch
function TodoApp() {
    // State manage value job and jobs, dispatch manage action function ex: setJob()
    var _a = react_1.useReducer(logger_1["default"](reducer_1["default"]), reducer_1.initState), state = _a[0], dispatch = _a[1];
    var job = state.job, jobs = state.jobs;
    var inputRef = react_1.useRef();
    var handleSubmit = function () {
        dispatch(action_1.addJob(job));
        dispatch(action_1.setJob(""));
        inputRef.current.focus();
    };
    return (React.createElement("div", null,
        React.createElement("h3", { className: " my-4 font-bold text-gray-700" }, "Todo"),
        React.createElement("input", { ref: inputRef, value: job, className: "border border-gray-400 rounded-lg py-1 px-3 mr-4", type: "text", placeholder: "Enter todo...", onChange: function (e) { return dispatch(action_1.setJob(e.target.value)); } }),
        React.createElement("button", { onClick: handleSubmit, className: "px-3 py-1 border border-blue-400 rounded-lg bg-blue-400 text-white" }, "Add"),
        state.jobs.length !== 0 && (React.createElement("div", { className: "mt-4 border border-gray-400 rounded-lg max-w-[300px] px-4 py-4" }, jobs.map(function (job, index) { return (React.createElement("div", { key: index, className: "flex items-center" },
            React.createElement("li", { className: "w-full bg-gray-200 px-2 py-3 rounded-lg my-1 max-w-[150px]" }, job),
            React.createElement("button", { onClick: function () { return dispatch(action_1.delJob(index)); }, className: "border border-red-500 bg-red-400 ml-3 rounded-lg w-[100px] h-12 text-center" }, "Delete"))); })))));
}
exports["default"] = TodoApp;
