const imgList = [
    {img: 'img/1.jpg'},
    {img: 'img/2.jpg'},
    {img: 'img/3.jpg'},
    {img: 'img/4.jpg'},
    {img: 'img/5.jpg'},
    {img: 'img/6.jpg'},
    {img: 'img/7.jpg'},
];
const faLeft = document.querySelector('.fa-arrow-left');
const faRight = document.querySelector('.fa-arrow-right');
const imgSlider = document.querySelector('.imgSlider')
const spanNumber = document.querySelector('.spanNumber')
let index = 0;

const changeSlide = () => {
    index++;
    if(index >= imgList.length) {
        index = 0
    }
    sliderUpdate();
}

let myTimer = setInterval(changeSlide, 2000)


const changeLeft = () => {
    timerUpdate();
    index--
    if(index < 0) {
        index = 6
    }
    sliderUpdate();
}
const changeRight = () => {
    timerUpdate();
    index++;
    if(index >= imgList.length) {
        index = 0
    }
    sliderUpdate();
}

const timerUpdate = () => {
    clearInterval(myTimer)
    myTimer = setInterval(changeSlide, 2000)
}

const sliderUpdate = () => {
    imgSlider.style.backgroundImage = `url(${imgList[index].img})`
    spanNumber.textContent = index + 1;
    //console.log(index)
}

faLeft.addEventListener('click', changeLeft)
faRight.addEventListener('click', changeRight)
