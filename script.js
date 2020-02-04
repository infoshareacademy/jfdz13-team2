const heroImages = ['url("photos/slajd0.jpg")', 'url("photos/slajd1.jpg")', 'url("photos/slajd2.jpg")'];
let activeHeroImage = 0;
const heroImgHtmlMobile = document.querySelector('.mainHero');
const heroImgHtmlDesktop = document.querySelector('.mainHero__container');
const dotsNav = document.querySelector('.mainHero__dotsNav');
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
  changeDot();
};

let heroIndexInterval = setInterval(changeHeroImages, time);

dotsNav.addEventListener('click', e => {
  clearInterval(heroIndexInterval);
  const activeDot = e.target.closest('span');
  activeDot.classList.add('currentDot');
  activeHeroImage = dotsArray.indexOf(activeDot);
  heroImgHtmlMobile.style.backgroundImage = heroImages[activeHeroImage];
  heroImgHtmlDesktop.style.backgroundImage = heroImages[activeHeroImage];
  setTimeout(dotsArray[activeHeroImage].classList.remove('currentDot'), time);
  changeDot();
  heroIndexInterval = setInterval(changeHeroImages, time);
});
