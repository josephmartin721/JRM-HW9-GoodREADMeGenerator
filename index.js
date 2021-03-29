// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const util = require('util')


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
    
      console.log("Congrats! Your README is operational!")
  });
}

const writeFileAsync = util.promisify(writeToFile);


// TODO: Create a function to initialize app

async function init() {
  try {
      const userResponses = await inquirer.prompt(questions);
      console.log("Your responses: ", userResponses);
      console.log("Thank you for your responses! Fetching your GitHub data next...");
  
      const userInfo = await api.getUser(userResponses);
      console.log("Your GitHub user info: ", userInfo);
  
      console.log("Generating your README next...")
      const markdown = generateMarkdown(userResponses, userInfo);
      console.log(markdown);
  
      await writeFileAsync('ExampleREADME.md', markdown);

  } catch (error) {
      console.log(error);
  }
};

init();
