const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");
const Employee = require("./lib/Employee");
const Employees = []


console.log("Hello and welcome. Please use this tool to generate a summary about your team and it's members");

async function teamBuilder(){

var managerQuestions = await inquirer.prompt([

  {
    type: 'confirm',
    name: 'managerRole',
    message: "Please confirm that you will now be entering information for the manager."
  },

  {
    type: 'input',
    name: 'managerName',
    message: "Please provide the first and last name of the manager."
  },

  {
    type: 'input',
    name: 'managerID',
    message: "Please provide the ID number for the manager."
  },

  {
    type: 'input',
    name: 'managerEmail',
    message: "Please enter the managers email address."
  },

  {
    type: 'input',
    name: 'managerOfficeNum',
    message: "Please enter the office number of the manager."
  },

])

var managerOutput = new Manager(managerQuestions.managerName, managerQuestions.managerID, managerQuestions.managerEmail, 'Manager', managerQuestions.managerOfficeNumber)
Employees.push(managerOutput)


var engineerQuestions = await inquirer.prompt([

  {
    type: 'confirm',
    name: 'engineerRole',
    message: "Please confirm that you will now be entering information for the engineer."
  },

  {
    type: 'input',
    name: 'engineerName',
    message: "Please provide the first and last name of the engineer."
  },

  {
    type: 'input',
    name: 'engineerID',
    message: "Please provide the ID number for the engineer."
  },

  {
    type: 'input',
    name: 'engineerEmail',
    message: "Please enter the engineer's email address."
  },

  {
    type: 'input',
    name: 'engineerGitHub',
    message: "Please enter the github link for the engineer."
  },

])

var engineerOutput = new Engineer(engineerQuestions.engineerName, engineerQuestions.engineerID, 'Engineer', engineerQuestions.engineerGitHub)
Employees.push(engineerOutput)

var internQuestions = await inquirer.prompt([

  {
    type: 'confirm',
    name: 'internRole',
    message: "Please confirm that you will now be entering information for the intern."
  },

  {
    type: 'input',
    name: 'internName',
    message: "Please provide the first and last name of the intern."
  },

  {
    type: 'input',
    name: 'internID',
    message: "Please provide the ID number for the intern."
  },

  {
    type: 'input',
    name: 'internEmail',
    message: "Please enter the intern's email address."
  },

  {
    type: 'input',
    name: 'internSchool',
    message: "Please enter the name of the school the intern went to."
  },

])

var internOutput = new Intern(internQuestions.internName, internQuestions.internID, 'Intern', internQuestions.internSchool)
Employees.push(internOutput)

if( !fs.existsSync(OUTPUT_DIR) ) fs.mkdirSync(OUTPUT_DIR)
fs.writeFileSync(outputPath, render(Employees), "utf-8");

console.log('Thank you for entering the required information. Your team is now being generated!')

}

teamBuilder()






