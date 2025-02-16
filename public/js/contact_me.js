const form = document.getElementById("contactForm");
const result = document.getElementById("result");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    
    // Collect form data
    const formData = new FormData(form);
    
    // Ensure the form is valid before submission
    let valid = true;

    // Check name field
    const name = document.getElementById("name").value.trim();
    if (!name) {
        document.querySelector("#name + .text-danger").textContent = "Please enter your name.";
        valid = false;
    } else {
        document.querySelector("#name + .text-danger").textContent = "";
    }

    // Check email field
    const email = document.getElementById("email").value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        document.querySelector("#email + .text-danger").textContent = "Please enter a valid email address.";
        valid = false;
    } else {
        document.querySelector("#email + .text-danger").textContent = "";
    }

    // Check phone field
    const phone = document.getElementById("phone").value.trim();
    const phoneRegex = /^[+]?[0-9\s]*$/;
    if (!phone || !phoneRegex.test(phone)) {
        document.querySelector("#phone + .text-danger").textContent = "Please enter a valid phone number.";
        valid = false;
    } else {
        document.querySelector("#phone + .text-danger").textContent = "";
    }

    if (!valid) {
        return;
    }

    // Send form data via Web3Forms API
    result.textContent = "Please wait...";
    fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            result.textContent = "Your message has been sent successfully!";
            result.classList.add("text-success");
            form.reset();
        } else {
            result.textContent = data.message;
            result.classList.add("text-danger");
        }
    })
    .catch(error => {
        result.textContent = "Something went wrong. Please try again later.";
        result.classList.add("text-danger");
    });
});
