"use strict";
/* ------------------ */
/*      Functions     */
/* ------------------ */
// a, b has an error since they are not explicitly typesafe
function add(a, b) {
    return a + b;
}
// Type Safe
function sum(a, b) {
    return a + (b || 0);
}
// arrow function | Type Safe
const reactFnComponent = (props) => { };
const divide = (a, b) => a / b; // no need to TypeSafe, it is infered through MyFunc!
/* Alterations | ? and (b || 0) | default values | Check notes */
/* ------------------------------------------------------- */
/*      ... args, multiple arguments | rest operator       */
/* ------------------------------------------------------- */
/*------- enterFaveFood -------*/
function enterFavFood(...food) {
    console.log(food);
}
// enterFavFood("mango", "apples", "grapes", "oranges");
/*------- sumAll -------*/
function sumAll(...numbers) {
    console.log(
    /* starting value is 0 */
    numbers.reduce((prevValue, currValue) => prevValue + currValue, 0));
}
// sumAll(1, 2, 3, 4);
/*------- rest operator arguments | receiving two required arguments first -------*/
function enterTwoValuesOrMore(value1, value2, ...values) {
    const printThis = `value 1: ${value1} | value 2: ${value2} | values: ${values}`;
    console.log(printThis);
}
enterTwoValuesOrMore(1, 2, 3, 4, 5, 6, 7, 8, 9);
function calcArea(...args) {
    if (args.length === 2) {
        return args[0] * args[1];
    }
    if (args.length === 3) {
        return args[0] * args[1] * args[2];
    }
    if (args.length > 3) {
        return "Cannot have more than 3 arguments.";
    }
    return "Should not reach here.";
}
console.log(calcArea(2, 3, 4));
