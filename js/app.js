var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 20,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    991.98: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    767.98: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    300: {
      slidesPerView: 3,
      spaceBetween: 0,
    }
  }
});

var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 4,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    991.98: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    767.98: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    575.98: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    318.98: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  }
});

// close nav
function nav() {
  let nav = document.querySelector('.nav');
  nav.classList.toggle('actice-nav');
}

// display submenu
function submenu() {
  let submenu = document.querySelector('.submenu');
  submenu.classList.toggle('actice-submenu');
}

// sale
function saleBox(e) {
  let saleItems = document.querySelectorAll('.sale-items');

  for (let i = 0; i < saleItems.length; i++) {
    saleItems[i].style.border = '2px solid white'
  }

  e.style.border = '2px solid #ef562c';
}

// slider
function clickSaleImg(e) {
  let img = e.getAttribute('src');
  document.querySelector('.sale-imageMain img').setAttribute('src', img);
}

// hero
let heroSlider = document.querySelectorAll('.hero-slider img');

for (let i = 0; i < heroSlider.length; i++) {
  heroSlider[i].addEventListener('mouseenter', () => {
    heroSlider[i].parentElement.parentElement.querySelector('.hero-img').setAttribute('src', heroSlider[i].getAttribute('src'));
  })
}

// view
function view(e) {
  e.parentElement.querySelector('.view').style.display = 'block';
}

function viewClose(e) {
  e.parentElement.parentElement.parentElement.style.display = 'none';
}

let viewSlider = document.querySelectorAll('.view-slider div');
let viewSliderImg = document.querySelectorAll('.view-slider img');

for (let i = 0; i < viewSliderImg.length; i++) {
  viewSliderImg[i].addEventListener('click', () => {
    viewSliderImg[i].parentElement.parentElement.parentElement.querySelector('.view-imgMain img').setAttribute('src', viewSliderImg[i].getAttribute('src'));
  })
}

// view border color
function viewBorderColor(e) {
  let viewDiv = document.querySelectorAll('.view-slider div');

  for (let i = 0; i < viewDiv.length; i++) {
    viewDiv[i].style.border = '1px solid #e9edf5'
  }

  e.style.border = '2px solid #ef562c';
}

// view quantity + & -
function viewAdd(e) {
  ++e.parentElement.querySelector('span').innerText
}

// remove view index
function viewRemove(e) {
  if (e.parentElement.querySelector('span').innerText > 1) {
    --e.parentElement.querySelector('span').innerText;
  }
  if (e.parentElement.querySelector('span').innerText == 1) {
    e.parentElement.querySelector('span').innerText = 1;
  }
}

// slider image detail
let detailImgSmall = document.querySelectorAll('.detailImgSmall');
let detailImgBig = document.querySelector('.detailImgBig');
let detailImgView = document.querySelector('.detailImg');

for (let i = 0; i < detailImgSmall.length; i++) {
  detailImgSmall[i].addEventListener('click', () => {
    for (let i = 0; i < detailImgSmall.length; i++) {
      detailImgSmall[i].style.border = '1px solid white';
    }
    detailImgSmall[i].style.border = '1px solid #ef562c';
    detailImgBig.setAttribute('src', detailImgSmall[i].getAttribute('src'));
    detailImgView.setAttribute('src', detailImgSmall[i].getAttribute('src'));
  })
}