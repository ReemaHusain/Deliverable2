<script>

var firstTime = true;
var userWords = "";
var shouldContinue = true;

while (firstTime===true) 
	
 {
    var message = "";
    if (firstTime) {
        message = "Would you like to print your name                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              ?";
    }
    else {
        message = "Hello. My name is"+ userWords +"!";
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
document.write(message)

while (shouldContinue===false);



</script>


//var firstTIme=true
//var userWords ="";
//var shouldContinue =true

//function name (){
	//	msg+=' Hello. My name is' + userWords + '!';
	//	if (userWords == no){
	//				shouldContinue = false;
	//				}
					
