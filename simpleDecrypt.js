// Transform a string with its index in alphabet

let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let alphabetArray = alphabet.split('');

result = '';

const decrypt = (string) => {
  let stringArray = string.split('');

  //check if string is in alphabet and rotate his index to decrypt
  stringArray.forEach(char => {
    let index = alphabetArray.findIndex(alphabetString => (alphabetString === char))
    if ((index !== -1) && (index < 13)) {
      result += alphabetArray[index + 13];

    } else if ((index !== -1) && (index >= 13)) {
      result += alphabetArray[index - 13];
    } else {
      result += char;
    }
  });

  return result;
}


console.log(decrypt('URYYB JBEYQ!'));

// Alternative with charcode 

const decryptString = (string) => {
  return string
  .split('')
  .map(char => {
    const code = char.charCodeAt(char)
    if (code < 65 || code > 90) {
      return String.fromCharCode(code);
    } else if (code < 78) {
      return String.fromCharCode(code + 13);
    } else {
      return String.fromCharCode(code -13);
    }
  }).join('');
};


console.log(decryptString('NYTBEVGUZRF'));
