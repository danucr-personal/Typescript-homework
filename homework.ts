//*************  TASK 1 *************
// Create a function calcInvestitions that will receive in a props: amountOfMoney, percent and directionOfMarket
// The prop directionOfMarker should accept the following values: TOP, BOTTOM
// The function should return the number
// If the directionOfMarket is top the returned value is amountOfMoney + percent of amountOfMoney
// If the directionOfMarker is bottom the returned value is amountOfMoney - percent of amountOfMoney
// If the directionOfMarket is not provided the returned value is equal with amountOfMoney

type directionOfMarketType = "TOP" | "BOTTOM";

const calcInvestitions = (
    amountOfMoney: number,
    percent: number,
    directionOfMarket?: directionOfMarketType
): number => {
    if (directionOfMarket === "TOP")
        return amountOfMoney + (percent / 100) * amountOfMoney;
    else if (directionOfMarket === "BOTTOM")
        return amountOfMoney - (percent / 100) * amountOfMoney;
    return amountOfMoney;
};

console.log(calcInvestitions(200, 12, "TOP"));
console.log(calcInvestitions(500, 32, "BOTTOM"));
console.log(calcInvestitions(230, 16));

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
};

type DateForOrder = string | Date;

type Order = {
    id: number;
    deliveryAddress: string;
    createdAt: DateForOrder;
    updateAt: DateForOrder;
    listOfProducts: Product[];
};

const order: Order = {
    id: 2,
    deliveryAddress: "str. Puskin,24",
    createdAt: "08/10/2022",
    updateAt: new Date(),
    listOfProducts: [
        { id: 1, name: "produs1", price: 200, weight: 32 },
        { id: 2, name: "produs2", price: 123.1, weight: 512 },
        { id: 3, name: "produs3", price: 53.6, weight: 24 },
    ],
};

//*************  TASK 3 *************
// Create two classes, Car and Bike
// Both of them are extended from Vechicle class
// By default each of them should have, a name, manufacturer, and color
// The class Car has two methods OpenTrunk, CloseTrunk that are returning the status of trunk
// The class Bike has one method: Fly that acceptes one parameter( howLong: number ) and show in console.

class Vehicle {
    name: string;
    manufacturer: string;
    color: string;

    constructor(name: string, manufacturer: string, color: string) {
        this.name = name;
        this.manufacturer = manufacturer;
        this.color = color;
    }
}
class Car extends Vehicle {
    isTrunkOpen: boolean;
    constructor(
        name: string,
        manufacturer: string,
        color: string,
        isTrunkOpen?: boolean
    ) {
        super(name, manufacturer, color);
        this.isTrunkOpen = isTrunkOpen ? isTrunkOpen : false;
    }

    OpenTrunk(): boolean {
        this.isTrunkOpen = true;
        return this.isTrunkOpen;
    }

    CloseTrunk(): boolean {
        this.isTrunkOpen = false;
        return this.isTrunkOpen;
    }
}

class Bike extends Vehicle {
    constructor(name: string, manufacturer: string, color: string) {
        super(name, manufacturer, color);
    }

    Fly(howLong: number): void {
        console.log(`The bicycle flies for ${howLong} seconds`);
    }
}

const car = new Car("Audi Q8", "Audi", "black");
const bike = new Bike("M1", "FIIDO", "blue");
console.log("Trunk opened: ", car.OpenTrunk());
console.log("Trunk opened: ", car.CloseTrunk());
bike.Fly(5);

//*************  TASK 4 *************
// You have two endpoints
// One of them returns the array of products
// Another one returns only one order
// Each endpoint wrappers the respose in an additional object like that:
// {
//   lastPage: false,
//   numberOfPages: 20,
//   data: {},
// }

// You should create a generic interface that will get as a props type of response
// First endpoint returns
// {lastPage: true, numberOfPages: 20, data: [{ id: 1, name: 'Product1', price: 20, weight: '20g'}, { id: 2, name: 'Product2', price: 30, weight: 3}]};
// Second endpoint returns
//  {lastPage: false, numberOfPages: 10, data: { id: 1, deliveryAddress: 'Chisinau', paymentMethod: PAYMENT_METHODS.BANK_TRANSFER, isNewCustomer: true }}

enum PAYMENT_METHODS {
    BANK_TRANSFER,
    CASH,
    CARD,
}

interface IEndpointResponse<T> {
    lastPage: boolean;
    numberOfPages: number;
    data: T | T[];
}

interface IFirstEndpointResponse {
    id: number;
    name: string;
    price: number;
    weight: string | number;
}

interface ISecondEndpointResponse {
    id: number;
    deliveryAddress: string;
    paymentMethod: PAYMENT_METHODS;
    isNewCustomer: boolean;
}
2;
const firstEndpointResponse: IEndpointResponse<IFirstEndpointResponse> = {
    lastPage: true,
    numberOfPages: 20,
    data: [
        { id: 1, name: "Product1", price: 20, weight: "20g" },
        { id: 2, name: "Product2", price: 30, weight: 3 },
    ],
};

const secondEndpointResponse: IEndpointResponse<ISecondEndpointResponse> = {
    lastPage: false,
    numberOfPages: 10,
    data: {
        id: 1,
        deliveryAddress: "Chisinau",
        paymentMethod: PAYMENT_METHODS.BANK_TRANSFER,
        isNewCustomer: true,
    },
};
