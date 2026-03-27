const joinForm = document.getElementById("join-form");
const formMessage = document.getElementById("form-message");

if (joinForm && formMessage) {
  joinForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const emailInput = document.getElementById("email");
    const roleInput = document.getElementById("role");

    if (!emailInput || !emailInput.value.trim()) {
      formMessage.textContent = "Please enter an email address.";
      return;
    }

    if (!roleInput || !roleInput.value) {
      formMessage.textContent = "Please choose whether you are a therapist or client.";
      return;
    }

    const roleLabel = roleInput.value === "therapist" ? "therapist" : "client";
    formMessage.textContent = `Thanks! You are on the early access list as a ${roleLabel}.`;
    joinForm.reset();
  });
}

const contactForm = document.getElementById("contact-form");
const contactMessage = document.getElementById("contact-message");

if (contactForm && contactMessage) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    contactMessage.textContent = "Message sent. We’ll reach out within one business day.";
    contactForm.reset();
  });
}
