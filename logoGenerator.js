const fs = require('fs');
const inquirer = require('inquirer');
const { Logo } = require('./utils/logoUtils.js');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Type logo text',
    },
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
        const logo = new Logo(answers.textColor, answers.shape, answers.shapeColor);
        const svgLogo = logo.generateSVG();
        
        writeToFile('logo.svg', svgLogo); 
    })
};

init();