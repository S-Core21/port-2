let menuClose = document.querySelector('.close')
let menuOpen = document.querySelector('.menu')
let navBar = document.querySelector('nav')
let querry = window.matchMedia('max-width: 420px')

// if(querry.matches){
// navBar.style.cssText = 'transform: translateX(260px);'
// }

menuOpen.addEventListener('click', ()=> {
    navBar.style.cssText = 'transform: translateX(0px); transition: 1s linear 0.3s'
})
menuClose.addEventListener('click', ()=> {
    navBar.style.cssText = 'transform: translateX(300px); transition: 1s linear 0.3s'
})