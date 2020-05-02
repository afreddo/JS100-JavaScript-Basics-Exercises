let isBlank = string => (string.length > 0) ? false : true;

console.log(isBlank('mars')); // false
console.log(isBlank('  '));   // false
console.log(isBlank(''));     // true