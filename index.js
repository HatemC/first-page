
const elemNavSi =document.querySelector('.si')
const elemNavDon = document.querySelector('.don')
const elemNavContact = document.querySelector('.contact')
const elemMain = document.querySelector('.main')
const elemSign = document.querySelector('.sign')
const elemDonation = document.querySelector('.donation')
const elemContact = document.querySelector('.contactnum')
const elemNavMain = document.querySelector('.main-btn')
let elemCounter = document.querySelector('#donersNum')

let counter=0;

elemNavSi.addEventListener('click', () => {
  elemNavSi.classList.add('navOpacity')
  elemNavDon.classList.remove('navOpacity')
  elemNavContact.classList.remove('navOpacity')
  elemMain.classList.add('hidden')
  elemSign.classList.remove('hidden')
  elemDonation.classList.add('hidden')
  elemContact.classList.add('hidden')
  elemNavMain.classList.remove('hidden')
})
elemNavDon.addEventListener('click', () => {
  elemNavSi.classList.remove('navOpacity')
  elemNavDon.classList.add('navOpacity')
  elemNavContact.classList.remove('navOpacity')
  elemMain.classList.add('hidden')
  elemSign.classList.add('hidden')
  elemDonation.classList.remove('hidden')
  elemContact.classList.add('hidden')
  elemNavMain.classList.remove('hidden')
  counter = counter +1
  elemCounter.innerText= counter


})
elemNavContact.addEventListener('click', () => {
  elemNavSi.classList.remove('navOpacity')
  elemNavDon.classList.remove('navOpacity')
  elemNavContact.classList.add('navOpacity')
  elemMain.classList.add('hidden')
  elemSign.classList.add('hidden')
  elemDonation.classList.add('hidden')
  elemContact.classList.remove('hidden')
  elemNavMain.classList.remove('hidden')
})

elemNavMain.addEventListener('click', () => {
  elemNavSi.classList.remove('navOpacity')
  elemNavDon.classList.remove('navOpacity')
  elemNavContact.classList.remove('navOpacity')
  elemMain.classList.remove('hidden')
  elemSign.classList.add('hidden')
  elemDonation.classList.add('hidden')
  elemContact.classList.add('hidden')
  elemNavMain.classList.add('hidden')
})
