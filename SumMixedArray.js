// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(x) {
  const initialValue = 0;
  return x.reduce(
    (previousValue, currentValue) => previousValue + Number(currentValue),
    initialValue
  );
}
