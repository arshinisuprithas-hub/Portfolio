// =====================
// TYPING ANIMATION
// =====================

const words = [

"Aspiring Software Developer 💻",

"Cyber Security Student 🔐",

"Problem Solver 🧠",

"Tech Enthusiast 🚀",

"Future Software Engineer ⚡"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

if(!typing) return;

const currentWord = words[wordIndex];

if(!deleting){

typing.textContent =
currentWord.substring(0,charIndex+1);

charIndex++;

if(charIndex === currentWord.length){

deleting = true;

setTimeout(typeEffect,1500);

return;
}

}

else{

typing.textContent =
currentWord.substring(0,charIndex-1);

charIndex--;

if(charIndex===0){

deleting=false;

wordIndex++;

if(wordIndex===words.length){

wordIndex=0;
}

}
}

setTimeout(typeEffect,deleting?50:100);
}

typeEffect();

// =====================
// ACTIVE NAVIGATION
// =====================

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop =
section.offsetTop;

if(pageYOffset >= sectionTop-200){

current =
section.getAttribute("id");
}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(
link.getAttribute("href")
=== "#" + current
){

link.classList.add("active");
}

});

});

// =====================
// SCROLL REVEAL
// =====================

const observer =
new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");
}

});

});

document
.querySelectorAll(
".glass-card,.skill-card,.timeline-item"
)
.forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});

// =====================
// FLOATING EMOJIS
// =====================

const emojis = [

"🚀",
"💻",
"⚡",
"🧠",
"✨",
"☕"

];

for(let i=0;i<10;i++){

let emoji =
document.createElement("div");

emoji.className =
"floating-emoji";

emoji.innerHTML =
emojis[
Math.floor(
Math.random()*emojis.length
)
];

emoji.style.left =
Math.random()*100 + "%";

emoji.style.top =
Math.random()*100 + "%";

emoji.style.animationDuration =
(5 + Math.random()*5) + "s";

document.body.appendChild(emoji);

}

// =====================
// SMOOTH SCROLL
// =====================

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor=>{

anchor.addEventListener(
"click",
function(e){

e.preventDefault();

document.querySelector(
this.getAttribute("href")
).scrollIntoView({

behavior:"smooth"

});

});

});

// =====================
// CONSOLE MESSAGE
// =====================

console.log(
"🚀 Portfolio Loaded Successfully"
);
