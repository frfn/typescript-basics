/* --------------------- */
/*   Declaring aliases   */
/* --------------------- */
// normal
type stringAlias = string | string[] | null;

// intersection
type numberAlias = { a: number } & { b: number };

// generic
type genericAlias<T> = T[];

// interface
type interfaceAlias = {
	a: number;
	b: number;
};

/* ----------- */
/*   Example   */
/* ----------- */

type WithTranslationFunction<T extends object> = T & {
	translate(str: string): string; // a function
};

// T is {someProp: number} | function
const myObjectAlias: WithTranslationFunction<{ someProp: number }> = {
	someProp: 1,
	translate: (str) => `Translated ${str}`,

	// arrow function is more readable than this
	// ARRROW FN shows that this is a function inside an object better!
	/* 
    translate(str) {
		return `Translated ${str}`;
	},
    */
};

// you can not do an intersection when you're creating an interface
// your mind will understand this the more you do it
interface IWithTranslationFunction<T> {
	someProp: T; // <-- this is why T extends object, interesting
	translate(str: string): string;
}

const myObjectInterface: IWithTranslationFunction<number> = {
	someProp: 1,
	translate: (str) => `Hi ${str}`,
};
