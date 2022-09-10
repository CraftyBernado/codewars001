// Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

// Task
// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

// Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

// Examples
// A size 3 diamond:

//  *
// ***
//  *
// ...which would appear as a string of " *\n***\n *\n"

// A size 5 diamond:

//   *
//  ***
// *****
//  ***
//   *
// ...that is:

// "  *\n ***\n*****\n ***\n  *\n"

//solution

function diamond(n) {
  if (n % 2 === 0 || !n || n <= 0) {
    return null;
  }
  const diam = [];
  const diamPart = "*";
  const diamSpace = " ";
  let diamCounter = 1;
  const midPoint = (n - 1) / 2;
  let spaceCounter = midPoint;
  for (let i = 0; i < n; i++) {
    if (i < midPoint) {
      diam.push(
        `${diamSpace.repeat(spaceCounter)}${diamPart.repeat(diamCounter)}\n`
      );
      diamCounter += 2;
      spaceCounter -= 1;
    } else {
      diam.push(
        `${diamSpace.repeat(spaceCounter)}${diamPart.repeat(diamCounter)}\n`
      );
      diamCounter -= 2;
      spaceCounter += 1;
    }
  }
  return diam.join("");
}
