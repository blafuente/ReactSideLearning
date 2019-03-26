// ARRAY Destructiing
const numbers = [1, 2, 3];
[num1, num2] = numbers;
console.log(num1, num2);

[num1, ,num3] = numbers;
console.log(num1, num3);

// Object Destructing 
// {name} = {name:'Brian',age:30}
// console.log(name) // Brian
// console.log(age)  // undefined