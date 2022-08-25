// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

//solution

function countPositivesSumNegatives(input) {
  let posnum = 0;
  let negnum = 0;
  if (!input || input.length === 0) {
    return [];
  }
  input.forEach((element) => {
    if (element > 0) {
      posnum += 1;
    } else if (element < 0) {
      negnum += element;
    }
  });
  return [posnum, negnum];
}
