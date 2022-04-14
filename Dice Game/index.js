var generator1=Math.floor((Math.random()*6)+1);
var generator2=Math.floor((Math.random()*6)+1);

var Imagesource1="/images/dice"+generator1+".png";
var Imagesource2="/images/dice"+generator2+".png";

document.querySelectorAll("img")[0].setAttribute("src",Imagesource1);
document.querySelectorAll("img")[1].setAttribute("src",Imagesource2);

if(generator1>generator2){
    document.querySelector("h1").innerHTML="Player 1 wins!🥳";
}
else if(generator1===generator2){
    document.querySelector("h1").innerHTML="TIE! 😶‍🌫️";
}
else{
    document.querySelector("h1").innerHTML="Player 2 wins!🥳";
}

function refreshPage(){
    window.location.reload();
} 