# Overview

## `Modules`

We know how to do this.

-   `Module1.ts`: export const A = "Hello World"

-   `Module2.ts`: import { A } from "./Module1"

<br>
<br>

## `Types`

-   `number` | `boolean` | `string`

-   `undefined` | `null` | `void` | `any`

-   `array` | `tuple` | `enum` | `object`

<br>
<br>

## `Interfaces`

    interface Car {
        doors: number;
        color: string;
    }

    function addCar(car: Car): void {
        cars.push(car);
    }

    addCar({doors: 2, color: "black})

-   `addCar` must take in an object that has those two keys

<br>
<br>

## `Functions`

    // any[] + boolean
    function isEmpty(arr: any[]): boolean {
        return arr.length === 0;
    }

    const isMyArrayEmpty = isEmpty([1, 2]);

-   Take note of `types` and where they begin!

<br>
<br>

## `Classes`

Like Java 😌 happy place

    class Car {
        doors: number;
        color: string;

        constructor (
            doors: number,
            color: string
        ) {
            this.doors = doors
            this.color = color
        }
    }

    const myCar = new Car(2, `black`);

<br>
<br>

## Implementing `interfaces`

Creating a contract, if it's in the interface, it must be coded | coded but left empty!

-   `Honda` **`extends`** `Car` **`implements`** `carControls`

    -   Honda class
    -   will extend the Car class ( all of it properties )
    -   will implement the car controls, must code whatever is inside the carControls interface

            interface IVEHICLE {
            door: number;
            }

            class Honda extends Car implements IVEHICLE {}

            function drive(vehicle: IVEHICLE) {}

            const car = new Car();

            drive(car)

<br>
<br>

## `Generics`

    interface ObjWithProducts {
        products: Array<{price: number}>;
    }

    function calculateTotal<T extends ObjWithProducts>(order: T) {
        ...
    }

    const orderTotal = calculateTotal(someOrder);

    const cartTotal = calculateTotal(someShoppingCart);

-   I'm sure Java vs JS generics are different, but VERY similar.

<br>
<br>

## `Union Type`

    let someVar: number | string;

    someVar = 1;
    someVar = "Hello World";

-   can take one of several types, that's all.

<br>
<br>

## `Intersection Type`

    Type1 & Type2

-   combine types into one!

<br>
<br>

## `Alias`

    type Alias1 = number | string | boolean
    ler someVar = Alias1

    someVar = 1;
    someVar = "Hi";
    someVar = true

-   Alias is used to create a new name for complex types

<br>
<br>

## Using `external packages` and their `types`

`'react'`, `'appollo-client'`, where do we get the types for these packages!?

<br>
<br>

## `Declaration Merging`

-   what do we do when we need to extend a component that we don't own! For example if it belongs to a third-party package!
