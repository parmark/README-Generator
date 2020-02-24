var inquirer = require("inquirer");
var fs = require("fs")
var i = 0;
var data = [];
var generateMarkdown = require("./utils/generateMarkdown.js");

const questions = [
"Github username?",
"Project title?",
"Description?",
"Table of Contents?",
"Installation?", 
"Usage?",
"License?",
"Contributing",
"Tests"
];

function writeToFile(fileName, data) {
    /* data.forEach(element => {
        fs.appendFile(fileName, element + "\n", function(err) {
            if (err) {
                return console.log(err)
            }
        }) 
    }); */

    fs.writeFile(fileName, generateMarkdown(data), function(err) {
        if (err) {
            return console.log(err)
        }
    })
    console.log("LOGGED!")
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
            data[i] = answer.data;
            i++;
            if (i < 9) {
                init();
            }
            else {
                writeToFile(data[1].toLowerCase().split(" ").join("-") + ".md", data)
            }
        })
}

init();
