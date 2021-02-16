/* ------------------ */
/*   Simple Example   */
/* ------------------ */
type Properties = "propA" | "propB" | "flexer";

type MyMappedType = {
	[P in Properties]: P;
};

/* ------------------- */
/*   Generic Example   */
/* ------------------- */
type Properties2 = "cole" | "flex" | "baby";

type MyMappedType2<Properties2 extends string | number | symbol> = {
	[P in Properties2]: P;
};

const listOfProperties2: MyMappedType2<"cole" | "flex" | "baby"> = {
	cole: "cole",
	flex: "flex",
	baby: "baby",
};

/* ----------------------------------------------------- */
/*   T Example | creating a new type from existing type  */
/* ----------------------------------------------------- */
type Properties3 = "isla" | "baby" | "cool";

// readonly property
/* type MyMappedType3<Type> = {
	readonly [Prop in keyof Type]: Type[Prop];
}; */

// optional property
type MyMappedType3<Type> = {
	[Prop in keyof Type]?: Type[Prop] | null;
};

type MyNewType = MyMappedType3<{ a: "a"; b: "b" }>;

// T is an object
// Properties EXTENDS keyof T === the keys | props of object, T
type Pick1<T, Properties extends keyof T> = {
	// dynamically creating an object, T[Props] accesses the keys, value
	[Props in Properties]: T[Props];
};

// [Props in Properties]: T[Props];
type MyNewType2 = Pick1<{ a: "a"; b: "b" }, "a">;

/* ---------------------------------------------------- */
/*   Useful examples | index signature or mapped types  */
/* ---------------------------------------------------- */
type Record1<K extends keyof any, V> = {
	[P in K]: V;
};

// index signature cannot do union types as shown below!
const Records: Record1<string | number | symbol, number> = {
	flexer: 616,
};
Records.cole = 123;
Records[123] = 123;

// console.log(Records)

/* -- VS. index signature -- */
interface IIndexSignature {
	[key: string]: number;
}

const IndexSig: IIndexSignature = {
	flexer: 616,
};
IndexSig.cole = 123;
IndexSig[123] = 123;

// console.log(IndexSig)

/* 
Though they are similar --
- Index Signatures: more primitive based: strings, numbers, primitive types
- Mapped Types: can take in union types, intersections types, etc

Index Signature has limitations, you can not use union or intersection types!
*/
