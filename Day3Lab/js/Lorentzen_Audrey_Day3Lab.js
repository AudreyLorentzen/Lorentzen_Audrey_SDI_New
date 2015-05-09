//alert("JavaScript works!");

//What movie are you allowed to go see?
//Depending on your age, you will get to see either or.

//Initial variable
var yourName = "Audrey";
var firstMovie = "\"Unfriended\"";
var secondMovie = "\"Home\"";
var age = 21;
var ofAge = true;
var alcoholicDrink = "Long island tea";
var regDrink = "Sweet tea";

//Ouput
console.log("Hi my name is " +yourName+ " and I'm about to go to the movies.");
console.log("I'm very indecisive and can't choose between "+firstMovie+ " or " +secondMovie+ "." );
console.log("I don't have to worry about my age since I am " +age+ ".");
console.log("I like scary movies the best, so I am going to watch " +firstMovie+ ".");



//Confirm
ofAge = confirm("Hello " +yourName+ "," + " do you like alcoholic beverages??");

if(ofAge===true) {
    console.log("Go check out the bar " +yourName+ ".");
    alcoholicDrink=prompt("What would you like to drink then?");
    console.log("I would like to drink a " +alcoholicDrink+ " please.");

}else
{
    console.log("Enjoy the movie!");
    regDrink=prompt("Since you don't like alcohol, is there anything else you would like to drink?");
    console.log("I don't like alcohol so I decided to get myself some " +regDrink+ ".");
}






