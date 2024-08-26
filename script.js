// Example of form submission handling
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;

        console.log('Form Submitted:', { name, email, message });

        // Here you would typically handle form submission with an API call
        // e.g., using fetch to send the form data to your backend

        // Clear the form fields
        form.reset();
    });
});
