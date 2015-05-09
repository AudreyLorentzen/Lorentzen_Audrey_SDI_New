//alert("JavaScript works!");

//What movie are you allowed to go see?
//Depending on your age, you will get to see either or.

//Initial variable
var yourName = "";
var firstMovie = "\"Unfriended\"";
var secondMovie = "\"Home\"";
var age = "";
var confirm = true;

//Prompt for the user input

age = prompt("How old are you?");

//Create first conditional

if(age<18)
{
    console.log("Since you are under age, you can watch the movie named " +secondMovie+ ".");
}else
{
    console.log("Since you are of age, you can watch the movie named " +firstMovie+ ".")
}




