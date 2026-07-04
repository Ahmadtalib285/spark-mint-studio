// ===== Spark Mint Studio =====
// Part 1

window.addEventListener("load", function () {

document.body.style.opacity = "0";

setTimeout(function () {

document.body.style.transition = "opacity 1s ease";

document.body.style.opacity = "1";

}, 100);

});

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function(link){

link.addEventListener("mouseenter", function(){

this.style.color = "#00ffd5";

});

link.addEventListener("mouseleave", function(){

this.style.color = "";

});

});

const buttons = document.querySelectorAll(".btn");

buttons.forEach(function(button){

button.addEventListener("mouseenter", function(){

this.style.transform = "scale(1.05)";

});

button.addEventListener("mouseleave", function(){

this.style.transform = "scale(1)";

});

});
// ===== Spark Mint Studio =====
// Part 2

const offer = document.querySelector(".offer");

if(offer){

setInterval(function(){

offer.style.transform = "scale(1.05)";

offer.style.transition = ".4s";

setTimeout(function(){

offer.style.transform = "scale(1)";

},400);

},2000);

}

const cards = document.querySelectorAll(".service-card");

cards.forEach(function(card){

card.addEventListener("mouseenter",function(){

this.style.transform="translateY(-10px)";

});

card.addEventListener("mouseleave",function(){

this.style.transform="translateY(0px)";

});

});

const portfolioCards=document.querySelectorAll(".portfolio-card");

portfolioCards.forEach(function(card){

card.addEventListener("mouseenter",function(){

this.style.transform="scale(1.03)";

});

card.addEventListener("mouseleave",function(){

this.style.transform="scale(1)";

});

});
// ===== Spark Mint Studio =====
// Part 3

const logo = document.querySelector(".logo");

if (logo) {

setInterval(function () {

logo.classList.toggle("active");

}, 1000);

}

const pricingCards = document.querySelectorAll(".price-card");

pricingCards.forEach(function(card){

card.addEventListener("mouseenter",function(){

this.style.transform="translateY(-8px)";

this.style.transition=".3s";

});

card.addEventListener("mouseleave",function(){

this.style.transform="translateY(0)";

});

});

const contactButtons=document.querySelectorAll(".contact .btn");

contactButtons.forEach(function(btn){

btn.addEventListener("click",function(e){

e.preventDefault();

alert("Thank you for contacting Spark Mint Studio!");

});

});
// ===== Spark Mint Studio =====
// Part 4

window.addEventListener("scroll", function(){

const sections = document.querySelectorAll("section");

sections.forEach(function(section){

const position = section.getBoundingClientRect().top;

if(position < window.innerHeight - 100){

section.style.opacity = "1";
section.style.transform = "translateY(0)";
section.style.transition = "all .8s ease";

}

});

});

document.querySelectorAll("section").forEach(function(section){

section.style.opacity = "0";
section.style.transform = "translateY(40px)";

});

console.log("Spark Mint Studio Loaded Successfully");

console.log("Designed by Ahmad Talib");
