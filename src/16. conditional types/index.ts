/* ------- */
/*  Basic  */
/* ------- */
type SomeType = string; // number | MyConditionalType will be null
type MyConditionalType = SomeType extends string ? string : null;

/* ---------- */
/*  Function  */
/* ---------- */
function ConditionFunction<T>(value: T) {
	const someOtherConditionalFunction = (
		someArg: T extends boolean ? "TYPE A" : "TYPE B"
	): void => {
		// must have both TYPE A | TYPE B because someArg can be either
		const checkToSeeIfBoolean: "TYPE A" | "TYPE B" = someArg;
	};
	return someOtherConditionalFunction;
}

// hover over `result` | change argument to either a `STRING | NUMBER` or `BOOLEAN`
// it will either show TYPE A or TYPE B respectively
const result = ConditionFunction(true);

/* ---------------------- */
/*  Example with `never`  */
/* ---------------------- */
// is string? if so return string ELSE return never | never means it will NEVER happe
type StringOrNot<T> = T extends string ? string : never;

// hover over this | you see that never does NOT show
type exampleWithNever = string | boolean | never;

type unionExampleForExclude1 = string | object | number;
type unionExampleForExclude2 = object;

// using Exclude utility type, will return type of "string | number"
type excludeExample = Exclude<unionExampleForExclude1, unionExampleForExclude2>;

// will return just "c"
type basicExcludeExample = Exclude<"a" | "b" | "c", "b" | "c">;
/* 
Just use Exclude...

- but this is how it works behind the scenes!

'a' extends 'a' | 'b' ? never : 'a' => never
'b' extends 'a' | 'b' ? never : 'b' => never
'c' extends 'a' | 'b' ? never : 'c' => never
*/

type MyNewerType<T> = T extends string | number ? T : never;

// hover over, boolean never occurs!
type MyNewerResult = MyNewerType<string | number | boolean>;

/* ---------------------- */
/*  Example with `infer`  */
/* ---------------------- */
type inferSomething<T> = T extends infer U ? U : any;
type inferred = inferSomething<"I am a string">;

// inferred is inferring that T, is of type String

type MyFunctionWillReturnTrue = ReturnType<() => true>;
const thisWillReturnTrue: MyFunctionWillReturnTrue = true;
