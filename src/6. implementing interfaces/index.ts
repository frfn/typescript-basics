import { ShoppingCart } from "./components/shopping-cart";
import { calculateTotalAmount } from "./components/calculate-total-amount";
import { Order } from "./components/order";

// creating multiple order instance
const order1 = new Order(30);
console.log(order1.calculateTotal()); // prints out the value

const order2 = new Order(20);
const order3 = new Order(20);
const order4 = new Order(60);
const order5 = new Order(10);

// ShoppingCart takes in the prices | .calculateTotal() will return the sum
const cart = new ShoppingCart(
	order1.calculateTotal(),
	order2.calculateTotal(),
	order3.calculateTotal(),
	order4.calculateTotal(),
	order5.calculateTotal()
);

// calculateTotalAmount calls .calculateTotal(), since in cart instance, will return the sum of order prices
console.log(`The total amount is: $${calculateTotalAmount(cart)}`);
