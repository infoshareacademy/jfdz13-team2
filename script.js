const heroImages = ['url("photos/slajd0.jpg")', 'url("photos/slajd1.jpg")', 'url("photos/slajd2.jpg")'];
let activeHeroImage = 0;
const heroImgHtmlMobile = document.querySelector('.mainHero');
const heroImgHtmlDesktop = document.querySelector('.mainHero__container');
const heroTitleHtml = [...document.querySelectorAll('.mainHero__title')];
const dotsArray = [...document.querySelectorAll('.mainHero__dot')];
const time = 4000;

const changeDot = () => {
  const activeDot = dotsArray.findIndex(dot => dot.classList.contains('currentDot'));
  dotsArray[activeDot].classList.remove('currentDot');
  dotsArray[activeHeroImage].classList.add('currentDot');
}

const changeHeroImages = () => {

  activeHeroImage++;

  if (activeHeroImage === heroImages.length) {
    activeHeroImage = 0;
  }

  heroImgHtmlMobile.style.backgroundImage = heroImages[activeHeroImage];
  heroImgHtmlDesktop.style.backgroundImage = heroImages[activeHeroImage];

  if (activeHeroImage === heroImages.length - 1) {
    heroTitleHtml.forEach(element => element.classList.add('titleBorder')); 
  };
  
  if (activeHeroImage !== heroImages.length - 1) {
    heroTitleHtml.forEach(element => element.classList.remove('titleBorder')); 
  } 

  changeDot();
};

setInterval(changeHeroImages, time);

// dotArray[0].addEventListener('click', () => {
//   imgHtml.style.backgroundImage = heroImages[0];
//   imgHtml1024px.style.backgroundImage = heroImages[0];
// })

// dotArray[1].addEventListener('click', () => {
//   imgHtml.style.backgroundImage = heroImages[1];
//   imgHtml1024px.style.backgroundImage = heroImages[1];
// })

// dotArray[2].addEventListener('click', () => {
//   imgHtml.style.backgroundImage = heroImages[2];
//   imgHtml1024px.style.backgroundImage = heroImages[2];
// })


