document.addEventListener("DOMContentLoaded", function () {
    // Check if an access token is already stored
    const storedAccessToken = getCookie("accessToken");
    if (storedAccessToken) {
        // Redirect to the dashboard
        window.location.href = "http://www.scyted.tv/dashboard";
    }
});

function redirectToDiscord() {
    const clientId = '1210605376836206662'; // Replace with your Discord application's client ID
    const redirectUri = 'http://www.scyted.tv/dashboard/login'; // Replace with your Discord application's redirect URI
    const scope = 'identify'; // Adjust scopes as needed

    const discordAuthUrl = `https://discord.com/api/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&scope=${scope}`;

    window.location.href = discordAuthUrl;
}

// Check for access token in the URL after redirection
const urlParams = new URLSearchParams(window.location.hash.substring(1));
const accessToken = urlParams.get("access_token");

if (accessToken) {
    try {
        // Check if the access token is valid (add your validation logic here)
        if (isValidAccessToken(accessToken)) {
            // Store the access token in a cookie
            setCookie("accessToken", accessToken, 30); // Set cookie to expire in 30 days

            // Redirect to the dashboard
            window.location.href = "http://www.scyted.tv/dashboard";
        } else {
            // Clear the accessToken cookie
            clearCookie("accessToken");

            // Display an error message
            displayErrorMessage("Invalid access token");
        }
    } catch (error) {
        // Handle other errors by displaying an error message
        displayErrorMessage("An error occurred while processing the access token: " + error.message);
    }
}

function isValidAccessToken(token) {
    // Add your validation logic here
    // Return true if the token is valid, otherwise return false
    return true; // Placeholder, replace with actual validation
}

function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function clearCookie(name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

function displayErrorMessage(message) {
    const errorMessageDiv = document.getElementById("errorMessage");
    errorMessageDiv.textContent = message;
}

function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].split("=");
        if (cookie[0] === name) {
            return cookie[1];
        }
    }
    return null;
}

window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'G-LF3ZTHGQHE');

      function checkForError() {
        var urlParams = new URLSearchParams(window.location.search);
        if (urlParams.has('error') && urlParams.get('error') === 'invalidAccess') {
            // Create line breaks
            var lineBreak1 = document.createElement('br');
            // Create error message
            var errorMessage = document.createElement('p');
            errorMessage.textContent = "Error: Your account does not have access to the dashboard. If this seems incorrect, contact support.";
            errorMessage.style.color = "red";
            // Append line breaks and error message below the button
            var errorMessageContainer = document.getElementById('error-message');
            errorMessageContainer.appendChild(lineBreak1);
            errorMessageContainer.appendChild(errorMessage);
        }

        var urlParams = new URLSearchParams(window.location.search);
        if (urlParams.has('error') && urlParams.get('error') === 'invalidLogin') {
            // Create line breaks
            var lineBreak1 = document.createElement('br');
            // Create error message
            var errorMessage = document.createElement('p');
            errorMessage.textContent = "Error: You aren't logged in, please login and try again.";
            errorMessage.style.color = "red";
            // Append line breaks and error message below the button
            var errorMessageContainer = document.getElementById('error-message');
            errorMessageContainer.appendChild(lineBreak1);
            errorMessageContainer.appendChild(errorMessage);
        }

        var urlParams = new URLSearchParams(window.location.search);
        if (urlParams.has('error') && urlParams.get('error') === 'fetchingUserData') {
            // Create line breaks
            var lineBreak1 = document.createElement('br');
            // Create error message
            var errorMessage = document.createElement('p');
            errorMessage.textContent = "Error: We were unable to fetch your user data. Contact support for further help.";
            errorMessage.style.color = "red";
            // Append line breaks and error message below the button
            var errorMessageContainer = document.getElementById('error-message');
            errorMessageContainer.appendChild(lineBreak1);
            errorMessageContainer.appendChild(errorMessage);
        }
    }

// Call the function when the page loads
window.onload = function() {
    checkForError();
};