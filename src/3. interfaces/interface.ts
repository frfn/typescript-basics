/* ---------------- */
/*    Interfaces    */
/* ---------------- */
interface Profile {
	name: string;
	readonly age?: number;
}

/* the shape must be the same! */
let profileFlexer: Profile = {
	name: "Flexer",
	age: 24,
};

/* age is NOT required */
let profileNicole: Profile = {
	name: "Nicole",
};

/* -------------------------------------------------- */
/*    Index Signature | creating dynamic signatures   */
/* -------------------------------------------------- */
interface indexSignature {
	// index signature creates a more dynamic interface | undefined for OPTIONAL prop | object to include objects as values
	[key: string]: number | string | undefined | object;
	someProp: string;
}

const nameAgeObject: indexSignature = {
	Flexer: "24",
	Nicole: 24,
	Isla: 1,
	People: {},
	someProp: "I must be here, since the interface calls for me to be here!",
};

/* ------------------------------------------------------- */
/*    Call Signature | creating structure for a function   */
/* ------------------------------------------------------- */
interface Sum {
	(a: number, b: number): number; // this declares a function in an interface!
	prop1?: string;
}

const sum: Sum = (a, b) => a + b;
// prop1 must be coded in!
sum.prop1 = "Try this"; // adding this is weird...

// console.log(sum);

/* --------------------------------------------------------------- */
/*    Extending Interfaces | combines the two interfaces, extends  */
/* --------------------------------------------------------------- */
interface Parent {
	lastNameParent: string;
}

interface Parent2 {
	lastNameParent2: string;
}

interface Child extends Parent, Parent2 {
	firstName: string;
}

let child1: Child = {
	firstName: "Flexer",
	lastNameParent: "Fadrigalan",
	lastNameParent2: "Natalio",
};

// console.log(child1);
