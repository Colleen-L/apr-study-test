//timer
var timeLeft = 25;
var timer = document.getElementById('timer');

var timerId = setInterval(countdown, 1000);

function screenshot(){
    html2canvas(document.querySelector(".galleryView"), {
        onrendered: function(canvas) {
            return Canvas2Image.saveAsPNG(canvas);

        }
    })
}

function countdown() {
  if (timeLeft < 0) {
    screenshot();
    clearTimeout(timerId);
    location.replace("upload.html");
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
})
slide2.addEventListener("click", function(){
    incrementCount();
        if(count == 1){
            slide1spot.src = "slides/slide2.png";
        } else if(count == 2){
            slide2spot.src = "slides/slide2.png";
        } else if(count == 3){
            slide3spot.src = "slides/slide2.png";
        } else if(count == 4){
            slide4spot.src = "slides/slide2.png";
        } else if(count == 5){
            slide5spot.src = "slides/slide2.png";
        } else if(count == 6){
            slide6spot.src = "slides/slide2.png";
        } else if(count == 7){
            slide7spot.src = "slides/slide2.png";
        } else if(count == 8){
            slide8spot.src = "slides/slide2.png";
        }
})
slide3.addEventListener("click", function(){
    incrementCount();
        if(count == 1){
            slide1spot.src = "slides/slide3.png";
        } else if(count == 2){
            slide2spot.src = "slides/slide3.png";
        } else if(count == 3){
            slide3spot.src = "slides/slide3.png";
        } else if(count == 4){
            slide4spot.src = "slides/slide3.png";
        } else if(count == 5){
            slide5spot.src = "slides/slide3.png";
        } else if(count == 6){
            slide6spot.src = "slides/slide3.png";
        } else if(count == 7){
            slide7spot.src = "slides/slide3.png";
        } else if(count == 8){
            slide8spot.src = "slides/slide3.png";
        }
})
slide4.addEventListener("click", function(){
    incrementCount();
        if(count == 1){
            slide1spot.src = "slides/slide4.png";
        } else if(count == 2){
            slide2spot.src = "slides/slide4.png";
        } else if(count == 3){
            slide3spot.src = "slides/slide4.png";
        } else if(count == 4){
            slide4spot.src = "slides/slide4.png";
        } else if(count == 5){
            slide5spot.src = "slides/slide4.png";
        } else if(count == 6){
            slide6spot.src = "slides/slide4.png";
        } else if(count == 7){
            slide7spot.src = "slides/slide4.png";
        } else if(count == 8){
            slide8spot.src = "slides/slide4.png";
        }
})
slide5.addEventListener("click", function(){
    incrementCount();
        if(count == 1){
            slide1spot.src = "slides/slide5.png";
        } else if(count == 2){
            slide2spot.src = "slides/slide5.png";
        } else if(count == 3){
            slide3spot.src = "slides/slide5.png";
        } else if(count == 4){
            slide4spot.src = "slides/slide5.png";
        } else if(count == 5){
            slide5spot.src = "slides/slide5.png";
        } else if(count == 6){
            slide6spot.src = "slides/slide5.png";
        } else if(count == 7){
            slide7spot.src = "slides/slide5.png";
        } else if(count == 8){
            slide8spot.src = "slides/slide5.png";
        }
})
slide6.addEventListener("click", function(){
    incrementCount();
        if(count == 1){
            slide1spot.src = "slides/slide6.png";
        } else if(count == 2){
            slide2spot.src = "slides/slide6.png";
        } else if(count == 3){
            slide3spot.src = "slides/slide6.png";
        } else if(count == 4){
            slide4spot.src = "slides/slide6.png";
        } else if(count == 5){
            slide5spot.src = "slides/slide6.png";
        } else if(count == 6){
            slide6spot.src = "slides/slide6.png";
        } else if(count == 7){
            slide7spot.src = "slides/slide6.png";
        } else if(count == 8){
            slide8spot.src = "slides/slide6.png";
        }
})
slide7.addEventListener("click", function(){
    incrementCount();
        if(count == 1){
            slide1spot.src = "slides/slide7.png";
        } else if(count == 2){
            slide2spot.src = "slides/slide7.png";
        } else if(count == 3){
            slide3spot.src = "slides/slide7.png";
        } else if(count == 4){
            slide4spot.src = "slides/slide7.png";
        } else if(count == 5){
            slide5spot.src = "slides/slide7.png";
        } else if(count == 6){
            slide6spot.src = "slides/slide7.png";
        } else if(count == 7){
            slide7spot.src = "slides/slide7.png";
        } else if(count == 8){
            slide8spot.src = "slides/slide7.png";
        }
})
slide8.addEventListener("click", function(){
    incrementCount();
        if(count == 1){
            slide1spot.src = "slides/slide8.png";
        } else if(count == 2){
            slide2spot.src = "slides/slide8.png";
        } else if(count == 3){
            slide3spot.src = "slides/slide8.png";
        } else if(count == 4){
            slide4spot.src = "slides/slide8.png";
        } else if(count == 5){
            slide5spot.src = "slides/slide8.png";
        } else if(count == 6){
            slide6spot.src = "slides/slide8.png";
        } else if(count == 7){
            slide7spot.src = "slides/slide8.png";
        } else if(count == 8){
            slide8spot.src = "slides/slide8.png";
        }
})

//quitting
var quit = document.getElementById('quit');
quit.addEventListener("click", function(){
    screenshot();
    location.replace("final.html");
})

//finish
var finish = document.getElementById('finish');
finish.addEventListener("click", function(){
    screenshot();
    location.replace("upload.html");
})

//restart
var restart = document.getElementById('restart');
restart.addEventListener("click", function(){
    count = 0;
    slide1spot.src = "slides/noselection.png";
    slide2spot.src = "slides/noselection.png";
    slide3spot.src = "slides/noselection.png";
    slide4spot.src = "slides/noselection.png";
    slide5spot.src = "slides/noselection.png";
    slide6spot.src = "slides/noselection.png";
    slide7spot.src = "slides/noselection.png";
    slide8spot.src = "slides/noselection.png";
})