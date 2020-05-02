function repeat(times, string) {
  let reps = '';
  for (let i = 1; i <= times; i += 1) {
    reps += string;
  }
  return reps;
}

console.log(repeat(3, 'ha'));