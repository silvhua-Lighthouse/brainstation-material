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

function makeBulletedList(notes, who = 'Brian') {
  let formatted = notes.trim();
  formatted = formatted.replace(/\xa0/g, '\n');
  formatted = formatted.replace(/\n+/g, '\n- ');
  formatted = formatted.replace(/\. /g, '.\n- ');
  formatted = formatted.replace(/ - /g, '.\n- ');
  formatted = '- ' + formatted;
  let today = new Date();
  let formattedDate = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;
  console.log(`Notes from ${who} on ${formattedDate}:`);
  console.log(formatted);
  return formatted;
}

let notes = `
She has an auto immune disease
She is 40 and 5 foot seven and 69 kg
`;

let who = 'Brian';
let formatted = makeBulletedList(notes, who);