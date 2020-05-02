let string1 = 'Polar Bear';
let string2 = 'Polar bear';
let string3 = 'Penguin';

function isEqual(str1,str2) {
  return str1.toUpperCase() === str2.toUpperCase()
}

console.log(isEqual(string1,string3));