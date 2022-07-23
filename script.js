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
  navBar.style.cssText = "transform: translateX(0px); transition: .6s linear 0s";
});
menuClose.addEventListener("click", () => {
  navBar.style.cssText =
    "transform: translateX(300px); transition: all .6s linear 0s";
});

// menuclose2.addEventListener("mouseover", () => {
//     if(menuStatus===true){
//   navBar.style.cssText =
//     "transform: translateX(300px); transition: .6s linear 0s";
// }
// });
for(let i=0; i < menuclose3.length; i++ ){
menuclose3[i].addEventListener('click', ()=>{
        navBar.style.cssText = 'transform: translateX(300px); transition: 0s linear 0s'   
})
}

