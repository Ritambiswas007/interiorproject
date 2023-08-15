const slider = document.querySelector('.slider');
let count = 0;

function nextSlide() {
    count++;
    if (count > slider.children.length - 1) {
        count = 0;
    }
    updateSlider();
}

function prevSlide() {
    count--;
    if (count < 0) {
        count = slider.children.length - 1;
    }
    updateSlider();
}

function updateSlider() {
    slider.style.transform = `translateX(-${count * 100}%)`;
}

setInterval(nextSlide, 5000); 








document.getElementById('enquiry-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const confirmationMessage = `Thank you, ${name}! Your message has been received.`;
    document.getElementById('confirmation-message').textContent = confirmationMessage;

    // You can add further code here to handle form submission, like sending data to a server.
});



