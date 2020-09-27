/** 

Given an ASCII art representation of 7-segment display you need to convert it to a number.
Note: number should be converted as is, including leading zeroes.

INPUTS
3 lines: 7-segment display image consisting only of vertical lines, underscores and spaces.
Length of every line is divisible by 3 (so trailing spaces are preserved).

OUTPUTS
One line: The number. Leading zeros should be preserved.

CONSTRAINTS
3 ≤ strings length ≤ 300

EXAMPLE
INPUTS
 _     _  _     _  _  _  _  _  |---> line1
| |  | _| _||_||_ |_   ||_||_| |---> line2
|_|  ||_  _|  | _||_|  ||_| _| |---> line3

OUTPUTS
0123456789


My logic to solve the problem:
1. Get the number form from datas
2. Making a funnel with datas and sort them with conditions
3. Get the number and increment result with its value

*/

const line1 = ' _     _  _     _  _  _  _  _ ';
const line2 = '| |  | _| _||_||_ |_   ||_||_|';
const line3 = '|_|  ||_  _|  | _||_|  ||_| _|';


const arr1 = line1.split('');
const arr2 = line2.split('');
const arr3 = line3.split('');
let result = '';
const L = line1.length;

for (let i = 0; i < L; i += 3) {
  // console.error(arr1[i] + arr1[i + 1] + arr1[i + 2]);
  // console.error(arr2[i] + arr2[i + 1] + arr2[i + 2]);
  // console.error(arr3[i] + arr3[i + 1] + arr3[i + 2]);

  if (arr1[i] + arr1[i + 1] + arr1[i + 2] === ' _ ') {
    // character with a bar on top => 02356789
    if (arr2[i] !== '|') {
    //  2,3 or 7
      if (arr3[i] === '|') {
        result = result + '2';
      } else if (arr2[i + 1] === '_') {
        result = result + '3';
      } else {
        result = result + '7';
      }
    } else if (arr3[i] === '|') {
      // 0,6 or 8 
      if (arr2[i + 1] !== '_') {
        result = result + '0';
      } else if (arr2[i + 2] === '|') {
        result = result + '8';
      } else {
        result = result + '6';
      }

    } else if (arr2[i + 2] === '|') {
      result = result + '9';
    } else {
      result = result + '5';
    }
  } else if (arr2[i] === '|') {
    result = result + '4';
  } else {
    result = result + '1';
  }
}


console.log('-------------------------------');
console.log(line1);
console.log(line2);
console.log(line3);
console.log('-------------------------------');
console.log('result: ', result);
console.log('-------------------------------');

