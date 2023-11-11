//prevent back btn
window.history.forward(); 
        function noBack() { 
            window.history.forward(); 
        } 

let openPopup = document.querySelector("#open-popup");
let closePopup = document.querySelector(".popup .closeButton");

openPopup.addEventListener("click", function(){
    document.body.classList.add("active-popup");
})
closePopup.addEventListener("click", function(){
    document.body.classList.remove("active-popup");
})

const scriptURL = 'https://script.google.com/macros/s/AKfycbz0WPjEVHy5i5I2Q2Ynt1aZhngbaqceZoYNntoqSwUlaLIVCXGn7Psfg9TceNlBtnFWDg/exec'

const form = document.forms['APR-Simulation']

form.addEventListener('submit', e => {
  e.preventDefault()
  document.querySelector("#submit").value="Submitting...";
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(() => {location.replace("test.html");})
})