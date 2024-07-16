// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true
// this is because comparision op < > turns null to 0 thats why null>=0 is true

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
// avoid using such comparisions

// === also check datatype 
// "2"==2  true as only val is checked

console.log("2" === 2); false