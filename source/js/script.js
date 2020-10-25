const icon = document.querySelector('.header__icon')
const menu = document.querySelector('.header__menu')

icon.addEventListener('click', function () {
  menu.classList.toggle('active')
})
