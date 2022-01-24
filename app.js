var hours = 9;
var minutes = 0;
var seconds = 0;
var hoursheading = document.getElementById("hours");
var minutesheading = document.getElementById("minutes");
var secondsheading = document.getElementById("seconds");
var interval;
var startbtn = document.getElementById("startbtn");
var pausebtn = document.getElementById("pausebtn")
var resetbtn = document.getElementById("resetbtn")

function time(){
    seconds++;
    secondsheading.innerHTML= seconds;
    if(seconds >= 60){
        minutes++
        minutesheading.innerHTML=minutes
        seconds=0
    }else if (minutes >=60){
        hours --
        minutes=0
        hoursheading.innerHTML=hours;
    }  
    }
function start(){
    interval =setInterval(time,1000);
    startbtn.disabled="true"
}
function stop(){
    clearInterval(interval)
}

function reset(){
    hours= 0;
    minutes= 0;
    seconds = 0;
    hoursheading.innerHTML=hours;
    minutesheading.innerHTML=minutes;
    secondsheading.innerHTML=seconds;
    stop();
}

