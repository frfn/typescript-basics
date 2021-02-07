# Class creation

-   needs constructor!
-   must use `_` to name the properties outside of constructor ( `_name: string` )

Class **`extends`** Class

-   `inheritance`
-   it will inherit everything from the class it is **`extending`** to
-   you **MUST** use `super()`, this is HOW you write.
-   you can call the functions from the extended class by using `super.functionFromParentClass()`

<br>
<br>

# Class modifiers

-   `public`: can be **modified** & **accessed** wherever
-   `protected`: property can be used if **inside** the same class | a class that **extends** can use if inside the class | if to access **outside** of the class|es, **NO GO**.
-   `private`: property is private and is only accessible inside its OWN class

-   `readonly`: you can make the class property readonly! Similar to `final`

<br>
<br>

# Getter | Setter makes the function static! `.name` is static.

`set` is a keyword
`get` is a keyword

`set` | `get` makes it possible to execute `UptightRobot.name` to set the name, or retrieve it!
This confused me since name is `private`!

-   `set name(name: string) { this._name = name }`
-   `get name(name: string) { return this._name }`

<br>
<br>

# Static Members

`static` keyword makes is possible to grab variables, functions without having to instantiate an object using that class.
it can be grabbed via `.` operator

```
theClassName.variableName

theClassName.functionName
```

You **cannot** access the static members of a class on its instance.

For example, `const something = new SomeClass().myStaticMethod()`, NOT POSSIBLE

<br>
<br>

# Sides

-   Static side
-   Instance side

# ECMAscript - private fields

Difference between `#` symbol and `private` keyword

`private` keyword, when compiled to a JS file removes the private keyword ( the enforcement goes away! )

`#` symbol, is completely inaccessible and the enforcing of TS does not go away!

-   when I tested before this is why, the class modifiers WILL BE removed once compiled.

using the # or private fields is great either way! ✅
