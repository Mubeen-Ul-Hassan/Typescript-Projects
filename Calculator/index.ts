#!usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

const sleep = () => {
  return new Promise((res) => {
    setTimeout(res, 2000);
  });
};

async function welcome() {
  let rainbowTitle = chalkAnimation.rainbow("Mubeen Ul Hassan");
  await sleep();
  rainbowTitle.stop();
  console.log(`   _____________________
  |  _________________  |
  | |              0. | |
  | |_________________| |
  |  ___ ___ ___   ___  |
  | | 1 | 2 | 3 | | + | |
  | |___|___|___| |___| |
  | | 4 | 5 | 6 | | - | |
  | |___|___|___| |___| |
  | | 7 | 8 | 9 | | x | |
  | |___|___|___| |___| |
  | | . | 0 | = | | / | |
  | |___|___|___| |___| |
  |_____________________|\n`);
  console.log(`125 102 105 122 115 105 116 123 103 110`);
}

welcome();

async function askQuestion() {
  inquirer
    .prompt([
      {
        type: "number",
        name: "numberOne",
        message: "Enter your first number: ",
      },
      {
        type: "number",
        name: "numberTwo",
        message: "Enter your second number: ",
      },
      {
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
        message: "Choose your operation:",
      },
    ])
    .then((answer) => {
      if (answer.operator === "Addition") {
        console.log(
          `${answer.numberOne} + ${answer.numberTwo} = ${
            answer.numberOne + answer.numberTwo
          }`
        );
      } else if (answer.operator === "Subtraction") {
        console.log(
          `${answer.numberOne} - ${answer.numberTwo} = ${
            answer.numberOne - answer.numberTwo
          }`
        );
      } else if (answer.operator === "Multiplication") {
        console.log(
          `${answer.numberOne} * ${answer.numberTwo} = ${
            answer.numberOne * answer.numberTwo
          }`
        );
      } else if (answer.operator === "Division") {
        console.log(
          `${answer.numberOne} / ${answer.numberTwo} = ${
            answer.numberOne / answer.numberTwo
          }`
        );
      } else {
        console.log("Invalid input :)");
      }
    });
}

askQuestion();

async function startAgain() {
  do {
    var again = await inquirer.prompt([
      {
        type: "input",
        name: "restart",
        message: "Do you want to continue? Press y or n: ",
      },
    ]);
  } while (
    again.restart === "y" ||
    again.restart === "Y" ||
    again.restart === "yes  " ||
    again.restart === "YES"
  );
}
