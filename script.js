const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions= [
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your repository?',
      validate: nameInput => {
          if (nameInput) {
              return true;
          } else {
              console.log('Enter the name of your project')
          }
      }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'repo',
        message: 'Please enter the name of your repo. (Required)',
        validate: repoInput => {
            if (repoInput) {
                return true;
            } else {
                console.log('Please enter the name of your repo!')
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description of your application. (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a description!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide information for using your application. (Required)',
        validate: infoInput => {
            if (infoInput) {
                return true;
            } else {
                console.log('Please provide information for using your application!');
                return false;
            }
        }
    },
    {
      type: 'checkbox',
      message: 'anything else you would like to add to your readme?',
      name: 'stack',
      choices: ['screenshots', 'license', 'questions'],
    },
    
  ])
  .then((data) => {
    const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });
  
  // TODO: Create a function to write README file
function writeToFile(fileName, data,) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          return console.log(err);
        }
      
        console.log("README created!")
    });
}
}

// TODO: Create a function to initialize app
function init() {
    questions
}

// Function call to initialize app
init();