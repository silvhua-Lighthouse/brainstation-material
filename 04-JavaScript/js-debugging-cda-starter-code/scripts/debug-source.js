/**
 *
 * @param {*} operandOne - should be a number
 * @param {*} operandTwo - should be a number
 * @param {*} operator - should be a string
 */
function calculator(operandOne, operandTwo, operator) {
  debugger; 
  const allowedOperations = ["+", "-", "*", "/"];
  // check if operator is of type string
  if (typeof operator !== "string") {
    console.error("operator (third argument) should be of type string");
    return -1;
  }

  // check if operator is one of the allowed operators
  if (!allowedOperations.includes(operator)) {
    console.error(
      "operator (third argument) is not allowed. Please select an operator from: ",
      allowedOperations
    );
    return -1;
  }

  // check if operandOne & operandTwo are of type number
  if (typeof operandOne !== "number" || typeof operandTwo !== "number") {
    console.error(
      "operandOne & operandTwo (first two arguments) should be of type number"
    );
    return -1;
  }

  // addition
  if (operator === "+") {
    return operandOne + operandTwo;
  }
  // subtraction
  else if (operator === "-") {
    return operandOne - operandTwo;
  }
  // multiplication
  else if (operator === "*") {
    return operandOne * operandTwo;
  }
  // division
  else if (operator === "/") {
    if (operandTwo === 0) {
      console.error(
        "cannot divide by zero. operandTwo (argument two) should not be zero."
      );
      return -1;
    }
    return operandOne / operandTwo;
  }
}

// let result = calculator(3, 7, "%");
// let result = calculator(3, 7, "+");
// if (result === 10) console.log("Result of 3 + 7 is: ", result);

/**
 * UNCOMMENT ONE FUNCTION CALL AT A TIME
 * RESOLVE THE ERROR
 * UNCOMMENT NEXT FUNCTION CALL
 */
// result = calculator(25, "5", "-");
// result = calculator(25, 5, "-");
// if (result === 20) console.log("Result of 25 - 5 is: ", result);

// result = calculator("10", 5, "*");
// if (result === 50) console.log("Result of 10 * 5 is: ", result);

// result = calculator("a", 6, "/");
// if (result === 5) console.log("Result of 30 / 6 is: ", result);

// result = calculator(30, 0, "/");
// if (result === 5) console.log("Result of 30 / 6 is: ", result);
