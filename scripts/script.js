// JavaScript Document
console.log("hi");

var hamburgerMenu = document.querySelector('.menu');

var hamburgerButton = document.querySelector('.hamburgerButton');
var menuNav = document.querySelector('header > section:nth-of-type(1)');


var voegWinkelmand = document.querySelector('.add-shopping-bag');
var winkelPlusje = document.querySelector('.badge')

// var hamburgerKruis = document.querySelector('.hamburgerkruis');



hamburgerButton.onclick = menuOut;

function menuOut(){
    console.log('hamburger werkt');
    hamburgerMenu.classList.toggle("menuOut");
    // hamburgerKruis.classList.toggle("hamburgerkruis");
}


voegWinkelmand.addEventListener('click', function () {
    console.log('knop werkt')
    // laat zien dat de knop goed gekoppeld

    winkelPlusje.classList.toggle('badge')
})

