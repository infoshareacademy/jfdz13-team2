//Navigation


// Cache selectors
var lastId,
 topMenu = $("#nav-links"),
 topMenuHeight = topMenu.outerHeight()+1,
 // All list items
 menuItems = topMenu.find("a"),
 // Anchors corresponding to menu items
 scrollItems = menuItems.map(function(){
   var item = $($(this).attr("href"));
    if (item.length) { return item; }
 });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({
      scrollTop: offsetTop
  }, 850);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;

   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";

   if (lastId !== id) {
       lastId = id;

    const items = document.querySelectorAll('.nav-links a');
    items.forEach(item => {
      console.log(item);
      item.classList.remove('active')
    });

    menuItems.filter("[href=#"+id+"]").addClass("active");
  }
});




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



$(document).ready(function(){   
  setTimeout(function () {
      $("#cookieConsent").fadeIn(200);
   }, 4000);
  $("#closeCookieConsent, .cookieConsentOK").click(function() {
      $("#cookieConsent").fadeOut(200);
  }); 
}); 