//*************  TASK 1 *************
// Create a function calcInvestitions that will receive in a props: amountOfMoney, percent and directionOfMarket
// The prop directionOfMarker should accept the following values: TOP, BOTTOM
// The function should return the number
// If the directionOfMarket is top the returned value is amountOfMoney + percent of amountOfMoney
// If the directionOfMarker is bottom the returned value is amountOfMoney - percent of amountOfMoney
// If the directionOfMarket is not provided the returned value is equal with amountOfMoney
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var calcInvestigations = function (amountOfMoney, percent, directionOfMarker) {
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
var prod = {
    id: 2,
    name: "xbox",
    price: 500,
    weight: 4
};
var ordr = {
    id: 12,
    deliveryAddress: "Chisinau, str. Stefan cel Mare",
    createdAt: 2022,
    updatedAt: 2022,
    listOfProducts: ["xbox", "playstation4"]
};
//*************  TASK 3 *************
// Create two classes, Car and Bike
// Both of them are extended from Vechicle class
// By default each of them should have, a name, manufacturer, and color
// The class Car has two methods OpenTrunk, CloseTrunk that are returning the status of trunk
// The class Bike has one method: Fly that acceptes one parameter( howLong: number ) and show in console.
var Vehicle = /** @class */ (function () {
    function Vehicle(name, manufacturer, color) {
        this.name = name,
            this.manufacturer = manufacturer,
            this.color = color;
    }
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(manufacturer, color) {
        return _super.call(this, "Car", manufacturer, color) || this;
    }
    Car.prototype.openTrunk = function () {
        return "Trunk of this ".concat(this.color, " ").concat(this.manufacturer, " ").concat(this.name, " is opened");
    };
    Car.prototype.closeTrunk = function () {
        return "Trunk of this ".concat(this.color, " ").concat(this.manufacturer, " ").concat(this.name, " is closed");
    };
    return Car;
}(Vehicle));
var car = new Car("BMW", "red");
console.log(car);
console.log(car.openTrunk());
console.log(car.closeTrunk());
var Bike = /** @class */ (function (_super) {
    __extends(Bike, _super);
    function Bike(manufacturer, color) {
        return _super.call(this, "Bike", manufacturer, color) || this;
    }
    Bike.prototype.fly = function (howLong) {
        return "".concat(this.manufacturer, " ").concat(this.name, " can fly for ").concat(howLong, " minutes");
    };
    return Bike;
}(Vehicle));
var bike = new Bike("Xiaomi", "green");
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
var PAYMENT_METHODS;
(function (PAYMENT_METHODS) {
    PAYMENT_METHODS["BANK_TRANSFER"] = "bank transfer";
    PAYMENT_METHODS["CASH"] = "money";
})(PAYMENT_METHODS || (PAYMENT_METHODS = {}));
var firstEndpoint = {
    lastPage: true,
    numberOfPages: 20,
    data: [
        { id: 1, name: "Product1", price: 20, weight: "20g" },
        { id: 2, name: "Product2", price: 30, weight: 3 },
    ]
};
var secondEndpoint = {
    lastPage: false,
    numberOfPages: 10,
    data: {
        id: 1,
        deliveryAddress: "Chisinau",
        paymentMethod: PAYMENT_METHODS.BANK_TRANSFER,
        isNewCustomer: true
    }
};
