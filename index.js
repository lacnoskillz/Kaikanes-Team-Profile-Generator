const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./dist/markdown.js');
//const markdown2 = require('./dist/markdown2')
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer")
const managerquestions = [
    {
        type: 'input',
        message: 'What is the team managers name?',
        name: 'manager'
    },
    {
        type: 'input',
        message: 'Enter manager employee ID',
        name: 'id',
        
    },
    {
        type: 'input',
        message: 'Managers email address',
        name: 'email'
    },
    {
        type: 'number',
        message: 'Enter Office number',
        name: 'office'
    },
    {
        type: 'list',
        message: 'Add members?',
        choices: ['engineer', 'intern', 'finish'],
        name: 'add'
    }
];
const engineerquestions = [
    {
        type: 'input',
        message: 'What is the engineers name?',
        name: 'engineer'
    },
    {
        type: 'input',
        message: 'Enter engineer employee ID',
        name: 'id'
    },
    {
        type: 'input',
        message: 'Engineer email address',
        name: 'email'
    },
    {
        type: 'input',
        message: 'Engineers github username',
        name: 'github'
    },
    {
        type: 'list',
        message: 'Add members?',
        choices: ['engineer', 'intern', 'finish'],
        name: 'add'
    }
];
const internquestions = [
    {
        type: 'input',
        message: 'What is the interns name?',
        name: 'intern'
    },
    {
        type: 'input',
        message: 'Enter interns employee ID',
        name: 'id'
    },
    {
        type: 'input',
        message: 'Interns email address',
        name: 'email'
    },
    {
        type: 'input',
        message: 'Enter interns school name',
        name: 'school'
    },
    {
        type: 'list',
        message: 'Add members?',
        name: 'add',
        choices: ['engineer', 'intern', 'finish']

    }
];

let Manager1 = 0;
engineerarray = [];
internarray = [];
questionsasked = managerquestions;
function init(questionsasked) {

    inquirer
        .prompt(questionsasked)

        .then((data) => {


            if (questionsasked == managerquestions) {
                Manager1 = new Manager(data.manager, data.id, data.email, data.office);
                console.log("manager1", Manager1)
            } if (questionsasked == engineerquestions) {
                let Engineer1 = new Engineer(data.engineer, data.id, data.email, data.github);
                engineerarray.push(Engineer1);
                console.log("engineer array:", engineerarray);
            } if (questionsasked == internquestions) {
                let Intern1 = new Intern(data.intern, data.id, data.email, data.school);
                internarray.push(Intern1);
                console.log("intern array", internarray);
            }

            if (data.add == 'engineer') {
                questionsasked = engineerquestions;
                init(questionsasked);
            }
            if (data.add == 'intern') {

                questionsasked = internquestions;
                init(questionsasked);
            }
            if (data.add == 'finish') {
                const filename = 'sampleindex.html';
                //const generatemarkdown2 = markdown2(data);
                const genereatedmarkdown = markdown(Manager1, engineerarray, internarray);
                fs.writeFile(filename, genereatedmarkdown,

                    (err) => err ? console.log(err) : console.log('page generating...')
                );
            }

        });
}
init(questionsasked);