"use strict";
exports.__esModule = true;
exports.delJob = exports.addJob = exports.setJob = void 0;
var const_1 = require("./const");
exports.setJob = function (payload) {
    return {
        type: const_1.SET_JOB,
        payload: payload
    };
};
exports.addJob = function (payload) {
    return {
        type: const_1.ADD_JOB,
        payload: payload
    };
};
exports.delJob = function (payload) {
    return {
        type: const_1.DEL_JOB,
        payload: payload
    };
};
