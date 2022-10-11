// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// The following are examples of expected output values:

// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3

// solution

function rgb(r, g, b) {
  rHex = r.toString(16).toUpperCase();
  gHex = g.toString(16).toUpperCase();
  bHex = b.toString(16).toUpperCase();
  if (rHex <= `0`) {
    rHex = `00`;
  }
  if (gHex <= `0`) {
    gHex = `00`;
  }
  if (bHex <= `0`) {
    bHex = `00`;
  }
  if (r > 255) {
    rHex = `FF`;
  }
  if (g > 255) {
    gHex = `FF`;
  }
  if (b > 255) {
    bHex = `FF`;
  }

  if (rHex.length === 1) {
    rHex = rHex.padStart(2, `0`);
  }
  if (gHex.length === 1) {
    gHex = gHex.padStart(2, `0`);
  }
  if (bHex.length === 1) {
    bHex = bHex.padStart(2, `0`);
  }

  return `${rHex}${gHex}${bHex}`;
}
