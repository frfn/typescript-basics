/* ---------------- */
/* generic function */
/* ---------------- */
function genericFunction<T>(arg: T): T {
	return arg;
}

/* ---------------- */
/* arrow generic fn */
/* ---------------- */
const genericArrowFunction = <T>(arg: T): T => arg;

/* ------------------ */
/* generic interfaces */
/* ------------------ */
interface IGenericInterface<T> {
	(a: T): T; // this a function, takes T, outputs T
	someProp: T;
}

/* ------------- */
/* generic class */
/* ------------- */
export class ArrayList<T> {
	private x: T[];

	constructor(...x: T[]) {
		this.x = x;
	}

	print(): void {
		// prints out the contents of array
		for (let i = 0; i <= this.x.length - 1; i++) {
			console.log(this.x[i]);
		}
	}
}

class GenericClass<T> {
	// no static members are allowed in Generics
	constructor(private props: T) {}

	getProps(): T {
		return this.props;
	}
}

/*--------------- EXAMPLE ---------------*/
// interface extends interface
interface Expirable {
	expiryDate: Date;
}

interface ChocolateCake extends Expirable {}
interface VanillaCake extends Expirable {}

// normal chocolate cake
const chocoCake: ChocolateCake = {
	expiryDate: new Date(),
};

// array of cakes
const chocoCakes: ChocolateCake[] = [{ expiryDate: new Date() }];
const vanillaCakes: VanillaCake[] = [{ expiryDate: new Date() }];

// interface for getExpiredItems function
interface getExpiredItemsFunction {
	<T extends Expirable>(items: Array<T>): Array<T>;
}

/* ALL items in the array MUST be type of Expirable */
// we extend because we want an object IF it is of type Expirable since expiryDate will be used
const getExpiredItems: getExpiredItemsFunction = <T extends Expirable>(
	items: Array<T>
) => {
	const currentDate = new Date().getTime();
	return items.filter((item) => item.expiryDate.getDate() < currentDate);
};

// no need to put <GenericType> since it already is infered in lines 52 & 53
const exiredChocoCakes = getExpiredItems<ChocolateCake>(chocoCakes);
const exiredVanillaCakes = getExpiredItems<VanillaCake>(vanillaCakes);

/* --------------------- */
/* Shopping Cart Example */
/* --------------------- */
interface IShoppingCart<ItemId, Item> {
	items: Array<Item>;
	addItem(this: IShoppingCart<ItemId, Item>, item: Item): void;
	getItemById(
		this: IShoppingCart<ItemId, Item>,
		id: ItemId
	): Item | undefined;
}

interface Item {
	id: number;
	price: number;
}

// creating an object, this is definitely just a TS thing,
const cart: IShoppingCart<number, Item> = {
	items: [],
	addItem(item: Item) {
		this.items.push(item);
	},
	getItemById(id: number): Item | undefined {
		return this.items.find((item) => item.id === id);
	},
};

const phone: Item = { id: 1, price: 1200 };
const computer: Item = { id: 2, price: 2400 };

cart.addItem(phone);
cart.addItem(computer);

console.log(cart.getItemById(2));