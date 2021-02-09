Type A `&` Type B

avoid keyword `any`as type as much as you can

by adding **`extends`** in the **`Generics Field`**, it says that the arguments should be **`of this type interface`** AS WELL AS **`it should be an object`**

in React we use the spread operator to update an object

```
const updateObject = <IState extends object>(oldState: IState, newState: IState): IState => {
    return {
        ...oldState,
        ...newState
    }
}
```
