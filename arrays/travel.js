let contains = (word, array) => {
 for (let i = 0; i < array.length; i += 1) {
   if (word === array[i]) return true;
 }
 return false;
}

let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];
  
console.log(contains('Barcelona', destinations)); // true
console.log(contains('Nashville', destinations)); // false
console.log(contains('New York City', destinations)); // false