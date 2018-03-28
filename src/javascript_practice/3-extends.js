class User {
    constructor(name) {
        this.name = name;
        this.type = "Trial User";
    }
    //Method 1
    greet() {
        console.log('Welcome back, ' + this.name);
    }
    //Method 2
    status() {
        console.log('Current status: ' + this.type)
    }
}

//Extends 
class TrialUser extends User {
    trialEnding() {
        console.log('Your trial will be ending soon, ' + this.name + '.' + ' Would you like to join our program?');
    }
}

//Instance of User class
var anonDude = new User('Anonymous');
anonDude.greet();
anonDude.status();

//Instance of TrialUser class
var trialUser = new TrialUser('Zach');
trialUser.greet();
trialUser.trialEnding();
trialUser.status();

//Make a class called BannedUser. Write a method/function that prints out a message about why they have been banned. 

class BannedUser {
    constructor(person) {
        this.person = person;
        this.reason = "stealing";
    }
    firstOffense() {
        console.log(`${this.person}, you have been banned because you were caught ${this.reason}.`)
    }
}

var bannedUser = new BannedUser('George')
bannedUser.firstOffense();

