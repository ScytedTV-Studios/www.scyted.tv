function displayAccessError() {
    var fullpageDiv = document.getElementById("insert-content");
    fullpageDiv.innerHTML = `
    <div id="error-message" style="color: red;">
    This resource requires you to login with Discord.
    </div>
    `;
    displayLoginButton();
}

function displayErrorInvalidAccess() {
    var fullpageDiv = document.getElementById("insert-content");
    fullpageDiv.innerHTML = `
    <div id="error-message" style="color: red;">
    This Discord account doesn't have access to this resource.
    </div>
    `;
}

function displayLoginButton() {
    var fullpageDiv = document.getElementById("login-container");
    fullpageDiv.innerHTML = `
    <button onclick="redirectToDiscord()" class="discord-button">Login</button>
    `;
}

function displayContents(userData) {
    // Replace content of the div with the provided code
    var fullpageDiv = document.getElementById("insert-content");
    fullpageDiv.innerHTML = `
    <style>
    .user-info-box {
        flex: 1;
        padding: 20px;
        background-color: #fff;
        border-radius: 8px;
        margin-top: 10px;
        text-align: left;
    }
    </style>
    <div class="container">
    <div class="user-info-container">
        <div class="user-info-box" id="userInfoBox">
            <p>Loading...</p>
        </div>
    </div>
    </div>
    `;

    // Fetch the JSON file from the new provided link
    fetch('https://api.scyted.tv/heart-collectors/userinfo.json')
    .then(response => response.json())
    .then(data => {
        // Find the user with the specified userID
        const user = data[userData.id];

        // Display heart collector information or show an error message
        const heartCollectorInfoElement = document.getElementById('userInfoBox');
        if (user) {
            const hearts = user.hearts;
            const heartEntries = Object.entries(hearts);

            heartCollectorInfoElement.innerHTML = `
            <div class="user-info-content">
                <p>User ID: ${userData.id}</p>
                <ul>
                    ${heartEntries.map(entry => `<li>${entry[0]}: ${entry[1]}</li>`).join('')}
                </ul>
            </div>
            `;
        } else {
            heartCollectorInfoElement.innerHTML = '<p style="color: red;">There is no stored information on this user.</p>';
        }
    })
    .catch(error => {
        console.error('Error fetching heart collector data:', error);
        document.getElementById('userInfoBox').innerHTML = '<p style="color: red;">An error occurred while fetching user data.</p>';
    });
}

function displayUserInfo(userData) {

    var fullpageDiv = document.getElementById("login-container");
    fullpageDiv.innerHTML = `
<style>
.user-info {
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: right;
}

.profile-picture {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 10px;
    justify-content: right;
}

.user-dropdown {
    display: none;
    position: absolute;
    top: 60px;
    right: 20px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    flex-direction: column;
    z-index: 1;
}

.user-dropdown a {
    color: #333;
    padding: 10px;
    text-decoration: none;
    display: block;
}

.user-dropdown a:hover {
    background-color: #ddd;
}

.user-dropdown.show {
    display: flex;
}

.user-dropdown a.logout {
    color: #ff5252;
}
</style>
<button class="discord-button" id="discord-button">
<div class="user-info" onclick="toggleUserDropdown()">
<img src="https://cdn.scyted.tv/website-assets/wave-development/default-discord.png"
    alt="Profile Picture" class="profile-picture">
<span>Loading...</span>
<div class="user-dropdown" id="userDropdown">
    <a href="#" class="logout" onclick="logout()">Logout</a>
</div>
</div>
</button>
    `;

    const userDropdown = document.getElementById('userDropdown');
            const profilePicture = document.querySelector('.profile-picture');
            const username = document.querySelector('.user-info span');

            // Check if userData.avatar is null
            if (userData.avatar === null || userData.avatar === "null") {
                profilePicture.src = "https://cdn.scyted.tv/website-assets/wave-development/default-discord.png";
            } else {
                profilePicture.src = `https://cdn.discordapp.com/avatars/${userData.id}/${userData.avatar}.png`;
            }

            username.textContent = userData.username;
    return true;
}

function toggleUserDropdown() {
    const userDropdown = document.getElementById('userDropdown');
    userDropdown.classList.toggle('show');
}