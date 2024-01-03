 //Generate Natural No
function sum()
{
var n,i, sum = 0;
n = parseInt(document.getElementById ("first").value);
for (i = 1; i <= n; i++)
{
sum = sum+i;
}
document.getElementById ("n2").innerHTML="Sum of "+n+ " natural numbers is :"+sum;
}



