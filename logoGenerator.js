const fs = require('fs');
const inquirer = require('inquirer');
const { Logo } = require('./logoUtils.js'); // I'll create this file later

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

