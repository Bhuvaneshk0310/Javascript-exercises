console.log("First");
const user=getUser(1);
function getUser(){
setTimeout(() => {
    console.log("fetching from network");
    return({"id":id,"username":"bhuvanesh"})
},3000);
}


console.log("second");


/*
console.log("Start");

function synchronousOperation() {
  console.log("Operation 1");
  console.log("Operation 2");
}

synchronousOperation();

console.log("End");

*/
