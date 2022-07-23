let menuClose = document.querySelector(".close");
let menuOpen = document.querySelector(".menu");
let navBar = document.querySelector("nav");
let menuclose2 = document.body;
let querry = window.matchMedia("max-width: 420px");
let menuclose3 = document.querySelectorAll(
  "#nav1,#nav2,#nav3,#nav4,#nav5,#nav6"
);
let menuStatus;



menuOpen.addEventListener("click", () => {
  navBar.style.cssText = "transform: translateX(0px); transition: 1s linear 0.3s";
  menuStatus = true
  
});
menuClose.addEventListener("click", () => {
  navBar.style.cssText =
    "transform: translateX(300px); transition: all 3s linear 0.3s";
});

menuclose2.addEventListener("mouseover", () => {
    if(menuStatus===true){
  navBar.style.cssText =
    "transform: translateX(300px); transition: 1s linear 0.3s";
}
});

// menuclose3.addEventListener('click', ()=>{
//     for(let i=0; i < menuclose3.length; i++ ){
//         navBar.style.cssText = 'transform: translateX(300px); transition: 1s linear 0.3s'
//     }
// })
// console.log(menuclose3)
