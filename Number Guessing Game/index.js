import inquirer from 'inquirer';
const systemGeneratedNo = Math.floor(Math.random() * 20);
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "userGuess",
        massage: "Write your guess between 1 to 20: "
    }
]);
const { userGuess } = answers;
if (userGuess === systemGeneratedNo) {
    console.log("your answer is correct \n you Win!");
}
else {
    console.log("Please try again");
}
