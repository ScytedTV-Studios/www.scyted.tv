// IF YOU'RE IN THE CODE TRYING TO FIND A WAY TO BYPASS THE DISCORD ACCOUNT LIMITATIONS, YOU WILL MOST LIKELY FIND A WAY THROUGH THE SYSTEM VERY EASILY IF YOU KNOW WHAT YOU'RE DOING. THIS ISN'T MEANT TO BE THE MOST SECURE THING EVER. SO IF YOU FIND A WAY TO GET THROUGH IT, DON'T PRETEND YOU'RE ALMIGHTY, I LITERALLY SETUP IT UP LAZILY BECAUSE IT DOESN'T REALISTICALLY MATTER IF YOU FORCE ACCESS TO SCYTEDTV ASSETS.

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

function displayContents() {
    // Replace content of the div with the provided code
    var fullpageDiv = document.getElementById("insert-content");
    fullpageDiv.innerHTML = `
    <style>
    .table-container {
        margin-top: 20px;
        width: 100%;
        overflow-x: auto;
        text-align: center;
    }

    table {
        border-collapse: collapse;
        table-layout: fixed;
        width: 100%;
        text-align: center;
    }

    th,
    td {
        padding: 12px;
        color: black;
        border-bottom: 1px solid #fff;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: center;
        vertical-align: middle;
    }

    th {
        background-color: #FFF;
        text-transform: uppercase;
        text-align: center;
    }

    td {
        position: relative;
        padding-left: 20px;
        text-align: center;
    }

    td .preview-container {
        position: relative;
    }

    td .preview {
        width: 50px;
        height: 50px;
        cursor: pointer;
        transition: transform 0.3s ease;
        border-radius: 50%;
    }

    td .preview:hover {
        transform: scale(1.2);
    }

    td .lightbox {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: none;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.8);
        z-index: 999;
    }

    td .lightbox video,
    td .lightbox img {
        max-width: 90%;
        max-height: 90%;
        border-radius: 10px;
    }

    td .close {
        position: absolute;
        top: 10px;
        right: 10px;
        font-size: 24px;
        color: white;
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0.5);
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
    }

    td button {
        background-color: #fff;
        color: #000000;
        padding: 8px 16px;
        border: none;
        border-radius: 30px;
        text-decoration: none;
        transition: background-color 0.3s ease;
        font-weight: 700;
        letter-spacing: 1px;
        text-transform: uppercase;
        font-size: 12px;
    }

    td button:hover {
        background-color: #f0f0f0;
        cursor: pointer;
    }

    .user-info-container {
        flex: 1;
        padding: 20px;
        background-color: #fff;
        border-radius: 8px;
        margin-top: 10px;
        text-align: center;
        justify-content: center;
    }
    </style>

        <div class="user-info-container">
            <div class="bot-details">
                <div class="bot-name"></div>
                <div class="button-container">
                    <button class="api-button"
                        onclick="changeApiUrl('https://api.scyted.tv/assets-library/libraries/logos.json')">Logos</button>
                    <button class="api-button"
                        onclick="changeApiUrl('https://api.scyted.tv/assets-library/libraries/intros-outros.json')">Intros
                        & Outros</button>
                </div>
            </div>
            <div class="user-info-box" id="userInfoBox">
            </div>
        </div>
    `;
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