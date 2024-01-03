
var characterList=document.getElementById("characterList");
var myForm=document.getElementById("myForm");
myForm.addEventListener("submit",handler);
characterList.addEventListener("click",Handler);
// characterList.addEventListener("click",displayValue);

function handler(e)
{
    e.preventDefault();
    var character=document.getElementById("character").value;
    var liElement=document.createElement("li");
    liElement.textContent=character;
	var editcharacter=document.createElement("button");
	editcharacter.classList.add("edit");
    editcharacter.textContent="edit";
    liElement.appendChild(editcharacter);
    var removecharacter=document.createElement("button");
    removecharacter.classList.add("remove");
    removecharacter.textContent="X";
    liElement.appendChild(removecharacter);
    characterList.appendChild(liElement);
	console.log(characterList);
}
function Handler(e)
{
	console.log(e.target);
    if(e.target.classList.contains("remove")){
        console.log("yes");
        e.target.parentElement.remove();
    }else{
        console.log("No")
    }
	
}
function removeAll()
{
	characterList.remove();
}



	
	








