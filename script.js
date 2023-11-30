console.log("Hello World!");

var stopwatch = 0;
var timer = 0;

var hour = 0;
var minute = 0;
var second = 0;

function startStopwatch() {
    var timerElement = document.getElementById("timer");

    var h = hour;
    var m = minute;
    var s = second;

    if (hour < 10) h = "0" + hour;
    if (minute < 10) m = "0" + minute;
    if (second < 10) s = "0" + second;

    var timerStr = h + ":" + m + ":" + s;
    timerElement.innerHTML = timerStr;

    second += 1;

    if (second == 60) {
        minute += 1;
        second = 0;
    }
    if (minute == 60) {
        hour += 1;
        minute = 0;
    }
}

function startTimer() {
    var timerElement = document.getElementById("timer");

    if (hour == 0 && minute == 0 && second == 0) {
        alert("Please set a valid time for the timer.");
        return;
    }

    var h = hour;
    var m = minute;
    var s = second;

    if (hour < 10) h = "0" + hour;
    if (minute < 10) m = "0" + minute;
    if (second < 10) s = "0" + second;

    var timerStr = h + ":" + m + ":" + s;
    timerElement.innerHTML = timerStr;

    if (hour == 0 && minute == 0 && second == 0) {
        alert("Timer completed!");
        // You might want to perform additional actions when the timer completes
    }

    second -= 1;

    if (second < 0) {
        minute -= 1;
        second = 59;
    }
    if (minute < 0) {
        hour -= 1;
        minute = 59;
    }
}

function stopwatchSelect() {
    stopwatch = 1;
    timer = 0;
    var sw = document.getElementById("stopwatchOption");
    var ti = document.getElementById("timerOption");
    sw.style.backgroundColor = "black";
    ti.style.backgroundColor = "rgb(68, 68, 68)";
    var input = document.getElementById('input-div');
    input.style.display = 'none';
}

function timerSelect() {
    stopwatch = 0;
    timer = 1;
    var sw = document.getElementById("stopwatchOption");
    var ti = document.getElementById("timerOption");
    sw.style.backgroundColor = "rgb(68, 68, 68)";
    ti.style.backgroundColor = "black";
    var input = document.getElementById('input-div');
    input.style.display = 'block';
}

function start() {
    if (stopwatch == 0 && timer == 0) {
        alert("Please Select Either Stopwatch or Timer");
        return;
    }

    if (stopwatch != 0) {
        setInterval(startStopwatch, 1000);
        second = 1;
        minute = 0;
        hour = 0;
    }

    if (timer != 0) {
        setInterval(startTimer, 1000);
        second = document.getElementById("second").value;
        minute = document.getElementById("minute").value;
        hour = document.getElementById("hour").value;
    }
}
