let headerName = document.querySelector('.header-name a');
let accountForm = document.querySelector('.account-form');
let logoutForm = document.querySelector('.logout-form');

for (let i = 0; i < dataUser.length; i++) {
  let usname = dataUser[dataUser.length - 1].name;
  headerName.innerHTML = usname;
  accountForm.style.display = 'none';
  logoutForm.style.display = 'block';
}

function logout() {
  headerName.innerHTML = 'Tài khoản';
  logoutForm.style.display = 'none';
  accountForm.style.display = '';
}

if (headerName.innerHTML === 'tài khoản') {
  logoutForm.style.display = 'none';
} else {
  logoutForm.style.display = '';
}

function topsale(e) {
  let topsaleItems = document.querySelectorAll('.topsale-items');

  for (let i = 0; i < topsaleItems.length; i++) {
    topsaleItems[i].style.border = '';
  }

  e.style.border = '2px solid var(--primary-color)';
}

function topsaleShow(e) {
  let srcImg = e.getAttribute('src');
  document.getElementById('topsalteImgMain').setAttribute('src', srcImg);
}

let price = 2500000;
let sumPrice;
let subtotal = document.querySelector('.subtotal');
let cartPrice = document.querySelectorAll('.cart-price');
let cartQuantity = document.querySelectorAll('.cart-quantity span');
let cartTotal = document.querySelectorAll('.cart-total');
let removePrice = document.querySelectorAll('.removePrice');


for (let i = 0; i < cartPrice.length; i++) {
  cartPrice[i].innerHTML = price.toLocaleString() + 'đ';
  cartTotal[i].innerHTML = (price * +cartQuantity[i].innerHTML);
  subtotal.innerHTML = ((+cartQuantity[0].innerHTML * price) + (+cartQuantity[1].innerHTML * price)).toLocaleString() + 'đ';
}

function cartAdd(e) {
  ++e.parentElement.parentElement.querySelector('span').innerText
  for (let i = 0; i < cartPrice.length; i++) {
    cartTotal[i].innerHTML = (price * +cartQuantity[i].innerHTML);
    subtotal.innerHTML = (+cartTotal[0].innerHTML + +cartTotal[1].innerHTML).toLocaleString() + 'đ';
    sumPrice = (+cartTotal[0].innerHTML + +cartTotal[1].innerHTML).toLocaleString();
  }
}

function cartRemove(e) {
  if (e.parentElement.parentElement.querySelector('span').innerText > 1) {
    --e.parentElement.parentElement.querySelector('span').innerText;
    for (let i = 0; i < cartPrice.length; i++) {
      cartTotal[i].innerHTML = (price * +cartQuantity[i].innerHTML).toLocaleString() + 'đ';
      subtotal.innerHTML = ((+cartQuantity[0].innerHTML * price) + (+cartQuantity[1].innerHTML * price)).toLocaleString() + 'đ';
    }
  }
}


// tính tổng tiền phần mobile
let cartMobilePirce = document.querySelectorAll('.cartMobilePirce');
let cartMobileQuantity = document.querySelectorAll('.cartMobileQuantity');
let cartMobileSubtotal = document.querySelector('.cartMobileSubtotal');

for (let i = 0; i < cartMobilePirce.length; i++) {
  cartMobileSubtotal.innerHTML = ((+cartMobilePirce[0].getAttribute('price') * +cartMobileQuantity[0].innerHTML) + (+ cartMobilePirce[1].getAttribute('price') * +cartMobileQuantity[1].innerHTML)).toLocaleString() + 'đ';
}

function addCartMobile(e) {
  ++e.parentElement.querySelector('span').innerHTML
  for (let i = 0; i < cartMobilePirce.length; i++) {
    cartMobileSubtotal.innerHTML = ((+cartMobilePirce[0].getAttribute('price') * +cartMobileQuantity[0].innerHTML) + (+ cartMobilePirce[1].getAttribute('price') * +cartMobileQuantity[1].innerHTML)).toLocaleString() + 'đ';
  }
}

function removeCartMobile(e) {
  if (e.parentElement.parentElement.querySelector('span').innerText > 1) {
    --e.parentElement.querySelector('span').innerHTML
    for (let i = 0; i < cartMobilePirce.length; i++) {
      cartMobileSubtotal.innerHTML = ((+cartMobilePirce[0].getAttribute('price') * +cartMobileQuantity[0].innerHTML) + (+ cartMobilePirce[1].getAttribute('price') * +cartMobileQuantity[1].innerHTML)).toLocaleString() + 'đ';
    }
  }
}

document.addEventListener("keydown", function (event) {
  if (event.ctrlKey) {
    event.preventDefault();
  }
  if (event.keyCode == 123) {
    event.preventDefault();
  }
});
document.addEventListener('contextmenu', event => event.preventDefault());