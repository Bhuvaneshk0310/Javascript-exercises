//Two Dimentional Array
/*
int main() {
  int matrix[4][4] = { {21, 48, 92, 98},
                       {39, 32, 20, 44},
					   {13, 54, 72, 65},
                       {31, 64, 58, 78} 
					   };

  int i, j;
  for (i = 0; i < 4; i++) {
    for (j = 0; j < 4; j++) {
      printf("%d\n", matrix[i][j]);
    }
  }
  
  return 0;
}
   
  function main() {
    var matrix = [
        [21, 48, 92, 98],
        [39, 32, 20, 44],
        [13, 54, 72, 65],
        [31, 64, 58, 78]
    ];

    for (var i = 0; i < matrix.length; ++i) {
        for (var j = 0; j < matrix[i].length; ++j) {
            console.log(matrix[i][j]);
			document.getElementById("A").innerHTML= matrix[i][j];
			document.getElementById("B").innerHTML= matrix[i][j];
        }
    }
}

   
   */
   
var map=[
      [1,0,1,0,0,0,0,0,1],
	  [0,0,1,1,1,1,1,1,1],
	  [1,1,0,1,1,0,0,0,0],
	  [1,1,0,1,1,0,0,0,0],
	  [1,0,1,0,0,0,0,0,1],
	  [1,1,0,1,1,0,0,0,0]
	  

];
var ROWS=map.length;
var COLUMNS=map[0].length;                                                                                    
var width=127;
const stage =document.getElementById('stage');
for(let row=0;row < ROWS;row++)
{
	for(let col=0;col < COLUMNS;col++)
    {
		let img=document.createElement('img');
		img.classList.add('cell');
		stage.appendChild(img);
		if(map[row][col] == 1)
		{
			img.src="images/222.png";
		}
		else if(map[row][col] == 0)
		{
			img.src="images/111.png";
		}
		img.style.top=row*width+100+"px";
		img.style.left=col*width+"px";
		
	}
}	
 console.log(stage);
 
 
