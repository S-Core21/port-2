let menuClose = document.querySelector('.close')
let menuOpen = document.querySelector('.menu')
let navBar = document.querySelector('nav')

navBar.style.cssText = 'transform: translateX(260px);'

menuOpen.addEventListener('click', ()=> {
    navBar.style.cssText = 'transform: translateX(0px); transition: 1s linear 0.3s'
})
menuClose.addEventListener('click', ()=> {
    navBar.style.cssText = 'transform: translateX(260px); transition: 1s linear 0.3s'
})