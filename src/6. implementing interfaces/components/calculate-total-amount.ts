// if you implement this interface YOU MUST write calculateTotal() function
export interface IOrder {
	calculateTotal(): number;
}

// ex. cart instance goes in as the `order` argument
// .calculateTotal() function in ShoppingCart object, returns the sum of order prices!
export function calculateTotalAmount(order: IOrder): number {
	let total = order.calculateTotal();
	const disount = total * 0.2;
	total -= disount;
	const totalWithTax = total * 1.2;
	return totalWithTax;
}
