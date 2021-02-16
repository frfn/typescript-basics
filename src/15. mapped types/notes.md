```

type Properties = 'propA' | 'propB'

type MyMappedType = {
    [item in Properties]: boolean
}

=== equals to ===

type MyMappedType = {
    propA: boolean;
    propB: boolean;
}
```

---

`in` - iterates through object

---

`keyof T` - grabs the keys of T
`keyof any` - string | number | symbol | T

```
interface Person {
  name: string;
  age: number;
  location: string;
}

type K1 = keyof Person; // "name" | "age" | "location"
type K2 = keyof Person[]; // "length" | "push" | "pop" | "concat" | ...
type K3 = keyof { [x: string]: Person }; // string
```

---

`utility types` are `mapped types` -- even see the code for the utility types!

ex.

```
Record<Keys extends keyof any, Value> = {
    // Props in Keys === string | number | symbol | T
    [Props in Keys]: Value
}

```

Though they are similar --

-   Index Signatures: more primitive based: strings, numbers, primitive types
-   Mapped Types: can take in union types, intersections types, etc

Index Signature has limitations, you can not use union or intersection types!

---

Mapped Types are very strict, usually one liners and you cannot add properties to it!

If you want to add properties, intersection ( **`&`** ) can do that for you

```
type Record1<K extends keyof any, V> {
    [P in K]: V
} & { someProp: string}
```
