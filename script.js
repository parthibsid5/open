// CLI DATA 
const CLI_VERSION = '1.0.2';

const DATA = {
  intro: `<span class="c-accent">Parthib Sarkar</span>
<span class="c-muted">about:</span>    engineer, developer, builder of things
<span class="c-muted">location:</span> India
<span class="c-muted">status:</span>   Open to roles & collaborations
`,

  skills: `<span class="c-accent">languages:</span>   Java, Python, JavaScript, SQL
<span class="c-accent">frameworks:</span>  Spring Boot, React, Node.js, REST APIs
<span class="c-accent">tools:</span>       Git, Docker, Intellij, VS Code
<span class="c-accent">interests:</span>   Programming, Development
`,

  projects: `<span class="c-accent">projects:</span>
  <span class="c-white">[1]</span> File Upload / Download Website
  <span class="c-white">[2]</span> Hotel-Booking REST API(user login, role-based)
  <span class="c-white">[3]</span> Travelbuddy- Travel Booking Website
  <span class="c-white">[4]</span> Task-Manager- A Task Management REST API
`,

  contact: `<span class="c-accent">reach me at:</span>
  <span class="c-muted">email:</span>    <span class="c-white">parthibsid5@gmail.com</span>
  <span class="c-muted">linkedin:</span> <span class="c-white">linkedin.com/in/sarkar2112003</span>
  <span class="c-muted">github:</span>   <span class="c-white">github.com/parthibsid5</span>
`,

  help: `<span class="c-accent">available commands:</span>
  <span class="c-white">intro</span>          get intro of me
  <span class="c-white">skills</span>         list my skills
  <span class="c-white">projects</span>       my projects
  <span class="c-white">contact</span>        get contact info
  <span class="c-white">version</span> / <span class="c-white">-V</span>   version info
  <span class="c-white">clear</span>          clear terminal
  <span class="c-white">exit</span>           close this window
`,

  version: `<span class="c-accent">Parthib CLI</span> <span class="c-white">v${CLI_VERSION}</span>
<span class="c-muted">Entitled under Parthib Sarkar. All rights reserved ©</span>
`,
};

const DEFAULT_VIEW = `<span class="c-accent">Parthib CLI</span> <span class="c-muted">[Version ${CLI_VERSION}]</span>
<span class="c-muted">Entitled under Parthib Sarkar. Every right reserved ©</span>

<span class="c-white">Welcome to cli v${CLI_VERSION}</span>
Type <span class="c-accent">help</span> for available commands.
`;

//  STATE

let history   = [];   
let histIndex = -1;   

// OPEN / CLOSE 

function openCli() {
  document.getElementById('cliOverlay').classList.add('open');
  setTimeout(() => document.getElementById('cliInput').focus(), 50);
}

function closeCli() {
  document.getElementById('cliOverlay').classList.remove('open');
}

function handleOverlayClick(e) {
  if (e.target === document.getElementById('cliOverlay')) closeCli();
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeCli();
});

//  COMMAND HANDLER 

function handleCommand(raw) {
  const val    = raw.trim().toLowerCase();
  if (!val) return;

  const output = document.getElementById('cliOutput');
  const body   = document.getElementById('cliBody');

  history.unshift(val);
  histIndex = -1;

  const echo = `<span class="c-muted">~/parthib $</span> <span class="c-white">${val}</span>\n`;

  if (val === 'clear') {
    output.innerHTML = '';
    body.scrollTop = 0;
    return;
  }

  if (val === 'exit') {
    closeCli();
    return;
  }

  let result = null;

  if (val === 'help')                       result = DATA.help;
  else if (val === 'intro')                 result = DATA.intro;
  else if (val === 'skills')                result = DATA.skills;
  else if (val === 'projects')              result = DATA.projects;
  else if (val === 'contact')               result = DATA.contact;
  else if (val === 'version' || val === '-v') result = DATA.version;
  else {
    result = `<span style="color:#f87171">Error: command not recognized — '${val}'</span>\n` +
             `Type <span class="c-accent">help</span> for available commands.`;
  }

  output.innerHTML += echo + result + '\n';
  body.scrollTop = body.scrollHeight;
}

//  INPUT LISTENER 

document.getElementById('cliInput').addEventListener('keydown', function (e) {

  if (e.key === 'Enter') {
    e.preventDefault();
    handleCommand(this.value);
    this.value = '';
  }

  else if (e.key === 'ArrowUp') {
    e.preventDefault();
    if (history.length === 0) return;
    histIndex = Math.min(histIndex + 1, history.length - 1);
    this.value = history[histIndex];
  }
  else if (e.key === 'ArrowDown') {
    e.preventDefault();
    histIndex = Math.max(histIndex - 1, -1);
    this.value = histIndex === -1 ? '' : history[histIndex];
  }
});
