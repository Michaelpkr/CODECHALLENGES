const listOfUsers = [
    "Michael",
    "Heather",
    "Ben",
    "Savannah",
    "Miguel",
    "Noa",
    "Emily",
    "Bing",
    "Barnes"
];
 
// Given an array of users, write a function that goes through the array and checks to see if a specific user exists in the array
// inputs:
// String => name of user
// Array => array of users to be checked
 
// output:
//Boolean => true or false

// PSEUDOCODE
//For this to work, I would need the function to first accept a value from the user who is running the function, that would be called "userName". "userName" would be a parameter in the function itself. Within the function, I would have a forEach Loop that would look at the array, and each element within it. if "userName" and an element within the array match, the function would log true, with an else statement of logging false.
 
// ATTEMPT #1 ===============================
function isUserPresent(userName, listOfUsers) {
    for(let i = 0; i > listOfUsers.length; i++){
        if(userName === listOfUsers[i]){
            console.log("User Exists")
        }else console.log("User Does Not Exist")
    }
}

// This attempt didn't work. I'm not sure if it's because of my code, or my inability to test it correctly. I'll talk with others to find out.

// Researched and found .includes(), attempting again.

// ATTEMPT #2 ===============================

function isUserPresent(userName, listOfUsers){
    console.log(listOfUsers.includes(userName))
}

// This solution works.