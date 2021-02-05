/* -------------------- */
/*        Boolean       */
/* -------------------- */
let b: boolean = true;

/* ------------------------------------------------------------ */
/*        Number - decimal | binary | octal | hexadecimal       */
/* ------------------------------------------------------------ */
// they're all === 1, 1+1+1+1=4
let number: number = 1 + 0b1 + 0o1 + 0x1;

/* -------------------- */
/*         String       */
/* -------------------- */
const hello_world: string = "Hello World";

/* takes into account the line breaks */
const helloWorld: string = `
    ${10 + 10}
    ${hello_world}
`;
// console.log(helloWorld);

/* ------------------------------- */
/*        Null and Undefined       */
/* ------------------------------- */
let n: null = null;
let u: undefined = undefined;

function uppercaseFirstLetter(str: string): string {
	return str[0].toUpperCase() + str.substring(1);
}
// console.log(uppercaseFirstLetter("hello World"));

function uppercaseLastLetter(str: string | null) {
	// return str[0].toUpperCase() + str.substring(1); | gives error, str might be NULL | so check first with 'if' statement
	if (str) {
		return str[0].toUpperCase() + str.substring(1);
	}
}

/* errors left purpose | you can't assign number to null or pass in null to a function that expects a string */
// let someNumber: number = null;
// uppercaseFirstLetter(null);

/* -------------------- */
/*        Objects       */
/* -------------------- */
// js primitive types
type primitiveTypes = boolean | number | string | symbol | null | undefined;

// non primitive types like: [], {}, new Map();
const myObj: object = new Map<any, string>();

/* -------------------- */
/*          Void        */
/* -------------------- */
// like java, it is a function that does not return a value
function log(message: string): void {
	console.log(message);
}
// log("void test!");

/* --------------------------------- */
/*        Array | Tuple | Enum       */
/* --------------------------------- */
// 1. arrays
const myArr: string[] = ["flex", "cole"];
const myStringArray: Array<string> = myArr; // generic array type

// 2. tuples | represents fixed number of elements | tuple expects an array with string as the FIRST element and number as the SECOND element
let tuple: [string, number] = ["str", 1];

// 3. enum | a lists of constants | SHALL be used instead of string constants, like actionTypes, just use enum! Enums are great!
enum Color {
	Red,
	Green,
	Blue,

	// Assigning numbers to enum | ex. Color[100] = White | you can access by number
	White = 100,
	Black = 101,

	// Assigning strings to enum | ex. Color["Stripe"] = stripe | similar to object access
	Stripe = "stripe",
	Solid = "solid",
}
let myFavColor: Color = Color.Red;
// console.log(Color.Red, Color.Green, Color.Blue, myFavColor); /* each element inside enum represents a number! */

/* ------------------ */
/*         Any        */
/* ------------------ */
let ANY: any;
ANY = new Map<string, number>();
ANY = null;
ANY = undefined;
ANY = Array<string>();
ANY = Object;
ANY = true;

/* ------------------------------ */
/*         Type Assertions        */
/* ------------------------------ */
// Used if we know the type!

/* note, this will cause error bc there is no index.html file... :) */
const email = document.getElementById("email");

if (email) {
	email.addEventListener("change", (e): void => {
		if (e) {
			// we know that currentTarget is an HTML input element
			// this is called type assertion | now you can log input.value | without type assertion, you CAN NOT.
			const input = e.currentTarget as HTMLInputElement;
			/* const input = <HTMLInputElement>e.currentTarget; // NOT GOOD. TSX + JSX uses angle brackets for components!! You will confuse the compiler. */
			console.log(input.value);
		}
	});
}
