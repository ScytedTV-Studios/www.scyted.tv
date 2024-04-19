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
    <div class="user-info-box userInfoBox" id="userInfoBox4">
        <p>Loading...</p>
    </div>
    <div class="user-info-box userInfoBox" id="userInfoBox3">
        <p>Loading...</p>
    </div>
    <div class="user-info-box userInfoBox" id="userInfoBox2">
        <p>Loading...</p>
    </div>
    <div class="user-info-box userInfoBox" id="userInfoBox1">
        <p>Loading...</p>
    </div>
    <div class="user-info-box userInfoBox" id="userInfoBox0">
        <p>Loading...</p>
    </div>
    </div>
    </div>
    `;
}

function displayLevlrInfo(userData, containerId, apiUrl, seasonName) {
    // Fetch the JSON file from the provided link
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        // Ensure the data is an array
        if (Array.isArray(data)) {
            // Find the user with the specified userID
            const user = data.find(user => user.userId === userData.id);

            // Display user information or show an error message in the specified userInfoBox
            const userInfoElement = document.getElementById(containerId);
            if (user) {
                userInfoElement.innerHTML = `
<div class="user-info-content">
    <h2>${seasonName}</h2>
    <p>User ID: ${user.userId}</p>
    <p>Username: ${user.username}</p>
    <p>XP: ${user.xp}</p>
    <p>Level: ${user.level}</p>
</div>
`;
            } else {
                userInfoElement.innerHTML = `<h2>${seasonName}</h2><p style="color: red;">There is no stored information on this user.</p>`;
            }
        } else {
            console.error('Invalid JSON format - expected an array.');
            document.getElementById('userInfoBox').innerHTML = `<h2>${seasonName}</h2><p style="color: red;">An error occurred while fetching user data.</p>`;
        }
    })
    .catch(error => {
        console.error('Error fetching user data:', error);
        document.getElementById('userInfoBox').innerHTML = `<h2>${seasonName}</h2><p style="color: red;">An error occurred while fetching user data.</p>`;
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