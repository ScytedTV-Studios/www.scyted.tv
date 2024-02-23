document.addEventListener("DOMContentLoaded", function () {
    const storedAccessToken = getCookie("accessToken");

    // Redirect to login if access token is not found
    if (!storedAccessToken) {
        window.location.href = "./login?error=invalidLogin";
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
                            window.location.href = "./login?error=invalidAccess";
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
                window.location.href = "./login?error=fetchingUserData";
            });
    }
});

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
    window.location.href = "./login";
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