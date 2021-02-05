// export default, this will be no { } when imported
export default function multiply(a: number, b: number): number {
	return a * b;
}

// export, will need { } when exported from file
export function multiplyByTwo(num: number): number {
	return multiply(num, 2);
}

// creating interface
export interface HelloWorld {}
