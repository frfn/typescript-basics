"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateTotalAmount = void 0;
// ex. cart instance goes in as the `order` argument
// .calculateTotal() function in ShoppingCart object, returns the sum of order prices!
function calculateTotalAmount(order) {
    let total = order.calculateTotal();
    const disount = total * 0.2;
    total -= disount;
    const totalWithTax = total * 1.2;
    return totalWithTax;
}
exports.calculateTotalAmount = calculateTotalAmount;
