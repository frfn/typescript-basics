"use strict";
/* -------------------- */
/*        Boolean       */
/* -------------------- */
let b = true;
/* ------------------------------------------------------------ */
/*        Number - decimal | binary | octal | hexadecimal       */
/* ------------------------------------------------------------ */
// they're all === 1, 1+1+1+1=4
let number = 1 + 0b1 + 0o1 + 0x1;
/* -------------------- */
/*         String       */
/* -------------------- */
const hello_world = "Hello World";
/* takes into account the line breaks */
const helloWorld = `
    ${10 + 10}
    ${hello_world}
`;
// console.log(helloWorld);
/* ------------------------------- */
/*        Null and Undefined       */
/* ------------------------------- */
let n = null;
let u = undefined;
function uppercaseFirstLetter(str) {
    return str[0].toUpperCase() + str.substring(1);
}
// console.log(uppercaseFirstLetter("hello World"));
function uppercaseLastLetter(str) {
    // return str[0].toUpperCase() + str.substring(1); | gives error, str might be NULL | so check first with 'if' statement
    if (str) {
        return str[0].toUpperCase() + str.substring(1);
    }
}
// non primitive types like: [], {}, new Map(); are object
const myObj = new Map();
/* -------------------- */
/*          Void        */
/* -------------------- */
// like java, it is a function that does not return a value
function log(message) {
    console.log(message);
}
// log("void test!");
/* --------------------------------- */
/*        Array | Tuple | Enum       */
/* --------------------------------- */
// 1. arrays
const myArr = ["flex", "cole"];
const myStringArray = myArr; // generic array type
// 2. tuples | represents fixed number of elements | tuple expects an array with string as the FIRST element and number as the SECOND element
let tuple = ["str", 1];
// 3. enum | a lists of constants | SHALL be used instead of string constants, like actionTypes, just use enum! Enums are great!
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
    // Assigning numbers to enum | ex. Color[100] = White | you can access by number
    Color[Color["White"] = 100] = "White";
    Color[Color["Black"] = 101] = "Black";
    // Assigning strings to enum | ex. Color["Stripe"] = stripe | similar to object access
    Color["Stripe"] = "stripe";
    Color["Solid"] = "solid";
})(Color || (Color = {}));
let myFavColor = Color.Red;
// console.log(Color.Red, Color.Green, Color.Blue, myFavColor); /* each element inside enum represents a number! */
/* ------------------ */
/*         Any        */
/* ------------------ */
let ANY;
ANY = new Map();
ANY = null;
ANY = undefined;
ANY = Array();
ANY = Object;
ANY = true;
/* ------------------------------ */
/*         Type Assertions        */
/* ------------------------------ */
// Used if we know the type!
/* note, this will cause error bc there is no index.html file... :) */
const email = document.getElementById("email");
if (email) {
    email.addEventListener("change", (e) => {
        if (e) {
            // we know that currentTarget is an HTML input element
            // this is called type assertion | now you can log input.value | without type assertion, you CAN NOT.
            const input = e.currentTarget;
            /* const input = <HTMLInputElement>e.currentTarget; // NOT GOOD. TSX + JSX uses angle brackets for components!! You will confuse the compiler. */
            console.log(input.value);
        }
    });
}
