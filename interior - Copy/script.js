const slides = document.querySelector('.slides');
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');
const navBtns = document.querySelectorAll('.nav-btn');
let counter = 0;

prevBtn.addEventListener('click', () => {
  counter--;
  if (counter < 0) {
    counter = slides.children.length - 1;
  }
  updateSlidePosition();
  updateNavButtons();
});

nextBtn.addEventListener('click', () => {
  counter++;
  if (counter >= slides.children.length) {
    counter = 0;
  }
  updateSlidePosition();
  updateNavButtons();
});

navBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    counter = index;
    updateSlidePosition();
    updateNavButtons();
  });
});

function updateSlidePosition() {
  slides.style.transform = `translateX(-${counter * 100}%)`;
}

function updateNavButtons() {
  navBtns.forEach((btn, index) => {
    if (index === counter) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}








document.getElementById('enquiry-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const confirmationMessage = `Thank you, ${name}! Your message has been received.`;
    document.getElementById('confirmation-message').textContent = confirmationMessage;

    // You can add further code here to handle form submission, like sending data to a server.
});



