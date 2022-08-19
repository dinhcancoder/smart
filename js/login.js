let dataUser = localStorage.getItem('usname') ? JSON.parse(localStorage.getItem('usname')) : [];

function color(e, color) {
  let body = document.querySelector('body');

  if (color == 'red') {
    body.classList.add('red');
    body.classList.remove('indigo');
    body.classList.remove('pink');
    body.classList.remove('orange');
    body.classList.remove('yello');
    body.classList.remove('reset');
    body.classList.remove('teal');
    body.classList.remove('green');
  } else if (color == 'indigo') {
    body.classList.remove('red');
    body.classList.add('indigo');
    body.classList.remove('pink');
    body.classList.remove('orange');
    body.classList.remove('yello');
    body.classList.remove('teal');
    body.classList.remove('reset');
    body.classList.remove('green');
  } else if (color == 'pink') {
    body.classList.remove('red');
    body.classList.remove('indigo');
    body.classList.add('pink');
    body.classList.remove('orange');
    body.classList.remove('yello');
    body.classList.remove('teal');
    body.classList.remove('reset');
    body.classList.remove('green');
  } else if (color == 'orange') {
    body.classList.remove('red');
    body.classList.remove('indigo');
    body.classList.remove('pink');
    body.classList.add('orange');
    body.classList.remove('yello');
    body.classList.remove('teal');
    body.classList.remove('reset');
    body.classList.remove('green');
  } else if (color == 'yello') {
    body.classList.remove('red');
    body.classList.remove('indigo');
    body.classList.remove('pink');
    body.classList.remove('orange');
    body.classList.add('yello');
    body.classList.remove('teal');
    body.classList.remove('reset');
    body.classList.remove('green');
  } else if (color == 'teal') {
    body.classList.remove('red');
    body.classList.remove('indigo');
    body.classList.remove('pink');
    body.classList.remove('orange');
    body.classList.remove('yello');
    body.classList.add('teal');
    body.classList.remove('green');
    body.classList.remove('reset');
  } else if (color == 'green') {
    body.classList.remove('red');
    body.classList.remove('indigo');
    body.classList.remove('pink');
    body.classList.remove('orange');
    body.classList.remove('yello');
    body.classList.remove('teal');
    body.classList.add('green');
    body.classList.remove('reset');
  } else {
    body.classList.remove('red');
    body.classList.remove('indigo');
    body.classList.remove('pink');
    body.classList.remove('orange');
    body.classList.remove('yello');
    body.classList.remove('teal');
    body.classList.remove('green');
    body.classList.add('reset');
  }
}

function login_color() {
  let setting = document.querySelector('.setting');
  setting.classList.toggle('open');
}

function checkForm() {
  let inputElement = document.querySelectorAll('.input');

  for (let i = 0; i < inputElement.length; i++) {
    if (inputElement[i].value === '') {
      inputElement[i].style.borderColor = 'rgb(189, 59, 59)';
      inputElement[i].parentElement.querySelector('.error').innerText = `Please enter ${inputElement[i].id}`;
    } else {
      inputElement[i].parentElement.querySelector('.error').innerText = '';
    }
  }
}


function login() {
  checkForm();

  let user = document.getElementById('user');
  let password = document.getElementById('password');
  let error = document.querySelectorAll('.error');
  let checkError;
  let arrError = [];
  let checkAccount;

  for (let i = 0; i < error.length; i++) {
    arrError.push(error[i].innerText);
  }
  checkError = arrError.every(value => value === '');

  if (checkError) {
    checkAccount = dataList.some(value => value.username === user.value && value.password === password.value);
    if (checkAccount) {
      dataUser.push({
        name: user.value
      });
      localStorage.setItem('usname', JSON.stringify(dataUser));
      setTimeout(() => {
        window.location.replace('/index.html');
      }, 400);
      clear();
    } else {
      user.parentElement.querySelector('.error').innerText = 'Account or password is not precision';
    }
  }
}

let input_All = document.querySelectorAll('.input');

for (let i = 0; i < input_All.length; i++) {
  input_All[i].addEventListener('keyup', () => {
    if (input_All[i].value === '') {
      input_All[i].parentElement.querySelector('.error').innerText = `Please enter ${input_All[i].id}`;
      input_All[i].style.borderColor = 'rgb(189, 59, 59)';
    } else {
      input_All[i].parentElement.querySelector('.error').innerText = '';
      input_All[i].style.borderColor = '#232a31';
    }
  })
}

function clear() {
  for (let i = 0; input_All.length; i++) {
    input_All[i].value = '';
  }
}
