(function() {
    const secondHand = document.querySelector('.second-hand');
    const minuteHand = document.querySelector('.min-hand');
    const hourHand = document.querySelector('.hour-hand');

    function setDate() {
        const currentTime = new Date();

        const seconds = currentTime.getSeconds();
        const secondsRotation = seconds / 60 * 360 + 90;
        if (secondsRotation === 90) {
            secondHand.classList.add("no-transition");
        } else {
            secondHand.classList.remove("no-transition");
        }
        secondHand.style.transform = `rotate(${secondsRotation}deg)`;

        const minutes = currentTime.getMinutes();
        const minutesRotation = minutes / 60 * 360 + secondsRotation / 60 + 90;
        if (minutesRotation === 90) {
            minuteHand.classList.add("no-transition");
        } else {
            minuteHand.classList.remove("no-transition");
        }
        minuteHand.style.transform = `rotate(${minutesRotation}deg)`;

        const hours = currentTime.getHours();
        const hoursRotation = hours / 12 * 360 + minutesRotation / 30 + 90;
        if (hoursRotation === 90) {
            hourHand.classList.add("no-transition");
        } else {
            hourHand.classList.remove("no-transition");
        }
        hourHand.style.transform = `rotate(${hoursRotation}deg)`;
    }

    setInterval(setDate, 1000);
    setDate();

})();