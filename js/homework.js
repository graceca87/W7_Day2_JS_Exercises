
// ************************************************************************************
/*
    Exercise 1: Write a function called toCelcius that takes in a number representing 
    temperature in Fahrenheit and converts the number into Celcius.

    Ex 1. toCelcius(32) // 0
    Ex 2. toCelcius(212) // 100
    Ex 3. toCelcius(50) // 10
*/

// to convert f to c: (f - 32) / 1.8 = c

function toCelsius(f){
    let c = (f - 32) / 1.8;
    return c;
};

console.log(toCelsius(85));

// ************************************************************************************

/*
    Exercise 2: Create a class for a User that sets username and password property
    on creation. Add a method to change the user's password. The method should take in 
    the old password and new password. If the old password is wrong do not reset the password.
    Create an instance of the new user and then change their password using the method.
*/

//  Create class User with username & password properties:
let User = {
    username: 'uname123',
    password: 'pw321',
    // Add a method to change the user's password.
    changePw: function(opw, npw){
        if (opw == this.password){
            this.password = npw
        };
    }
};
console.log(User.username)

//  Create an instance of the new user:
let person = Object.create(User);
person.username = 'coolguy2;'
person.password = 'Hello87'
console.log('OG password:', person);

person.changePw('Hello87', 'Boston02134')

console.log('New password:', person.password);


// ************************************************************************************
/*
    Exercise 3: Write a function that takes in an array of integers and returns
    an array of the negative integers squared using Array methods

    Ex 1. squareNegatives([-10, -3, 4, -2, 8, 9, -3]) // [100, 9, 4, 9]
    Ex 2. squareNegatives([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]) // [25, 16, 9, 4, 1]
    Ex 3. squareNegatives([2, 4, 6, 8, 10]) // []
*/
// loop through array (for n in arr); if n is less than zero (n < 0); 
// Create a new empty array and add negative nums to it (newArr.push(n))
// Then loop through newArr (for n in newArr:  n **= 2); return newArr

let squaredNegNums = (arr) => {
    new_arr = []
    for (let n of arr){
        if(n < 0 ){
            new_arr.push(n);{
                for (let i of new_arr){
                    i **= 2
                  }
               }
            }
        }
        return new_arr
     }
console.log('squared:', squaredNegNums([-10, -3, 4, -2, 8, 9, -3]))

// ??? I can't get it to square the numbers in new_arr. I'm sure this isn't right. It's so confusing!