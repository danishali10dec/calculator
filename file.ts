// #!usr/bin/env node
import inquirer from "inquirer";
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






























 async function guessingnumber(){

let randomnumber  = Math.ceil((Math.random()*6)  +9);

let answer =  await inquirer.prompt([{
 name : "usernumber",
 type : "number",
 message : "enter any number 1  to 6"

     }]);

if (answer.usernumber === randomnumber){
    console.log("you guess a right number ")
}else {
    console.log("try again!")
}
}

guessingnumber()