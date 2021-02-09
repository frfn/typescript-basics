"use strict";
// T is {someProp: number} | function
const myObjectAlias = {
    someProp: 1,
    translate: (str) => `Translated ${str}`,
};
const myObjectInterface = {
    someProp: 1,
    translate: (str) => `Hi ${str}`,
};
