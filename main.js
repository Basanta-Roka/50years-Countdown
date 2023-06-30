let countdownEnd = new Date("June 30, 2050 03:56:20 PM").getTime();
let x = setInterval(function () {
    let now = new Date().getTime();
    let samaya = countdownEnd - now;

    let days = Math.floor(samaya / 86400000);
    let hours = Math.floor((samaya % 86400000) / 3600000);
    let minutes = Math.floor((samaya % 3600000) / 60000);
    let seconds = Math.floor((samaya % 60000) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (samaya < 0) {
        clearInterval(x);

        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
    }

}, 1000);
