// let menu = document.querySelector("#menu-bar");
// let navbar = document.querySelector('.navbar')
//     // console.log("hello")
// menu.onclick = () => {
//     console.log("working")
//     menu.classList.toggle('fa-times');
//     navbar.classList.toggle('active');
// }

// window.onscroll = () => {
//     menu.classList.remove('fa-times');
//     navbar.classList.remove('active');
// }

let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {

    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');

}
   
window.onscroll = () => {

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if (window.scrollY > 60) {
        document.querySelector('#scroll-top').classList.add('active');
    } else {
        document.querySelector('#scroll-top').classList.remove('active');
    }

}

// function loader() {
//     document.querySelector('.loader-container').classList.add('fade-out');
// }

// function fadeOut() {
//     setInterval(loader, 3000);
// }

// window.onload = fadeOut();

let loaderImg = document.querySelector('.loader-container');

function loader() {
    setTimeout(loading, 100);
}

function loading() {
    loaderImg.classList.add('fade-out');
}