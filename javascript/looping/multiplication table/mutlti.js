 //Multiplication table in html
let multiplier=10;
for(let i=1;i<=10;i++){
	document.write(multiplier,"x", i," = ", multiplier*i);
	document.write("<br>");
}

//Multiplication table
function table(number){
	for(var i=1;i<=10;i++){
		var res = i*number;
		console.log(`${number} x ${i} = ${res}`);
	}
}
table(5);




   //Multiplication table
   function display() {
  var f_num = parseInt(document.getElementById("first_num").value);
  var s_num = parseInt(document.getElementById("second_num").value);
 for (i=1;i<f_num + 1;i++) {
        for (j=1;j<s_num + 1;j++) {
        if (j == 10) {
        document.write(i+"*" +j +"=" +(i*j) + "<br /><br />");
        } else {
        document.write(i+"*" +j +"=" +(i*j) + "  |  ");
        }
        }
} 
}
    