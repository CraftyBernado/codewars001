// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

//solution 

function expandedForm(num) {
    const numToArray = String(num).split("")
    console.log(numToArray)
    newArray = []
    numToArray.forEach((element, index) => {if(element!== "0"){
        newArray.push(element+"0".repeat(numToArray.length -index-1))
        console.log(newArray)
    }})
    return newArray.join(" + ")
}