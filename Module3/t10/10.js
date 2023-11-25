    document.getElementById('source').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevents the form from submitting and refreshing the page

        // Get input values
        const firstName = document.querySelector('input[name="firstname"]').value;
        const lastName = document.querySelector('input[name="lastname"]').value;

        // Display submitted information
        const targetElement = document.getElementById('target');
        targetElement.textContent = 'Your name is ' + firstName + ' ' + lastName;
    });






