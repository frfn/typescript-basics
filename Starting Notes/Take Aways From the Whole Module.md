# TypeScipt Module

`TS` is only used in Dev mode

`tsc`, `nodemon`, `concurrently`

---

`modules` | import, export | alias, defaults

---

`types` of typescript | enums for constants

---

`interfaces` | a structural contract, must be coded or it it will give error

-   index signature is a dynamic structure
-   call signature is for functions
-   extending interfaces, which combines the interfaces
-   implements when we use `class` to USE a `interface`

---

`functions` | overloading | typesafing arguments | declaring how functions should look like

---

`class` | `constructor` | `static` members vs `instance` members | class modifiers ( `public` , `protected` , `private` ) | `set` & `get` | extends | `#`private field

---

`implementing` interfaces + `writing` a function

-   **abstract** way of thinking, very neat.

( what I mean is that the `argument` for **`calculateTotalAmount`** is **`IOrder`**, and the execution calls become safer because the `classes` that implements **`IOrder`** MUST contain **`.calculateOrder()`** **|** considering that **`calculateTotalAmount()`** requires an **`IOrder`** object, it contains **`.calculateTotal()`** which it USES. )

-   Look at how the `calculateTotalAmount` works.

---

7 . Construct Signature, what a learning curve this was, SMFH!

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

Type Guard: `const fn = (someArg: T | undefined): someArg is T => { ... }` | union syntax **`|`** | you can create objs from interface without needing a class declaration

`instanceof` is only used for `classes` NOT `interfaces`

Type Guard for Class: instanceof
Type Guard for Interface: [someObj `is` Interface] { return ... !== **`undefined`**}

---

intersection combines types | updateObject function is turned into a TS function filled with type safe practice and intersection!

---
