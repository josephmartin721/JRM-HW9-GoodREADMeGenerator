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
