
import  {headerUrls}  from "./api.js"
const swiperHeader = document.querySelector('.swiper-wrapper')


for (let i = 0; i < headerUrls.length; i++) {

    swiperHeader.innerHTML += `
    <div class="swiper-slide">
                    <div><img src="${headerUrls[i].url} " alt=""></div>
                    <span>
                        <h6>Самая популярная карточная игра</h6>
                        <h4>Magic: the Gathering </h4>
                    </span>
                    <button>Подробнее</button>
                </div>
    `
}