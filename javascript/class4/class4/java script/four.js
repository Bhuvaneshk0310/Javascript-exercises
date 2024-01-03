var btn=document.querySelector("button");
console.log(btn);
btn.addEventListener("click",functionHandler);
function functionHandler()
{
	console.log("Btn is clicked");
}
function displayValue()
{
	console.log("Btn with display function is  clicked");
}