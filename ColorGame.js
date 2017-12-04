// var colors = [
// 				"rgb(255, 0, 0)",
// 				"rgb(255, 255, 0)",
// 				"rgb(0, 255, 0)",
// 				"rgb(0, 255, 255)",
// 				"rgb(0, 0, 255)",
// 				"rgb(255, 0, 255)",
// 			]
var numberOfSquares=6;

var colors=generateRandomColors(numberOfSquares);// num=6
var bodyColor="#232323"
var squares=document.querySelectorAll(".square")
var pickedColor=pickColor();
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");


easyBtn.addEventListener("click",function()
								{
									numberOfSquares=3;
									easyBtn.classList.add("selected");
									hardBtn.classList.remove("selected");
									// create 3 new  colors
									colors=generateRandomColors(numberOfSquares);
									// pick a color as pickedColor
									pickedColor=pickColor();
									colorDisplay.textContent=pickedColor;
									
									for(var i=0; i<=squares.length-1;i++)
									{	
										if(colors[i])// 因为colors这时候长度是3.
										{
											squares[i].style.background=colors[i];
										}
										else// hide other three squares
										{
											squares[i].style.display="none";										
										}
									}
								})
hardBtn.addEventListener("click",function()
								{	
									numberOfSquares=6;
									hardBtn.classList.add("selected");
									easyBtn.classList.remove("selected");
									colors=generateRandomColors(numberOfSquares);
									// pick a color as pickedColor
									pickedColor=pickColor();
									colorDisplay.textContent=pickedColor;
									for(var i=0; i<=squares.length-1;i++)
									{	
									  squares[i].style.background=colors[i];
									  squares[i].style.display="block";
									}
								})


resetButton.addEventListener("click",function(){
	//Generate all new colors
	colors=generateRandomColors(numberOfSquares);
	//pick a new random color from array
	pickedColor=pickColor();
	// change colorDispay to match the pickedColor.
	colorDisplay.textContent=pickedColor;
	// change colors of squarers
	for(var i=0;i<=squares.length-1;i++)
	{
		squares[i].style.backgroundColor=colors[i];
	}
	this.textContent="New Colors";
	h1.style.backgroundColor="steelblue";
	messageDisplay.textContent="";
})



colorDisplay.textContent=pickedColor;



for(var i=0; i<=squares.length-1; i++)
{
	// add initial colors to squares
	squares[i].style.backgroundColor=colors[i];
	//add click event to squares
	squares[i].addEventListener("click",function()
	 				{
	 				 //grab color of clicked square
					var clickedColor=this.style.backgroundColor
					//compare color to pickedColor
						if (clickedColor===pickedColor)
							{
								messageDisplay.textContent="Correct!";
								changeColors(clickedColor);
								h1.style.backgroundColor=pickedColor;
								resetButton.textContent="Play Again?"
							}
						else
							{
								this.style.backgroundColor=bodyColor;
								messageDisplay.textContent="try again";
							}
   					}			);

}
function changeColors(color)
{
	//loop through all squares
	for(var i=0; i<=squares.length-1;i++)
	{// change each color to match given color
		squares[i].style.backgroundColor=color;
	}	
}

function pickColor()
{	// to generate a random number between 0 to colors.length-1 .
	var random=Math.floor (Math.random() * colors.length)
	return colors[random];
}

function generateRandomColors(num)
{
	// make an arry
	var arr=[];
	// repeat num times
	for(var i=0; i<=num-1; i++)
	{
		// get random color and push into arr
		arr.push(randomColor());
	}
	//return that array
	return arr;
}
function randomColor()
{
	// pick a "red" from 0-255
	// pick a "green" from 0-255
	// pick a "blue" from 0-255
	var r=Math.floor(Math.random()*256) // 产生的随机结果不包括256。
	var g=Math.floor(Math.random()*256)
	var b=Math.floor(Math.random()*256)

	return "rgb("+ r + ", " + g + ", " + b + ")";  
}