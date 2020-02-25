var inquirer = require("inquirer");
var fs = require("fs")
var i = 0;
var generateMarkdown = require("./utils/generateMarkdown.js");
const questions = [];
const answers = [];

const data = {
    userName: {
        question: "Github username?",
        answer: ""
    },
    projectTitle: {
        question: "Project title?",
        answer: ""
    },
    description: {
        question: "Description?",
        answer: ""
    },
    install: {
        question: "Installation?",
        answer: ""
    }, 
    usage: {
        question: "Usage?",
        answer: ""
    },
    license: {
        question: "License?",
        answer: ""
    },
    contrib: {
        question: "Contributing?",
        answer: ""
    },
    tests: {
        question: "Tests?",
        answer: ""
    }
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), function(err) {
        if (err) {
            return console.log(err)
        }
    })
    console.log("LOGGED!")
}

function init() {
    
    for (const [key, value] of Object.entries(data)) {
        questions.push(value.question)
    }

    getInput();
}

function getInput() {
    inquirer
        .prompt([
            {
                type: "input",
                message: questions[i],
                name: "data"
            }
        ]).then(function(answer) {
            answers.push(answer.data);
            i++;
            if (i < questions.length) {
                getInput();
            }
            else {
                let j = 0
                for (const [key, value] of Object.entries(data)) {
                    value.answer = answers[j]
                    j++;
                }
                writeToFile(data.projectTitle.answer.toLowerCase().split(" ").join("-") + ".md", data)
            }
    })
}

init();
