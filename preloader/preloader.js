const  preloader = document.querySelector('.preloader')

window.onload=function(){
  preloader.classList.add('hide-preloader')
  preloader.addEventListener('transitionend',function(){
    preloader.remove()
  })
  document.body.style.pointerEvents='all'
}