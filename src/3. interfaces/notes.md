# Interfaces

-   duck typing | structural sub typing === comparing shapes!

-   `?` means it is an optional property, `age?`

-   you can mutate key by: `profileFlexer.name = "Fadrigalan"`

-   **`readonly`** makes it so that you cannot mutate | modify the key

<br>
<br>

# Index Signature

In `js`, very common to add items in the object

```
const a = {}
a.hello = "hello"
```

in `ts`, it is different, you must initalize how the object will look like

if the the value of the key is an `object`, then you must **specify** it will be a non `primitive type`

    interface indexSignature {
        [key: string]: string;
    }

    const names: indexSignature = {
        "flexer": "fadrigalan",
        "nicole": "unknown"
    }

-   you just created a index signature, cool.

<br>
<br>

# Call Signature

Use interfaces to describe a function, call signature

# implements

-   we use implements when we're using the interface with the class
