// generic function
function genericFunction<T>(arg: T): T {
	return arg;
}

// arrow generic fn
const genericArrowFunction = <T>(arg: T): T => arg;

// generic interfaces
interface IGenericInterface<T> {
	(a: T): T; // this a function, takes T, outputs T
	someProp: T;
}

// generic class
export class ArrayList<T> {
	private x: T[];

	constructor(...x: T[]) {
		this.x = x;
	}

	print(): void {
		console.log(this.x);
	}
}

class GenericClass<T> {
	// no static members are allowed
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

// we extend because we want an object IF it is of type Expirable since expiryDate will be used
const getExpiredItems = <T extends Expirable>(items: Array<T>) => {
	const currentDate = new Date().getTime();
	return items.filter((item) => item.expiryDate.getDate() < currentDate);
};

// no need to put <GenericType> since it already is infered in lines 52 & 53
const exiredChocoCakes = getExpiredItems(chocoCakes);
const exiredVanillaCakes = getExpiredItems(vanillaCakes);
