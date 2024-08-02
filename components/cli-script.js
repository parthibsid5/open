const intro = "Hello! I'm Parthib, a learning web developer, intrested in AI, ML";
const skills = "Skills: JavaScript, Node.js, React, Python, Machine Learning";
const projects = [
  "Project 1: Personal Portfolio Website\n\n  Project 2: File upload Download website"
]
const contact = "Email: parthibsid5@gmail.com\n\nLinkedIn: https://www.linkedin.com/in/sarkar2112003/\n\nGitHub: https://github.com/parthibsid5";

const help_text = `For more info on a specific command type these :\n'intro'    Get intro of me\n
'skills'     Get skills of me\n
'projects'   Grab my projects at once!\n
'contact'     Get my contact info'\n 
'version' or '-V' for Version info`

const def_view = `Parthib CLI [Version 1.0.2]\nEntitiled under Parthib Sarkar. Every Rights reserved©.\n\nWelcome to cli v1.0.2 \nType "help" for more information`

const version="1.0.2"

let op = document.querySelector(".output")

op.innerText = def_view

let respose = [];
let upArrCount = 0;

function handle_output() {
  let inputValue = document.querySelector(".input-text").value.trim().toLowerCase();
  if (inputValue === "help") {
    op.innerText = help_text;
    respose.unshift("help")
    console.log(respose);
  }
  if (inputValue === "intro") {
 
    op.innerText = intro;
    respose.unshift("intro")
    console.log(respose);

  }
  if (inputValue === "skills") {

    op.innerText = skills;
    respose.unshift("skills")
    console.log(respose);

  }
  if (inputValue === "projects") {
    op.innerText = projects;
    respose.unshift("projects")
    console.log(respose);

  }
  if (inputValue === "contact") {
    op.innerText = contact;
    respose.unshift("contact")
    console.log(respose);
  }
  if (inputValue === "version" || inputValue==="-V") {

    op.innerText = version;
    respose.unshift("version")
    console.log(respose);
  }
  if(inputValue!="help"&& inputValue!="intro" && inputValue!="skills" && inputValue!="contact" && inputValue!="projects" && inputValue!="version"){
console.log("Error");
    respose.unshift(`${inputValue}`)
    op.innerText = "Error command not recognized!"
  }
  

}


function uparrow_list_update(){
 if(upArrCount <= respose.length){
  document.querySelector('.input-text').value=respose[upArrCount-1]
}
else if(upArrCount>respose.length){
  upArrCount=0;
}
}
document.querySelector('.input-text').addEventListener('keydown', function (event) {
  if (event.key === 'Enter'){
    event.preventDefault();
    handle_output();
    document.querySelector('.input-text').value ="";

  }
  else if (event.key === 'ArrowUp') {
    event.preventDefault();
    upArrCount++;
    console.log(upArrCount);
    uparrow_list_update()


  }
  
})

