// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');


// TODO: Create an array of questions for user input
const questions = [{
  type: "input",
  message: "Enter your Github username: ",
  name: "username"
},
{
  type: "input",
  message: "Enter your project name: ",
  name: "title"
},
{
  type: "input",
  message: "Enter the project: ",
  name: "description"
},
{
  type: "input",
  message: "Enter your process: ",
  name: "installation"
},
{
  type: "input",
  message: "Enter the need: ",
  name: "usage"

},
{
  type: "input",
  message: "Enter contributing information: ",
  name: "contribute"

}, {
  type: "input",
  message: "Enter any tests you are running for your project: ",
  name: "tests"
}];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
      if (err) {
        return console.log(err);
      }
    
      console.log("Success! Your README.md file has been generated")
  });
}

const writeFileAsync = util.promisify(writeToFile);


// TODO: Create a function to initialize app
function init() {}


// Function call to initialize app
init();
