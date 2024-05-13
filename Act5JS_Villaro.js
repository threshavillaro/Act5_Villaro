document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const formData = new FormData(form);
        const name = formData.get("name");
        const email = formData.get("email");
        const message = formData.get("message");

        // Use this data to send an email or store it in a database
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);

        // Clear the form after submission
        form.reset();
    });
});
