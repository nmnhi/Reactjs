"use strict";
exports.__esModule = true;
var react_1 = require("react");
// useReducer: cung cấp thêm 1 sự lựa chọn để xử lý state trong function component có thể thay thế useState và ngựợc lại
// Sử dụng trong trường hợp có state phức tạp
// useState
// 1. Init state: 0
// 2. Action: Up(state + 1)/ Down (state-1)
//useReducer
// 1. Init state: 0 (giá trị khởi tạo ban đầu của state)
// 2. Action: Up(state + 1)/ Down (state-1) (khai báo các action sẽ xử lý)
// 3. Reducer (tạo mới 1 function để xử lý các hành động mong muốn)
// 4. Dispatch (khai báo tương tự như useState nhưng thay đổi setCount bằng 1 tên khác.
// Bên cạnh đó ở tham số của useReducer tham số đầu tiên sẽ là function reducer và tham số thứ 2 sẽ là biến khởi tạo cho state)
// Init state
var initState = 0;
// Action
var UP_ACTION = "up";
var DOWN_ACTION = "down";
// Reducer
var reducer = function (state, action) {
    switch (action) {
        case UP_ACTION:
            return state + 1;
        case DOWN_ACTION:
            return state - 1;
        default:
            throw new Error("Invalid action");
    }
};
// Note: the first time run app reducer will not be called
function UseReducer() {
    //   dispatch
    var _a = react_1.useReducer(reducer, initState), count = _a[0], dispatch = _a[1];
    return (React.createElement("div", { className: "flex flex-col gap-6 border border-gray-500 px-2 py-6 max-w-[200px] items-center rounded-lg bg-gray-100 mt-4" },
        React.createElement("h1", { className: "px-5 py-2 border border-gray-500 max-w-[50px] text-center rounded-lg font-bold" }, count),
        React.createElement("button", { onClick: function () { return dispatch(DOWN_ACTION); }, className: "px-3 py-1 rounded-lg border border-gray-500 max-w-[150px] bg-blue-400" }, "Down"),
        React.createElement("button", { onClick: function () { return dispatch(UP_ACTION); }, className: "px-3 py-1 rounded-lg border border-gray-500 max-w-[150px] bg-blue-400" }, "Up")));
}
exports["default"] = UseReducer;
