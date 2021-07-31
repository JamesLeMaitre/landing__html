const links = document.querySelectorAll('.nav__item')

links.forEach((link => {
  link.addEventListener('click', () => {
    document.querySelector('.active').classList.remove('active');
    link.classList.add('active');
  })
}))