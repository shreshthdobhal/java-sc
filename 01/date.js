// Dates

let myDate = new Date()
// console.log(myDate.toString());   sat july 20 2024 10:23 pm gmt dsjfsjf
// console.log(myDate.toDateString());  sat july 20 2024
// console.log(myDate.toLocaleString());   20/07/2024 10:23 pm
// console.log(typeof myDate);  object

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now() // time in mili second from 1 jan 1990

// console.log(myTimeStamp); 123312414
// console.log(myCreatedDate.getTime()); 1990 se provided date tak ke miliseconds
// console.log(Math.floor(Date.now()/1000)); for time in seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})