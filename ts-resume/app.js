"use strict";
// Variables
var fullName = "Mitchell Gaylord";
var career = "Coder-in-Training";
var description = "I don't have braces. Sorry, boys.";
var interests = ["Learning Languages", "Napping", "Youtube", "Becoming a Pok\u00E9mon Master"];
var pastExperiences = [
    { position: "Product Development Assistant", company: "The Cato Corporation", duties: "Certified Mail Boy for fabric sourcing of Cato Fashion Dressy Knit Tops and It's Fashion Knit Tops." },
    { position: "Bartender", company: "Protagonist Beer", duties: "Pour beer when actually given hours to work." },
    { position: "Brand Associate Lead", company: "Old Navy", duties: "Try not to hate yourself everyday." }
];
var mySkills = ["Norwegian", "Rolling R's", "Mellophone", "HTML", "CSS", "JavaScript", "Swift", "Microsoft Office"];
// Console Logs
console.log("Name: " + fullName.toUpperCase());
console.log("Career: " + career);
console.log("Description: " + description);
console.log("");
console.log("My Interests:");
for (var i = 0; i < interests.length; i++) {
    console.log("* " + interests[i]);
}
console.log("");
console.log("My Previous Experience:");
function displayPosition(position, company, description) {
    console.log("* " + position + " at " + company + " - " + description);
}
displayPosition("Product Development Assistant", "The Cato Corporation", "Certified Mail Boy for fabric sourcing of Cato Fashion Dressy Knit Tops and It's Fashion Knit Tops.");
displayPosition("Bartender", "Protagonist Beer", "Pour beer when actually given hours to work.");
displayPosition("Brand Association Lead", "Old Navy", "Try not to hate yourself everyday.");
// Since I already created a variable containing the same objects for the above function callings: 
// I could do write either the below function or the below loop to accomplish similar results.
// function displayPosition(index) {
//     console.log(`* ${pastExperiences[index].position} at ${pastExperiences[index].company} - ${pastExperiences[index].duties}`)
// }
// displayPosition(0)
// displayPosition(1)
// displayPosition(2)
// loop to do above function
// for ( i = 0; i < pastExperiences.length; i++ ) {
//     console.log(`* ${pastExperiences[i].position} at ${pastExperiences[i].company} - ${pastExperiences[i].duties}`)
// }
console.log("");
console.log("My Skills:");
function displaySkill(skill, cool) {
    if (cool == true) {
        console.log("* BAM: " + skill);
    }
    else {
        console.log("* " + skill);
    }
}
displaySkill("Norwegian", true);
displaySkill("Rolling R's", true);
displaySkill("Mellophone", false);
displaySkill("HTML", true);
displaySkill("CSS", true);
displaySkill("JavaScript", true);
displaySkill("Swift", true);
displaySkill("Microsoft Office", false);
// You could similarily create a loop to go through an array containing objects using the same arguments.
// Above array for mySkills would need Booleans to be run through the function.
