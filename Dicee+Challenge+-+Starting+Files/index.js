// first step , is that i created the index.js file 

// 2nd step, add the images of dice6.png as 
//the source to both of the <img> elements.

//3rd step, create a new variable called randomNumber1 then set the value
// of this variable to a random number between 1 and 6.
// Test it out in the console to make sure it works as expected.

var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomNumber2 = Math.floor(Math.random()*6) + 1;
 
var images1 = "images/dice"+ randomNumber1 +".png";
var images2 = "images/dice"+ randomNumber2 +".png";
 
document.querySelector(".dice .img1").setAttribute("src",images1);
document.querySelector(".dice .img2").setAttribute("src",images2);

if(images1>images2){
    document.querySelector("h1").innerHTML="Player 1 wins";

}
else if (images1<images2){
    document.querySelector("h1").innerHTML="Player 2 wins";
}
else{
 document.querySelector("h1").innerHTML="Draw";
}