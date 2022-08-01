let menuClose = document.querySelector(".close");
let menuOpen = document.querySelector(".menu");
let navBar = document.querySelector("nav");
let menuclose2 = document.querySelectorAll('article,footer');
let querry = window.matchMedia("(max-width: 627px)");
let navSection = document.querySelector('section');
let menuclose3 = document.querySelectorAll(
  "#nav1,#nav2,#nav3,#nav4,#nav5,#nav6"
);
let home = document.querySelector('.one')



if(querry.matches){
  document.body.style.cssText = 'overflow-x:hidden' 
}

menuOpen.addEventListener("click", () => {
  
  if(!querry.matches){
  navBar.style.cssText = "transform: translateX(0px)"
}else if (querry.matches){
  navBar.style.cssText = "transform: translateX(0px); transition: all .5s linear 0s"
}
})


menuClose.addEventListener("click", () => {
  navBar.style.cssText =
    "transform: translateX(300px); transition: all .3s linear 0s";
})


for(let i=0; i < menuclose3.length; i++ ){
menuclose3[i].addEventListener('click', ()=>{
  if(!querry.matches){
    navBar.style.cssText = "transform: translateX(0px)"
  }else if(querry.matches){
    navBar.style.cssText = 'transform: translateX(300px); transition: .6s linear 0s'   
  }
})
}

for(let i=0; i < menuclose2.length; i++ ){
  if(querry.matches){
  menuclose2[i].addEventListener('touchmove', ()=>{
    navSection.style.cssText = 'box-shadow: 0 20px 10px 0 gainsboro;'
})}else if(!querry.matches){
  menuclose2[i].addEventListener('mouseover', ()=>{
    navSection.style.cssText = 'box-shadow: none;'})
}
menuclose2[i].addEventListener('click', ()=>{
  if(querry.matches){
  navBar.style.cssText =
  "transform: translateX(300px); transition: all .6s linear 0s";
}
})
}
if(querry.matches){
  console.log('hmmm')
}else if(!querry.matches){
  console.log('yay')
}

if(!querry.matches){
home.addEventListener('mouseover', ()=>{
  navSection.style.cssText = 'none;'
})
}else if(querry.matches){
  home.addEventListener('touchmove', ()=>{
    navSection.style.cssText = 'box-shadow: 0 0px 0 0 gainsboro;'
  })
}

console.log(menuclose3)
console.log(navSection)

