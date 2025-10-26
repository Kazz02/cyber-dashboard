import requests
from flask import Flask, jsonify, request
from flask_cors import CORS
from config import VirusTotal_key
# Creation of Flask app + CORS to allow frontend to talk to backend
app = Flask(__name__)
CORS(app)

# Test route
@app.route('/')
def hello():
    return "First check!"

# API endpoint
@app.route('/api/check-domain', methods=['GET', 'POST'])
def check_domain():
    if request.method == 'POST':
        data = request.get_json()
        domain_to_check = data.get('domain')
    else:
        domain_to_check = request.args.get('domain')
        
    if not domain_to_check:
        return jsonify({'error': 'No domain provided'}), 400
    
    # Call VirusTotal API
    url = f"https://www.virustotal.com/api/v3/domains/{domain_to_check}"
    headers = {
        "x-apikey": VirusTotal_key
    }

    # VirusTotal API request and response handling
    try:
        response = requests.get(url, headers = headers)
        response.raise_for_status() # Raises an error if bad response
        return jsonify(response.json())
    except requests.exceptions.HTTPError as http_err:
        return jsonify({'error': f'HTTP error occurred: {http_err}'}), response.status_code
    except requests.exceptions.RequestException as req_err:
        return jsonify({'error': f'Request error occurred: {req_err}'}), 500
    
if __name__ == '__main__':
    app.run(debug=True, port=5000)