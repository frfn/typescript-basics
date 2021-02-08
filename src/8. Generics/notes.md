Interfaces

`(a: T): T` - this is a function, takes in a value of type T, returns a value of type T

generics can only be used in instance side of Classes NOT the static side

TS can't explicitly type safe the keyword `this`

In the example

-   you basically want the objects to be implemented with the Expirable interface so they can have the expiryDate prop... that's it.

-   the array bs is just an example
-   `<T extends Expirable>`

    -   means that generics are just interfaces as well, T '**`extends`**' generics
    -   that method will only accept an object that is of type Expirable, neat.

-   the **`IShoppingCart`** is just a TypeScript thing, it is an object that enforces the IShoppingCart interface!
