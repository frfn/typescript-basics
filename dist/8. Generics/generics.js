"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayList = void 0;
// generic function
function genericFunction(arg) {
    return arg;
}
// arrow generic fn
const genericArrowFunction = (arg) => arg;
// generic class
class ArrayList {
    constructor(...x) {
        this.x = x;
    }
    print() {
        console.log(this.x);
    }
}
exports.ArrayList = ArrayList;
class GenericClass {
    // no static members are allowed
    constructor(props) {
        this.props = props;
    }
    getProps() {
        return this.props;
    }
}
// normal chocolate cake
const chocoCake = {
    expiryDate: new Date(),
};
// array of cakes
const chocoCakes = [{ expiryDate: new Date() }];
const vanillaCakes = [{ expiryDate: new Date() }];
// we extend because we want an object IF it is of type Expirable since expiryDate will be used
const getExpiredItems = (items) => {
    const currentDate = new Date().getTime();
    return items.filter((item) => item.expiryDate.getDate() < currentDate);
};
// no need to put <GenericType> since it already is infered in lines 52 & 53
const exiredChocoCakes = getExpiredItems(chocoCakes);
const exiredVanillaCakes = getExpiredItems(vanillaCakes);
