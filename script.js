document.getElementById('reminderForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const frequency = document.getElementById('frequency').value;
    alert(`Reminder set for ${email} with ${frequency} frequency.`);
    // Here you would typically send the form data to a server
});
