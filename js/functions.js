/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
function checkLengthString (string, maxLength) {
  return string.length <= maxLength;
}

function checkPalindrome (string) {
  normalString = (string.replaceAll(' ','')).toLowerCase();
  reverseString = '';
  for (let i = normalString.length - 1; i >= 0 ; i--) {
    reverseString += normalString[i];
  }
  return normalString === reverseString;
}


function extractNumbers (string) {
  normalString = (string.toString()).replaceAll(' ','');
  stringNumbers = '';
  for (let i = 0; i <= (string.toString()).length ; i++) {
    Number.isNaN(++normalString[i]) ? 'не число' : stringNumbers += normalString[i];
  }
  return parseInt(stringNumbers, 10);
}

