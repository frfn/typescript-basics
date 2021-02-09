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
    }
    setGroup(group) {
        this.group = group;
    }
}
function initializeAnimalTest(Animal, name) {
    const animal = new Animal(name);
    animal.setGroup("mammals");
    return animal;
}
const catTest = initializeAnimalTest(CatTest, "Felix");
const dogTest = initializeAnimalTest(DogTest, "Ava");
