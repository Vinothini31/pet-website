document.addEventListener("DOMContentLoaded", function () {
  // Select form
  const contactForm = document.querySelector("form");

  // Add submit event listener
  contactForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent actual form submission

      // Get form values
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      // Validate form inputs
      if (name === "" || email === "" || message === "") {
          alert("Please fill in all fields.");
          return;
      }

      if (!validateEmail(email)) {
          alert("Please enter a valid email address.");
          return;
      }

      // If validation passes, display success message
      alert("Thank you, " + name + "! Your message has been sent successfully.");
      
      // Optionally, clear the form fields after submission
      contactForm.reset();
  });

  // Function to validate email format
  function validateEmail(email) {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailPattern.test(email);
  }
});