var randomNumber1=Math.floor((Math.random()*6))+1;
// if(randomNumber1===1){
//   document.querySelector(".img1").src="images/dice1.png";
// }
// else if(randomNumber1===2){
//   document.querySelector(".img1").src="images/dice2.png";
// }
// else if(randomNumber1===3){
//   document.querySelector(".img1").src="images/dice3.png";
// }
// else if(randomNumber1===4){
//   document.querySelector(".img1").src="images/dice4.png";
// }
// else if(randomNumber1===5){
//   document.querySelector(".img1").src="images/dice5.png";
// }
// else{
//   document.querySelector(".img1").src="images/dice6.png";
// }
//
// //generating 2nd dice number
// var randomNumber2=Math.floor((Math.random()*6))+1;
// if(randomNumber2===1){
//   document.querySelector(".img2").setAttribute("src","images/dice1.png");
// }
// else if(randomNumber2===2){
// document.querySelector(".img2").setAttribute("src","images/dice2.png");
// }
// else if(randomNumber2===3){
// document.querySelector(".img2").setAttribute("src","images/dice3.png");
// }
// else if(randomNumber2===4){
//   document.querySelector(".img2").setAttribute("src","images/dice4.png");
// }
// else if(randomNumber2===5){
// document.querySelector(".img2").setAttribute("src","images/dice5.png");
// }
// else{
// document.querySelector(".img2").setAttribute("src","images/dice6.png");
// }
var image1="images/dice"+randomNumber1+".png";
 var randomNumber2=Math.floor((Math.random()*6))+1;
document.querySelector(".img1").setAttribute("src",image1);
var image2="images/dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src",image2);
var randomNumber2=Math.floor((Math.random()*6))+1;
if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerText="🚩 Player 1 Wins";
}else if(randomNumber1==randomNumber2) {
    document.querySelector("h1").innerText="DRAW";
}
else{
    document.querySelector("h1").innerText="Player 2 Wins 🚩";
}
