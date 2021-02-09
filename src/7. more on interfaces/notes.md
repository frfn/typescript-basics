# More on Interfaces

-   you can't have `#` inside an interface!

-   AnimalConstructor is an interface

To understand

1. `initializeAnimal` will take 2 arguments, Animal and Name

    - `Animal` is a class
    - `name` is a string

2. `new (nameOfObj: string): T`in AnimalConstructor will instantiate an object with that class + will return an object of type Animal

    - `Animal` is the constructor, as we see name of the object will be whatever the first argument will be for initializeAnimal

3. const animal = [new Animal(name)] <-- governed by AnimalConstructor

I got woo hoo!!
