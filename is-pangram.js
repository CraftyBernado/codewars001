// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

//solution



function isPangram(str) {
    let alphaArray = "abcdefghijklmnopqrstuvwxyz".split("")
    let arrayStr = str.toLowerCase().split("")
    arrayStr.forEach(element => {
        alphaArray = alphaArray.filter(item => item !== element)
    });
    console.log(alphaArray.length, alphaArray)
    if (alphaArray.length === 0) {
        return true
    }
    else {
        return false
    }
}