//timer
var timeLeft = 25;
var timer = document.getElementById('timer');

var timerId = setInterval(countdown, 1000);

function countdown() {
  if (timeLeft < 0) {
    clearTimeout(timerId);
    location.replace("final.html");
  } else {
    timer.innerHTML = timeLeft;
    timeLeft--;
  }
}

//order
var count = 0;
function incrementCount(){
    count++;
}
var clicked = false;
var slide1 = document.getElementById('slide1');
var slide2 = document.getElementById('slide2');
var slide3 = document.getElementById('slide3');
var slide4 = document.getElementById('slide4');
var slide5 = document.getElementById('slide5');
var slide6 = document.getElementById('slide6');
var slide7 = document.getElementById('slide7');
var slide8 = document.getElementById('slide8');
var slide1spot = document.getElementById('slide1spot');
var slide2spot = document.getElementById('slide2spot');
var slide3spot = document.getElementById('slide3spot');
var slide4spot = document.getElementById('slide4spot');
var slide5spot = document.getElementById('slide5spot');
var slide6spot = document.getElementById('slide6spot');
var slide7spot = document.getElementById('slide7spot');
var slide8spot = document.getElementById('slide8spot');

slide1.addEventListener("click", function(){
    incrementCount();
    while(slide1spot.src != "slides/slide1.png" && slide2spot.src != "slides/slide1.png" && slide3spot.src != "slides/slide1.png" && slide4spot.src != "slides/slide1.png" && slide5spot.src != "slides/slide1.png" && slide6spot.src != "slides/slide1.png" && slide7spot.src != "slides/slide1.png" && slide8spot.src != "slides/slide1.png" ){
        if(count == 1){
            slide1spot.src = "slides/slide1.png";
        } else if(count == 2){
            slide2spot.src = "slides/slide1.png";
        } else if(count == 3){
            slide3spot.src = "slides/slide1.png";
        } else if(count == 4){
            slide4spot.src = "slides/slide1.png";
        } else if(count == 5){
            slide5spot.src = "slides/slide1.png";
        } else if(count == 6){
            slide6spot.src = "slides/slide1.png";
        } else if(count == 7){
            slide7spot.src = "slides/slide1.png";
        } else if(count == 8){
            slide8spot.src = "slides/slide1.png";
        }
    }
})
slide2.addEventListener("click", function(){
    incrementCount();
})
slide3.addEventListener("click", function(){
    incrementCount();
})
slide4.addEventListener("click", function(){
    incrementCount();
})
slide5.addEventListener("click", function(){
    incrementCount();
})
slide6.addEventListener("click", function(){
    incrementCount();
})
slide7.addEventListener("click", function(){
    incrementCount();
})
slide8.addEventListener("click", function(){
    incrementCount();
})