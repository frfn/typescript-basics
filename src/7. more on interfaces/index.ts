interface Animal {
	name: string;
	group?: string | undefined;
	setGroup(group: string): void;
}

class Cat implements Animal {
	// you MUST have name | group | setGroup()
	name: string;
	group?: string | undefined;

	constructor(name: string, group: string) {
		this.name = name;
		this.group = group;
	}

	setGroup(group: string) {
		this.group = group;
	}

	meow(): void {
		console.log("Meow!");
	}
}

class Dog implements Animal {
	// you MUST have name | group | setGroup()
	name: string;
	group?: string | undefined;

	// no need for group
	constructor(name: string) {
		this.name = name;
	}

	setGroup(group: string) {
		this.group = group;
	}

	bark(): void {
		console.log("Bark!");
	}
}

// creating animal constructor to create an object | static side | returns an insant of a class

// dyanmically set, using the generic T, t = type
interface AnimalConstructor<T> {
	new (nameOfObject: string): T;
}

// a function that can instantiate different objects ( cat | dog | etc. )
// Animal is just a variable name | of type AnimalConstructor
// name is a just a string variable

// when we create an animal, we also want to pass in the name!
// extends Animal? So the generic will still be of type Animal
function initializeAnimal<T extends Animal>(
	Animal: AnimalConstructor<T>,
	name: string
) {
	// ex. cat | dog must take in name, they are Animal
	const animal = new Animal(name);

	return animal;
}

const cat = initializeAnimal(Cat, "Garfield"); // will create a Cat object
cat.meow();
cat.setGroup("feline");
console.log(cat);

const dog = initializeAnimal(Dog, "Scooby");
dog.bark();
dog.setGroup("canine");
console.log(dog);
