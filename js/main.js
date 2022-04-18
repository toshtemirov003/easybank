const elHeaderNav = document.querySelector('.easybank__nav')
const elHeaderBtn = document.querySelector('.js-header__btn')

// easybank__nav--open

elHeaderBtn.addEventListener('click', () => {
  elHeaderNav.classList.toggle('easybank__nav--open')
})  