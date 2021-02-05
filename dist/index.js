"use strict";
function multiply(a, b) {
    return a * b;
}
const a = 10;
const b = 10;
console.log(`${a} * ${b} = ${multiply(a, b)}`);
const c = 20;
const d = 400;
console.log(`${c} * ${d} = ${multiply(c, d)}`);
console.log("So by running both npx tsc -w and nodemon -w dist -q, it works now!");
console.log("running! concurrently now too!!, if one of the processes fail, you should kill the process!!");
