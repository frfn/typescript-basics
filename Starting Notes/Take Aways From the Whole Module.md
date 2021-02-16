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

15. Mapped Types | Allows to create a new type by iterating over a list of properties
