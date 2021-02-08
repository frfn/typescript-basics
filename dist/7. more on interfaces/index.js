"use strict";
class Cat {
    constructor(name, group) {
        this.name = name;
        this.group = group;
    }
    setGroup(group) {
        this.group = group;
    }
    meow() {
        console.log("Meow!");
    }
}
class Dog {
    // no need for group
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
// a function that can instantiate different objects ( cat | dog | etc. )
// Animal is just a variable name | of type AnimalConstructor
// name is a just a string variable
// when we create an animal, we also want to pass in the name!
// extends Animal? So the generic will still be of type Animal
function initializeAnimal(Animal, name) {
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
