# Testing myself!

# Function Declaration

```
type tsFnType = (arg: string) => string;

const tsFn: tsFnType = (someArg: string): string => {
	return someArg;
};
```

---

# Function, Optional Arguments Declaration

```
const optionalArg = (
	num: number,
	num2?: number | undefined,
	...nums: number[]
): number => {
	return nums.length > 0
		? nums.reduce(
				(prevValue, currentValue) => prevValue + currentValue,
				0
		  ) +
				num +
				(num2 ? num2 : 0)
		: num + (num2 ? num2 : 0);
};
```

---

# Class Declaration

```
class Computer {
	constructor(
		private _memory: number,
		private _storage: number,
		protected _model: string
	) {} // constructor

	get model() {
		return this._model;
	}

	get memory() {
		return this._memory;
	}

	get storage() {
		return this._storage;
	}

	set model(model: string) {
		this._model = model;
	}

	set memory(mem: number) {
		this._memory = mem;
	}

	set storage(storage: number) {
		this._storage = storage;
	}
}

/* const macBook = new Computer(32, 512, "MacBook Pro");
macBook.memory = 64;
console.log(macBook); */

class AppleComputer extends Computer {
	private _brand: string;

	constructor(memory: number, storage: number, model: string) {
		super(memory, storage, model);
		this._brand = "Apple";
	}

	get brand() {
		return this._brand;
	}
}

const macbookPro = new AppleComputer(64, 1000, "MacBook Pro Max");
console.log(macbookPro.brand);
```

---

# Interface Declaration

```
interface SalaryMonthly {
	getSalaryMonthly(): number;
}

const calculateSalary = (income: SalaryMonthly): number => {
	const monthlyIncome = income.getSalaryMonthly();
	return monthlyIncome * 12;
};

interface PersonInfo {
	_name: string;
	_age: number;
	_job: string;
	_salary?: number;
}

class SoftwareEngineer implements PersonInfo, SalaryMonthly {
	_name: string;
	_age: number;
	_job: string;
	_salary?: number;

	constructor(n: string, a: number, j: string, s: number) {
		this._name = n;
		this._age = a;
		this._job = j;
		this._salary = s;
	}

	getSalaryMonthly = (): number => {
		if (this._salary) {
			return this._salary;
		}

		return 0;
	};
}

const flex = new SoftwareEngineer(
	"Flexer",
	24,
	"Front End Full Stack Dev",
	6000
);

const yearlySalary: number = calculateSalary(flex);
console.log(yearlySalary);

```

## Generic Interfaces

```
interface baby {
	name: string;
}

class babyBoy implements baby {
	name: string;
	boy: boolean;
	constructor(name: string) {
		this.name = name;
		this.boy = true;
	}
}

class babyGirl implements baby {
	name: string;
	girl: boolean;
	constructor(name: string) {
		this.name = name;
		this.girl = true;
	}
}

// construct signature, pretty cool, T stands for Type, generics
interface babyConstructor<T> {
	new (obj: string): T; // T is either Boy | Girl
}

const babyMakerFunction = <T extends baby>(
	ObjConstructer: babyConstructor<T>,
	name: string
): T => {
	// ObjContructor is user input
	const newBorn = new ObjConstructer(name);
	return newBorn;
};

const aNewBoy = babyMakerFunction(babyBoy, "Ezio"); // this is where T is set
console.log(aNewBoy);

const aNewGirl = babyMakerFunction(babyGirl, "Andrea");
console.log(aNewGirl);

```

## Construct Signature | Interfaces

```
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

```

---

# Union Declaration

```
const unionFn = (arg: "black" | "white"): string => {
	return arg;
};

const chooseVar = unionFn("black");
console.log(chooseVar);

// -------------

interface unionA {
	group: string;
	program(): void;
}

interface unionB {
	group: string;
	program(): void;
}

const divA: unionA = {
	group: "A",
	program: () => {
		console.log("Side A");
	},
};

const divB: unionB = {
	group: "B",
	program: () => {
		console.log("Side B");
	},
};

// Type Guard

const isSideA = (side: unionA | unionB): side is unionA => {
	return (<unionA>side).group === "a";
};

const whichSide = (side: unionA | unionB): void => {
	if (isSideA(side)) {
		side.program();
	}

	side.program();
};

whichSide(divA);

```

## instanceof

```
class CocoMelon {
	constructor(private _show: string, private _favorite: boolean = true) {}

	get favorite() {
		return this._favorite;
	}
}

class SuperJoJo {
	constructor(private _show: string, private _favorite: boolean = false) {}

	get favorite() {
		return this._favorite;
	}
}

const favoriteShow = (obj: CocoMelon | SuperJoJo): void => {
	if (obj instanceof CocoMelon) {
		console.log(`Is this my favorite show?: ${obj.favorite}`);
	} else {
		console.log(`Is this my favorite show?: ${obj.favorite}`);
	}
};

const CocoMelonInstance = new CocoMelon("The Wheels on the Bus");
const SuperJoJoInstance = new SuperJoJo("Finger Family");

favoriteShow(SuperJoJoInstance);
```

---

# Intersection Declaration

Redux example

```
interface IState {
    loading: boolean;
    error: null | undefined | object;
}

const oldState: IState = {
    loading: false;
    error: null
}

const newState: IState = {
    loading: true,
    error: null
}

const updateObject = <IState extends object>(oldState: IState, newState: IState): IState & IState => {
    return {
        ...oldState,
        ...newState
    }
}
```

---

# Alias Declaration

type stringAlias = string | string[] | null;

That's it, just use interface!

Alias for complex types
Interfaces for structure types

---

# Packages
