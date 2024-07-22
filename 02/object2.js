//const tinderUser = new Object() // same as normal ,create a singleton object
const tinderUser = {} 

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser); 

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 } // this gives same problem as array , it makes objects as element for new object 
// const obj3 = Object.assign({}, obj1, obj2, obj4) // this concat the objects

const obj3 = {...obj1, ...obj2} // same ,first spread then combines
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); return array of all keys
// console.log(Object.values(tinderUser));  return array of all values 
// console.log(Object.entries(tinderUser));   return array of all values with key like 
//------> [['name','shreshth']]


// console.log(tinderUser.hasOwnProperty('isLoggedIn')); return boolean of whether the object has that property or not


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course // this is destructuring the object , now we can directly access the key with instructor 

// console.log(courseInstructor);
console.log(instructor);


// syntax for json api 
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// this is api in format of array
// [
//     {},
//     {},
//     {}
// ]