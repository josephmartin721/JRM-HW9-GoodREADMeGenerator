// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `[![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)](${generateProjectUrl(github, title)})`
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # Project Title: 
  ${data.title}
  
  ## Project Description:
  ${data.description}

  ## Project Purpose:
  ${data.purpose}

  ## Project Process:
  ${data.process}

  ## Questions can be directed to the author through GitHub:
  ${data.questions}
  
  ##License
  ${renderLicenseBadge}

`;
}

module.exports = generateMarkdown;
