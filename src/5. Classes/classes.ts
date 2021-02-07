/* ---------------- */
/*      Classes     */
/* ---------------- */
class Robot {
	// _name is a protected variable | named differently for set & get
	protected _name: string;

	// private field | same as private === just written with a # in front
	#hasWeapon: boolean;

	// instantiate new objects via constructor
	constructor(name: string, hasWeapon: boolean) {
		// `this` refers to THIS object being created
		this._name = name;
		this.#hasWeapon = hasWeapon;
	}

	// prints out the variable _name
	askName(): void {
		console.log(`My name is ${this._name}`);
	}

	// prints out the variable _name with the argument
	move(distance: number): void {
		console.log(`${this._name} has moved ${distance} meters!`);
	}

	// a way to set the name
	setName(name: string) {
		this._name = "[Setting] " + name;
	}

	// a way to retrieve it
	getName(): string {
		return this._name + " [Returning]";
	}

	// this is important, it makes set & get static, so it can be Robot.name
	set name(name: string) {
		this._name = "[name has changed via set name()] " + name;
	}

	get name(): string {
		return "[returning via get name()]" + this._name;
	}
}

/* testing to see what the Robot class name is without instantiating an object */
// console.log(Robot.name);

/*----- Instantiating new Object -----*/
const ironGiant = new Robot("Iron Giant", false);
// ironGiant.askName();
// ironGiant.move(100);

/* ---------------------------- */
/*      Class extends Class     */
/* ---------------------------- */
class FlyingRobot extends Robot {
	jetPackName: string;

	constructor(name: string, jetPackName: string) {
		super(name, false);
		this.jetPackName = jetPackName;
	}

	fly(height: number): void {
		console.log(`${this.name} has flown ${height} meters up high!`);
	}

	/* overridden `move` function */
	move(distance: number): void {
		super.move(distance); // parent class' function
		console.log("Overridden?");
	}
}

/*----- Instantiating new Object -----*/
const ironGiantWithJetPack = new FlyingRobot(
	"Iron Giant w/ Jet Pack",
	"Tesla Rockets"
);
// ironGiantWithJetPack.askName();
// ironGiantWithJetPack.fly(100);
// ironGiantWithJetPack.move(10);

/* ------------------------------------------------------------------- */
/*      Class with  Class Modifiers + Static Variables & Functions     */
/* ------------------------------------------------------------------- */
class StrictRobot extends Robot {
	private rules: string[];

	static anArrayOfThings = ["arm", "leg", "finger"];
	static isPartAvailable(arr: string[], part: string): boolean {
		return arr.includes(part);
	}

	constructor(n: string, ...r: string[]) {
		// this takes in name, it is protected
		super(n, true);
		this.rules = r;
	}

	// prints out the array
	listRules(): void {
		console.log(this.rules);
	}

	// @overrides the move function in parent class
	move(): void {
		console.log("No moving!");
	}

	// @overrides the fly function in parent class
	fly(): void {
		console.log("No flying!");
	}
}

/*----- Instantiating new Object -----*/
const UptightRobot = new StrictRobot(
	"Mr. Strict",
	"no walking!",
	"no looking around!"
);
// UptightRobot.listRules(); /* prints the array */
// UptightRobot.move();
// UptightRobot.fly();
// UptightRobot.askName(); /* prints the name */

/*----- The bottom showcases what STATIC variables are.. in this case we have | name | anArrayOfThings | isPartAvailable() -----*/
// UptightRobot.name = "New Name Uptighter"; /* this was the static call to name, can `set` the name as well as `get` the name */
// UptightRobot.askName();

/*-- .name is static because of set, get keyword, set name | get name  --*/
// console.log("Console Logging!: ", UptightRobot.name); /* it calls | return "[returning via get name()]" + this._name; */

/*-- explicitly made into static members --*/
// console.log(StrictRobot.anArrayOfThings);
// console.log(StrictRobot.isPartAvailable(StrictRobot.anArrayOfThings, "leg"));
