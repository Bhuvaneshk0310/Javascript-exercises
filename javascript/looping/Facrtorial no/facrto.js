 //Find the factorial of a no.
function show(){

var i, no, fact;
fact=1;
no=Number(document.getElementById("num").value);
for(i=1; i<=no; i++)  
{
fact= fact*i;
}  
document.getElementById("answer").value= fact;
}


//Find the factorial of a no.
function factorial(n){
	 if(n === 0){
		 return 1
	 }
	 else{
		 return factorial (n-1) * n
	 }
	}
console.log(factorial(5));