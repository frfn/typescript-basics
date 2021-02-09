interface Animal {
	name: string;
	group: string | undefined;
	setGroup(group: string): void;
}

class Cat implements Animal {
	name: string;
	group: string | undefined;
	constructor(name: string) {
		this.name = name;
	}
	setGroup(group: string) {
		this.group = group;
	}
	meow(): void {
		console.log("Meow!");
	}
}

class Dog implements Animal {
	name: string;
	group: string | undefined;
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

// construct signature | just a contract of how the AnimalConstructor should be written
interface AnimalConstructor<T> {
	new (nameOfObject: string): T;
}

function initializeAnimal<T extends Animal>(
	Constructor: AnimalConstructor<T>, // Constructor will be in the form of AnimalConstructor | new NameOfObj
	name: string
) {
	const animal = new Constructor(name); // since Dog | Cat takes in an argumet, so must Constructor
	animal.setGroup("mammal");
	return animal;
}

// cat obj
const cat = initializeAnimal(Cat, "Garfield");
cat.meow();
cat.setGroup("feline");
console.log(cat);

// dog obj
const dog = initializeAnimal(Dog, "Scooby");
dog.bark();
dog.setGroup("canine");
console.log(dog);
