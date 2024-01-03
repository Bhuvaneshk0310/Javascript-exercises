/*
// Check Whether the no.is Prime or not
let num;
num = parseInt(prompt("enter a number (is prime & not prime): "))
if (num === 1){
	console.log("1 is neither a prime nor composite")
}
else if (num > 1){
	if (num %2 == 0){
       console.log("not a prime")
	}
else {
	console.log("is prime")
}	
}
else if (num < 1){
	console.log("number must be greater than 1")
}


//Generate Odd no and Even no (html)

function fun()
{
  num = parseInt(document.getElementById("num").value);
  if(num)
  {
    temp = document.getElementById("resPara");
    temp.style.display = "block";
    if(num%2==0)
      document.getElementById("res").innerHTML = "non prime number";
    else
      document.getElementById("res").innerHTML = "prime number";
  }
}
*/

 function isPrime() {
        var num = document.getElementById("num").value;
        var count = 0;
        for (i = 2; i <= num / 2; i++) {
            check = num % i;
            if (check == 0) {
                count++;
                break;
            }
        }
        if (count > 0) {
            document.getElementById("result").innerHTML = num + " not a prime number";
        } else {
            document.getElementById("result").innerHTML = num + " is a Prime number";
        }
    }
   







