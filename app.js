class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk() {
        console.log("beep!");
    }
    toString() {
        console.log(`This vehicle is a ${this.make} ${this.model} from ${this.year}.`)
    }
}

class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 4;

    }

}

class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
    }
    revEngine() {
        console.log("VRRROOMMM!!!")
    }
}



class Garage {
    constructor(capacity) {
        this.carrArr = [];
        this.capacity = capacity;
    }
    add(newVehicle) {
        if (!(newVehicle instanceof Vehicle)) {
            return "Only vehicles are allowed in here, son!"
        }
        if (this.carrArr.length === this.capacity) {
            return "Sorry, we're full."
        }
        this.carrArr.push(newVehicle);
        return "New car added, son!";
    }
}

