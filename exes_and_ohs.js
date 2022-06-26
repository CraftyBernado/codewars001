// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

//solution

function XO(str) {
    const xoArray = str.split("")
    if(xoArray.filter(element => 
        element.toLowerCase() === "x"
    ).length === xoArray.filter(element => 
        element.toLowerCase() === "o"
    ).length) {
        return true
    }
    else{
        return false
    }
}
