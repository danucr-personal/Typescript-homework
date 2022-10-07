//*************  TASK 1 *************
// Create a function calcInvestitions that will receive in a props: amountOfMoney, percent and directionOfMarket
// The prop directionOfMarker should accept the following values: TOP, BOTTOM
// The function should return the number 
// If the directionOfMarket is top the returned value is amountOfMoney + percent of amountOfMoney
// If the directionOfMarker is bottom the returned value is amountOfMoney - percent of amountOfMoney
// If the directionOfMarket is not provided the returned value is equal with amountOfMoney

enum DIRECTION {
  TOP = "TOP",
  BOTTOM = "BOTTOM"
}

const calcInvestitions = (amountOfMoney: number, percent: number, directionOfMarket?: DIRECTION): number => {
  if(directionOfMarket === DIRECTION.TOP){
    return amountOfMoney + (percent * amountOfMoney / 100)
  }
  if(directionOfMarket === DIRECTION.BOTTOM){
    return amountOfMoney - (percent * amountOfMoney / 100)
  }
  else{
    return amountOfMoney
  }
}

console.log(calcInvestitions(1000, 10, DIRECTION.TOP))
console.log(calcInvestitions(1000, 10, DIRECTION.BOTTOM))
console.log(calcInvestitions(1000, 10))

//*************  TASK 2 *************
// We have two entities: Product and Order with products 
// Product has the following properties: id, name, price, weight.
// The order has the following properties: id, deliveryAddress, createdAt, updatedAt and list of products
// Please create two types of Product and Order

type Product = {
  id: number;
  name: string;
  price: number;
  weight: number
}

type Order = {
  id: number;
  deliveryAddress: string;
  createdAt: Date;
  updatedAt: Date;
  products: Product[]
}

const pasta: Product = {id: 1, name: "pasta", price: 30, weight: 500}
const firstOrder: Order = {id: 2, deliveryAddress: "Alba Iulia 23", createdAt: new Date(), updatedAt: new Date(), products: [pasta] }


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
  constructor(name: string, manufacturer: string, color: string){
    this.name = name;
    this.manufacturer = manufacturer;
    this.color = color
  }
}

class Car extends Vehicle {
  private trunkState: boolean;
  constructor(name: string, manufacturer: string, color: string){
    super(name, manufacturer, color);
    this.trunkState = false
  }
  OpenTrunk(): boolean{
    this.trunkState = true
    return this.trunkState;
  }
  CloseTrunk(): boolean{
    this.trunkState = false
    return this.trunkState; 
  }
}

class Bike extends Vehicle {
  constructor(name: string, manufacturer: string, color: string){
    super(name, manufacturer, color);
  }
  Fly(howLong:number): void{
    console.log(`The bike can fly ${howLong} m`)
  }
}

const fiat:Car = new Car("Fiat", "FIAT Chrysler Automobiles", "red")
console.log(fiat.OpenTrunk())
const bianchi:Bike = new Bike("Bianchi", "F.I.V. Edoardo Bianchi", "blue")
bianchi.Fly(10)

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

enum PAYMENT_METHODS {
  BANK_TRANSFER = "Bank transfer",
  CASH = "Cash"
}

type firstEndpoint = {
  id: number;
  name: string;
  price: number;
  weight: string | number;
}

type secondEndpoint = {
  id: number;
  deliveryAddress: string;
  paymentMethod: PAYMENT_METHODS;
  isNewCustomer: boolean
}

interface IResponse<T> {
  lastPage: boolean;
  numberOfPages: number;
  data: T | T[]
}

// First endpoint returns 
const firstResponse:IResponse<firstEndpoint[]> = {
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
      weight: 3}]};
// Second endpoint returns
const secondResponse:IResponse<secondEndpoint> = {
  lastPage: false, 
  numberOfPages: 10, 
  data: { 
    id: 1, 
    deliveryAddress: 'Chisinau', 
    paymentMethod: PAYMENT_METHODS.BANK_TRANSFER, 
    isNewCustomer: true 
  }
}
