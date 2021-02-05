/* ------------------ */
/*      Functions     */
/* ------------------ */
// a, b has an error since they are not explicitly typesafe
function add(a, b) {
	return a + b;
}
// Type Safe
function sum(a: number, b?: number): number {
	return a + (b || 0);
}

// arrow function | Type Safe
const reactFnComponent = (props: any) => {};

// declaring how a function should look like NOT in an interface | through `type`!
type MyFunc = (a: number, b: number) => number;

const divide: MyFunc = (a, b) => a / b; // no need to TypeSafe, it is infered through MyFunc!

/* Alterations | ? and (b || 0) | default values | Check notes */

/* ------------------------------------------------------- */
/*      ... args, multiple arguments | rest operator       */
/* ------------------------------------------------------- */

/*------- enterFaveFood -------*/
function enterFavFood(...food: string[]): void {
	console.log(food);
}
// enterFavFood("mango", "apples", "grapes", "oranges");

/*------- sumAll -------*/
function sumAll(...numbers: number[]): void {
	console.log(
		/* starting value is 0 */
		numbers.reduce((prevValue, currValue) => prevValue + currValue, 0)
	);
}
// sumAll(1, 2, 3, 4);

/*------- rest operator arguments | receiving two required arguments first -------*/
function enterTwoValuesOrMore(
	value1: number,
	value2?: number,
	...values: number[]
): void {
	const printThis = `value 1: ${value1} | value 2: ${value2} | values: ${values}`;
	console.log(printThis);
}
enterTwoValuesOrMore(1, 2, 3, 4, 5, 6, 7, 8, 9);

/* -------------------- */
/*      Overloading     */
/* -------------------- */
function calcArea(width: number, length: number): number;
function calcArea(width: number, length: number, height: number): number;
function calcArea(...args: number[]): number | string {
	if (args.length === 2) {
		return args[0] * args[1];
	}

	if (args.length === 3) {
		return args[0] * args[1] * args[2];
	}

	if (args.length > 3) {
		return "Cannot have more than 3 arguments.";
	}

	return "Should not reach here.";
}
console.log(calcArea(2, 3, 4));
