#!/usr/bin/env node
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "numberOne",
        message: "Kindly enter your first number"
    }, {
        type: "number",
        name: "numberTwo",
        message: "Kindly enter your second number"
    }, {
        type: "list",
        name: "operator",
        choices: ["addition(+)", "subtraction(-)", "multiplication(*)", "division(/)"],
        message: "Select your operator:"
    }
]);
const { numberOne, numberTwo, operator } = answers;
if (numberOne && numberTwo && operator) {
    let result = 0;
    if (operator === "addition(+)") {
        result = numberOne + numberTwo;
    }
    else if (operator === "subtraction(-)") {
        result = numberOne - numberTwo;
    }
    else if (operator === "multiplication(*)") {
        result = numberOne * numberTwo;
    }
    else if (operator === "division(/)")
        result = numberOne / numberTwo;
    console.log("Your result is :", result);
}
else {
    console.log("kindly enter valid input");
}
