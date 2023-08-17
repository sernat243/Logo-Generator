const fs = require('fs');
const path = require('path');
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

function writeToFile(outputFolder, fileName, data) {
    const outputPath = path.join(__dirname, outputFolder);
    
    if (!fs.existsSync(outputPath)) {
        fs.mkdirSync(outputPath);
    }
    
    const outputFile = path.join(outputPath, fileName);

    fs.writeFile(outputFile, data, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log(`Generated ${fileName}`)
        }
    })
};

function init() {
    inquirer.prompt(questions).then((answers) => {
        const logo = new Logo(answers.text, answers.textColor, answers.shape, answers.shapeColor);
        const svgLogo = logo.generateSVG();

        writeToFile('examples', 'logo.svg', svgLogo); 
    })
};

init();