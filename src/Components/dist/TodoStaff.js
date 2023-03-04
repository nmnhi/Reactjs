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
exports.__esModule = true;
var react_1 = require("react");
// Init state
var initState = {
    staff: {
        name: "",
        address: "",
        age: ""
    },
    staffs: []
};
// Action
var SET_NAME = "set_name";
var SET_ADDR = "set_addr";
var SET_AGE = "set_add";
var ADD_STAFF = "add_staff";
var DEL_STAFF = "del_staff";
var setName = function (payload) {
    console.log(payload);
    return {
        type: SET_NAME,
        payload: payload
    };
};
var setAddr = function (payload) {
    return {
        type: SET_ADDR,
        payload: payload
    };
};
var setAge = function (payload) {
    return {
        type: SET_AGE,
        payload: payload
    };
};
var addStaff = function (payload) {
    return {
        type: ADD_STAFF,
        payload: payload
    };
};
var delStaff = function (payload) {
    return {
        type: DEL_STAFF,
        payload: payload
    };
};
// Reducer
var reducer = function (state, action) {
    // console.log(state);
    // console.log(action);
    var newState;
    switch (action.tpye) {
        case SET_NAME:
            newState = __assign(__assign({}, state), { staff: __assign(__assign({}, state.staff), { name: action.payload }) });
            break;
        // default:
        //   throw new Error("Invalid action");
    }
    console.log(newState);
    return newState;
};
function Staff() {
    var _a = react_1.useReducer(reducer, initState), state = _a[0], dispatch = _a[1];
    var staff = state.staff, staffs = state.staffs;
    return (React.createElement("div", { className: "max-w-[1440px] grid grid-cols-12 gap-8" },
        React.createElement("div", { className: "col-span-4 border  h-fit pb-6 mt-6 rounded-lg bg-gray-50 flex flex-col gap-4 shadow-xl" },
            React.createElement("h1", { className: "w-full text-2xl text-gray-600 h-20 flex items-center justify-center border-b border-gray-300" }, "Qu\u1EA3n l\u00FD nh\u00E2n vi\u00EAn"),
            React.createElement("div", { className: "w-full h-full flex flex-col gap-4 px-4" },
                React.createElement("div", { className: "w-full flex flex-col gap-2 border border-gray-300 rounded-lg pb-4" },
                    React.createElement("div", { className: "w-full h-14 border-b border-gray-300 flex items-center justify-center bg-gray-100" }, "Th\u00EAm nh\u00E2n vi\u00EAn"),
                    React.createElement("div", { className: "w-full flex flex-col px-4 gap-6" },
                        React.createElement("div", { className: "w-full flex flex-col gap-2" },
                            React.createElement("label", { htmlFor: "name" }, "T\u00EAn nh\u00E2n vi\u00EAn"),
                            React.createElement("input", { value: staff.name, type: "text", id: "name", className: "w-full border border-gray-400 h-10 rounded-lg px-4", placeholder: "Nh\u1EADp h\u1ECD v\u00E0 t\u00EAn...", onChange: function (e) { return dispatch(setName(e.target.value)); } })),
                        React.createElement("div", { className: "w-full flex flex-col gap-2" },
                            React.createElement("label", { htmlFor: "address" }, "\u0110\u1ECBa ch\u1EC9"),
                            React.createElement("input", { value: staff.address, type: "text", id: "address", className: "w-full border border-gray-400 h-10 rounded-lg px-4", placeholder: "Nh\u1EADp \u0111\u1ECBa ch\u1EC9...", onChange: function (e) { return dispatch(setAddr(e.target.value)); } })),
                        React.createElement("div", { className: "w-full flex flex-col gap-2" },
                            React.createElement("label", { htmlFor: "address" }, "N\u0103m sinh"),
                            React.createElement("input", { value: staff.age, type: "text", id: "address", className: "w-full border border-gray-400 h-10 rounded-lg px-4", placeholder: "Nh\u1EADp n\u0103m sinh...", onChange: function (e) { return dispatch(setAge(e.target.value)); } }))))),
            React.createElement("div", { className: "w-full h-16 flex items-center justify-center" },
                React.createElement("button", { className: "px-4 py-2 border border-blue-400 rounded-lg bg-blue-400 text-white hover:bg-blue-500" }, "Th\u00EAm"))),
        React.createElement("div", { className: "col-span-8 h-[500px] pb-6 mt-6 flex flex-col gap-4" },
            React.createElement("table", { className: "w-full " },
                React.createElement("thead", { className: "w-full h-14 bg-gray-300" },
                    React.createElement("tr", null,
                        React.createElement("th", null, "H\u1ECD v\u00E0 t\u00EAn"),
                        React.createElement("th", null, "N\u0103m sinh"),
                        React.createElement("th", null, "\u0110\u1ECBa ch\u1EC9"),
                        React.createElement("th", null, "Thao t\u00E1c"))),
                React.createElement("tbody", { className: "w-full  bg-slate-50 text-center" },
                    React.createElement("tr", { className: "w-full h-14" },
                        React.createElement("td", null, "Nguy\u1EC5n Minh Nh\u00ED"),
                        React.createElement("td", null, "1995"),
                        React.createElement("td", null, "Long an"),
                        React.createElement("td", null, "Xo\u00E1")),
                    React.createElement("tr", { className: "w-full h-14" },
                        React.createElement("td", null, "Nguy\u1EC5n Minh Nh\u00ED"),
                        React.createElement("td", null, "1995"),
                        React.createElement("td", null, "Long an"),
                        React.createElement("td", null, "Xo\u00E1")))))));
}
exports["default"] = Staff;
