const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./dist/markdown.js');
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
// function writetofile(filename, data) {
//     const markdown = generateMarkdown(data);
//     // const http = "https://github.com/"+data.github+"?tab=repositories";
//     fs.writeFile(filename, markdown,
  
//       (err) => err ? console.log(err) : console.log('index.html generating...')
//     );
  
//   }


questionsasked = managerquestions;
function init(questionsasked){
    if(questionsasked == engineerquestions){


    }if(questionsasked == internquestions){

    }
inquirer
    .prompt(questionsasked)
   
    .then((data) => {
        
        
    
        if(data.add == 'engineer'){
            questionsasked= engineerquestions;
            init(questionsasked);
        }
      if(data.add == 'intern'){
           questionsasked = internquestions;
            init(questionsasked);
        }
    if(data.add == 'finish'){
        const filename = 'sampleindex.html';
        writetofile(filename, data);
    }
     
  });
}
  init(questionsasked);