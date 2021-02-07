import { IOrder } from "./calculate-total-amount";

export class Order implements IOrder {
	// # just means a private variable
	#price: number;

	constructor(price: number) {
		this.#price = price;
	}

	// this just returns the price, could be a getter 🤷🏽‍♂️
	calculateTotal() {
		return this.#price;
	}
}
