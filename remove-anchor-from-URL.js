// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

//solution

function removeUrlAnchor(url){
    const spliceStart = url.indexOf("#")
    if(spliceStart === -1){
      return url
    }
    return url.split("").splice(0, spliceStart).join("")
  }