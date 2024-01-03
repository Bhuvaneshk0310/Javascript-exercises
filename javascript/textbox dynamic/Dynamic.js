console.log("create a input textbox");
function myFunction()
{
	console.log("Button Is Clicked");
	var demo=document.querySelector(".demo");
	console.log(demo);
	var inputvalue=document.querySelector("#num").value;
	console.log(inputvalue);
	var newline=document.createElement("BR");
	demo.appendChild(newline);
	var newline=document.createElement("BR");
	demo.appendChild(newline);
	var newelement=document.createElement("input");
	newelement.setAttribute("type","text");
	newelement.setAttribute("id","myInput");
	newelement.setAttribute("placeholder","Enter your  text");
	newelement.setAttribute("disabled",true)
	console.log(newelement);
	demo.appendChild(newelement).value=inputvalue;
	
	var edit=document.createElement("button");
	edit.setAttribute("class","editbtn");
	edit.innerHTML="Edit";
	
	demo.appendChild(edit);
	
	var update=document.createElement("button");
	update.setAttribute("class","updatebtn");
	update.innerHTML="Update";
	demo.appendChild(update);
	
	
	var remove=document.createElement("button");
	remove.setAttribute("class","removebtn");
	remove.innerHTML="Removebtn";
	demo.appendChild(remove);
	
	remove.addEventListener("click",removebtn,false)
	function removebtn(e)
	{
		demo.removeChild(newelement);
		demo.removeChild(edit);
		demo.removeChild(update); 
		demo.removeChild(remove);
	}
	edit.addEventListener("click",editbtn,false)
	function editbtn(e)
	{
		this.previousSibling.removeAttribute("disabled",true);
		this.previousSibling.setAttribute("ContentEditable",true);
		this.previousSibling.focus();
	}
	update.addEventListener("click",updatebtn,false)
	function updatebtn(e)
	{
		
		this.previousSibling.previousSibling.setAttribute("disabled",true);
		//this.previousSibling.focus();
	}
	

}

	
	
	function removeAll()
{    

  window.location.reload();
	/*newelement.remove();
		edit.remove();
		update.remove(); 
		remove.remove();
	   demo.remove();

*/}