const currentURL = window.location.href;

function redirectToDiscord() {
    const baseURL = window.location.origin; // Extract base URL
    const AuthUrl = `${baseURL}/oauth/discord/?callbackUrl=${encodeURIComponent(currentURL)}`;
    window.location.href = AuthUrl;
}

document.addEventListener("DOMContentLoaded", function () {
    const storedAccessToken = getCookie("accessToken");

    // Redirect to login if access token is not found
    if (!storedAccessToken) {
        // window.location.href = `https://auth.scyted.tv/www.scyted.tv/discord?redirectUri=${currentURL}`;
        displayAccessError();
    } else {
        // Fetch user data from Discord API
        fetchDiscordUserData(storedAccessToken)
            .then(userData => {
                // Display bot info and user info on the dashboard
                displayContents(userData);
                displayUserInfo(userData);
                displayLevlrInfo(userData, 'userInfoBox5', 'https://api.scyted.tv/v1/levlr/userdata.json', 'Season 5: June 2024');
                displayLevlrInfo(userData, 'userInfoBox4', 'https://api.scyted.tv/v1/levlr/userdata-season4.json', 'Season 4: May 2024');
                displayLevlrInfo(userData, 'userInfoBox3', 'https://api.scyted.tv/v1/levlr/userdata-season3.json', 'Season 3: March-April 2024');
                displayLevlrInfo(userData, 'userInfoBox2', 'https://api.scyted.tv/v1/levlr/userdata-season2.json', 'Season 2: February 2024');
                displayLevlrInfo(userData, 'userInfoBox1', 'https://api.scyted.tv/v1/levlr/userdata-season1.json', 'Season 1: January 2024');
                displayLevlrInfo(userData, 'userInfoBox0', 'https://api.scyted.tv/v1/levlr/userdata-season0.json', 'Season 0: 2023');

                const loggedInUserId = userData.id;

                // Fetch the list of user IDs from the JSON file
                fetch('https://api.scyted.tv/v1/wave-development/dashboard/access/scytedtv-user-access.json')
                // fetch('https://api.scyted.tv/v1/website/dashboard/access/dashboard-access.json')
                    .then(response => response.json())
                    .then(userIds => {
                        // Check if the logged-in user's ID is in the list
                        if (!userIds.includes(loggedInUserId)) {
                            // Clear cookies
                            // document.cookie = "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                            // Redirect to the specified page if the user's ID is not in the 
                            // window.location.href = `https://auth.scyted.tv/www.scyted.tv/discord?error=invalidAccess`;
                            // displayErrorInvalidAccess();
                            return true;
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
                // document.cookie = "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                // Handle error (e.g., redirect to login page)
                // window.location.href = `https://auth.scyted.tv/www.scyted.tv/discord?error=fetchingUserData`;
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

function logout() {
    // Clear cookies
    document.cookie = "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    // Redirect to login page
    window.location.href = `${currentURL}`;
}

function backButton() {
    window.location.href = `../`;
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