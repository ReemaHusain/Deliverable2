var suggestion = "";
var meal = "";
if (userInput == "morning") {
    meal = "breakfast";
    suggestion = "eggs and toast";
}
else if (userInput == "noon") {
	meal= "lunch";
	suggestion = "a salad";
}
else if (userInput == "evening") {
	meal= "dinner";
	suggestion = "chicken and rice";

}
console.log("Since it is " + userInput + ", you should be eating " + meal + ". We suggest " + suggestion + ".");
