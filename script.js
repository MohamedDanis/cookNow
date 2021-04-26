var toggler = document.getElementById('toggler')
var menuBar = document.querySelector('.nav-list')
var cuisineSec = document.getElementById('cuisineSec')
var load=document.querySelector('.loader')

window.addEventListener('load', function(){
    load.classList.add('disappear');
})
toggler.addEventListener('click',()=>{
    toggler.classList.toggle('animate')
    menuBar.classList.toggle('navlist-show')
    // menuBar.classList.toggle('swing-in-top-bck')
    // menuBar.classList.toggle('ul-show')
})
cuisineSec.addEventListener('click',()=>{
    menuBar.classList.remove('navlist-show')
    toggler.classList.remove('animate')
})