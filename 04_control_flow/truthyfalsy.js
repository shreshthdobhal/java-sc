const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined
// this is used to handle error , if function is supposed to return a number and does not return it, this operator is used in such case to either one of the values
let val1;
// val1 = 5 ?? 10  // 5
// val1 = null ?? 10    //10
// val1 = undefined ?? 15   //15
val1 = null ?? 10 ?? 20



console.log(val1);

// Terniary Operator
// used just like if else , short form of if else

// condition ? true : false (syntax)

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
//          cheching         if true then this        else this part
// ? is the syntax 