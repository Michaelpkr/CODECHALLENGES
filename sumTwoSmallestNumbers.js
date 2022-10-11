// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

// PSEUDO CODE

// I will need to first iterate through the array to find the two lowest values

// I will then need to add those values, then return them.
let numbers = [4, 1234, 4, 23, 12, 1, 3, 2]

function sumTwoSmallestNumbers(numbers) {  
    let sortedArray = numbers.sort((a, b) => a - b)
    let smallestTwoSum = sortedArray[0] + sortedArray[1]
    return smallestTwoSum
  }

// SORT MIN TO MAX
//   array.sort((a, b) => a - b)

// SORT MAX TO MIN
// array.sort((a, b) => b - a)