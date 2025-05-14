// script.js

document.getElementById("cta-button").addEventListener("click", function () {
    alert("Thanks for clicking! This is a sample interaction.");
  });
  
  document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    if (name && email && message) {
      alert("Form submitted successfully!");
      this.reset();
    } else {
      alert("Please fill in all fields.");
    }
  });
  