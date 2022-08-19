let dataList = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : [];
let checkAccount = false;
let checkPassword = false;
let checkAccept = false;
let checkLenght = false;

function clear() {
  let inputElement = document.querySelectorAll('.input');
  let success = document.querySelectorAll('.success');
  for (let i = 0; i < inputElement.length; i++) {
    inputElement[i].value = '';
  }
  for (let i = 0; i < success.length; i++) {
    success[i].style.display = 'none';
  }
}

function checkForm() {
  let inputElement = document.querySelectorAll('.input');
  let parentInput = document.querySelectorAll('.btn__input-box');
  let email = document.getElementById('email');
  let username = document.getElementById('username');
  let emailfail = document.querySelector('.emailfail');
  let usernamefail = document.querySelector('.usernamefail');
  let password1 = document.querySelector('.password1');
  let password2 = document.querySelector('.password2');

  for (let i = 0; i < inputElement.length; i++) {
    if (inputElement[i].value === '') {
      parentInput[i].parentElement.querySelector('.error').innerText = `Please enter ${inputElement[i].id}`;
      inputElement[i].style.borderColor = 'rgba(255, 45, 45, .32)';
      inputElement[i].parentElement.querySelector('.success').style.display = 'none';
      inputElement[i].parentElement.querySelector('.close').style.display = 'none';
    } else {
      parentInput[i].parentElement.querySelector('.error').innerText = '';
      inputElement[i].style.borderColor = 'rgba(29, 225, 49, .1)';
      inputElement[i].parentElement.querySelector('.success').style.display = 'block';
      inputElement[i].parentElement.querySelector('.close').style.display = 'none';
    }
  }

  for (let i = 0; i < dataList.length; i++) {
    if (dataList[i].email === email.value && dataList[i].username === username.value) {
      checkAccount = true;
      emailfail.innerText = `Email ${dataList[i].email} already exists in the system`;
      usernamefail.innerText = `Username ${dataList[i].username} already exists in the system`;
      email.parentElement.querySelector('.success').style.display = 'none';
      email.parentElement.querySelector('.close').style.display = 'block';
      username.parentElement.querySelector('.success').style.display = 'none';
      username.parentElement.querySelector('.close').style.display = 'block';
    } else if (dataList[i].email === email.value) {
      checkAccount = true;
      emailfail.innerText = `Email ${dataList[i].email} already exists in the system`;
      email.parentElement.querySelector('.success').style.display = 'none';
      email.parentElement.querySelector('.close').style.display = 'block';
    } else if (dataList[i].username === username.value) {
      checkAccount = true;
      usernamefail.innerText = `Username ${dataList[i].username} already exists in the system`;
      username.parentElement.querySelector('.success').style.display = 'none';
      username.parentElement.querySelector('.close').style.display = 'block';
    } else {
      checkAccount = false;
    }
  }

  if (password1.value === password2.value) {
    checkPassword = true;
  } else {
    checkPassword = false;
    console.log(password1.value)
    console.log(password2.value)
    let passwordfail = document.querySelector('.passwordfail');
    passwordfail.innerText = `Confirmation password is incorrect!`;
    password2.parentElement.querySelector('.close').style.display = 'block';
    password2.parentElement.querySelector('.success').style.display = 'none';
  }

  check_Accept();
}

function register() {
  checkForm();

  let error = document.querySelectorAll('.error');
  let arrError = [];

  for (let i = 0; i < error.length; i++) {
    arrError.push(error[i].innerText);
  }

  let checkError = arrError.every(value => value === '');

  if (checkError) {
    let inputElement = document.querySelectorAll('.input');
    let email = document.getElementById('email').value;
    let username = document.getElementById('username').value;
    let password1 = document.querySelector('.password1').value;
    let password2 = document.querySelector('.password2').value;

    if (checkPassword === true) {
      if (checkAccount === false) {
        if (checkAccept === true) {
          dataList.push({
            email: email,
            username: username,
            password: password1
          });
          localStorage.setItem('user', JSON.stringify(dataList));
          alert('success');
          clear();
        }
      }
    }
  }
}

function check_Accept() {
  let check = document.getElementById('check').checked;
  let confirm = document.querySelector('.confirm');
  if (check === true) {
    checkAccept = true;
    confirm.style.display = 'none';
  } else {
    checkAccept = false;
    confirm.style.display = 'block';
  }
}

let inputAll = document.querySelectorAll('.input');
let parentAll = document.querySelectorAll('.btn__input-box');
let user_name = document.getElementById('username');

for (let i = 0; i < inputAll.length; i++) {
  inputAll[i].addEventListener('keyup', () => {
    if (inputAll[i].value === '') {
      parentAll[i].parentElement.querySelector('.error').innerText = `Please enter ${inputAll[i].id}`;
      inputAll[i].parentElement.querySelector('.success').style.display = 'none';
      inputAll[i].style.borderColor = '#253143';
    } else {
      parentAll[i].parentElement.querySelector('.error').innerText = '';
      parentAll[i].parentElement.querySelector('.close').style.display = 'none';
    }
  })
}