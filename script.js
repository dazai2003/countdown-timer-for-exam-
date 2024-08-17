const examDate = new Date('2024-11-24T00:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = examDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;

    updateCircle('#days-circle', days, 365);
    updateCircle('#hours-circle', hours, 24);
    updateCircle('#minutes-circle', minutes, 60);
    updateCircle('#seconds-circle', seconds, 60);

    if (timeLeft < 0) {
        clearInterval(countdownInterval);
        document.getElementById('countdown').innerHTML = "Exam Time!";
    }
}

function updateCircle(id, value, max) {
    const circle = document.querySelector(id);
    const offset = 283 - (283 * value) / max;
    circle.style.strokeDashoffset = offset;
}

const countdownInterval = setInterval(updateCountdown, 1000);
