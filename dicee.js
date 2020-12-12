var random1=Math.random();
random1=Math.ceil(random1*6);
document.querySelector(".img1").setAttribute("src","images/dice"+random1+".png");
var random2=Math.random();
random2=Math.ceil(random2*6);
document.querySelector(".img2").setAttribute("src","images/dice"+random2+".png");
if(random1>random2)
{
document.querySelector("h1").innerHTML="player1 won";
}
else if(random1==random2)
document.querySelector("h1").innerHTML="match is drawn";
else
document.querySelector("h1").innerHTML="player2 won";
