// Front-end UI logic for the Cyber Dashboard.
// Attaches a click handler to the Check button and calls the backend API
document.addEventListener('DOMContentLoaded', () => {

    // Get references to UI elements
    const checkButton = document.getElementById('check-button');
    const domainInput = document.getElementById('domain-input');
    const resultsArea = document.getElementById('results-area');

    // When the 'Check' button is clicked
    checkButton.addEventListener('click', () => {
        const domain = domainInput.value.trim();

        // Basic validation
        if (!domain) {
            alert('Please enter a domain name.');
            return;     
        }

        resultsArea.textContent = 'Checking...';

        // Send the domain to the backend API
        fetch('http://127.0.0.1:5000/api/check-domain', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                'domain': domain })
            })
        .then(response => {
                // If the response status isn't OK, throw an error to be handled below
                if (!response.ok) {
                    throw new Error('HTTP error! Status: ${response.status}');
                }
                return response.json();
            })
        .then(data => {
                // Display nicely formatted JSON results
                resultsArea.textContent = JSON.stringify(data, null, 2);
            })
        .catch(error => {
                // Show any network or parsing errors to the user
                resultsArea.textContent = 'Error: ' + error.message;
                console.error('Error fetching data:', error);
            });
    });

});