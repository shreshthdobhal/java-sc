// object literals

const mySym = Symbol("key1") // creating object 


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary", //this can not be accessed by . , has to use [] only
    [mySym]: "mykey1", // [] this means we will take the symbol mysym , if we not use [] it will take it as a string 
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"]) // same as .
// console.log(JsUser["full name"])  // cannot be accessed with .
// console.log(JsUser[mySym])  // cannot be accessed with .

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser) // now value of email can not be changed as it is freezed  
JsUser.email = "hitesh@microsoft.com" // this will not show any error but value will not change
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting()); // a special case is also when we dont use () after function name , such as JsUser.greeting only , it will not show any error but it will only tell that greeting is a function it does not actually call the function
console.log(JsUser.greetingTwo());