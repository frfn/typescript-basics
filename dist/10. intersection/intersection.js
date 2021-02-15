"use strict";
const intersectionA = { a: 10 };
const intersectionB = { b: 5 };
// combines the interfaces using spread operator
const combineInterface = (objA, objB) => {
    return Object.assign(Object.assign({}, objA), objB);
};
function combineInterfaceResults(obj) {
    return obj.a + obj.b;
}
const resultObj = combineInterface(intersectionA, intersectionB);
console.log(resultObj);
console.log(combineInterfaceResults(resultObj));
const oldState = {
    loading: false,
    error: null,
};
const newState = {
    loading: true,
    error: undefined,
};
const updateObject = (oldState, newState) => {
    return Object.assign(Object.assign({}, oldState), newState);
};
// const updateObject = <T extends IState>(
// 	oldState: T,
// 	newState: T
// ): IState /* & IState */ => {
// 	return {
// 		...oldState,
// 		...newState,
// 	};
// };
console.log(updateObject(oldState, newState));
let XY; // declaring a variable... that's it. | ex. let XY;
XY = { x: 1, y: 2 };
