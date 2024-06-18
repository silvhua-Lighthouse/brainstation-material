/* 2024-06-17: Given 2 arrays, write a function that will combine both arrays into one alternatley taking elements from each */
const array1 = ['a', 'b', 'c', 'd', 'e'];
const array2 = [1, 2, 3, 4, 5, 6, 7, 8];

function alternateElements(array1, array2) {
  let result = [];
  if (array1.length <= array2.length) {
    shortArray = [...array1];
    longArray = [...array2];
    console.log('short array is array 1')
  } else {
    shortArray = [...array2];
    longArray = [...array1];
    console.log('short array is array 2')
  }
  longArrayCopy = [...longArray]
  for (let i = 0; i < shortArray.length; i++) {
    
    // console.log(i, ':', longArray)
    currentElement = shortArray[i];
    matchingElement = longArray[i];
    result.push(currentElement);
    result.push(matchingElement);
    longArrayCopy.shift();
  }
  result.push(...longArrayCopy);
  return result;
}

// console.log(alternateElements(array1, array2));

/* Double up
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

"Hello World" => "HHeelllloo  WWoorrlldd"
*/

function doubleUp(string) {
  const result = string.split('').map(char => char + char).join('');
  return result
}

console.log(doubleUp('Hello World'));