const fs = require('fs');
const inquirer = require('inquirer');
const { Logo } = require('./utils/logoUtils.js'); // I'll create this file later

const questions = [
    {
        type: 'input',
        name: 'textColor',
        message: 'Choose text color',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape',
        choices: ['circle', 'triangle', 'square'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Choose shape color',
    },
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Generated logo.svg")
        }
    })
};

function init() {
    inquirer.prompt(questions).then((answers) => {
        const newLogo = //function(answers);
        writeToFile('logo.svg', newLogo) 
    })
};

init();