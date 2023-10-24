let openPopup = document.querySelector("#open-popup");
let closePopup = document.querySelector(".popup .closeButton");

openPopup.addEventListener("click", function(){
    document.body.classList.add("active-popup");
})
closePopup.addEventListener("click", function(){
    document.body.classList.remove("active-popup");
})

const scriptURL = 'https://script.google.com/macros/s/AKfycbwafaZup4LBny-MiHlWR1CqpkQzs1RM-5lOZofdvewUJ8slb4ShvE5B2m2jnt_yIDSv8w/exec'

const form = document.forms['APR-Simulation']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(() => {location.replace("test.html");})
})
