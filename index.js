var inquirer = require("inquirer");
var fs = require("fs")
var generateMarkdown = require("./utils/generateMarkdown.js");

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
    
    const questionArray = [];
    const answerArray = [];
    var iterator = 0;

    for (const [key, value] of Object.entries(data)) {
        questionArray.push(value.question)
    }

    getInput(questionArray, answerArray, iterator);
}

function getInput(questions, answers, i) {
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
                getInput(questions, answers, i);
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
