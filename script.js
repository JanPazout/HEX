let countdownInterval;

function showTimerSettings() {
    document.getElementById('timerSettings').style.display = 'flex';
}

function startTimer() {
    const timerInput = document.getElementById('timerInput');
    const seconds = parseInt(timerInput.value, 10);

    if (isNaN(seconds) || seconds <= 0) {
        alert('Zadejte platný čas v sekundách.');
        return;
    }

    countdown(seconds);
    document.getElementById('timerSettings').style.display = 'none';
}

function cancelTimer() {
    clearInterval(countdownInterval);
    updateHexClock(); // Vrátíme normální Hex Clock
    document.getElementById('timerSettings').style.display = 'none';
}

function countdown(seconds) {
    let remainingSeconds = seconds;

    countdownInterval = setInterval(() => {
        const hexColor = secondsToHex(remainingSeconds);
        document.getElementById('hexClock').textContent = hexColor;
        document.body.style.backgroundColor = hexColor;

        if (remainingSeconds <= 0) {
            clearInterval(countdownInterval);
            document.getElementById('timerSettings').style.display = 'flex';
        }

        remainingSeconds--;
    }, 1000);
}

function updateHexClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    const hexTime = `#${hours}${minutes}${seconds}`;
    document.getElementById('hexClock').textContent = hexTime;
    document.body.style.backgroundColor = hexTime;
}

function secondsToHex(seconds) {
    const hours = Math.floor(seconds / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');

    return `#${hours}${minutes}${secs}`;
}

// Initial update
updateHexClock();

