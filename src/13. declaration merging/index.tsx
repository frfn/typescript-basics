/* -------------------------- */
/*     Merging Interfaces     */
/* -------------------------- */

interface Cart {
	calculateTotal(): number;
}

interface Cart {
	x: number;
}

interface Cart {
	calculateTotal(options: { discountCode: number }): number;
}

let myCart: Cart = {
	x: 10,
	calculateTotal(options?: { discountCode: number }): number {
		if (options && options.discountCode) {
			// do something
		}
		return 10;
	},
};

/* ------------------------- */
/*     Merging Namespace     */
/* ------------------------- */
namespace MyNamespace {
	export const x: number = 10;
	export interface SomeInterface {
		y: number;
	}
}

namespace MyNamespace {
	export const getX = () => x;
	export interface SomeInterface {
		x: number;
	}
}

// accessing x
MyNamespace.x;
console.log(MyNamespace.getX());

// creating an obj of type SomeInterface | combines x and y
const objOfTypeSomeInterface: MyNamespace.SomeInterface = {
	x: 10,
	y: 20,
};

/* ------------ */
/*     Enum     */
/* ------------ */

enum Vegetables {
	Tomato = "tomato",
	Onion = "onion",
}

namespace Vegetables {
	export function makeSalad() {
		return Vegetables.Tomato + Vegetables.Onion;
	}
}

/* ---------------------------------------------------- */
/*     React | You do not need to do any of this...     */
/* ---------------------------------------------------- */
import * as React from "react";
import { renderToString } from "react-dom/server";

// no need to add properties of functions to a library, just use it
declare module "react" {
	interface Component {
		helloWorld(): string;
	}
}

// this is how you access the augmented Component
React.Component.prototype.helloWorld = (): string => {
	return "Hello World";
};

class MyClassComponent extends React.Component {
	render() {
		return <div>{this.helloWorld()}</div>;
	}
}

console.log(renderToString(<MyClassComponent />));
