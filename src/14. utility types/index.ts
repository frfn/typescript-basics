/* -------------- */
/*   Partial<T>   */
/* -------------- */
interface IPartial {
	x: number;
	y: number;
}

const partialObj: Partial<IPartial> = {
	//partial makes everything optional
};

const sumTheNumbers = (num: number, nums?: Partial<IPartial>): number => {
	if (nums) {
		// we account if x | y has values, if not 0!
		return num + (nums.x ? nums.x : 0) + (nums.y ? nums.y : 0);
	}

	return num;
};

console.log(sumTheNumbers(1, { x: 10, y: 9 }));

/* ----------------- */
/*   NonNullable<T>  */
/* ----------------- */
interface ComputerColor {
	color?: "black" | "white" | "space-gray";
}

// Also it must be ComputerColor["color"]: to access the values of color!

const chooseColor = (
	id: number,
	color: NonNullable<ComputerColor["color"]>
): void => {
	console.log(`Your ID is: ${id} \n Your fav color is: ${color}`);
};

// by adding NonNullable, you can't choose undefined
chooseColor(1, `black`);
