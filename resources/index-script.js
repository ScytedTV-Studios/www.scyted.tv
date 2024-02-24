const currentURL = window.location.href;

document.addEventListener("DOMContentLoaded", function () {
    const storedAccessToken = getCookie("accessToken");

    // Redirect to login if access token is not found
    if (!storedAccessToken) {
        window.location.href = `https://auth.scyted.tv/www.scyted.tv/dashboard-temp?redirectUri=${currentURL}`;
    } else {
        // Fetch user data from Discord API
        fetchDiscordUserData(storedAccessToken)
            .then(userData => {
                // Display bot info and user info on the dashboard
                displayBotInfo();
                displayUserInfo(userData);

                const loggedInUserId = userData.id;

                // Fetch the list of user IDs from the JSON file
                fetch('https://api.scyted.tv/wave-development/dashboard/access/scytedtv-user-access.json')
                // fetch('https://api.scyted.tv/website/dashboard/access/dashboard-access.json')
                    .then(response => response.json())
                    .then(userIds => {
                        // Check if the logged-in user's ID is in the list
                        if (!userIds.includes(loggedInUserId)) {
                            // Clear cookies
                            document.cookie = "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                            // Redirect to the specified page if the user's ID is not in the 
                            window.location.href = `https://auth.scyted.tv/www.scyted.tv/dashboard-temp?error=invalidAccess`;
                        }
                    })
                    .catch(error => {
                        console.error("Error fetching user IDs:", error);
                        // Handle error
                    });
            })
            .catch(error => {
                console.error("Error fetching user data:", error);
                // Clear cookies
                document.cookie = "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                // Handle error (e.g., redirect to login page)
                window.location.href = `https://auth.scyted.tv/www.scyted.tv/dashboard-temp?error=fetchingUserData`;
            });
    }
});

const urlParams = new URLSearchParams(window.location.hash.substring(1));
const accessToken = urlParams.get("access_token");

if (accessToken) {
    try {
        // Check if the access token is valid (add your validation logic here)
        if (isValidAccessToken(accessToken)) {
            // Store the access token in a cookie
            setCookie("accessToken", accessToken, 30); // Set cookie to expire in 30 days
            // Redirect to the dashboard
            window.location.href = "./";
        } else {
            // Clear the accessToken cookie
            clearCookie("accessToken");
        }
    } catch (error) {
        console.error("Error setting accessToken:", error);
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

function fetchDiscordUserData(accessToken) {
    const apiUrl = 'https://discord.com/api/users/@me';

    return fetch(apiUrl, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Discord API Request Failed! Status: ${response.status}`);
            }
            return response.json();
        });
}

function displayUserInfo(userData) {
    // const userDropdown = document.getElementById('userDropdown');
    // const profilePicture = document.querySelector('.profile-picture');
    // const username = document.querySelector('.user-info span');

    // // Check if userData.avatar is null
    // if (userData.avatar === null || userData.avatar === "null") {
    //     profilePicture.src = "https://cdn.scyted.tv/website-assets/wave-development/default-discord.png";
    // } else {
    //     profilePicture.src = `https://cdn.discordapp.com/avatars/${userData.id}/${userData.avatar}.png`;
    // }

    // username.textContent = userData.username;

    return true;
}

function displayBotInfo() {
    // Implement your bot info display logic here
}

function logout() {
    // Clear cookies
    document.cookie = "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    // Redirect to login page
    window.location.href = `https://auth.scyted.tv/www.scyted.tv/dashboard-temp?redirectUri=${currentURL}`;
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