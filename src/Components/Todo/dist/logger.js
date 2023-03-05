"use strict";
exports.__esModule = true;
function logger(reducer) {
    return function (prevState, action) {
        console.group(action.type);
        console.log("Action:", action);
        console.log("Prev state:", prevState);
        var newState = reducer(prevState, action);
        console.log("Next state", newState);
        console.groupEnd();
        return newState;
    };
}
exports["default"] = logger;
