const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) // insert the dc heros as a single element in marvel at index 3

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); flash


// concat adds 2 array and return a single array that needs to be stored in new array
// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);  

const all_new_heros = [...marvel_heros, ...dc_heros] // does same work as concat but it spread array into single elements and then add, can have more than 2 array in argument after ...

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // flat spread element of array as single element and take argument for depth, meaning till which depth we have to flatten the array , can give infinity iif you dont know the depth
console.log(real_another_array);



console.log(Array.isArray("Hitesh")) //false
console.log(Array.from("Hitesh")) // from covert into an array 
console.log(Array.from({name: "hitesh"})) // interesting as it gives output as empty array [] , cause it gets confused in how to make array of the argument

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // same as from [100,200,300] makes array of arguments