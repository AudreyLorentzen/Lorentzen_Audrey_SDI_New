//  NAME:  Audrey Lorentzen 
//  DATE:  5-13-15
// Scalable Data Infrastructures
// Day 4 Lab
//  Assignment 1
//  Using logical operators

var p=true;
var q=true;
var r=false;

p = confirm("Are you of age? Meaning 18+:  Click OK for true or Cancel for false.");
q = confirm("Do you like dogs?:  Click OK for true or Cancel for false.");

if ((p && q)||r) {
    console.log("With " + p + " and " + q + ", the outcome is TRUE.");
} else {
    console.log("With " + p + " and " + q + ", the outcome is FALSE.");
}
