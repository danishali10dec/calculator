"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// #!usr/bin/env node
const inquirer_1 = __importDefault(require("inquirer"));
// import chalk from "chalk";
// import chalkAnimation from 'chalk-animation';
// import ListPrompt from "inquirer/lib/prompts/list.js";
// const cal = () => {
//     return new Promise((resolve) => {
//         setTimeout(resolve, 2000)
//     })
// }
// async function welcome() {
//     let rainbowtittle = chalkAnimation.rainbow('lets starts calculation');
//     await cal();
//     rainbowtittle.stop();
// }
// await welcome()
// async function askquestion() {
// await    inquirer
//         .prompt([
//             /*pass question*/
//             {
//                 type: "list",
//                 name: "operator",
//                 message: "which operation do you perform? \n",
//                 choices: ["Addition", "Subtraction", "Multipilication", "division"]
//             },
//             {
//                 type: "number",
//                 name: "num1",
//                 message: "Enter number 1:"
//             },
//             {
//                 type: "number",
//                 name: "num2",
//                 message: "Enter number 2:",
//             }
//         ])
//         .then((answer) => {
//             /* user feedback*/
//             // console.log(answer);
//             if(answer.operator == "Addition" ){
//                 console.log(chalk.green
//                     (`${answer.num1} + ${answer.num2} = ${answer.num1 + answer.num2}`));
//             } 
//             else if(answer.operator == "Subtraction" ){
//                 console.log(chalk.green(`${answer.num1} - ${answer.num2} = ${answer.num1 - answer.num2}`));
//             } 
//             else if(answer.operator == "Multiplication" ){
//                 console.log(chalk.green(`${answer.num1} * ${answer.num2} = ${answer.num1 * answer.num2}`));
//             } 
//             else if(answer.operator == "division" ){
//                 console.log(chalk.green(`${answer.num1} / ${answer.num2} = ${answer.num1 / answer.num2}`));
//             }
//             restart()
//         })
// };
// askquestion()
// async function restart () {
//     do{
//         // await askquestion();
//       var  again =  await inquirer
//     .prompt({
//     type : "input",
//     name : "restart",
//     message : "do you want continue? press y or n"
//     })
// }while (again.restart == "y" || again.restart == "yes" || again.restart == "yes")
// }
// let ad = {
//     name: "tariq"
// }
// ad.name
// // restart ()
function guessingnumber() {
    return __awaiter(this, void 0, void 0, function* () {
        let randomnumber = Math.ceil((Math.random() * 6) + 9);
        let answer = yield inquirer_1.default.prompt([{
                name: "usernumber",
                type: "number",
                message: "enter any number 1  to 6"
            }]);
        if (answer.usernumber === randomnumber) {
            console.log("you guess a right number ");
        }
        else {
            console.log("try again!");
        }
    });
}
guessingnumber();
