/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  console.log("App is running!");
};


//random select one of the element
function pickElement(arr) {
  let i = Math.floor(Math.random() * arr.length);
  return arr[i]
}

//generate domain
function generateDomain() {
  let domain = `www.${pickElement(article)}.${pickElement(adjective)}.${pickElement(main)}.com`
  printDomain(domain)
}

function printDomain(domain) {
  render.textContent = domain;
}

/// DEFINE GOBAL VARIABLES
const article = ["the", "one", "my", "your",]
const adjective = ['Best', 'Great', "First", 'Stunning',]
const main = ['Domain', 'Website', 'Site', 'Project']
const render = document.querySelector('#domain')
const button = document.querySelector('#button'); //check why webpack don't get the button.eventListener('click',generateDomain)
document.addEventListener('click', generateDomain)

///////////////////// QUESTIONS:
// -ERROR: button.addEventListener('click', generateDomain) give error. why???