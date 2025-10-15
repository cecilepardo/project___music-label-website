document.addEventListener("DOMContentLoaded", () => {
    const timer = document.querySelector(".timer");
    const targetDate = new Date(timer.dataset.date).getTime();

    const units = {
        days: document.getElementById("days").querySelector("span"),
        hours: document.getElementById("hours").querySelector("span"),
        minutes: document.getElementById("minutes").querySelector("span"),
        seconds: document.getElementById("seconds").querySelector("span"),
    };

    function updateFlip(unit, newValue) {
        if (unit.textContent !== newValue) {
            unit.parentElement.classList.add("flip");
            setTimeout(() => {
                unit.textContent = newValue;
            }, 150);
            setTimeout(() => {
                unit.parentElement.classList.remove("flip");
            }, 300);
        }
    }

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance <= 0) {
            timer.innerHTML = "L'événement a commencé 🎉";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        updateFlip(units.days, days);
        updateFlip(units.hours, hours);
        updateFlip(units.minutes, minutes);
        updateFlip(units.seconds, seconds);

        timer.classList.add("timer-flash");
        setTimeout(() => {
            timer.classList.remove("timer-flash");
        }, 180);
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
});
