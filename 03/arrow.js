const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); // this will print {}, because in node default this represent empty object
// but when we run in browser it gives output as window 

// function chai(){
//     let username = "hitesh"
//     console.log(this.username); // this.something can not be used in function, but if we print only this it print many things
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => { // this is arrow function 
    let username = "hitesh"
    console.log(this); //{}
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// when we use curly braces then return is mandatory but not in paranthesis

// const addTwo = (num1, num2) =>  num1 + num2 // without curly return is not necessary 

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()