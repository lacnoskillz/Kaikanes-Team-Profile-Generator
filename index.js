const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./dist/markdown.js');
const Employee = require("./Employee");

const managerquestions = [
    {
        type: 'input',
        message: 'What is the team managers name?',
        name: 'manager'
    },
    {
        type: 'input',
        message: 'Enter manager employee ID',
        name: 'id'
    },
    {
        type: 'input',
        message: 'Managers email address',
        name: 'email'
    },
    {
        type: 'input',
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


engineerarray =[];
internarray = [];
questionsasked = managerquestions;
function init(questionsasked){
    if(questionsasked == engineerquestions){


    }if(questionsasked == internquestions){

    }
inquirer
    .prompt(questionsasked)
   
    .then((data) => {
        const Manager1 = new Managers(data.manager,data.id,data.email,data.office);
        
    
        if(data.add == 'engineer'){
            const Engineer1 = new Engineer(data.engineer,data.id,data.email,data.github);
            engineerarray.push(Engineer1);
            questionsasked= engineerquestions;
            init(questionsasked);
        }
      if(data.add == 'intern'){
        const Intern1 = new Intern(data.manager,data.id,data.email,data.school);
        internarray.push(Intern1);
           questionsasked = internquestions;
            init(questionsasked);
        }
    if(data.add == 'finish'){
        const filename = 'sampleindex.html';
     const genereatedmarkdown =  markdown([Manager1,...engineerarray,...internarray]);
     fs.writeFile(filename, markdown,

        (err) => err ? console.log(err) : console.log('page generating...')
      );
    }
     
  });
}
  init(questionsasked);