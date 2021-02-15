"use strict";
class CatTest {
    constructor(name) {
        this.name = name;
    }
    setGroup(group) {
        this.group = group;
    }
}
class DogTest {
    constructor(name, group) {
        this.name = name;
        this.group = group;
    }
    setGroup(group) {
        this.group = group;
    }
}
function initializeAnimalTest(Animal, name, group) {
    let animal;
    if (Animal === CatTest) {
        animal = new Animal(name);
    }
    else {
        animal = new Animal(name, group);
    }
    if (group) {
        animal.setGroup(group);
    }
    else {
        animal.setGroup("mammals");
    }
    return animal;
}
const catTest = initializeAnimalTest(CatTest, "Felix");
const dogTest = initializeAnimalTest(DogTest, "Ava", undefined);
