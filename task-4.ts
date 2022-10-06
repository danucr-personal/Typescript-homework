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
  BANK_TRANSFER = 'bank_transfer',
  CASH = 'cash',
  CARD = 'card',
}

type firstType = {
  id: number;
  name: string;
  price: number;
  weight: number | string;
}

type secondType = {
  id: number;
  deliveryAddress: string;
  paymentMethod: PAYMENT_METHODS;
  isNewCustomer: boolean;
}

interface responseType<T> {
  lastPage: boolean;
  numberOfPages: number;
  data: T | T[];
}

const firstEndpointResponse: responseType<firstType[]> = {
  lastPage: true,
  numberOfPages: 20,
  data: [
    {
      id: 1,
      name: 'Product1',
      price: 20,
      weight: '20g',
    },
    {
      id: 2,
      name: 'Product2',
      price: 30,
      weight: 3,
    }
  ]
}

const secondEndpointResponse: responseType<secondType> = {
  lastPage: false,
  numberOfPages: 10,
  data: {
    id: 1,
    deliveryAddress: 'Chisinau',
    paymentMethod: PAYMENT_METHODS.BANK_TRANSFER,
    isNewCustomer: true
  }
}