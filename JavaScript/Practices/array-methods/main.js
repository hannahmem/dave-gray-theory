// Calculate the total price of all products in the cart and also apply a discount
const products = [
    {name: "Laptop", price: 499, color: "white", inShoppingCart: true},
    {name: "Smartphone", price: 899, color: "black", inShoppingCart: false},
    {name: "Headphones", price: 50, color: "white", inShoppingCart: false},
    {name: "Tablet", price: 199, color: "grey", inShoppingCart: true},
    {name: "Keyboard", price: 210, color: "blue", inShoppingCart: false}
];

const cartTotal = products.filter(product => 
    product.inShoppingCart)
    // filtra os produtos que estão no carrinho gerando um novo array
    .map(product => product.price * 0.5)
    // Aplica 50% de desconto em cada elemento desse novo array
    .reduce((total, price) => {
        return total + price
        // retorna o total do novo array criado por map
    }, 0)

console.log("Cart Total:", cartTotal);

// Calculate the total value of all orders that don't have free delivery, applying a tax os R$ 15,00 to each of these products (delivery cost)
const orders = [
    { id: 1, total: 100, hasFreeShipping: false },
    { id: 2, total: 150, hasFreeShipping: true },
    { id: 3, total: 200, hasFreeShipping: false },
    { id: 4, total: 50, hasFreeShipping: true },
];

const totalOrder = orders.filter(order => 
    !order.hasFreeShipping)
    .map(price => price.total + 15)
    .reduce((total, price) => total + price, 0);

console.log("Total with delivery: ", totalOrder);

// Calculate the average of the costs of the orders with free delivery
const averageOrder = orders.filter(order => 
    order.hasFreeShipping)
    .map(cost => cost.total)
    .reduce((average, price) => {
        return (average + price) / 2
    })

console.log("Average of the orders with free delivery:", averageOrder);

// List de IDs of the orders with free delivery
const orderIDs = orders.filter(order => 
    order.hasFreeShipping)
    .map(item => item.id);

console.log("Order IDs:", orderIDs);

// Calculate the average only if there's free delivery orders
const freeShippingOrders = orders.filter(order => order.hasFreeShipping);
const average = freeShippingOrders.length > 0 
    ? freeShippingOrders.reduce((total, price) => 
        total + price.total, 0) / freeShippingOrders.length
    : 0;

console.log("Conditional average:", average);
