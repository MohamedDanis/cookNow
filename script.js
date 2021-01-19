var toggler = document.getElementById('toggler')
var menuBar = document.getElementById('menu-bar')
var cuisineSec = document.getElementById('cuisineSec')

toggler.addEventListener('click',()=>{
    if(menuBar.classList.contains('menu-show')){
        menuBar.classList.remove('menu-show')
        menuBar.classList.add('menu-hide')
    }else{
        menuBar.classList.remove('menu-hide')
        menuBar.classList.add('menu-show')
        menuBar.classList.add('swing-in-top-bck')
    }
    
})

cuisineSec.addEventListener('click',()=>{
    menuBar.classList.remove('menu-show')
    menuBar.classList.add('menu-hide')
})