"use strict";
/* ---------- */
/*  Function  */
/* ---------- */
function ConditionFunction(value) {
    const someOtherConditionalFunction = (someArg) => {
        // must have both TYPE A | TYPE B because someArg can be either
        const checkToSeeIfBoolean = someArg;
    };
    return someOtherConditionalFunction;
}
// hover over `result` | change argument to either a `STRING | NUMBER` or `BOOLEAN`
// it will either show TYPE A or TYPE B respectively
const result = ConditionFunction(true);
const thisWillReturnTrue = true;
