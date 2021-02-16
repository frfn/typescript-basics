NOTE: Commented out `reactTest.d.ts`, the `import` + the `decalure module` of `React` was not behaving as expected in this current file because of the file `reactTest.d.ts`

declarations 1,2,3 => mergedDeclaration

interface 1,2,3 => mergedInterface

namespace 1,2,3 => mergedNamespace

-   what is `namespace`: used for logical grouping of functionalities

    -   includes classes, functions, interfaces, variables

    -   why?:
        -   A `namespace` is a **declarative** region that provides a scope to the identifiers (the names of types, functions, variables, etc) inside it. `Namespaces` are used to _organize code_ into logical groups and to **`prevent name collisions`** that can occur especially when your code base includes multiple libraries.

-   module: the index to group all functions

    -   an index.js for action creators

---

modules are augmented ( cannot be merged | but augmented )

`npm i -D react-dom @types/react-dom`

-   Adding on some functions to the react-dom, which I don't think I will ever have to.

-   instead of `namespace`, use `declare module {}`
