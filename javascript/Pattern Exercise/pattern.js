
//Regular triangle
let a = 6;
let string1 = "";
for(let i = 1; i <= a; i++){
	for(let j = 0; j < i; j++){
	string1 += "x"+ " ";					
}	
	string1 +="<br>";
}  
document.getElementById("demo1").innerHTML =string1;

// Reverse Triangle
 let b = 7;
 let string2 = "";
for (let i = 1; i <= b; i++) {
  for (let j = 0; j < b-i; j++) {
    string2 += "x"+ " ";
  }
 string2 += "<br>";

}
document.getElementById("demo2").innerHTML= string2;


//Combining patter block - top to Bottom
var num = 5;
var string3 = "";
for (i = num; i >= 0; i--)
{
for (j = 1; j <= i; j++){
string3 += "x"+" ";
}
string3 += "<br>";
}
for (i = 1; i <= num; i++) {
for (j = 1; j <= i; j++){
string3 += "x"+" ";
}
string3 += "<br>";
}
document.getElementById("demo3").innerHTML= string3;
/*
let c = 6;
let string3 = "";
for(let i = 1; i <= a; i++){
	for(let j = 0; j < i; j++){
	string3 += "x"+ " ";					
}	
	
} 
let d = 7;
 
for (let i = 1; i <= b; i++) {
  for (let j = 0; j < b-i; j++) {
    string3 += "x"+ " ";
  }
 string3 += "<br>";

}
document.getElementById("demo3").innerHTML= string3; 


var v=document.querySelector("#demo3");
var string3 = "";
   for(i=1; i<=6; i++)
	{
        for ( j=0; j<=i; j++)
		{
			string3 +="x"+ " ";
	    }
        for( j=0; j<b-i; j++)
		{
			string3 +="x"+ " ";
		}
		  string3 +="\n"+"</br>";
		  v.innerHTML=string3;
	}
*/
//space Square Pattern

var z=document.querySelector("#demo4");
var string6 = "";
	    for(i=1; i<=7; i++)
{
     for(j=1;j<=7;j++)
	{
			string6 +="x"+ " ";
	}	 
      for(j=1;j<=7;j++)
		{
			string6 +="#"+ " ";
		}  
	
		    string6 +="\n"+"</br>";
			z.innerHTML=string6;
			//console.log (string6);
	}



  


//Combinetop_btm_left_Right_Pattern
function myFunction()
{
	//var x=document.querySelector("#demo5");
	var n=7;
	var string = "";
	
	for(  i=1;i<=n;i++)                                
	{
		for( j = 0; j < n-i; j++)
		{
			string +="-";
		}
		for( j=1; j<=i; j++)
		{
			string +="x";
		}
		for( j=1; j<=n; j++)
			{
			string +="-";
		}
		for( j=1; j<=i; j++)
		{
			string +="x";
		}
		string +="\n"+"</br>";
	
	}
	
    for(i=1;i<=n;i++)
{
     for(j=1;j<=7;j++)
	{
			string +="-";
	}	 
      for(j=1;j<=7;j++)
		{
			string +="#";
		}  
		for(j=1;j<=7;j++)
		{
			string +="-";
	    }
		    string +="\n"+"</br>";
	}
	
	for(i=0;i<=n;i++)
{
		for ( j=1; j<=i; j++)
		{
			string +="-";
	    }
		for ( j=i; j<=6; j++)
		{
			string +="x";
	    }
	for ( j=1; j<=n; j++)
		{
			string +="-";
	    }
	for ( j=i; j<=6; j++)
		{
			string +="x";
	    }
		  string +="\n"+"</br>";
	}
	//x.innerHTML=string;
	console.log ("Combi"+string);
}


