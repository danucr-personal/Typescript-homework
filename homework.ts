//*************  TASK 1 *************
// Create a function calcInvestitions that will receive in a props: amountOfMoney, percent and directionOfMarket
// The prop directionOfMarker should accept the following values: TOP, BOTTOM
// The function should return the number 
// If the directionOfMarket is top the returned value is amountOfMoney + percent of amountOfMoney
// If the directionOfMarker is bottom the returned value is amountOfMoney - percent of amountOfMoney
// If the directionOfMarket is not provided the returned value is equal with amountOfMoney

enum MARKET_DIRECTIONS {
    TOP = "TOP",
    BOTTOM = "BOTTOM"
}

const calcInvestitions = (amountOfMoney: number, percent: number, directionOfMarket?: MARKET_DIRECTIONS): number => {

    return directionOfMarket === MARKET_DIRECTIONS.TOP
        ? amountOfMoney + (percent / amountOfMoney * 100)
        : directionOfMarket === MARKET_DIRECTIONS.BOTTOM
            ? amountOfMoney - (percent / amountOfMoney * 100)
            : amountOfMoney
}

console.log(calcInvestitions(223, 14))

//*************  TASK 2 *************
// We have two entities: Product and Order with products
// Product has the following properties: id, name, price, weight.
// The order has the following properties: id, deliveryAddress, createdAt, updatedAt and list of products
// Please create two types of Product and Order

interface IProduct {
    id: number
    name: string
    price: number
    weight: number
}

interface IOrder {
    id: number
    deliveryAddress: string
    createdAt: string // ?Date instead of string
    updatedAt: string // ?Date instead of string
    productsList: IProduct[]
}

//*************  TASK 3 *************
// Create two classes, Car and Bike
// Both of them are extended from Vehicle class
// By default each of them should have, a name, manufacturer, and color
// The class Car has two methods OpenTrunk, CloseTrunk that are returning the status of trunk
// The class Bike has one method: Fly that accepts one parameter( howLong: number ) and show in console.

class Vehicle {
    name: string
    manufacturer: string
    color: string

    constructor(name: string, manufacturer: string, color: string) {
        this.name = name
        this.manufacturer = manufacturer
        this.color = color
    }
}

class Car extends Vehicle {
    isTrunkOpen: boolean

    constructor(manufacturer: string, color: string) {
        super("Car", manufacturer, color);

        this.isTrunkOpen = false
    }

    openTrunk(): boolean {
        this.isTrunkOpen = true

        return this.isTrunkOpen
    }

    closeTrunk(): boolean {
        this.isTrunkOpen = false

        return this.isTrunkOpen
    }
}

class Bike extends Vehicle {
    constructor(manufacturer: string, color: string){
        super("Bike", manufacturer, color)
    }

    fly(howLong: number): void {
        console.log("fly", howLong)
    }
}

const testCar = new Car("Audi", "#000")
console.log("testCar", testCar)
console.log("openTrunk", testCar.openTrunk())
console.log("closeTrunk", testCar.closeTrunk())

const testBike = new Bike("someone", "grey")
testBike.fly( 50)

//*************  TASK 4 *************
// You have two endpoints
// One of them returns the array of products
// Another one returns only one order
// Each endpoint wrappers the response in an additional object like that:
// {
//   lastPage: false,
//   numberOfPages: 20,
//   data: {},
// }

interface IFirstEndpointProduct {
    id: number
    price: number
    name: string
    weight: number | string
}

interface ISecondEndpointProduct {
    id: number
    deliveryAddress: string
    paymentMethod: PAYMENT_METHODS
    isNewCustomer: boolean
}

interface IServerResponse<T> {
    lastPage: boolean
    numberOfPages: number
    data: T | T[]
}

enum PAYMENT_METHODS {
    BANK_TRANSFER = 'BANK',
    CASH = 'CASH',
    CARD = 'CARD'
}

const firstEndpoint: IServerResponse<IFirstEndpointProduct> = {
    lastPage: true,
    numberOfPages: 20,
    data: [
        {
            id: 1,
            name: 'Product1',
            price: 20,
            weight: '20g'
        },
        {
            id: 2,
            name: 'Product2',
            price: 30,
            weight: 3
        }
    ],
}

const secondEndpoint: IServerResponse<ISecondEndpointProduct> = {
    lastPage: false,
    numberOfPages: 10,
    data: {
        id: 1,
        deliveryAddress: 'Chisinau',
        paymentMethod: PAYMENT_METHODS.BANK_TRANSFER,
        isNewCustomer: true
    }
}

// You should create a generic interface that will get as a props type of response
// First endpoint returns
// {lastPage: true, numberOfPages: 20, data: [{ id: 1, name: 'Product1', price: 20, weight: '20g'}, { id: 2, name: 'Product2', price: 30, weight: 3}]};
// Second endpoint returns
//  {lastPage: false, numberOfPages: 10, data: { id: 1, deliveryAddress: 'Chisinau', paymentMethod: PAYMENT_METHODS.BANK_TRANSFER, isNewCustomer: true }}


