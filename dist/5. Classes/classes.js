"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var _hasWeapon;
/* ---------------- */
/*      Classes     */
/* ---------------- */
class Robot {
    // instantiate new objects via constructor
    constructor(name, hasWeapon) {
        // private field | same as private === just written with a # in front
        _hasWeapon.set(this, void 0);
        // `this` refers to THIS object being created
        this._name = name;
        __classPrivateFieldSet(this, _hasWeapon, hasWeapon);
    }
    // prints out the variable _name
    askName() {
        console.log(`My name is ${this._name}`);
    }
    // prints out the variable _name with the argument
    move(distance) {
        console.log(`${this._name} has moved ${distance} meters!`);
    }
    // a way to set the name
    setName(name) {
        this._name = "[Setting] " + name;
    }
    // a way to retrieve it
    getName() {
        return this._name + " [Returning]";
    }
    // this is important, it makes set & get static, so it can be Robot.name
    set name(name) {
        this._name = "[name has changed via set name()] " + name;
    }
    get name() {
        return "[returning via get name()]" + this._name;
    }
}
_hasWeapon = new WeakMap();
/* testing to see what the Robot class name is without instantiating an object */
// console.log(Robot.name);
/*----- Instantiating new Object -----*/
const ironGiant = new Robot("Iron Giant");
// ironGiant.askName();
// ironGiant.move(100);
/* ---------------------------- */
/*      Class extends Class     */
/* ---------------------------- */
class FlyingRobot extends Robot {
    constructor(name, jetPackName) {
        super(name);
        this.jetPackName = jetPackName;
    }
    fly(height) {
        console.log(`${this.name} has flown ${height} meters up high!`);
    }
    /* overridden `move` function */
    move(distance) {
        super.move(distance); // parent class' function
        console.log("Overridden?");
    }
}
/*----- Instantiating new Object -----*/
const ironGiantWithJetPack = new FlyingRobot("Iron Giant w/ Jet Pack", "Tesla Rockets");
// ironGiantWithJetPack.askName();
// ironGiantWithJetPack.fly(100);
// ironGiantWithJetPack.move(10);
/* ------------------------------------------------------------------- */
/*      Class with  Class Modifiers + Static Variables & Functions     */
/* ------------------------------------------------------------------- */
class StrictRobot extends Robot {
    constructor(n, ...r) {
        // this takes in name, it is protected
        super(n);
        this.rules = r;
    }
    static isPartAvailable(arr, part) {
        return arr.includes(part);
    }
    // prints out the array
    listRules() {
        console.log(this.rules);
    }
    // @overrides the move function in parent class
    move() {
        console.log("No moving!");
    }
    // @overrides the fly function in parent class
    fly() {
        console.log("No flying!");
    }
}
StrictRobot.anArrayOfThings = ["arm", "leg", "finger"];
/*----- Instantiating new Object -----*/
const UptightRobot = new StrictRobot("Mr. Strict", "no walking!", "no looking around!");
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
