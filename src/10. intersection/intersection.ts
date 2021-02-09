/* -------------------------------------------------------------------------------------------- */
/*   intersection | the common elements between two different groups | combines the interfaces  */
/* -------------------------------------------------------------------------------------------- */
interface IA {
	a: number;
}

interface IB {
	b: number;
}

const intersectionA: IA = { a: 10 };
const intersectionB: IB = { b: 5 };

// combines the interfaces using spread operator
const combineInterface = <IA extends object, IB extends object>(
	objA: IA,
	objB: IB
): IA & IB => {
	return { ...objA, ...objB };
};

function combineInterfaceResults(obj: IA & IB): number {
	return obj.a + obj.b;
}

const resultObj = combineInterface(intersectionA, intersectionB);
console.log(resultObj);

console.log(combineInterfaceResults(resultObj));

/* ------------------------------------------ */
/*   Example of updateObject found in Redux   */
/* ------------------------------------------ */
interface IState {
	loading: boolean;
	error: undefined | null;
}

const oldState: IState = {
	loading: false,
	error: null,
};

const newState: IState = {
	loading: true,
	error: undefined,
};

const updateObject = <IState extends object>(
	oldState: IState,
	newState: IState
): IState /* & IState */ => {
	return {
		...oldState,
		...newState,
	};
};

console.log(updateObject(oldState, newState));

/* ------ */
/*  Quiz  */
/* ------ */
interface X {
	x: number;
}

interface Y {
	y: number;
}

let XY: X & Y; // declaring a variable... that's it. | ex. let XY;

XY = { x: 1, y: 2 };
