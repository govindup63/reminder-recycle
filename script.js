document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('reminderForm');
    const successMessage = document.getElementById('success-message');
    const errorMessage = document.getElementById('error-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(this);
        const email = formData.get('email');
        const frequency = formData.get('frequency');

        // Reset previous messages
        if (successMessage) successMessage.style.display = 'none';
        if (errorMessage) errorMessage.style.display = 'none';

        // Send data to server-side endpoint
        fetch('http://localhost:3000/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, frequency })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to send email reminder');
            }
            return response.json();
        })
        .then(data => {
            console.log('Response from server:', data);
            if (successMessage) successMessage.style.display = 'block'; // Show success message
            console.log('Email reminder scheduled successfully');
            // Optionally show a success message to the user
        })
        .catch(error => {
            console.error('Error scheduling email reminder:', error);
            if (errorMessage) errorMessage.style.display = 'block'; // Show error message
            // Optionally show an error message to the user
        });
    });
});
