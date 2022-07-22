// Build Tower
// Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]


//solution

function towerBuilder(nFloors) {
  buildingArray = []
  for(let i=0; i<nFloors; i++){
    let bottomRow = nFloors+(nFloors-1)
    let newStr = "*".repeat(bottomRow-(i*2))
    let spaceCounter = `${" ".repeat(i)}${newStr}${" ".repeat(i)}`
    buildingArray.unshift(spaceCounter)
  }
  return buildingArray
}