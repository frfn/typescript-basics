Utility Types

-   [Here are all the types](https://www.typescriptlang.org/docs/handbook/utility-types.html)

-   There are several utility types to facilitate common type transformations. These utilities are available globally, look at all of them, pretty snazzy.

Here are all of them, you can use them in functions, etc!

-   `Partial<Type>`
-   `Required<Type>`
-   `Readonly<Type>`
-   `Record<Keys,Type>` -- HashMap, Map, Dictionary, etc.
-   `Pick<Type, Keys>` -- used with `type` keyword to create new type
-   `Omit<Type, Keys>` -- opposite of `Pick<Types, Keys
    > `
-   `Exclude<Type, ExcludedUnion>`
-   `Extract<Type, Union>`
-   `NonNullable<Type>`
-   `Parameters<Type>`
-   `ConstructorParameters<Type>`
-   `ReturnType<Type>`
-   `InstanceType<Type>`
-   `ThisParameterType<Type>`
-   `OmitThisParameter<Type>`
-   `ThisType<Type>` -- similarly used in generics.ts | giving `this` of type of `IShoppingCart<ItemId, Item>`
-   `Intrinsic String Manipulation Types`
