let button = document.querySelector("button");
let sticker = document.querySelector(".sticker");
let button2 = document.querySelector("#btn2");
let button3 = document.querySelector("#btn3");
// const parent = document.querySelector(".button");
// parent.addEventListener("click", function(e) {
//     const child = e.target.matches(".child, .child *");
//     sticker.style.left = "50rem";
// });

document.addEventListener("click", ()=> {
        button2.style.transition = "10s";
        button2.style.left = "38em";
        button3.style.transition = "10s";
        button3.style.left = "30em";
    });
