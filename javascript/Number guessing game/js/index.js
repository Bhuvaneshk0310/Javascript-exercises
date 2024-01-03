// Get the DOM elements and initialize the game
const input = document.querySelector("input"),
  guess = document.querySelector(".guess"),
  checkButton = document.querySelector("button"),
  remainChances = document.querySelector(".chances");
  countDisplay = document.querySelector(".count");
// Set the focus on input field
input.focus();

let randomNum = Math.floor(Math.random() * 10 + 1);
  console.log(randomNum);
  chance = 5;
  count = 0;
 
 
checkButton.addEventListener("click", () => {
  count++;
  chance--;
 
  let inputValue = input.value;
 
  if (inputValue == randomNum) {

    //[guess.textContent, input.disabled] = ["Congratulations!!!"];
	//[checkButton.textContent, inputValue, input.disabled] = ["Check", true, ""];
         [guess.textContent, input.disabled, checkButton.disabled] = ["Congratulations!!!", "Replay", true, ""];
    [checkButton.textContent, guess.style.color] = ["Replay", "#333"];
	
	document.getElementById("Image").src = "Image/up.gif";
	 return;
    
	

  } 
  
  
  else if (inputValue > randomNum && inputValue < 10) {

    [guess.textContent, countDisplay.textContent, remainChances.textContent] = ["Your guess is high", chance, count];
    guess.style.color = "#333";
		document.getElementById("Image").src = "Image/u.gif";
    //Check if input value is < random number and within 1-9 range.
  
  } else if (inputValue < randomNum && inputValue > 0) {
    [guess.textContent, countDisplay.textContent, remainChances.textContent] = ["Your guess is low", count, chance];
    guess.style.color = "#333";
		document.getElementById("Image").src = "Image/down.gif";
    // If the input value is not within the range of 1 to 9
  } else {

    [guess.textContent, countDisplay.textContent, remainChances.textContent] = ["Your number is invalid", count, chance];
	guess.style.color = "#DE0611";
  	document.getElementById("Image").src = "Image/3WGL.gif";
}
  // Check if the chance is zero
  if (chance == 0) {

   [checkButton.textContent, inputValue] = ["Replay", true, ""];
    [guess.textContent, input.disabled, checkButton.disabled, guess.style.color] = ["You lost the game", "#DE0611"];
	
	document.getElementById("Image").src = "Image/g.gif";
	
  
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
	
   if (sec == 0){
		alert("Time Out :( Try again ):");
		 window.location.reload(); 
	}
}

/**/
