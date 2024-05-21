const locations = ["new york", "london", "toronto", "vancouver", "miami"];
const student = {
  firstName: "John",
  lastName: "Doe",
  course: "Web Development",
};

// different ways to console.log information in web console
// ADD YOUR CODE AFTER THIS LINE
console.log("this message is printed in web console using log() method.");
console.info("user successfully logged in!");
console.warn("Warning! username is not of type string");
console.error("Error! Something went wrong! Please try again");

console.log("Locations data (array) in tabular format: ");
console.table(locations);
console.log("Student information (object) in tabular format: ");
console.table(student);

console.time('total_execution_time');
  function add(num1, num2){
    console.log('Addition is: ', num1 + num2);
  }
  function multiply(num1, num2){
    console.log('Multiplication is: ', num1 * num2);
  }
  add(20, 40); // call the addition function
  multiply(3, 4); // call the multiplication function
console.timeEnd('total_execution_time');