const mainContainer = document.querySelector('.main-container')
const body = document.querySelector('body')
const sunstick = document.getElementById('sun-stick')
const sun = document.getElementById('sun')

sunstick.addEventListener("animationend", e => {
  console.log('finishing');
  sun.remove()
  sunstick.remove()
  body.style.overflowY = 'auto'
})