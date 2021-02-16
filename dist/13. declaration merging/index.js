"use strict";
/* -------------------------- */
/*     Merging Interfaces     */
/* -------------------------- */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
let myCart = {
    x: 10,
    calculateTotal(options) {
        if (options && options.discountCode) {
            // do something
        }
        return 10;
    },
};
/* ------------------------- */
/*     Merging Namespace     */
/* ------------------------- */
var MyNamespace;
(function (MyNamespace) {
    MyNamespace.x = 10;
})(MyNamespace || (MyNamespace = {}));
(function (MyNamespace) {
    MyNamespace.getX = () => MyNamespace.x;
})(MyNamespace || (MyNamespace = {}));
// accessing x
MyNamespace.x;
console.log(MyNamespace.getX());
// creating an obj of type SomeInterface | combines x and y
const objOfTypeSomeInterface = {
    x: 10,
    y: 20,
};
/* ------------ */
/*     Enum     */
/* ------------ */
var Vegetables;
(function (Vegetables) {
    Vegetables["Tomato"] = "tomato";
    Vegetables["Onion"] = "onion";
})(Vegetables || (Vegetables = {}));
(function (Vegetables) {
    function makeSalad() {
        return Vegetables.Tomato + Vegetables.Onion;
    }
    Vegetables.makeSalad = makeSalad;
})(Vegetables || (Vegetables = {}));
/* ---------------------------------------------------- */
/*     React | You do not need to do any of this...     */
/* ---------------------------------------------------- */
const React = __importStar(require("react"));
const server_1 = require("react-dom/server");
// this is how you access the augmented Component
React.Component.prototype.helloWorld = () => {
    return "Hello World";
};
class MyClassComponent extends React.Component {
    render() {
        return React.createElement("div", null, this.helloWorld());
    }
}
console.log(server_1.renderToString(React.createElement(MyClassComponent, null)));
