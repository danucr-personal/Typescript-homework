//*************  TASK 2 *************
// We have two entities: Product and Order with products
// Product has the following properties: id, name, price, weight.
// The order has the following properties: id, deliveryAddress, createdAt, updatedAt and list of products
// Please create two types of Product and Order

type Product = {
    id: number;
    name: string;
    price: number;
    weight: number;
}

type Order = {
    id: number;
    deliveryAddress: string;
    createdAt: Date;
    updatedAt: Date;
    listOfProducts: Product[];
}