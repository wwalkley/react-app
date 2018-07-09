
//es5 
const square = function (x) {
    return x * x;
};

//es5 can also look like this
function square (x){
    return x * x;
};

//es6 arrow function. The benefit of arrow fucntion is that "this" is not bound and will realte to the contect in which it is created.
const squareArrow = (x) => {
    return x * x;
};

//es6 if it returns one function it can be written as so
const squareArrow = (x) => x * x;

const firstName = (fullName) => {
    return fullName.split(' ')[0];
};

//es6 arrow function simplified
const firstName2 = (fullName) => fullName.split(' ')[0];


//es6 arrow function test
const multiplier = {
    numbers: [1, 2, 3, 4],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());