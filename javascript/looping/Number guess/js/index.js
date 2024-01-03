// Get the DOM elements and initialize the game
const input = document.querySelector("input"),
  guess = document.querySelector(".guess"),
  checkButton = document.querySelector("button"),
  remainChances = document.querySelector(".chances");
  remainNumber = document.querySelector(".number");
 
// Set the focus on input field
input.focus();

let randomNum = Math.floor(Math.random() * 10 + 1);
  console.log(randomNum);

  var count = 0;

chance = 5;



    
    
    
     
       

checkButton.addEventListener("click", function()  {
 

  chance--;
 
  let inputValue = input.value;
  
   var button = document.getElementById("myButton");
    var countDisplay = document.getElementById("count");
	
  if (inputValue == randomNum)  {
    countDisplay.innerHTML = count;
	count++;
         
    [guess.textContent, input.disabled] = ["Congratulations!!!", "Replay", true, ""];
    [checkButton.textContent, guess.style.color] = ["Replay", "#333"];

	document.getElementById("Image").src = "Image/up.gif";

   
  } 
  
  else if (inputValue > randomNum && inputValue < 10) {
 count++;
         countDisplay.innerHTML = count;
    [guess.textContent, remainChances.textContent] = ["Your number is high", chance];
    guess.style.color = "#333";
		document.getElementById("Image").src = "Image/high.png";
    //Check if input value is < random number and within 1-9 range.
  
  }
   
  
  else if (inputValue < randomNum && inputValue > 0) {
	   count++;
         countDisplay.innerHTML = count;
    [guess.textContent, remainChances.textContent] = ["Your number is low", chance];
    guess.style.color = "#333";
		document.getElementById("Image").src = "Image/low.png";
    // If the input value is not within the range of 1 to 9
  }
  

 


  // Check if the chance is zero
  if (chance == 0) {
   count++;
         countDisplay.innerHTML = count;
    [checkButton.textContent, input.disabled, inputValue] = ["Replay", true, ""];
    [guess.textContent, guess.style.color] = ["You lost the game", "#DE0611"];
    window.location.reload(); 
 }
 
  if (chance < 0) {
    window.location.reload();
  }
 
});
 document.getElementById("Image1").src = "image/quiz.png";
 document.getElementById("Image").src = "Image/72gi.gif";
		 
//time limited	
/*	 
var sec = 30;
var time = setInterval(myTimer, 1900);

function myTimer() {
    document.getElementById('timer').innerHTML = sec + "sec left";
    sec--;
    if (sec == -1) {
        clearInterval(time);
      
  
	}
	else if  (sec == 5) {
		//alert("hurry");
	
	}
	if (sec == 0){
		alert("Time Out :( Try again ):");
		 window.location.reload(); 
	}
}
*/

    
