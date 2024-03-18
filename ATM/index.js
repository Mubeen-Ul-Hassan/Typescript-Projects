import inquirer from "inquirer";
import chalk from "chalk";
console.log(`
         _._._                       _._._
        _|   |_                     _|   |_
        | ... |_._._._._._._._._._._| ... |
        | ||| |  o NATIONAL BANK o  | ||| |
        | """ |  """    """    """  | """ |
   ())  |[-|-]| [-|-]  [-|-]  [-|-] |[-|-]|  ())
  (())) |     |---------------------|     | (()))
 (())())| """ |  """    """    """  | """ |(())())
 (()))()|[-|-]|  :::   .-"-.   :::  |[-|-]|(()))()
 ()))(()|     | |~|~|  |_|_|  |~|~| |     |()))(()
    ||  |_____|_|_|_|__|_|_|__|_|_|_|_____|  ||
 ~ ~^^ @@@@@@@@@@@@@@|=======|@@@@@@@@@@@@@@ ^^~ ~
      ^~^~                                ~^~^

`);
const text = chalk.bgGreen(" WARNING: ") +
    chalk.dim(" A dummy account is created and it's pin is available in the code. Initial balance is hardcoded as PKR 10,000 but will change as you withdraw or paybills.") +
    "\n\n" +
    chalk.dim("  Default PIN: 1001 ") +
    "\n";
console.log(text);
let defaultUser = {
    name: "Mubeen Ul Hassan",
    pin: 1001,
    balance: 10000,
};
const resp = await inquirer.prompt([
    {
        message: "Please enter pin.",
        name: "pin",
        type: "password",
        mask: "*",
    },
]);
if (Number(resp.pin) !== defaultUser.pin) {
    console.log("You have entered an incorrect pin.");
}
else {
    console.log(" Sucessfully login.");
    const resp = await inquirer.prompt([
        {
            message: "Please select an option: ",
            choices: ["Withdraw", "Fast Cash", "Balance Inquiry"],
            type: "list",
            name: "transactionType",
        },
        {
            name: "amount",
            message: "  Please select amount: ",
            type: "list",
            choices: ["500", "1000", "2000", "3000", "5000", "10,000"],
            when(resp) {
                return resp.transactionType == "Fast Cash";
            },
        },
        {
            name: "amount",
            message: "  Please enter amount: ",
            when(resp) {
                return resp.transactionType == "Withdraw";
            },
        },
    ]);
    if (resp.transactionType === "Balance Inquiry") {
        console.log(` Available Balance: ${defaultUser.balance}`);
    }
    else {
        defaultUser.balance = defaultUser.balance - resp.amount;
        console.log(` Debited Amount: ${resp.amount}`);
        console.log(` Your current balance is: ${defaultUser.balance}`);
    }
}
