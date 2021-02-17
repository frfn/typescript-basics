# TypeScipt Module

`TS` is only used in Dev mode

`tsc`, `nodemon`, `concurrently`

**`7. Setting Up a Simple TypeScript Project`** goes into detail for `package.json`

-   `"main": "js file loc"`
-   `"script": { "dev": ... }`

---

1. `modules` | import, export | alias, defaults

---

2.  `types` of typescript | enums for constants

---

3.  `interfaces` | a structural contract, must be coded or it it will give error

-   index signature is a dynamic structure
-   call signature is for functions
-   extending interfaces, which combines the interfaces
-   implements when we use `class` to USE a `interface`

---

4.  `functions` | overloading | typesafing arguments | declaring how functions should look like

---

5.  `class` | `constructor` | `static` members vs `instance` members | class modifiers ( `public` , `protected` , `private` ) | `set` & `get` | extends | `#`private field

---

6.  `implementing` interfaces + `writing` a function

-   **abstract** way of thinking, very neat.

( what I mean is that the `argument` for **`calculateTotalAmount`** is **`IOrder`**, and the execution calls become safer because the `classes` that implements **`IOrder`** MUST contain **`.calculateOrder()`** **|** considering that **`calculateTotalAmount()`** requires an **`IOrder`** object, it contains **`.calculateTotal()`** which it USES. )

-   Look at how the `calculateTotalAmount` works.

---

7.  Construct Signature, what a learning curve this was, SMFH!

-   interfaces can be just objects as well | they do not have to be JUST classes

-   tested in 9. union type | creating a DogUnion and CatUnion objects from interface!

-   the explanation is here for the `constuct signature`!

[AnimalConstructor<T> {...}](https://stackoverflow.com/questions/13407036/how-does-interfaces-with-construct-signatures-work)

makes so much more sense!

---

8. Generics!

generic functions | generic arrow functions | interfaces | classes | `class ArrayList<X> { ... } `

-   `const list = new ArrayList<number>();`

-   `(a: T): T` - this is a function

-   No **`static`** members in **`generics`**

-   `this` keyword must be explictly typed

-   `<T extends Expirable>` to showcase that the item that **_is_** accepted will be of type **`Expirable`**, that will be limited to what interface has
    -   in `IShoppingCart` T **extends** Expirable! will only accept objects that are of type Expirable

---

9. Type Guard: `const fn = (someArg: T | undefined): someArg is T => { ... }` | union syntax **`|`** | you can create objs from interface without needing a class declaration

`instanceof` is only used for `classes` NOT `interfaces`

-   Type Guard for Class: **`instanceof`**
-   Type Guard for Interface: **`[someObj `is` Interface]`** { return ... !== **`undefined`**}

---

10. `intersection` combines types | updateObject function is turned into a TS function filled with type safe practice and intersection!

---

11. create alias for an existing type, do not use it as an interface | don't even use it for structuring anything

-   you can create a generic alias... but just stick to interface

`alias` VS `interface` -- **shouldnt** even be a question.

just use an `alias` that will either `UNION` some types or `INTERSECT` some types

---

12. packages | Brief intro of seeing if package contains Types! | `Apollo` has types, `React` does not | `npm i -D @types/npm-packagename` | `.d.ts` for declare module 'npm-package-name' {...}

---

13. Declaration Merging | namespace **`EXTENDS`** and adds on properties that are located in **modules** or **third party packages** if you must add | if using namespace, do not forget to **`export`**!

---

14. Utility Types | global functions that will alter, modify, augment, transform -- interfaces, classes, functions! Ex. `Partial<Type>`, will make all the properties in interfaces _optional_

---

15. Mapped Types | Allows to create a new type by iterating over a list of properties | Utility Types are created from Mapped Types, if we want a new utility, we can create it | `keyof` grabs the keys of T, T is an object |

---

16. Condition Types | **`never`** means it will never occur | Exclude utility type is used! | **`infer`** | Utility Type "ReturnType" , `(...args: any)` is a function, anything with parenthesis around it, is a function.

---

17. Tips, not a lecture last slide of module 2

**`typeof`** gets the type

```
let user = {
    name: 'John',
    email: 'john@example.com'
};

type User = typeof user;

/*
type User = {
    name: string;
    email: string;
}
*/

const add = function(a: number, b: number) {
  return a + b;
};

type AddType = typeof add;

/*
type AddType = (a: number, b: number) => number
*/
```

---

**`Type inference`**, TS can infer types

-   You don't have to set the types explicitly all the time. TypeScript infers types where it's possible:

```
let a = 1; // is equivalent to let a: number = 1;

function log<T>(message: T) {}
log(1); // is equivalent to log<number>(1)
```

We didn't have to set T on the log function explicitly `(e.g., log<number>(1))`, because **`TypeScript`** can **`infer`** `T` from the type of the value we pass as the argument to log.

---

**`Unknown`**

TypeScript includes the type called **`unknown`**. We can use this type to describe a value which _we don't know_. For example, a value returned from a network call:

```
let data: unknown = getSomeDataFromSomeAPICall();

if (typeof data === 'string') {
  // data is a string.
} else if (Array.isArray(data)) {
  // data is an array.
} else if (typeof data === 'object') {
  // data is an object.
}
```

Now you'd ask: _"Why don't use any in this case?"_. The differences are:

1. TS forces you to determine the type of the unknown value before you can work with it:

```
let anyValue: any = 1;
let unknownValue: unknown = 1;

anyValue.helloWorld(); // No error.
unknownValue.helloWorld(); // you'll get a TS error.
```

2. You cannot assign **`unknown`** to anything but _itself or any_, while you can assign **`any`** to anything:

```
let anyValue: any = 1;
let unknownValue: unknown = 1;

let str: string;

str = anyValue; // No error.
str = unknownValue; // you'll get a TS error.
```

These constraints make sure that you **verify** the **unknown** value before _working with it_, which is **important** to reduce the possibility of a runtime error! Basically, unknown is a TEMPORARY thing.

---

**`Type assertion`**, don't even look here... not needed.

-   (you can't simply assert that a value can have any type you want)

You can't assert a value to be of type which doesn't overlap with the actual type of the value:

```
let b = '1' as number; // Error, you can't say that a string is a number.

interface User {
  name: string;
  email: string;
}

function saveUser(user: User) {}

saveUser(<User>{ helloWorld: '' }); // Error, this object doesn't have the required properties of the User interface.
```

A workaround for **`asserting`** a value to be of type which doesn't overlap with the value's actual type is to assert that the value is **`unknown`** first:

-   `saveUser(<User>(<unknown>{ helloWorld: '' }))`.

But, do your best to **avoid this workaround**, don't use this. At all.

Overall, try to avoid **`assertions`** as much as possible

Only use them for user-defined type guards:

```
interface Cat {
  meow(): void;
}

interface Dog {
  bark(): void;
}

function isCat(pet: Cat | Dog): pet is Cat {
  return (<Cat>pet).meow !== undefined;
}

function greet(pet: Cat | Dog) {
  if (isCat(pet)) {
    pet.meow();
  } else {
    pet.bark();
  }
}
```
