/* ---------------- */
/*    Interfaces    */
/* ---------------- */
interface A {
	someProp: number;
}

interface B {
	someProp: number;
}

interface C {
	someProp: number;
	otherProp: number;
}

/* Creating an object from interface A */
let interfaceA: A = { someProp: 1 };

/* Assigning interfaceA to interface B | no errors because they're the same shape */
let interfaceB: B = interfaceA;

/* ERROR: requires that both have the same shape */
// let interfaceC: C = interfaceA;
