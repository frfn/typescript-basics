"use strict";
class Cat {
    constructor(name) {
        this.name = name;
    }
    setGroup(group) {
        this.group = group;
    }
    meow() {
        console.log("Meow!");
    }
}
class Dog {
    constructor(name) {
        this.name = name;
    }
    setGroup(group) {
        this.group = group;
    }
    bark() {
        console.log("Bark!");
    }
}
function initializeAnimal(Constructor, // Constructor will be in the form of AnimalConstructor | new NameOfObj
name) {
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
