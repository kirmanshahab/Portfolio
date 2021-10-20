let about = document.getElementById('about');
let project = document.getElementById('project');
let skill = document.getElementById('skill');
let contact = document.getElementById('contact');
let aboutBody = document.getElementById('about-body');
let projectBody = document.getElementById('project-body');
projectBody.hidden = true;
let skillBody = document.getElementById('skill-body');
skillBody.hidden = true;
let contactBody = document.getElementById('contact-body');
contactBody.hidden = true;
let mainBody = document.getElementById('main')

project.addEventListener('click',()=>{
    projectBody.hidden = false;
    aboutBody.hidden = true;
    skillBody.hidden = true;
    contactBody.hidden = true;
    mainBody.style.backgroundImage = 'linear-gradient(to top, #76b852, #8dc26f)';
});

skill.addEventListener('click',()=>{
    projectBody.hidden = true;
    aboutBody.hidden = true;
    skillBody.hidden = false;
    contactBody.hidden = true;
    mainBody.style.backgroundImage = 'linear-gradient(to bottom, #ffb347, #ffcc33)';
});

contact.addEventListener('click',()=>{
    projectBody.hidden = true;
    aboutBody.hidden = true;
    skillBody.hidden = true;
    contactBody.hidden = false;
    mainBody.style.backgroundImage = 'linear-gradient(to top, #2c3e50, #fd746c)';
});

about.addEventListener('click',()=>{
    projectBody.hidden = true;
    aboutBody.hidden = false;
    skillBody.hidden = true;
    contactBody.hidden = true;
    mainBody.style.backgroundImage = 'linear-gradient(to top, #000428, #004e92)';
})

