

class Person {
    constructor(name = 'anonymous',age = 0){
        this.name = name;
        this.age = age;
    }

    getDescription(){
        return `${this.name} is ${this.age} years old.`
    }
};

class Student extends Person {
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }

    hasMajor(){
        return !!this.major;
    }

    getDescription(){
        let description = super.getDescription();
        if (this.hasMajor()){
            description += ` Their major is ${this.major}`;
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }

    hasHome(){
        return !!this.homeLocation;
    }

    getDescription(){
        let description = super.getDescription();
        
        if (this.hasHome()){
            description += ` They are from ${this.homeLocation}`;
        }

        return description;
    }
}


const me = new Traveler('William Walkley', 22, 'Auckland');
const other = new Traveler();

console.log(me.getDescription());
console.log(other.getDescription());