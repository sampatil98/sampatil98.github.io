// const Typed = require("typed.js")

let hamburger=document.querySelector(".hamburger");
hamburger.onclick= function(){
    let navlist=document.querySelector(".nav-list");
    navlist.classList.toggle("active");
}

var typed = new Typed("#typing", {
    strings: ["Node.js Backend developer", "Full Stack-Web developer"],
    loop: true,
    typeSpeed: 60,
    backSpeed: 45,
    backDelay: 400,
});
