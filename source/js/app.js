window.onload = function() {
  let nav = document.querySelector('.nav');
  let bgpic = document.querySelector('.background-common');
  let buttons = document.querySelector('.nav__buttons');

  bgpic.classList.remove('menu-open');
  nav.classList.remove('nav__wrapper-open');
  buttons.style.display = 'block';

  buttons.addEventListener('click', function (evt) {
    const isOpen = bgpic.classList.contains('menu-open');
    if (isOpen) {
      bgpic.classList.remove('menu-open');
      nav.classList.remove('nav__wrapper-open');
    }
    else {
      bgpic.classList.add('menu-open');
      nav.classList.add('nav__wrapper-open');
    }
  });

  let modalError = document.querySelector('.modal__error-window');
  let modalOk = document.querySelector('.modal__ok-window');

  function openModal(isValid) {
    if (isValid) {
      modalOk.classList.add('modal__ok-window--on');
    }
    else {
      modalError.classList.add('modal__ok-window--on');
    }
  }
  function closeModal() {
    modalOk.classList.remove('modal__ok-window--on');
    modalError.classList.remove('modal__ok-window--on');
  }

  let form = document.querySelector('.user__data');
  let submit = document.querySelector('.user__submit');
  let error = document.querySelector('.modal__error-button');
  let ok = document.querySelector('.modal__ok-button');

  submit.addEventListener('click', function (event) {
    const isValid = document.querySelectorAll('.user__data *:invalid').length === 0;
    openModal(isValid);
  })

  form.addEventListener('submit', function (event) {
    event.preventDefault();
  })

  error.addEventListener('click', closeModal);

  ok.addEventListener('click', closeModal);
};
