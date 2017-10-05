var firstTime = true;
var userWords = "";
var shouldContinue = true;

do {
    var message = "";
    if (firstTime) {
        message = "Do you want to play a game?";
    }
    else {
        message = "Do you want to play again?";
    }
    firstTime = false;
    
    prompt(message)
    var userInput = prompt(message);
    
    if (userInput == "no") {
        shouldContinue = false;
    }
    
    if (shouldContinue): {
    userWords= userWords + userInput;
    }
    else {
    	console.log(userWords)

}
while (shouldContinue===false);

















	
