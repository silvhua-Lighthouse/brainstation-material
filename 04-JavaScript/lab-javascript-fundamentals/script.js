// Write a statement that adds the numbers 3 and 5 and stores it in a variable.
summed = 3 + 5
console.log(summed)
// Create two string variables, one containing your first name and the other containing your last name. Concatenate them to display your full name.
const firstName = 'Silvia';
const lastName = 'Hua';
const fullName = `${firstName} ${lastName}`;
console.log(fullName);
// Create two boolean variables (one true and one false). OR (||) and AND (&&) the variables together then inspect the result.
const trueVar = true;
const falseVar = false;
console.log(trueVar && falseVar);
console.log(trueVar || falseVar);

// In one line, add 3 and 5 together and then multiply the result by 11.
console.log((3 + 5) * 11);

// The final result should be 88.
// Write a comparison expression that evaluates to true.
console.log(9 > 4);
// Write a comparison expression that evaluates to false.
// Bonus: do it by changing only one character from exercise 5.
console.log(9 === 4);

// Write a comparison expression using a greater-than or less-than operator.
console.log(8 >= 8);

// Write a comparison expression between 2 and ”2” using == and === operators, are the results different?
console.log(2 == "2");
console.log(2 === "2");

// Find the remainder of 10 / 3.
console.log(10 / 3);
// Create variables for all available JS primitive types and inspect their type using typeof operator.
const nullVar = null;
const boolVar = true;
const undefinedVar = undefined;
const numVar = 9;
const stringVar = 'hello';
// Bonus: create a variable without value set and inspect its type.
let emptyVar;
console.log(typeof emptyVar);
// Create a function called addNumber that takes two arguments, num1 and num2 and returns the sum of the numbers.
function addNumber(num1, num2) {
    return num1 + num2;
}
// The result of the addNumber(17, 25) invocation should be 42.
console.log(addNumber(17, 25));
console.log('Silvia', 'Hua')