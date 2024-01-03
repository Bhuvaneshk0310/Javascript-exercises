
  document.getElementById("Image").src = "Image/s.png";
  //document.getElementById("res").innerHTML = "wrong";



//console.log(Math.floor(Math.random()*10 + 1));

    // Generate a Random Number
        let y = Math.floor(Math.random() * 10 + 1);
       console.log(y);

        let guess = 1;

 
        document.getElementById("submitguess").onclick = function () {
 
            // Number guessed by user   
          let x = document.getElementById("guessField").value;
 
            if (x == y) {
              document.getElementById("demo").innerHTML = ("CONGRATULATIONS!!! YOU GUESSED IT CORRECT IN "+ guess + " GUESS ");
			   document.getElementById("Image").src = "Image/correct1.png";
            }
 
            /* If guessed number is greater than actual number*/
            else if (x > y) {
                guess++;
                document.getElementById("demo").innerHTML =("OOPS SORRY!! TRY A SMALLER NUMBER");
				 document.getElementById("Image").src = "Image/wron.png";
            }
            else {
                guess++;
               document.getElementById("demo").innerHTML =("OOPS SORRY!! TRY A GREATER NUMBER");
				 document.getElementById("Image").src = "Image/wron.png";
            }
        }
		 document.getElementById("Image1").src = "Image/quiz.png";
		 
		 
		 
//time limited		 
var sec = 30;
var time = setInterval(myTimer, 1000);

function myTimer() {
    document.getElementById('timer').innerHTML = sec + "sec left";
    sec--;
    if (sec == -1) {
        clearInterval(time);
        alert("Time out!! :(");
    }
}






