# Union

-   first use of **`typeof`**

-   this is called assertions, and they're ugly

-   using **`|`** in functions

```
if (<DogUnion>pet) {
		console.log("DOG");
	} else if (<CatUnion>pet) {
		console.log("CAT");
	}
```

<br>
<br>

-   custom **`Type Guard`** instead!

-   well this is used... `someObj is DogUnion` === `booelan`

    -   if you use `: boolean`, it will actually give you an error\*. Use what is said **`someObj is DogUnion`**

    -   error\*:

            Property 'bark' does not exist on type 'DogUnion | CatUnion'.
            Property 'bark' does not exist on type 'CatUnion'.ts(2339)

-   specifying a "type predicate" (`arg **is** MyType`) in a user defined `Type Guard`, doc below shows ALL.

-   this is special to TS
    [See More Here!](https://www.typescriptlang.org/docs/handbook/advanced-types.html)
-   contains `(<DogUnion>someObj).bark` to check if object has a certain method, in this case `.bark`
