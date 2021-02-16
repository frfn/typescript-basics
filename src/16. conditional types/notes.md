```
type SomeType = T extends U ? X : Y
```

We know how to do conditional statements!

## Distributive Properties of Conditional Types

-   **`never`** means it will never happen or exist, it will **NEVER** occur.

---

Example where **`never`** is used, in Utility Type, **`Exlude<T, U>`**

`Exclude<T, U> = T extends U ? never : T`

let's say:

-   T = ABC
-   U = BC

Is value `A` from object T, in object U. no.

Is value `B` from object T, in object U. yes.

Is value `C` from object T, in object U. yes.

> Variable will just be assigned `A` since we exclude `BC`!

-   const example: Exclude<ABC, BC>

---

There was an example about making the type into a function, I'm noob, I don't need to dig that deep.

---

**`infer`** is introduced, used for ReturnType utility type!
