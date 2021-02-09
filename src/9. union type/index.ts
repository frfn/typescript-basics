/* --------------------------- */
/*     interface and union     */
/* --------------------------- */
interface DogUnion {
	bark(): void;
	walk(): void;
}

interface CatUnion {
	meow(): void;
	walk(): void;
}

const catUnion: CatUnion = {
	meow() {
		console.log("meow");
	},
	walk() {
		console.log("walking");
	},
};
catUnion.meow();
catUnion.walk();

const dogUnion: DogUnion = {
	bark() {
		console.log("bark");
	},
	walk() {
		console.log("walking");
	},
};

// this is TEXTBOOK in TS docs, this is how you write a user defined Type Guard
// someObj is DogUnion === boolean, but in TS does a little more, a Type Guard syntax, read docs.
const isDog = (someObj: CatUnion | DogUnion): someObj is DogUnion => {
	return (<DogUnion>someObj).bark !== undefined;
};

function callMyPet(pet: DogUnion | CatUnion) {
	pet.walk();
	if (isDog(pet)) {
		pet.bark();
	} else {
		pet.meow();
	}
}

callMyPet(dogUnion);
