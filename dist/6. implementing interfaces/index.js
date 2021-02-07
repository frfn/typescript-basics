"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shopping_cart_1 = require("./components/shopping-cart");
const calculate_total_amount_1 = require("./components/calculate-total-amount");
const order_1 = require("./components/order");
// creating multiple order instance
const order1 = new order_1.Order(30);
console.log(order1.calculateTotal()); // prints out the value
const order2 = new order_1.Order(20);
const order3 = new order_1.Order(20);
const order4 = new order_1.Order(60);
const order5 = new order_1.Order(10);
// ShoppingCart takes in the prices | .calculateTotal() will return the sum
const cart = new shopping_cart_1.ShoppingCart(order1.calculateTotal(), order2.calculateTotal(), order3.calculateTotal(), order4.calculateTotal(), order5.calculateTotal());
// calculateTotalAmount calls .calculateTotal(), since in cart instance, will return the sum of order prices
console.log(`The total amount is: $${calculate_total_amount_1.calculateTotalAmount(cart)}`);
