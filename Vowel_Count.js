// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

// solution:

function getCount(str) {
    let vowelsCount = 0;
    let wordArray = str.split("")  
    wordArray.forEach(letter => {if(letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") vowelsCount +=1})
    return vowelsCount;
  }