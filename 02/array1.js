// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) shift to right inserting 9 at 0 index
// myArr.shift()    shift to left remove 0 element

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()      joins the array and convert it to string

// console.log(myArr);
// console.log( newArr); joins the array and convert it to string


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) // get element from array from 1 to 3 , does not include the 3 index , does not change original array 

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)    // same as slice but include 3 index also, also deletes the sliced part from original array.
console.log("C ", myArr);
console.log(myn2);