window.onload = grabCallback;

function grabCallback() {
    // Check URL for callback URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const callbackURL = urlParams.get('callbackUrl');

    const callbackCookie = getCookie('callback');

    if (callbackCookie) {
        // Check for accessToken cookie
        const accessTokenCookie = getCookie('accessToken');
        if (accessTokenCookie) {
            callback();
        } else {
            redirectToDiscord();
        }
    } if (!callbackURL) {
        displayCallbackError();
    } else {
        // Create cookie called "callback" with the URL
        document.cookie = `callback=${callbackURL}`;

        // Remove URL parameters
        window.history.replaceState({}, document.title, window.location.pathname);

        // Reload the page
        window.location.reload();
    }
}

function callback() {
    // Check if there's a callback URL cookie and redirect
    const callbackCookie = getCookie('callback');
    if (callbackCookie) {
        window.location.href = callbackCookie;
    } else {
        // If the cookie doesn't exist, display error
        displayCallbackError();
    }
}

function displayCallbackError() {
    var fullpageDiv = document.getElementById("insert-content");
    fullpageDiv.innerHTML = `
    <div id="error-message" style="color: red;">
    Invalid callback URL.
    </div>
    `;
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

// function displayAccessError() {
//     var fullpageDiv = document.getElementById("insert-content");
//     fullpageDiv.innerHTML = `
//     <div id="error-message" style="color: red;">
//     This resource requires you to login with Discord.
//     </div>
//     `;
//     displayLoginButton();
// }

// function displayErrorInvalidAccess() {
//     var fullpageDiv = document.getElementById("insert-content");
//     fullpageDiv.innerHTML = `
//     <div id="error-message" style="color: red;">
//     This Discord account doesn't have access to this resource.
//     </div>
//     `;
// }

// function displayLoginButton() {
//     var fullpageDiv = document.getElementById("login-container");
//     fullpageDiv.innerHTML = `
//     <button onclick="redirectToDiscord()" class="discord-button">Login</button>
//     `;
// }

// function displayContents() {
//     return true;
// }

// function displayUserInfo(userData) {

//     var fullpageDiv = document.getElementById("login-container");
//     fullpageDiv.innerHTML = `
// <style>
// .user-info {
//     display: flex;
//     align-items: center;
//     cursor: pointer;
//     justify-content: right;
// }

// .profile-picture {
//     width: 30px;
//     height: 30px;
//     border-radius: 50%;
//     margin-right: 10px;
//     justify-content: right;
// }

// .user-dropdown {
//     display: none;
//     position: absolute;
//     top: 60px;
//     right: 20px;
//     background-color: #fff;
//     border: 1px solid #ddd;
//     border-radius: 4px;
//     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//     flex-direction: column;
//     z-index: 1;
// }

// .user-dropdown a {
//     color: #333;
//     padding: 10px;
//     text-decoration: none;
//     display: block;
// }

// .user-dropdown a:hover {
//     background-color: #ddd;
// }

// .user-dropdown.show {
//     display: flex;
// }

// .user-dropdown a.logout {
//     color: #ff5252;
// }
// </style>
// <button class="discord-button" id="discord-button">
// <div class="user-info" onclick="toggleUserDropdown()">
// <img src="https://cdn.scyted.tv/website-assets/wave-development/default-discord.png"
//     alt="Profile Picture" class="profile-picture">
// <span>Loading...</span>
// <div class="user-dropdown" id="userDropdown">
//     <a href="#" class="logout" onclick="logout()">Logout</a>
// </div>
// </div>
// </button>
//     `;

//     const userDropdown = document.getElementById('userDropdown');
//             const profilePicture = document.querySelector('.profile-picture');
//             const username = document.querySelector('.user-info span');

//             // Check if userData.avatar is null
//             if (userData.avatar === null || userData.avatar === "null") {
//                 profilePicture.src = "https://cdn.scyted.tv/website-assets/wave-development/default-discord.png";
//             } else {
//                 profilePicture.src = `https://cdn.discordapp.com/avatars/${userData.id}/${userData.avatar}.png`;
//             }

//             username.textContent = userData.username;
//     return true;
// }

// function toggleUserDropdown() {
//     const userDropdown = document.getElementById('userDropdown');
//     userDropdown.classList.toggle('show');
// }