// console.log(hello); // undefined
// var hello = "Salom World!";
// console.log(hello); // 

// console.log(hello); // ?
// let hello = "Salom World!";
// console.log(hello); // ?

// const hello;
// hello = 'salam';
// console.log(hello); // ?
// //////////////////////////////////////////////////////////////////
//                         // var 

// console.log(name); // undefined (hoisting!)
// var name = "Adam";
// console.log(name); // Adam

//                             // let
// if (true) {
//     let age = 15;
//     console.log(age); // 15
//   }
//   console.log(age); // ReferenceError: age is not defined

//                             // const

//   const pi = 3.14;
// console.log(pi); // 3.14

// pi = 3.14159; // TypeError: Assignment to constant variable

////////////////////////////////////////////////////////////////////////////////////////////////




var optionsButton = document.querySelector('.options-button');
var countButton = document.querySelector('.count-button');
var firstContainer = document.querySelector('.first-container');
var menu2Container = document.querySelector('.menu-2');
var clickButton = document.querySelector('.click-button');
var countH2 = document.querySelector('.count');
var restartButton = document.querySelector('.restart-button'); 
var audio = new Audio('tasbex-audio.mp4');
var count = 0;
audio.preload = 'auto'; 

clickButton.addEventListener('click', function () {
    count++;
    countH2.textContent = count; 
    audio.play();

});


optionsButton.addEventListener('click', function () {
    firstContainer.style.display = 'none'; 
    menu2Container.style.display = 'block'; 
});


countButton.addEventListener('click', function () {
    firstContainer.style.display = 'block'; 
    menu2Container.style.display = 'none';
});


restartButton.addEventListener('click', function () {
    count = 0; 
    countH2.textContent = count; 
});





var darkMode = document.querySelector('.dark-mode');
var lightMode = document.querySelector('.light-mode');
var darkMode2 = document.querySelector('.dark-mode2');
var lightMode2 = document.querySelector('.light-mode2');
var menu2 = document.querySelector('.menu_2');



darkMode.addEventListener('click', function () {
    document.body.style.backgroundImage = "none";
document.body.style.backgroundColor = "black"; 

    document.menu_2.style.backgroundColor = "aqua";

});


lightMode.addEventListener('click', function () {
 document.body.style.backgroundImage = "url('./12281500_4871715-1024x683.jpg')";
});

darkMode2.addEventListener('click', function () {
    audio = "none";

});

lightMode2.addEventListener('click', function () {
    audio = new Audio('tasbex-audio.mp4');
 
});