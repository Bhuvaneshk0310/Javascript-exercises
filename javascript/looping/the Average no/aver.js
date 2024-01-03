

 //Average of no`s

let arr1 = [95,96,97,98,99]
let arr2 = [1,2,3,4,5,]

function average(array) {
	let sum = 0
	array.forEach(num => sum = sum + num )
    let avg = sum/array.length
	console.log(avg);
}
average(arr1)
average(arr2)

//Average of no`s
function check()
{
	var sum = 0
	n = parseInt(document.getElementById ("first").value);
	for (var i = 0; i <= n.length; i++)
 num => sum = sum + num
	{
    sum += parseInt(arr[i], 10);
	}
	document.getElementById ("n2").innerHTML="Sum of "+n+ " natural numbers is :"+sum;
}
     var avg = sum / n.length;
	 console.log("Average is: " + avg);
/**/
 
 
var n1,n2,n3,n4,n5,avg
n1= ParseInt(prompt("Enter 1st number"))
n2= ParseInt(prompt("Enter 2st number"))
n3= ParseInt(prompt("Enter 3st number"))
n4= ParseInt(prompt("Enter 4st number"))
n5= ParseInt(prompt("Enter 5st number"))
avg = (n1+n2+n3+n4+n5)/5
document.write("Average="+avg);