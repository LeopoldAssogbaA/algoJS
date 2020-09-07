// Convert integers into romain numeral

// I , V , X , L , C , D & M
// 1, 5, 10, 50, 100, 500, 1000


// Get numbers of array
const getRandomNumber = () => {
  let array = [];
  for (let i = 0; i < 10; i++) {
    min = Math.ceil(1);
    max = Math.floor(10000);
    number = Math.floor(Math.random() * (max - min +1)) + min;
    array.push(number);
  }
  return array;
};

// Array of random numbers
let numbersArray = getRandomNumber();
console.log('array', numbersArray);

// Romain Print
let romainPrint = [
  { M: 1000 },
  { D: 500 },
  { C: 100 },
  { L: 50 },
  { X: 10 },
  { V: 5 },
  { I: 1 },
];

// convert number
const convertNumber = number => {
  console.log('number',number);
  result = '';

  // return the correct numeral number and substract its value
  for(i = 0; i< romainPrint.length; i++) {
      for (const [key, value] of Object.entries(romainPrint[i])) {
      while (number % value < number) {
        result = result+`${key}`;
        number -= value;
      }
    }    
  }
  console.log('result', result);
};

numbersArray.forEach(number => {
  convertNumber(number);
});

