//*************  TASK 3 *************
// Create two classes, Car and Bike
// Both of them are extended from Vechicle class
// By default each of them should have, a name, manufacturer, and color
// The class Car has two methods OpenTrunk, CloseTrunk that are returning the status of trunk
// The class Bike has one method: Fly that acceptes one parameter( howLong: number ) and show in console.

class Vechicle {
    name: string;
    manufacturer: string;
    color: string;

    constructor(name: string, manufacturer: string, color: string) {
        this.name = name;
        this.manufacturer = manufacturer;
        this.color = color;
    }
}

class Car extends Vechicle {
    trunkStatus: boolean;

    constructor(name: string, manufacturer: string, color: string) {
        super(name, manufacturer, color);
        this.trunkStatus = false;
    }

    OpenTrunk() {
        this.trunkStatus = true;
        return this.trunkStatus;
    }

    CloseTrunk() {
        this.trunkStatus = false;
        return this.trunkStatus;
    }
}

class Bike extends Vechicle {
    constructor(name: string, manufacturer: string, color: string) {
        super(name, manufacturer, color);
    }

    Fly(howLong: number) {
        console.log(`The bike is flying for ${howLong} minutes`);
    }
}