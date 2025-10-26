document.addEventListener('DOMContentLoaded', () => {

    const checkButton = document.getElementById('check-button');
    const domainInput = document.getElementById('domain-input');
    const resultsArea = document.getElementById('results-area');

    checkButton.addEventListener('click', () => {
        const domain = domainInput.value.trim();

        if (!domain) {
            alert('Please enter a domain name.');
            return;     
        }

        resultsArea.textContent = 'Checking...';

        fetch('http://127.0.0.1:5000/api/check-domain', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                'domain': domain })
            })
        .then(response => {
                if (!response.ok) {
                    throw new Error('HTTP error! Status: ${response.status}');
                }
                return response.json();
            })
        .then(data => {
                resultsArea.textContent = JSON.stringify(data, null, 2);
            })
        .catch(error => {
                resultsArea.textContent = 'Error: ' + error.message;
                console.error('Error fetching data:', error);
            });
    });

});