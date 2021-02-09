/* ------------------------------ */
/*     either number | string     */
/* ------------------------------ */
function someFn(myArgument: number | string): void {
	if (typeof myArgument === "string") {
		let capitalizeFirstLetter =
			myArgument[0].toUpperCase() + myArgument.substring(1);

		console.log(capitalizeFirstLetter);
	} else {
		console.log(myArgument.toFixed(2));
	}
}
someFn("flexer fadrigalan");

/* -------------------------- */
/*     either flex | cole     */
/* -------------------------- */
function limited(arg: "flex" | "cole"): boolean | undefined {
	if (arg === "flex") {
		return true;
	} else {
		return false;
	}
}
// I'm Flex | arg is "flex" | boolean: true
console.log(`Are you Flexer (flex is arg): ${limited("flex")}`);
