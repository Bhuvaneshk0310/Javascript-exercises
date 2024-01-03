 //Sort the numbers in descending order:
function ndesc()
{
var num_array=new Array();
var num=document.forms["frm1"].num.value;
document.forms["frm1"].desc.value="";
var nums = num.split(',');
var len=num.split(',').length;
for(var i=0;i<len;i++)
{
num_array.push(nums[i]);
}
function sortN(a,b)
{
return b - a;
}
document.forms["frm1"].desc.value= num_array.sort(sortN);
}
/*
// Sort the numbers in ascending order:
function myFunction()
{
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b-a});
document.getElementById("n3").innerHTML = points;
console.log(points);
}
*/
// Sort the numbers in ascending order:
 
function nasce()
{
var num_array=new Array();
var num1=document.forms["frm2"].num1.value;
document.forms["frm2"].asce.value="";
var nums = num1.split(',');
var len=num1.split(',').length;
for(var i=0;i<len;i++)
{
num_array.push(nums[i]);
}
function sortN(a,b)
{
return a - b;
}
document.forms["frm2"].asce.value= num_array.sort(sortN);
}


// Sort an array of numbers 
let numbers = [5, 13, 1, 44, 32, 15, 500]

// Lowest to highest
let lowestToHighest = numbers.sort((a, b) => a - b);
console.log(numbers);
//Output: [1,5,13,15,32,44,500]

//Highest to lowest
let highestToLowest = numbers.sort((a, b) => b-a);
console.log(numbers);
//Output: [500,44,32,15,13,5,1]

var n1 = parseInt(document.getElementById("#n1").value);
console.log(n1);