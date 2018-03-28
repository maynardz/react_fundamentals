// We name the class
class User {
    // We call the constructor function and create parameters.
    // These will be values that we want to be passed in and stored in the object.
    constructor (first, last, e) {
        // On the right side of these expressions, the word 'first', 'last', and 'e' are the values
        // that are being passed into the parens when the object is created. 
        this.f = first;
        this.l = last;
        this.email = e;
        // On the left side we have the actual properties of the object.
        // The left side stores the incoming value from the right side as 
        // the property this 'this' specific object is being created.
    }
}

var userOne = new User("Zach", "Maynard", "maynard.zach23@gmail.com");
console.log(userOne.first); //undefined
console.log(userOne.f); //Zach
console.log(userOne.l); //Maynard
console.log(userOne); // User {f: "Zach", l: "Maynard", email: "maynard.zach23@gmail.com"}

// Try writing a car class with make, model, and year.

class Car {
    constructor (make, model, year) {
        this.ma = make;
        this.mo = model;
        this.y = year;
    }
}

var usedCar = new Car('Scion', 'XB', '2006');
console.log(usedCar.y, usedCar.ma, usedCar.mo)