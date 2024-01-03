 //swapping two no`s
let a = 10;
let b = 20;

[a,b] = [b,a];


console.log("Swapping two no"+a,b); 

//swapping two no`s
function swap(){
var a,b;
a=Number(document.getElementById("first").value);
b=Number(document.getElementById("second").value);

[a,b] = [b,a];
document.getElementById("answer1").value= a;
document.getElementById("answer2").value= b;
}