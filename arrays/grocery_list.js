let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];
let length = groceryList.length;

for (let i = 0; i < length; i += 1) {
  console.log(groceryList.pop());
}

console.log(groceryList);