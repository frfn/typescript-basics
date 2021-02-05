// how to import from file if there is a default and export
import multiply, { multiplyByTwo } from "./multiply";

// how to import all files from file
import * as multiplyModule from "./multiply";

// how to make an alias in the import
import { multiplyByTwo as mBy2, HelloWorld } from "./multiply";

const a = 10;
const b = 10;
const c = 20;

console.log(`${a} * ${b} = ${multiply(a, b)}`); // multiply
console.log(`${a} * ${b} = ${multiplyModule.default(a, b)}`); // .default
console.log(`${c} * 2 = ${mBy2(c)}`); // alias
