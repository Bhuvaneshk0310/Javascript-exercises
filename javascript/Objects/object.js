var a=10;
//literals
var user={
	firstname:"Bhuvanesh",
	lastname:"Kirouchanane",
	age:19,
	iscollaged:true,
	courses:["HTML","CSS","JAVASCRIPT"],
	address:{
		Streetname:"No:1, Kamaraj street, Main Road",
		pincode:605110,
	},
	//document.getElementById("#stage1").innerHTML=user.age;
	buyCourses:function()
	{
		return this.courses.push("angular");
	},
	getCourses:function()
	{
		return `courses ebrolled by ${this.firstname} and no. of courses enrolled ${this.courses. length}`;
	}

};
document.getElementById("stage1").innerHTML =
user.firstname + " is " + user.age + " years old.";

document.getElementById("stage2").innerHTML =
user.iscollaged + " is " + user.courses + " Study";


console.log(user.firstname);
console.log(user.lastname);
console.log(user.age);
console.log(user.iscollaged);
console.log(user.courses.length);
console.log(user.address.Streetname);
console.log(user.getCourses()); 
console.log(user.buyCourses());

console.log (user.getCourses());

 /*
// Create a new input element
var dynamicInput = document.createElement("input");
dynamicInput.type = "text"; // Set input type to text
dynamicInput.placeholder = "Enter text"; // Set a placeholder

// Create a new button element
var dynamicButton = document.createElement("button");
dynamicButton.innerHTML = "Click me";
dynamicButton.onclick = function() {
    // Handle button click event, you can add your logic here
    alert("Button clicked! Input value: " + dynamicInput.value);
};

// Append the input and button to a parent element (e.g., the body of the document)
document.body.appendChild(dynamicInput);
document.body.appendChild(dynamicButton);
*/