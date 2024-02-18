let hour = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let am_pm = document.getElementById("am_pm");

function getTime() {
    let currentHour = new Date().getHours();
    let currentMinute = new Date().getMinutes();
    let currentSecond = new Date().getSeconds();

    hour.innerText = currentHour < 10 ? "0" + currentHour : currentHour; // Adjust to 12-hour format
    min.innerText = currentMinute < 10 ? "0" + currentMinute : currentMinute;
    sec.innerText = currentSecond < 10 ? "0" + currentSecond : currentSecond;

    if (currentHour >= 12) {
        am_pm.innerText = "PM";
    } else {
        am_pm.innerText = "AM";
    }
}

getTime();
setInterval(getTime, 1000);
