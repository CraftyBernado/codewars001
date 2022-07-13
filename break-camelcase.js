// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(str) {
    newArray = []
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            newArray.push(" ")
        }
        newArray.push(str[i])
    }
    return newArray.join("")
}

// things to do: LEARN SOME REGEX