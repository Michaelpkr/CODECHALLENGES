// ==================================
// CHALLENGE
// ==================================

// Write a function to split a string and convert it into an array of words.

// Examples (Input ==> Output):
// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are",


// ==================================
// PSEUDOCODE + SOLUTION
// ==================================

// I will need to take in a String, and somehow split it into separate elements in an Array. My guess is that there is a method that will allow me to do this automatically, but if not, I think I can use the Split method, and maybe Push in conjuction to create a new array of the individual strings.

// Note: I learned during this exercise that .split() outputs an array naturally.

let string = "I love arrays they are my favorite"

function stringToArray(string){

    let stringArray = string.split(" ")
    
    return stringArray
    
}