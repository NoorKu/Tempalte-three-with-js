// The End of the year date to countdown to
// 1000ms = 1s
let countDownDate = new Date("Dec 31, 2021 23:59:59").getTime();
console.log(countDownDate);
let counter = setInterval(() => {
    // Get date now
    let dateNow =  new Date().getTime();
// Find the date difference between now and countdown date
let dateDiff = countDownDate - dateNow;
// Get time units
let days =  Math.floor(dateDiff / (1000 * 60 * 60 * 24));
let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor(dateDiff % (1000 * 60 * 60 ) / (1000 * 60));
let seconds = Math.floor(dateDiff % (1000 * 60 ) / 1000);

document.querySelector(".days").innerHTML = days;
document.querySelector(".hours").innerHTML = hours;
document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}`: minutes;
document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}`: seconds;

if(dateDiff < 0) {
    clearInterval(counter)
}
}, 1000)
