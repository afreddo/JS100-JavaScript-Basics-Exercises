function calculateBMI(heightInCM, weightInKG) {
  let heightInMeters = heightInCM/100;  
  let bmi = weightInKG / heightInMeters**2;
  return String(bmi.toFixed(2))
}

console.log(calculateBMI(180, 80));