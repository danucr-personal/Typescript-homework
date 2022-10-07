//*************  TASK 1 *************
// Create a function calcInvestitions that will receive in a props: amountOfMoney, percent and directionOfMarket
// The prop directionOfMarker should accept the following values: TOP, BOTTOM
// The function should return the number
// If the directionOfMarket is top the returned value is amountOfMoney + percent of amountOfMoney
// If the directionOfMarker is bottom the returned value is amountOfMoney - percent of amountOfMoney
// If the directionOfMarket is not provided the returned value is equal with amountOfMoney

const calcInvestigations = function (
  amountOfMoney: number,
  percent: number,
  directionOfMarker?: string
): number {
  if (directionOfMarker === "TOP") {
    return amountOfMoney + (amountOfMoney * percent) / 100;
  }
  if (directionOfMarker === "BOTTOM") {
    return amountOfMoney - (amountOfMoney * percent) / 100;
  }
  return amountOfMoney;
};

console.log("TASK 1-TOP: ", calcInvestigations(1000, 20, "TOP"));
console.log("TASK 1-BOTTOM: ", calcInvestigations(1000, 20, "BOTTOM"));
console.log("TASK 1-NONE: ", calcInvestigations(1000, 20));

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

type Order = {
  id: number;
  deliveryAddress: string;
  createdAt: number;
  updatedAt: number;
  listOfProducts: string[];
};

const prod: Product = {
  id: 2,
  name: "xbox",
  price: 500,
  weight: 4,
};

const ordr: Order = {
  id: 12,
  deliveryAddress: "Chisinau, str. Stefan cel Mare",
  createdAt: 2022,
  updatedAt: 2022,
  listOfProducts: ["xbox", "playstation4"],
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
    this.name = name,
    this.manufacturer = manufacturer,
    this.color = color;
  }
}

class Car extends Vehicle {
  constructor(manufacturer: string, color: string) {
    super("Car", manufacturer, color);
  }
  openTrunk(): string {
    return `Trunk of this ${this.color} ${this.manufacturer} ${this.name} is opened`;
  }
  closeTrunk(): string {
    return `Trunk of this ${this.color} ${this.manufacturer} ${this.name} is closed`;
  }
}

const car: Car = new Car("BMW", "red");
console.log(car);
console.log(car.openTrunk());
console.log(car.closeTrunk());

class Bike extends Vehicle {
  constructor(manufacturer: string, color: string) {
    super("Bike", manufacturer, color);
  }
  fly(howLong: number):string {
    return `${this.manufacturer} ${this.name} can fly for ${howLong} minutes`
  }
}

const bike: Bike = new Bike("Xiaomi", "green");
console.log(bike.fly(20));

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
  BANK_TRANSFER = "bank transfer",
  CASH = "money",
}

type firstEndpointType<T> = {
  id: number;
  name: string;
  price: number;
  weight: T;
};

type secondEndpointType = {
  id: number;
  deliveryAddress: string;
  paymentMethod: string;
  isNewCustomer: boolean;
};

interface IEndpoint<T> {
  lastPage: boolean;
  numberOfPages: number;
  data: T | T[];
}

const firstEndpoint: IEndpoint<firstEndpointType<string | number>[]> = {
  lastPage: true,
  numberOfPages: 20,
  data: [
    { id: 1, name: "Product1", price: 20, weight: "20g" },
    { id: 2, name: "Product2", price: 30, weight: 3 },
  ],
};

const secondEndpoint: IEndpoint<secondEndpointType> = {
  lastPage: false,
  numberOfPages: 10,
  data: {
    id: 1,
    deliveryAddress: "Chisinau",
    paymentMethod: PAYMENT_METHODS.BANK_TRANSFER,
    isNewCustomer: true,
  },
};
