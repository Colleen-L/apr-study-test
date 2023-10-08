let x = document.querySelector(".closebtn");
let about = document.querySelector(".about");
let start = document.querySelector("button");
let help = document.querySelector(".help");

x.onclick=function(){
    about.style.display = "none";
    start.style.display = "block";
}
help.onclick=function(){
    about.style.display = "block";
}