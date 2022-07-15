// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

//solution

function duplicateEncode(word) {
    word = word.toLowerCase()
  const getRepeatedChars = (word) => {
    const chars = {};
    for (const char of word) {
      chars[char] = (chars[char] || 0) + 1;
    }
    return Object.entries(chars)
      .filter((char) => char[1] > 1)
      .map((char) => char[0]);
  };
  duplicateArray = getRepeatedChars(word);
  encoderArray = word.split("").map((element) => {
    if (duplicateArray.find(char => char === element)) {
        element = ")"
    }
    else{
        element = "("
    }
    return element
  });
  return encoderArray.join("")
}
