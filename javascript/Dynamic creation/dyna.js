 //Dynamic Creation
var msg = document.getElementById("message"); 
var button = document.getElementById("button"); 
var textBox = document.getElementById("textbox"); 

		// This event is fired when button is clicked 
		button.addEventListener("click", function ()
{ 
			var str = textBox.value; 
			console.log(str); 
			msg.innerHTML += " <p>" + str + "</p> "; 
		}); 

		textBox.addEventListener("keyup", function (event) { 

			// Checking if key pressed is ENTER or not 
			// if the key pressed is ENTER 
			// click listener on button is called 
			if (event.keyCode == 13) { 
				button.click(); 
			} 
		}); 
