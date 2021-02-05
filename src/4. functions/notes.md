# Typesafeing a Function

```
function sum(a: number, b?: number): number {
	return a + (b || 0);
}
```

You can add `?` to specify if `b` should be optional

-   it will throw an error saying that `b` might be undefined, so handle it like it is done here

-   you can only use either `?` or defaulting a value, BUT not at the same time

```
function example(num?: number = 1) {}
```

-   Above will display an error, because if num `optional`, why is the `default` value 1

-   Overloading?

```
function calcArea(width: number, length: number): number;
function calcArea(width: number, length: number, height: number): number;
function calcArea(...args: number[]): number | string {
	if (args.length === 2) {
		return args[0] * args[1];
        ...
    }
```

-   You are `overloading`, so you must do it like this! Side note, it will also ony accept "2-3" arguments because of the first two function declaration!
