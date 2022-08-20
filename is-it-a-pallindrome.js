// Write a function that checks if a given string (case insensitive) is a palindrome.

//solution

function isPalindrome(x) {
    return x.toUpperCase() === x.split("").reverse().join("").toUpperCase()
  }