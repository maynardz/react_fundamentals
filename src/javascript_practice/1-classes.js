//ES6 JS CLasses
class User {
    constructor(name) {
        this.name = name;
        this.type = "Trial User"
    }
    //Method 1
    greet() {
        console.log('Welcome back, ' + this.name);
    }
    //Method 2
    status() {
        console.log('Current status: ' + this.type);
    }
}

//Instance of the class/new object
var anonDude = new User("Anonymous dude");

//We can now use the instance and the . operator to access the 2 methods
anonDude.greet();
anonDude.status();

//Another instance of the class 
var anonLady = new User("Anonymous lady");
anonLady.greet();
anonLady.status();

//Another instance of the class
var jeff = new User("Jeff");
jeff.greet();
jeff.status();

//Create 2 new instances of the class
var zach = new User("Zach");
var megan = new User("Megan");
zach.greet();
zach.status();

megan.greet();
megan.status();