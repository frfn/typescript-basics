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
	}
	setGroup(group: string) {
		this.group = group;
	}
}

interface AnimalConstructorTest<T> {
	new (name: string): T;
}

function initializeAnimalTest<T extends AnimalTest>(
	Animal: AnimalConstructorTest<T>,
	name: string
) {
	const animal = new Animal(name);
	animal.setGroup("mammals");
	return animal;
}

const catTest = initializeAnimalTest(CatTest, "Felix");
const dogTest = initializeAnimalTest(DogTest, "Ava");
