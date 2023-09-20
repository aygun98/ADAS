//mobilmenu
const bars = document.querySelector(".fa-bars")
const cross = document.querySelector(".fa-xmark")
const overLay = document.querySelector('.overlay-menu')
const bgOverlay = document.querySelector('.bg-overlay')

bars.addEventListener('click', () => {
   overLay.classList.add('active');
   bgOverlay.classList.add('aktive')
})
cross.addEventListener('click', () => {
   overLay.classList.remove('active')
   bgOverlay.classList.remove('aktive')
})
bgOverlay.addEventListener('click', () => {
   overLay.classList.remove('active')
   bgOverlay.classList.remove('aktive')
})

//dark light mode
const mode = document.getElementById('style-mode')
const lightMode = document.querySelectorAll('.fa-sun-btn')
const darktMode = document.querySelectorAll('.fa-moon-btn')


window.addEventListener('load', () => {

   // mode.classList.add('light-mode')
   for (let i = 0; i < darktMode.length; i++) {

      darktMode[i].addEventListener('click', () => {

       
         localStorage.setItem("isDark", true)
         changeMode()


      })
   }
   for (let i = 0; i < lightMode.length; i++) {

      lightMode[i].addEventListener('click', () => {

        

         localStorage.setItem("isDark", false)
         changeMode()


      })
   }
})
//kew yaddawa vurduq
function changeMode() {
   let isDark = JSON.parse(localStorage.getItem("isDark"))

   if (isDark) {
      console.log(mode)

      mode.classList.remove('light-mode')
      mode.classList.add('dark-mode')

   } else {

      mode.classList.remove('dark-mode')
      mode.classList.add('light-mode')


   }
}
//change funkisyani cagirdiq seyfe yuklenende
window.addEventListener('DOMContentLoaded', () => {
   changeMode()

})