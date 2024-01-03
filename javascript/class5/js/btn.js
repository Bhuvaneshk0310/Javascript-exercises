function add()
{
var n1 = parseInt(document.getElementById("n1").value);
console.log(n1);
var n2 = parseInt(document.getElementById("n2").value);
console.log(n2);
var sum = n1+n2;
console.log("Addition"+sum);
document.getElementById("n3").innerHTML=sum;

}

function sub()
{
var n4 = parseInt(document.getElementById("n4").value);
console.log(n4);
var n5 = parseInt(document.getElementById("n5").value);
console.log(n5);
var sum = n4-n5;
console.log("Subtration"+sum);
document.getElementById("n6").innerHTML=sum;
}

function multipy()
{
var n7 = parseInt(document.getElementById("n7").value);
console.log(n7);
var n8 = parseInt(document.getElementById("n8").value);
console.log(n8);
var sum = n7*n8;
console.log("Multipication"+sum);
document.getElementById("n9").innerHTML=sum;
}

function divided()
{
var n10 = parseInt(document.getElementById("n10").value);
console.log(n10);
var n11 = parseInt(document.getElementById("n11").value);
console.log(n11);
var sum = n10/n11;
document.getElementById("n12").innerHTML=sum;
console.log("Division"+sum);
}

