# Store

-   `IOrder`, I stands for interface

-   `calculate-total-amount`

    -   contains an `Interface` that expects a function `calculateTotal()` to return a number
    -   a function that will take in an IOrder instance

-   `shopping-cart`

    -   a `class` that `implements` **`Irder`** and returns a number

-   `index`

    -   creating a shoppingcart instance
    -   using the instance as an argument for the function `calculateTotalAmount()`

-   `calculateTotalAmount(order: IOrder)`
    -   shopping-cart implements IOrder interface
    -   used in index.js, `calculateTotalAmount` can take in `cart` argument because it implements the IOrder interface ( it can take it an argument )
    -   `order.calculateTotal()` will return the `.calculateTotal()` of the ShoppingCart instance which is the sum of the order prices
