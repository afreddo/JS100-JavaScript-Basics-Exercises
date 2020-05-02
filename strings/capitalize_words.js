let phrase = 'launch school tech & talk';

let phraseSplit = phrase.split(' ');
let array = [];

for (let i = 0; i < phraseSplit.length; i += 1) {
  array.push(phraseSplit[i][0].toUpperCase() + phraseSplit[i].slice(1));
}
let final = array.join(' ');

console.log(final);