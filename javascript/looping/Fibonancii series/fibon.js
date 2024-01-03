 
//Fibonancii series
var fibonacci_series = function (n) 
{
  if (n==1) 
  {
var loop = [0, 1];
   document.getElementById("output").innerHTML = loop;
  return loop;
  } 
  else 
  {
    var s = fibonacci_series(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    document.getElementById("output").innerHTML =s;
    return s;
  }
   
};

//Fibonancii series
var n1=0,n2=1,next,i;
var num=10;
for(i=1;i<=num;i++){
	console.log(n1);
	next=n1+n2;
	n1=n2;
	n2=next;
}