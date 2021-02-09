# Alias

difference between `interface` and `alias` is that the `alias` actually creates a name that references the shape of the object

interface creates a new type

## interface > alias

-   use `interface` to create structure of objects, etc

-   use `alias` to create complex types | union of stuff | intersection of stuff

## Structure

-   do not get `confused`, when **creating** an object VS **referencing** what TYPE the object is

```
interface A {
    a: number
}
```

it will be instantiated as:

`const a = { a: 1 }`

-   `a` as the key
-   `1` as the value

Everywhere else, that colon symbol ( **`:`** ) symbolizes the type of the object

```
type WithTranslationFunction<T extends object> = T & {
    translate(str: string): string
};
```

-   `translate()` is a function that will return a `string`

## Quiz

`Alias`

```
const myObject: WithTranslationFunction<{ someProp: number }> = {
    someProp: 1,
    translate: (str) => `Translated ${str}` }
;
```

<br>

`Interface`

```
interface IWithTranslationFunction<T extends object> {
	someProp: T; // <-- this is why T extends object, interesting
	translate(str: string): string;
}

const myObjectInterface: IWithTranslationFunction<{ someProp: number }> = {
someProp: { someProp: 1 },
translate: (str) => `Hi ${str}`,
};

```

interesting turn of events, created an interface with the same pattern

-   creation of object is different between `Alias` and `Interface`

<br>
<br>

# CONCLUSION

-   `interface` for structure
-   `alias` for union | intersection types
