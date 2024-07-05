document.addEventListener("DOMContentLoaded", function () {

    var hours = document.getElementById("hours").innerText;
    console.log(hours); // This should log the element with ID "hours"]
    hours = parseInt(hours);
    hoursPrompt = prompt("Enter Hours for Countdown");
    // console.log(typeof hours);
    if (hoursPrompt == 0) {
        hours = 0;
    }


    var minutes = document.getElementById("minutes").innerText;
    //console.log(minutes);
    minutes = prompt("Enter Minutes for Countdown");
    minutes = parseInt(minutes);

    var seconds = document.getElementById("seconds").innerText;
    console.log(seconds);
    seconds = parseInt(seconds);
    seconds = 60;
    minutes--;
    console.log("HoursP" + hours);

    function changeCounter() {
        if (seconds == 0) {
            minutes--;
            if (minutes < 0) {
                minutes = 0;
            }
            seconds = 60;
            if (minutes == 0) {
                minutes = 60;
                hours--;
                if (hours < 0) {
                    hours = 0;
                    minutes = 0;
                    seconds = 0;
                }
                if (hours == 0 && minutes == 0 && seconds == 0) {
                    clearInterval(intervalID);
                }
            }
        }
        else {
            seconds--;
        }
        console.log("Hours" + hours);
        document.getElementById("hours").innerText = hours;
        document.getElementById("seconds").innerText = seconds;
        document.getElementById("minutes").innerText = minutes;
    }
    var intervalID = setInterval(changeCounter, 1000);



});


// console.log("Hello");
// var hours = document.getElementById("hours");
// console.log(hours);