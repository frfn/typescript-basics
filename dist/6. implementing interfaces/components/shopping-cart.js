"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _cart;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCart = void 0;
// this component will be the passed into the calcTotalAmount! This is the 'order' that the function in IOrder is expecting
class ShoppingCart {
    constructor(...cart) {
        // private cart that is an array
        _cart.set(this, void 0);
        __classPrivateFieldSet(this, _cart, cart);
    }
    calculateTotal() {
        // will add up the order total, and return the sum of order prices!
        return __classPrivateFieldGet(this, _cart).reduce((prevValue, currValue) => prevValue + currValue, 0);
    }
}
exports.ShoppingCart = ShoppingCart;
_cart = new WeakMap();
