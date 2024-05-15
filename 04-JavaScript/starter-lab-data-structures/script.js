myArray = ['tacos', 'sushi', 'banana'];
console.log(myArray);
console.log(myArray[0]);
console.log(`pop ${myArray.pop()}`);
console.log(myArray[5]);
myArray2 = [];
myArray2.push('tacos', 'sushi', 'banana');
console.log(myArray2);
myArray2.pop()
console.log(myArray2);
myArray[1] = 'fish';
console.log(myArray);
myArray[5] = 'five';
console.log(myArray);
myArray.splice(2, 3);
console.log(myArray);

myObject = {
    firstName: 'Silvia',
    lastName: 'Hua',
    likesCoffee: true
}
console.log(myObject);
myObject2 = {};
myObject2.firstName = 'Silvia';
myObject2['lastName'] = 'Hua';
console.log(myObject2);
console.log(myObject2.firstName);
console.log(myObject2['lastName']);

const currentKey = 'lastName';
console.log(myObject2[currentKey])

myObject['areasOfExpertise'] = myArray;
console.log(myObject);
console.log('end of file');