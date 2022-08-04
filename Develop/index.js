// TODO: Include packages needed for this application
const inquirer = require('inquirer');
//To envoke created readme file
const fs = require('fs');
//markdown file 
const generateMarkdown = require("./utils/generateMarkdown");

const generateReadMe = ({ title, description, installation, usage, license, contributing, tests, userName, userEmail }) => {
let lic = license.split(" ").join("");
    return `


![badge](https://img.shields.io/badge/license-${lic}-brightgreen.svg)<br />

# Project Title: 
${title}
---
## Description: 
${description}
---
## Table of Content:
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [How to Contribute](#how-to-contribute)
5. [Tests](#tests)
---
## Installation: 
${installation}
---
## Usage: 
${usage}
---
## License: 
![badge](https://img.shields.io/badge/license-${lic}-brightgreen.svg)
<br />
Application is covered by ${license} license. 
---
## How to contribute: 
${contributing}
---
## Tests : 
${tests}
---
##Contact Information: 
For any questions and suggestions, please, contact using info below.
* GitHub Username: 
${userName}
* Email for questions and suggestions: 
${userEmail}
`;
}

// TODO: Create an array of questions for user input
// const questions = [
    inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "What's the title of your project?",
    },
    // Question for the project Description
    {
        type: "input",
        name: "description",
        message: "Please enter a description of your project.",
    },

    // Table of Contents, andling this in the markdown.js

    // Question for Installation
    {
        type: "input",
        name: "installation",
        message: "Please enter instruction on how to install the software for the program.",
    },

    // Question for Usage
    {
        type: "input",
        name: "usage",
        message: "Please describe how we can use this project.",
    },

    // Question for License 
    {
        type: "list",
        name: "license",
        message: "Please select a license for this project.",
        choices: [
            "GNU AGPLv3",
            "GNU GPLv3",
            "GNU LGPLv3",
            "Apache 2.0",
            "Boost Software 1.0",
            "MIT",
            "Mozilla",
        ],
    },

    // Question for Contributing 
    {
        type: "input",
        name: "contributing",
        message: "How can users contribute to your project.",
    },

    // Question for Tests
    {
        type: "input",
        name: "tests",
        message: "Please enter any testing instructions you would like to provide for this project.",
    },

    // QUESTIONS section -- github 
    {
        type: "input",
        name: "userName",
        message: "What is your GitHub username?",
    },

    // QUESTIONS section -- email address
    {
        type: "input",
        name: "userEmail",
        message: "What is your GitHub email address that contributors may contact?",
    },
])
    .then((response) => {
        const questions = generateReadMe(response);
     // TODO: Create a function to write README file
     fs.writeFile("readMe.md", questions, (err) =>
   err ? console.log(err) : console.log("ReadMe has been created!")
     );
});


// ];







// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
