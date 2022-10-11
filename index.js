var randomNumber1 = Math.floor(Math.random() * 7);
var randomNumber2 = Math.floor(Math.random() * 7);

if (randomNumber1 == 1){
  document.querySelectorAll("img.img1")[0].setAttribute("src", "images/dice1.png")}

else if (randomNumber1 == 2){
  document.querySelectorAll("img.img1")[0].setAttribute("src", "images/dice2.png")}


else if (randomNumber1 == 3){
  document.querySelectorAll("img.img1")[0].setAttribute("src", "images/dice3.png")}


else if (randomNumber1 == 4){
  document.querySelectorAll("img.img1")[0].setAttribute("src", "images/dice4.png")}


else if (randomNumber1 == 5){
  document.querySelectorAll("img.img1")[0].setAttribute("src", "images/dice5.png")}


else if (randomNumber1 == 6){
  document.querySelectorAll("img.img1")[0].setAttribute("src", "images/dice6.png")}


console.log(randomNumber1);

if (randomNumber2 == 1){
  document.querySelectorAll("img.img2")[0].setAttribute("src", "images/dice1.png")}

else if (randomNumber2 == 2){
  document.querySelectorAll("img.img2")[0].setAttribute("src", "images/dice2.png")}


else if (randomNumber2 == 3){
  document.querySelectorAll("img.img2")[0].setAttribute("src", "images/dice3.png")}


else if (randomNumber2 == 4){
  document.querySelectorAll("img.img2")[0].setAttribute("src", "images/dice4.png")}


else if (randomNumber2 == 5){
  document.querySelectorAll("img.img2")[0].setAttribute("src", "images/dice5.png")}


else if (randomNumber2 == 6){
  document.querySelectorAll("img.img2")[0].setAttribute("src", "images/dice6.png")}



if (randomNumber1 > randomNumber2){
  document.querySelectorAll("h1")[0].textContent = "Player 1 Won";
}


else if  (randomNumber1 < randomNumber2){
    document.querySelectorAll("h1")[0].textContent = "Player 2 Won";
}

else if(randomNumber1 == randomNumber2) {
     document.querySelectorAll("h1")[0].textContent = "Try Again";

}
