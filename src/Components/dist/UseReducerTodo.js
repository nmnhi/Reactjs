"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
// Init state
var initState = {
    job: "",
    jobs: []
};
// Action
var SET_JOB = "set_job";
var ADD_JOB = "add_job";
var DEL_JOB = "del_job";
var setJob = function (payload) {
    return {
        type: SET_JOB,
        payload: payload
    };
};
var addJob = function (payload) {
    return {
        type: ADD_JOB,
        payload: payload
    };
};
var delJob = function (payload) {
    return {
        type: DEL_JOB,
        payload: payload
    };
};
// Reducer
var reducer = function (state, action) {
    console.log(action);
    var newState;
    switch (action.type) {
        case SET_JOB:
            newState = __assign(__assign({}, state), { job: action.payload });
            break;
        case ADD_JOB:
            newState = __assign(__assign({}, state), { jobs: __spreadArrays(state.jobs, [action.payload]) });
            break;
        case DEL_JOB:
            var newJobs = __spreadArrays(state.jobs);
            newJobs.splice(action.payload, 1);
            newState = __assign(__assign({}, state), { jobs: newJobs });
            break;
        default:
            throw new Error("Invalid action");
    }
    return newState;
};
// Dispatch
function Todo() {
    // State manage value job and jobs, dispatch manage action function ex: setJob()
    var _a = react_1.useReducer(reducer, initState), state = _a[0], dispatch = _a[1];
    var job = state.job, jobs = state.jobs;
    var inputRef = react_1.useRef();
    var handleSubmit = function () {
        dispatch(addJob(job));
        dispatch(setJob(""));
        inputRef.current.focus();
    };
    return (React.createElement("div", null,
        React.createElement("h3", { className: " my-4 font-bold text-gray-700" }, "Todo"),
        React.createElement("input", { ref: inputRef, value: job, className: "border border-gray-400 rounded-lg py-1 px-3 mr-4", type: "text", placeholder: "Enter todo...", onChange: function (e) { return dispatch(setJob(e.target.value)); } }),
        React.createElement("button", { onClick: handleSubmit, className: "px-3 py-1 border border-blue-400 rounded-lg bg-blue-400 text-white" }, "Add"),
        state.jobs.length !== 0 && (React.createElement("div", { className: "mt-4 border border-gray-400 rounded-lg max-w-[300px] px-4 py-4" }, jobs.map(function (job, index) { return (React.createElement("div", { key: index, className: "flex items-center" },
            React.createElement("li", { className: "w-full bg-gray-200 px-2 py-3 rounded-lg my-1 max-w-[150px]" }, job),
            React.createElement("button", { onClick: function () { return dispatch(delJob(index)); }, className: "border border-red-500 bg-red-400 ml-3 rounded-lg w-[100px] h-12 text-center" }, "Delete"))); })))));
}
exports["default"] = Todo;
