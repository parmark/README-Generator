var inquirer = require("inquirer");
var fs = require("fs")
var i = 0;

const questions = [
"Github username?",
"Project title?",
"Description?",
"Table of Contents?",
"Installation?", 
"Usage?"
];

function writeToFile(fileName, data) {

}

function init() {
    inquirer
        .prompt([
            {
                type: "input",
                message: questions[i],
                name: "data"
            }
        ]).then(function(answer) {
            console.log(answer.data)
            i++;
            if (i < 6) {
                init();
            }
        })
}

init();
