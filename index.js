var  randomnumber1 = Math.floor(Math.random()*6)+1; // take radom number 1 to 6

var  randomimg= "dice" + randomnumber1 + ".png";

var  randomimgsrc="images/" + randomimg;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomimgsrc);

var  randomnumber2 = Math.floor(Math.random()*6)+1;

randomimgsrc2="images/dice" + randomnumber2 +  ".png";

document.querySelectorAll("img")[1].setAttribute("src",randomimgsrc2);

if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML = "1st player wins"
}
else if(randomnumber2>randomnumber1) {
    document.querySelector("h1").innerHTML = "2nd player wins"
}
else{
    document.querySelector("h1").innerHTML = "match is draw"
}
