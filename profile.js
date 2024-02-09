
function myFavoriteColor () {
    alert("My favorite color is Black and Silver.");
}

function myFavoritePlace () {
    alert("My favorite place is American Fork Canyon.");
}

function myFavoriteRitual () {
    alert("My favorite ritual is reading to my kids.");
}




let buttonColor = document.querySelector("#color");
let buttonPlace = document.querySelector("#place");
let buttonRitual = document.querySelector("#ritual");






buttonColor.addEventListener("click",myFavoriteColor);
buttonPlace.addEventListener("click",myFavoritePlace);
buttonRitual.addEventListener("click",myFavoriteRitual);
