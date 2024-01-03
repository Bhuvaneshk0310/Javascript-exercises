 //Generate Odd no and Even no 
var n;
n=prompt("Enter a number (Odd & even)");
if(n%2==0)
	alert(n+"is even")
else
alert(n+"is odd") 

 //Generate Odd no and Even no (html)
var num, temp;
function fun()
{
  num = parseInt(document.getElementById("num").value);
  if(num)
  {
    temp = document.getElementById("resPara");
    temp.style.display = "block";
    if(num%2==0)
      document.getElementById("res").innerHTML = "Even";
    else
      document.getElementById("res").innerHTML = "Odd";
  }
}