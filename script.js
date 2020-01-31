const heroImages = ['url("photos/heroImage.jpeg")', 'url("photos/heroImage1.jpg")', 'url("photos/heroImage2.jpg")'];
let activeHeroImage = 0;
const imgHtml = document.querySelector('.mainHero');
const imgHtml1024px = document.querySelector('.mainHero__container');
const titleHtml = document.querySelectorAll('.mainHero__title');

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


