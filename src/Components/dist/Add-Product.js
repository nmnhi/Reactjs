"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
function AddProduct() {
    var _a = react_1.useState(""), name = _a[0], setName = _a[1];
    var _b = react_1.useState(""), price = _b[0], setPrice = _b[1];
    var _c = react_1.useState([]), products = _c[0], setProducts = _c[1];
    var nameRef = react_1.useRef();
    var handleSubmit = function () {
        setProducts(__spreadArrays(products, [{ name: name, price: +price }]));
        setName("");
        setPrice("");
        nameRef.current.focus();
    };
    var total = react_1.useMemo(function () {
        var result = products.reduce(function (result, prod) {
            console.log("Tính toán lại....");
            return result + prod.price;
        }, 0);
        return result;
    }, [products]);
    return (React.createElement("div", { className: "mt-4" },
        React.createElement("input", { ref: nameRef, className: "px-2 py-1 w-52 h-11 border border-gray-400 rounded-md flex", type: "text", value: name, placeholder: "Enter name...", onChange: function (e) { return setName(e.target.value); } }),
        React.createElement("input", { className: "px-2 py-1 w-52 h-11 border border-gray-400 rounded-md flex mt-4", type: "text", value: price, placeholder: "Enter price...", onChange: function (e) { return setPrice(e.target.value); } }),
        React.createElement("button", { onClick: handleSubmit, className: "rounded-lg px-3 py-1 shadow-xl border border-gray-400 bg-blue-500 text-white mt-4" }, "Th\u00EAm s\u1EA3n ph\u1EA9m m\u1EDBi"),
        React.createElement("br", null),
        React.createElement("div", { className: "mt-4" },
            "Total:",
            total,
            React.createElement("ul", null, products.map(function (product, index) { return (React.createElement("li", { key: index },
                product.name,
                " - ",
                product.price)); })))));
}
exports["default"] = AddProduct;
