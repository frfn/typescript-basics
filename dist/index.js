"use strict";
function multiply(a, b) {
    return a * b;
}
const a = 2;
const b = 2;
console.log(`${a} * ${b} = ${multiply(a, b)}`);
const c = 20;
const d = 400;
console.log(`${c} * ${d} = ${multiply(c, d)}`);
console.log("So by running both npx tsc -w and nodemon, it works.");
