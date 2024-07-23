// Immediately Invoked Function Expressions (IIFE)

// when we need remove global scope polluction from our function then we use iife
// ()(); --> syntax
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => { // arrow function
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')