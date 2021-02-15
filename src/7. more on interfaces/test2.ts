interface AnimalTest {
	name: string;
	group: string | undefined;
	setGroup(group: string): void;
}

class CatTest implements AnimalTest {
	name: string;
	group: string | undefined;
	constructor(name: string) {
		this.name = name;
	}
	setGroup(group: string) {
		this.group = group;
	}
}

class DogTest implements AnimalTest {
	name: string;
	group: string | undefined;
	constructor(name: string, group: string | undefined) {
		this.name = name;
		this.group = group;
	}
	setGroup(group: string) {
		this.group = group;
	}
}

interface AnimalConstructorTest<T> {
	// `new` declares it will object
	// the arguments are what the new OBJECT will take in.
	new (name: string): T;
}

interface AnimalConstructorTest2<T> {
	new (name: string, group: string | undefined): T;
}

function initializeAnimalTest<T extends AnimalTest>(
	Animal: AnimalConstructorTest<T> | AnimalConstructorTest2<T>,
	name: string,
	group?: string | undefined
) {
	let animal: T;
	if (Animal === CatTest) {
		animal = new Animal(name);
	} else {
		animal = new Animal(name, group);
	}

	if (group) {
		animal.setGroup(group);
	} else {
		animal.setGroup("mammals");
	}

	return animal;
}

const catTest = initializeAnimalTest<CatTest>(CatTest, "Felix");
const dogTest = initializeAnimalTest<DogTest>(DogTest, "Ava", undefined);
