const overLay = document.querySelector('.overlay-menu');
const clickBars = document.querySelector('.fa-bars');
const clickCross = document.querySelector('.fa-xmark');

clickBars.addEventListener('click', ()=>{
    overLay.classList.add('active')

})
clickCross.addEventListener('click', ()=>{
    overLay.classList.remove("active")
})

const navBar= document.querySelector('.navbar')
window.addEventListener('scroll', ()=>{
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
       navBar.classList.add('fixed')
    }
    else{
        navBar.classList.remove('fixed')

    }
})
