document.addEventListener("DOMContentLoaded", () => {

    // ---------------- Timer ----------------
    const timer = document.querySelector(".timer");
    if (timer) {
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
                setTimeout(() => { unit.textContent = newValue; }, 150);
                setTimeout(() => { unit.parentElement.classList.remove("flip"); }, 300);
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
            setTimeout(() => { timer.classList.remove("timer-flash"); }, 180);
        }

        updateCountdown();
        setInterval(updateCountdown, 1000);
    }

    // ---------------- Sections normales au scroll ----------------
    const sections = document.querySelectorAll(".section:not(.featured)");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show");
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(section => observer.observe(section));
    // ---- Ajouter au calendrier ----
    // ---- Ajouter au calendrier pour toutes les sections ----
    const calendarBtns = document.querySelectorAll(".calendar-btn");

    calendarBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            const dateStr = btn.dataset.date; // récupère la date du bouton
            const eventDate = new Date(dateStr);
            const eventTitle = btn.closest(".section").querySelector("h2").textContent.trim();

            // Format Google Calendar : YYYYMMDDTHHmmssZ
            const startDate = eventDate.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
            const endDate = new Date(eventDate.getTime() + 2 * 60 * 60 * 1000) // +2h
                .toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";

            const details = encodeURIComponent("Rejoignez-nous pour " + eventTitle + " !");
            const location = encodeURIComponent("Zénith Nantes Métropole");

            const gcalUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle)}&dates=${startDate}/${endDate}&details=${details}&location=${location}`;

            window.open(gcalUrl, "_blank");
        });
    });


});


