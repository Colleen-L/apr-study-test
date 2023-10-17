let openPopup = document.querySelector("#open-popup");
let closePopup = document.querySelector(".popup .closeButton");

openPopup.addEventListener("click", function(){
    document.body.classList.add("active-popup");
})
closePopup.addEventListener("click", function(){
    document.body.classList.remove("active-popup");
})
