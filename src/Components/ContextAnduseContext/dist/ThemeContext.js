"use strict";
exports.__esModule = true;
exports.ThemeContext = exports.ThemeProvider = void 0;
var react_1 = require("react");
// Context
// CompA => CompB => CompC
// Them: Dark/Light
// 1. Create Context
// 2. Provider
// 3. Consumer
var ThemeContext = react_1.createContext(0);
exports.ThemeContext = ThemeContext;
function ThemeProvider(_a) {
    var children = _a.children;
    var _b = react_1.useState("dark"), theme = _b[0], setTheme = _b[1];
    var toggleTheme = function () {
        setTheme(theme === "dark" ? "light" : "dark");
    };
    var value = {
        theme: theme,
        toggleTheme: toggleTheme
    };
    return (React.createElement(ThemeContext.Provider, { value: value }, children));
}
exports.ThemeProvider = ThemeProvider;
