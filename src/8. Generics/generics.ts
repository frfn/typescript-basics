/* ---------------- */
/* generic function */
/* ---------------- */
function genericFunction<T>(arg: T): T {
	return arg;
}

const num = genericFunction<number>(12);

/* ---------------- */
/* arrow generic fn */
/* ---------------- */
const genericArrowFunction = <T>(arg: T): T => arg;

/* ------------------ */
/* generic interfaces */
/* ------------------ */
// i dont know where to use this
interface IGenericInterface<T> {
	(a: T): T; // this a function, takes T, outputs T
	someProp: T;
}

const bucket: IGenericInterface<number> = (a: number) => a * 10;
bucket.someProp = 100;

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
const chocoCakes: ChocolateCake[] = [];
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

const exiredChocoCakes = getExpiredItems<ChocolateCake>(chocoCakes);
const exiredVanillaCakes = getExpiredItems<VanillaCake>(vanillaCakes);

/* --------------------- */
/* Shopping Cart Example */
/* --------------------- */
interface IShoppingCart<ItemId, Item> {
	items: Array<Item>;
	addItem(this: IShoppingCart<ItemId, Item>, item: Item): void;
	getItemById(
		// identifies what `this.` shall be so `this.` is not of type any
		this: IShoppingCart<ItemId, Item>,
		id: ItemId
	): Item | undefined;
}

interface Item {
	id: number;
	price: number;
}

// creating an object, this is definitely just a TS thing, using this WILL NOT work in JS
const cart: IShoppingCart<number, Item> = {
	items: [],
	addItem(item: Item) {
		this.items.push(item);
	},
	getItemById(id: number): Item | undefined {
		// this. is used there, it is of type IShoppingCart
		return this.items.find((item) => item.id === id);
	},
};

const phone: Item = { id: 1, price: 1200 };
const computer: Item = { id: 2, price: 2400 };

cart.addItem(phone);
cart.addItem(computer);

console.log(cart.getItemById(2));
