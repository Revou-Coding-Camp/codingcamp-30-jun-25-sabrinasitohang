let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
  slides.forEach((slide) => slide.classList.remove("active"));

  slideIndex = (slideIndex + 1) > slides.length ? 1 : slideIndex + 1;
  slides[slideIndex - 1].classList.add("active");

  setTimeout(showSlides, 3000);
}

document.addEventListener("DOMContentLoaded", () => {
  if (slides.length > 0) showSlides();

  const form = document.getElementById("contactForm");
  const formResult = document.getElementById("formResult");
  const messageDisplay = document.getElementById("messageDisplay");

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name")?.value.trim();
    const email = document.getElementById("email")?.value.trim();
    const phone = document.getElementById("phone")?.value.trim();
    const message = document.getElementById("message")?.value.trim();

    // Email validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !phone || !message) {
      formResult.innerHTML = `<p style="color:red;">Please fill out all fields.</p>`;
      messageDisplay.innerHTML = "";
      return;
    }

    if (!emailRegex.test(email)) {
      formResult.innerHTML = `<p style="color:red;">Invalid email format.</p>`;
      messageDisplay.innerHTML = "";
      return;
    }

    formResult.innerHTML = `<p style="color:green;">Thank you, <strong>${name}</strong>! Your message has been sent successfully.</p>`;

    messageDisplay.innerHTML = `
      <h3>Your Message:</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong> ${message}</p>
    `;

    form.reset();
  });
});
