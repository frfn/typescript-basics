"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiplyByTwo = void 0;
// export default, this will be no { } when imported
function multiply(a, b) {
    return a * b;
}
exports.default = multiply;
// export, will need { } when exported from file
function multiplyByTwo(num) {
    return multiply(num, 2);
}
exports.multiplyByTwo = multiplyByTwo;
