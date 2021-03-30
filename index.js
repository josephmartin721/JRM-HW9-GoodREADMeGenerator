// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const axios = require('axios');
const api = require('./utils/api.js');
const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = [{
  type: "input",
  message: "Github username: ",
  name: "user"
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
  message: "Enter your purpose: ",
  name: "purpose"
},
{
  type: "input",
  message: "Enter the process: ",
  name: "process"

},
{
  type: "input",
  message: "Questions can be directed to the author through GitHub: ",
  name: "questions"

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
  
      console.log("Writing your README")
      const markdown = generateMarkdown(userResponses, userInfo);
      console.log(markdown);
  
      await writeFileAsync('ExampleREADME.md', markdown);

  } catch (error) {
      console.log(error);
  }
};

init();
