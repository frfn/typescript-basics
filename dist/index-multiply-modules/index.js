"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// how to import from file if there is a default and export
const multiply_1 = __importDefault(require("./multiply"));
// how to import all files from file
const multiplyModule = __importStar(require("./multiply"));
// how to make an alias in the import
const multiply_2 = require("./multiply");
const a = 10;
const b = 10;
const c = 20;
console.log(`${a} * ${b} = ${multiply_1.default(a, b)}`); // multiply
console.log(`${a} * ${b} = ${multiplyModule.default(a, b)}`); // .default
console.log(`${c} * 2 = ${multiply_2.multiplyByTwo(c)}`); // alias
