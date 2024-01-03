
//variable is declared and intiliased
var a=10;
//
var b=12;
var e=32;
var f=10;


//function passing parameters

addition(a,b);

subtration(a,f);
var sub=subtration(e,f);
console.log("sub:"+sub);
multiplication(a,b);
division(e,f);

function addition(x,y)
{
	console.log("The value of x:"+x);
	console.log("The value of x:"+y);
	console.log("The sum of x:"+(x+y));
}
/*function subtration(x,y)
{
	console.log("The value of x:"+x);
	console.log("The value of x:"+y);
	console.log("The subtrat value:"+(x-y));
}*/

// funtion with return statement
function subtration(x,y)
{
	var z=x-y;
	return z;
}


function multiplication(x,y)
{
	console.log("The value of x:"+x);
	console.log("The value of x:"+y);
	console.log("The multiply value:"+(x*y));
}
function division(x,y)
{
	console.log("The value of x:"+x);
	console.log("The value of x:"+y);
	console.log("The divided value:"+(x*y));
}


