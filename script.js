const heroImages = ['url("photos/heroImage.jpeg")', 'url("photos/heroImage1.jpg")', 'url("photos/heroImage2.jpg")'];
let activeHeroImage = 0;
const imgHtml = document.querySelector('.mainHero');
const imgHtml1024px = document.querySelector('.mainHero__container');
const titleHtml = document.querySelectorAll('.mainHero__title');
const firstDot = document.querySelector('.firstSlide');
const secondDot = document.querySelector('.secondSlide');
const thirdDot = document.querySelector('.thirdSlide');
const dotArray = [firstDot, secondDot, thirdDot];

const changeHeroImages = () => {
  activeHeroImage++;

  if (activeHeroImage == heroImages.length) {
    activeHeroImage = 0;
  }

  imgHtml.style.backgroundImage = heroImages[activeHeroImage];
  imgHtml1024px.style.backgroundImage = heroImages[activeHeroImage];

  if (activeHeroImage == 2) {
    titleHtml[0].style.color = '#fe466a';
    titleHtml[1].style.color = '#fe466a';
  } else {
    titleHtml[0].style.color = 'transparent';
    titleHtml[1].style.color = 'transparent';
  }
}

setInterval(changeHeroImages, 4000);

firstDot.addEventListener('click', () => {
  imgHtml.style.backgroundImage = heroImages[0];
  imgHtml1024px.style.backgroundImage = heroImages[0];
})

secondDot.addEventListener('click', () => {
  imgHtml.style.backgroundImage = heroImages[1];
  imgHtml1024px.style.backgroundImage = heroImages[1];
})

thirdDot.addEventListener('click', () => {
  imgHtml.style.backgroundImage = heroImages[2];
  imgHtml1024px.style.backgroundImage = heroImages[2];
})


