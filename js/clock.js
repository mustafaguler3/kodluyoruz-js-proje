var myClock = document.querySelector("#myClock")

let date = new Date();
var minute = date.getMinutes();
var seconds = date.getSeconds();
var hours = date.getHours();
var day = date.getDay();

function showTime(){
    myClock.innerHTML = date.toLocaleString();   
}

setInterval(showTime,1000);