"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayList = void 0;
/* ---------------- */
/* generic function */
/* ---------------- */
function genericFunction(arg) {
    return arg;
}
/* ---------------- */
/* arrow generic fn */
/* ---------------- */
const genericArrowFunction = (arg) => arg;
/* ------------- */
/* generic class */
/* ------------- */
class ArrayList {
    constructor(...x) {
        this.x = x;
    }
    print() {
        // prints out the contents of array
        for (let i = 0; i <= this.x.length - 1; i++) {
            console.log(this.x[i]);
        }
    }
}
exports.ArrayList = ArrayList;
class GenericClass {
    // no static members are allowed in Generics
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
const chocoCakes = [];
const vanillaCakes = [{ expiryDate: new Date() }];
/* ALL items in the array MUST be type of Expirable */
// we extend because we want an object IF it is of type Expirable since expiryDate will be used
const getExpiredItems = (items) => {
    const currentDate = new Date().getTime();
    return items.filter((item) => item.expiryDate.getDate() < currentDate);
};
const exiredChocoCakes = getExpiredItems(chocoCakes);
const exiredVanillaCakes = getExpiredItems(vanillaCakes);
// creating an object, this is definitely just a TS thing,
const cart = {
    items: [],
    addItem(item) {
        this.items.push(item);
    },
    getItemById(id) {
        return this.items.find((item) => item.id === id);
    },
};
const phone = { id: 1, price: 1200 };
const computer = { id: 2, price: 2400 };
cart.addItem(phone);
cart.addItem(computer);
console.log(cart.getItemById(2));
