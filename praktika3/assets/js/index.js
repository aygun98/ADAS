const overLay= document.querySelector('.overlay-menu')
const barsBtn= document.querySelector('.fa-bars-btn')
const crossBtn= document.querySelector('.fa-xmark-btn')

barsBtn.addEventListener('click', ()=>{

    overLay.classList.add('active')
})
crossBtn.addEventListener('click', ()=>{

    overLay.classList.remove('active')
})