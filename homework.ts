//*************  TASK 1 *************
// Create a function calcInvestitions that will receive in a props: amountOfMoney, percent and directionOfMarket
// The prop directionOfMarker should accept the following values: TOP, BOTTOM
// The function should return the number 
// If the directionOfMarket is top the returned value is amountOfMoney + percent of amountOfMoney
// If the directionOfMarker is bottom the returned value is amountOfMoney - percent of amountOfMoney
// If the directionOfMarket is not provided the returned value is equal with amountOfMoney

enum Direction {
  TOP = 'TOP',
  BOTTOM = 'BOTTOM'
}

const calcInvestitions = (amountOfMoney:number, percent:number, directionOfMarket?:Direction):number => {
  if(directionOfMarket === 'TOP') {
      return amountOfMoney + (amountOfMoney * percent);
  } else if(directionOfMarket === 'BOTTOM') {
      return amountOfMoney - (amountOfMoney * percent);
  }

  return amountOfMoney;
}

//Testing data
console.log(calcInvestitions(100, 0.30, Direction.TOP));
console.log(calcInvestitions(100, 0.20, Direction.BOTTOM));
console.log(calcInvestitions(100, 0.10));

//*************  TASK 2 *************
// We have two entities: Product and Order with products 
// Product has the following properties: id, name, price, weight.
// The order has the following properties: id, deliveryAddress, createdAt, updatedAt and list of products
// Please create two types of Product and Order

//Creating type for date, that we can treat later
type OrderDate = Date | number | string;

interface IProduct {
    id: number;
    name: string;
    price: number;
    weight: number | string;
}

interface IOrder {
    id: number;
    deliveryAdress: string;
    createdAt: OrderDate;
    updatedAt: OrderDate;
    list: IProduct[];
}

//*************  TASK 3 *************
// Create two classes, Car and Bike
// Both of them are extended from Vechicle class
// By default each of them should have, a name, manufacturer, and color
// The class Car has two methods OpenTrunk, CloseTrunk that are returning the status of trunk
// The class Bike has one method: Fly that acceptes one parameter( howLong: number ) and show in console.

class Vechicle {
  private name: string;
  private manufacturer: string;
  private color: string;

  constructor(name:string, manufacturer: string, color: string) {
      this.name = name;
      this.manufacturer = manufacturer;
      this.color = color;
  }
}

class Car extends Vechicle {
  status: boolean;
  constructor(name:string, manufacturer: string, color: string, status:boolean) {
      super(name, manufacturer, color);
      this.status = status;
  }

  openTrunk() {
     return this.status === true ? 'Opened' : 'Closed';
  }

  closeTrunk() {
     return this.status === false ? 'Closed' : 'Opened';
  }
}

class Bike extends Vechicle {
   constructor(name:string, manufacturer: string, color: string) {
      super(name, manufacturer, color);
  }

  fly(howLong: number) {
      console.log(`Bike flyes ${howLong} meters`);
  }
}

//Testing data
const newBike:Bike = new Bike('Shimano', 'Shimano, Inc., Japan', 'red');

newBike.fly(3);

const vwJetta:Car = new Car('Volkswagen Jetta', 'Volkswagen AG., Germany', 'black', false);

console.log(vwJetta.closeTrunk());

const vwGolf:Car = new Car('Volkswagen Jetta', 'Volkswagen AG., Germany', 'blue', true);

console.log(vwJetta.openTrunk());


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

// You should create a generic interface that will get as a props type of response
// First endpoint returns 
  // {lastPage: true, numberOfPages: 20, data: [{ id: 1, name: 'Product1', price: 20, weight: '20g'}, { id: 2, name: 'Product2', price: 30, weight: 3}]};
// Second endpoint returns
  //  {lastPage: false, numberOfPages: 10, data: { id: 1, deliveryAddress: 'Chisinau', paymentMethod: PAYMENT_METHODS.BANK_TRANSFER, isNewCustomer: true }}


  enum PAYMENT_METHODS {
    CASH = 'CASH',
    BANK_TRANSFER = 'BANK_TRANSFER',
    CREDIT = 'CREDIT'
}

type orderData = {
    id: number;
    name: string;
    price: number;
    weight: string | number;
}

type customerData = {
    id: number; 
    deliveryAddress: string; 
    paymentMethod: PAYMENT_METHODS.BANK_TRANSFER, 
    isNewCustomer: boolean;
}

interface serverResponse<T> {
    lastPage: boolean,
    numberOfPages: number,
    data: T | T[],
}


const firstCustomer:serverResponse<orderData[]> = {
    lastPage: true, 
    numberOfPages: 20, 
    data: [
        {   id: 1, 
            name: 'Product1',
            price: 20, 
            weight: '20g'
        }, 
        {   id: 2, 
            name: 'Product2', 
            price: 30, 
            weight: 3
        }
        ]
    };


const secondCustomer:serverResponse<customerData> = {
        lastPage: false, 
        numberOfPages: 10, 
        data: 
            {
                id: 1, 
                deliveryAddress: 'Chisinau', 
                paymentMethod: PAYMENT_METHODS.BANK_TRANSFER, 
                isNewCustomer: true }
    }