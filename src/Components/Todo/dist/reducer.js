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
exports.initState = void 0;
var const_1 = require("./const");
// Init state
exports.initState = {
    job: "",
    jobs: []
};
// Reducer
var reducer = function (state, action) {
    switch (action.type) {
        case const_1.SET_JOB:
            return __assign(__assign({}, state), { job: action.payload });
        case const_1.ADD_JOB:
            return __assign(__assign({}, state), { jobs: __spreadArrays(state.jobs, [action.payload]) });
        case const_1.DEL_JOB:
            var newJobs = __spreadArrays(state.jobs);
            newJobs.splice(action.payload, 1);
            return __assign(__assign({}, state), { jobs: newJobs });
        default:
            throw new Error("Invalid action");
    }
};
exports["default"] = reducer;
