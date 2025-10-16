//--Read more - Read less--//

function test() {
    console.log ("coucou")
    const hiddenText = document.querySelector('.hidden-text');
    const button = document.querySelector('.read-more-button');

    if (hiddenText.style.display === "none" || hiddenText.style.display === "") {
        hiddenText.style.display = "block";
        button.innerHTML = "Read less";
    } else {
        hiddenText.style.display = "none";
        button.innerHTML = "Read more";
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const hiddenText = document.querySelector('.hidden-text');
    if (hiddenText) {
        hiddenText.style.display = "none";
    }
});

//--Confirm Message--//


document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const popupOverlay = document.getElementById('popupOverlay');
    const closePopup = document.getElementById('closePopup');

    function showPopup() {
        popupOverlay.style.display = 'flex';
    }
    function hidePopup() {
        popupOverlay.style.display = 'none';
    }
    submitBtn.addEventListener('click', function(e) {
        e.preventDefault();

        if (form.checkValidity()) {
            showPopup();
            form.reset();
        } else {
            form.reportValidity();
        }
    });
    closePopup.addEventListener('click', hidePopup); 
})
