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

7. Confused about AnimalConstructor plus the errors that are occuring

---

8. Generics!
