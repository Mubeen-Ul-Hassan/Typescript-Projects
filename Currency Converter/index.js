import inquirer from "inquirer";
const currencyRate = {
    PKR: {
        USD: 0.0044,
        GBP: 0.0037,
        PKR: 1,
    },
    GBP: {
        USD: 1.21,
        PKR: 271.79,
        GBP: 1,
    },
    USD: {
        PKR: 225.5,
        GBP: 0.83,
        USD: 1,
    },
};
const resp = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        choices: ["PKR", "USD", "GBP"],
        message: "Select your currency: ",
    },
    {
        name: "to",
        type: "list",
        choices: ["PKR", "USD", "GBP"],
        message: "Select your convertion currency: ",
    },
    {
        name: "amount",
        tpye: "number",
        message: "Enter your amount: ",
    },
]);
const { from, to, amount } = resp;
if (from && to && amount) {
    const rate = currencyRate[to][from] * amount;
    console.log(`Your convertion amount from ${from} to ${to}: ${rate}`);
}
