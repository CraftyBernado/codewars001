// function find_average(array) {
//     // your code here
//     return 0;
//   }

//solution

function find_average(array) {
  if (array.length === 0) {
    return 0;
  }
  return array.reduce((prev, curr) => prev + curr)/array.length;
}
