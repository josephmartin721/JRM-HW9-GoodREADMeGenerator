// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');


// TODO: Create an array of questions for user input
const questions = [{
  type: "input",
  message: "Github username: ",
  name: "username"
},
{
  type: "input",
  message: "Project name: ",
  name: "title"
},
{
  type: "input",
  message: "Project description: ",
  name: "description"
},
{
  type: "input",
  message: "Enter your process: ",
  name: "installation"
},
{
  type: "input",
  message: "Enter the purpose: ",
  name: "usage"

},];


// TODO: Create a function to write README file
async function writeToFile(fileName, data) {
  writeFileAsync(fileName, data).then(function () {
      console.log("Successfully wrote README!");
  }).catch(err => {
      console.log('err ', err);
  });
};

const writeFileAsync = util.promisify(writeToFile);


// TODO: Create a function to initialize app
function init() {}


// Function call to initialize app
init();
