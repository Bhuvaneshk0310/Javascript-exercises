// Get the DOM elements and initialize the game
const input = document.querySelector("input"),
  guess = document.querySelector(".guess"),
  checkButton = document.querySelector("button"),
  remainChances = document.querySelector(".chances");

// Set the focus on input field
input.focus();

let randomNum = Math.floor(Math.random() * 10 + 1);
  console.log(randomNum);
chance = 5;


checkButton.addEventListener("click", () => {
 
  chance--;
 
  let inputValue = input.value;

  if (inputValue == randomNum) {
   
    [guess.textContent, input.disabled] = ["Congratulations!!!", "Replay", true, ""];
    [checkButton.textContent, guess.style.color] = ["Replay", "#333"];
	
	document.getElementById("Image").src = "Image/up.gif";
	 
   
  } else if (inputValue > randomNum && inputValue < 10) {

    [guess.textContent, remainChances.textContent] = ["Your guess is high", chance];
    guess.style.color = "#333";
		document.getElementById("Image").src = "Image/u.gif";
    //Check if input value is < random number and within 1-9 range.
  
  } else if (inputValue < randomNum && inputValue > 0) {
    [guess.textContent, remainChances.textContent] = ["Your guess is low", chance];
    guess.style.color = "#333";
		document.getElementById("Image").src = "Image/down.gif";
    // If the input value is not within the range of 1 to 9
  } else {

    [guess.textContent, remainChances.textContent] = ["Your number is invalid", chance];
	guess.style.color = "#DE0611";
  	document.getElementById("Image").src = "Image/3WGL.gif";
}
  // Check if the chance is zero
  if (chance == 0) {
  
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
var sec = 30;
var time = setInterval(myTimer, 1800);

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



      var count = 1;
      var button = document.getElementById("myButton");
      var countDisplay = document.getElementById("count");
      button.addEventListener("click", function() {
         count++;
         countDisplay.innerHTML = count;
      });