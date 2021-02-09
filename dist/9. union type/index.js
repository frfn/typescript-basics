"use strict";
const catUnion = {
    meow() {
        console.log("meow");
    },
    walk() {
        console.log("walking");
    },
};
catUnion.meow();
catUnion.walk();
const dogUnion = {
    bark() {
        console.log("bark");
    },
    walk() {
        console.log("walking");
    },
};
// this is TEXTBOOK in TS docs, this is how you write a user defined Type Guard
// someObj is DogUnion === boolean, but in TS does a little more, a Type Guard syntax, read docs.
const isDog = (someObj) => {
    return someObj.bark !== undefined;
};
function callMyPet(pet) {
    pet.walk();
    if (isDog(pet)) {
        pet.bark();
    }
    else {
        pet.meow();
    }
}
callMyPet(dogUnion);
