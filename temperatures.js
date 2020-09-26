// ------------ CODIN GAME ------------//

/* 
Write a program that displays the temperature closest to 0 in the input data. If two numbers are as close to zero,
then the positive integer will be considered to be the closest to zero (for example, if the temperatures are -5 and 5, then display 5).
Your program should read the data from the standard input and write the result to the standard output.
Input
Line 1: The number N of temperatures to be analyzed.
Line 2 : A string containing the N temperatures expressed as integers from -273 to 5526.

Output
Display 0 (zero) if no temperature is provided. Otherwise, display the temperature closest to 0 (zero).
Constraints
0 ≤ N < 10000

Example:
Input
5
1 -2 -8 4 5
Output
1

nb: i generated the readline to simulate website inputs
*/

// GENERATE THE READLINE //
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function readLine() {
  let readLine;

  for (let i = 0; i < 20; i++) {
    const n = getRandomIntInclusive(-273, 5526);
    if (readLine === undefined) {
      readLine = n;
    } else {
      readLine = readLine + " " + n;
    }
  }
  return readLine;
}
//

var inputs = readLine().split(' ');
const n = inputs.length; //----> Edited | Original from exercise = parseInt(readline());
const arrP = [];
const arrN = [];
let minP;
let maxN;
let result;

if (n === 0) {
  result = 0;
} else {

  for (let i = 0; i < n; i++) {
    let t = parseInt(inputs[i]);
    if (Math.sign(t) === -1) {
      arrN.push(t);
    } else {
      arrP.push(t);
    }
  }

  minP = Math.min(...arrP);
  maxN = Math.max(...arrN);

  function closest(positive, negative) {
    const transformed = Math.abs(negative);
    const compareArr = [];
    compareArr.push(transformed, positive);
    const closest = Math.min(...compareArr);

    if (closest === positive) {
      return positive;
    } else {
      return negative;
    }
  }

  result = closest(minP, maxN);
}

console.log('Inputs: ', inputs);
console.log('Result = ', result);
