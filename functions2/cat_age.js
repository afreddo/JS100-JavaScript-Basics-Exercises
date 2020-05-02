let catAge = ageHuman => {
  let ageLess2 = ageHuman - 2;
  switch (ageHuman) {
  case 1:
  return 15;
  case 2:
  return 15 + 9;
  default:
  return 15 + 9 + (ageHuman - 2) * 4;
  }
}

console.log(catAge(1)); // 15
console.log(catAge(2)); // 24
console.log(catAge(3)); // 28
console.log(catAge(4)); // 32