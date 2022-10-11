// Dash Insert

// Have the function DashInsert(str) insert dashes ('-') between each two odd numbers in str. For example: if str is 454793 the output should be 4547-9-3. Don't count zero as an odd number.



// Examples
// Input: 99946
// Output: 9-9-946
// Input: 56730
// Output: 567-30

function hyphenatesOddPairs(string) {
    let array = string.split("");
    let newArray = []
    for (i = 0; i < array.length - 1; i++) {
        if (array[i] % 2 !== 0 && array[i + 1] % 2 !== 0) {
            newArray.push(array[i] + "-")
        } else newArray.push(array[i])
    }
    newArray.push(array[array.length])
    let result = newArray.join("")
    console.log(result)
}


// I need to adjust the string this problem gives me, and turn it into an array

// I need to iterate through that array, and determine if the element in that array is an odd or an even number

// If that number is odd, I need to look at the number that directly proceeds it, and if that number is odd, I need to add a hyphen element to the array, proceeding the current element (odd number), and preceding the next element (odd number)