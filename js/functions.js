function checkLengthString (string, maxLength) {
 return string.length <= maxLength
};
console.log (checkLengthString ('Некоторая строка', 20))


function checkPalindrome (string) {
normalString = (string.replaceAll(' ','')).toLowerCase();
reverseString = '';
for (let i = normalString.length -1; i >=0 ; i--) {
reverseString += normalString[i]
};
return normalString===reverseString;
};

console.log (checkPalindrome ('дом Мод'));


function extractNumbers (string) {
normalString = (string.toString()).replaceAll(' ','');
stringNumbers = '';
for (let i = 0; i <= (string.toString()).length ; i++) {
Number.isNaN(++normalString[i])?  'не число': stringNumbers += normalString[i];
};
return parseInt(stringNumbers);
};

console.log (extractNumbers ('Жили-были 2 веселых гуся и 11 гусынь'));
