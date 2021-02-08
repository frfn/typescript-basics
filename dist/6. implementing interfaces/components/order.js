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
var _price;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
class Order {
    constructor(price) {
        // # just means a private variable
        _price.set(this, void 0);
        __classPrivateFieldSet(this, _price, price);
    }
    // this just returns the price, could be a getter 🤷🏽‍♂️
    calculateTotal() {
        return __classPrivateFieldGet(this, _price);
    }
}
exports.Order = Order;
_price = new WeakMap();
