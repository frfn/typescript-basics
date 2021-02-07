import { IOrder } from "./calculate-total-amount";

// this component will be the passed into the calcTotalAmount! This is the 'order' that the function in IOrder is expecting
export class ShoppingCart implements IOrder {
	// private cart that is an array
	#cart: number[];

	constructor(...cart: number[]) {
		this.#cart = cart;
	}

	calculateTotal() {
		// will add up the order total, and return the sum of order prices!
		return this.#cart.reduce(
			(prevValue, currValue) => prevValue + currValue,
			0
		);
	}
}
