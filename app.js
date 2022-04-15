const Days = document.getElementById("days");
const Hours = document.getElementById("hours");
const Minutes = document.getElementById("minutes");
const Seconds = document.getElementById("seconds");

const CurrentDate = new Date().getFullYear();
const GraduationYearTime = new Date("June 16 2022 00:00:00");

function UpdateTime(){
    const currentTime = new Date();
    const diff = GraduationYearTime - currentTime;

    const day = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hour = Math.floor(diff / 1000 / 60 / 60) % 24;
    const minute = Math.floor(diff / 1000 / 60 ) % 60;
    const second = Math.floor(diff / 1000) % 60;

    Days.innerHTML = day
    Hours.innerHTML = hour < 10 ? '0' + hour : hour
    Minutes.innerHTML = minute < 10 ? '0' + minute : minute
    Seconds.innerHTML = second < 10 ? '0' + second : second

}

setInterval(UpdateTime, 1000);
