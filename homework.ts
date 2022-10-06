//*************  TASK 1 *************
// Create a function calcInvestitions that will receive in a props: amountOfMoney, percent and directionOfMarket
// The prop directionOfMarker should accept the following values: TOP, BOTTOM
// The function should return the number 
// If the directionOfMarket is top the returned value is amountOfMoney + percent of amountOfMoney
// If the directionOfMarker is bottom the returned value is amountOfMoney - percent of amountOfMoney
// If the directionOfMarket is not provided the returned value is equal with amountOfMoney

enum DIRECTION_OF_THE_MARKET {
  top = 'TOP',
  bottom = 'BOTTOM'
}

function calcInvestitions(amountOfMoney: number, percent: number, directionOfMarket?: DIRECTION_OF_THE_MARKET): number {
  return directionOfMarket === DIRECTION_OF_THE_MARKET.top ? amountOfMoney + (percent / amountOfMoney * 100)
    : directionOfMarket === DIRECTION_OF_THE_MARKET.bottom ? amountOfMoney - (percent / amountOfMoney * 100)
      : amountOfMoney;
}

console.log(calcInvestitions(1050, 50, DIRECTION_OF_THE_MARKET.top))

//*************  TASK 2 *************
// We have two entities: Product and Order with products 
// Product has the following properties: id, name, price, weight.
// The order has the following properties: id, deliveryAddress, createdAt, updatedAt and list of products
// Please create two types of Product and Order

interface Product {
  id: number,
  name: string,
  price: number,
  weight: number
}

interface Order {
  id: number,
  deliveryAddress: string,
  createdAt: Date,
  updatedAt: Date,
  products: Product[]
}

const firstProduct: Product = { id: 1, name: 'iPhone', price: 10000, weight: 100 }
const firstOrder: Order = { id: 1, deliveryAddress: 'Some Adrees 17/1', createdAt: new Date(), updatedAt: new Date(), products: [firstProduct] }

console.log(firstOrder)

//*************  TASK 3 *************
// Create two classes, Car and Bike
// Both of them are extended from Vechicle class
// By default each of them should have, a name, manufacturer, and color
// The class Car has two methods OpenTrunk, CloseTrunk that are returning the status of trunk
// The class Bike has one method: Fly that acceptes one parameter( howLong: number ) and show in console.

class Vechicle {
  constructor(name: string, manufacturer: string, color: string) { }
}

class Car extends Vechicle {
  private isTrunkOpen: boolean;
  constructor(name: string, manufacturer: string, color: string) {
    super("Car", manufacturer, color)
    this.isTrunkOpen = false
  }
  OpenTrunk(): boolean {
    this.isTrunkOpen = true
    return this.isTrunkOpen
  }

  CloseTrunk(): boolean {
    this.isTrunkOpen = false
    return this.isTrunkOpen
  }
}

class Bike extends Vechicle {
  constructor(name: string, manufacturer: string, color: string) {
    super("Bike", manufacturer, color)
  }
  Fly(howLong: number): void {
    console.log(`Fly for ${howLong} minutes.`)
  }
}

const myFirstCar = new Car('Mercedes', 'Mercedes-Benz Group AG', 'White')
const myFirstBike = new Bike('Giant', 'Giant', 'red')
console.log(myFirstCar.OpenTrunk())
console.log(myFirstCar.CloseTrunk())
myFirstBike.Fly(14)



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
  BANK_TRANSFER = "BANK",
  CARD = "CARD",
  CASH = "CASH",
  CRYPTO = "CRYPTO"
}

interface IResponseEndpoint<T> {
  lastPage: boolean,
  numberOfPages: number,
  data: T | T[]
}

interface IFirstResponseEndpoint {
  id: number,
  name: string,
  price: number,
  weight: number | string
}

interface ISecondResponseEndpoint {
  id: number,
  deliveryAddress: string,
  paymentMethod: PAYMENT_METHODS,
  isNewCustomer: boolean

}

const firstEndpointResponse: IResponseEndpoint<IFirstResponseEndpoint> = {
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
  ]
}

const secondEndpointResponse: IResponseEndpoint<ISecondResponseEndpoint> = {
  lastPage: false,
  numberOfPages: 10,
  data: {
    id: 1,
    deliveryAddress: 'Chisinau',
    paymentMethod: PAYMENT_METHODS.BANK_TRANSFER,
    isNewCustomer: true
  }
}



