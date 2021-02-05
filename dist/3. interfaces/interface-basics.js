"use strict";
/* Creating an object from interface A */
let interfaceA = { someProp: 1 };
/* Assigning interfaceA to interface B | no errors because they're the same shape */
let interfaceB = interfaceA;
/* ERROR: requires that both have the same shape */
// let interfaceC: C = interfaceA;
