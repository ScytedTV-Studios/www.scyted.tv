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
    <div class="user-info-box" id="userInfoBox">
            <p>With the goal of optimizing your Wynncraft experience, we have
                created "JuJu's Better Wynncraft" to bring you Modpacks for both Functionality and Quality of Life
                changes.</p>
        </div>


        <div class="user-info-box" id="userInfoBox">
            <h2>DOWNLOAD LATEST</h2>

            <form name="downloadForm" id="downloadForm" action="" onsubmit="return validateForm()">
                <label for="pack">Pack:</label>
                <select name="pack" id="pack" required>
                    <option value="" selected="selected">Select pack</option>
                </select>
                <br><br>

                <label for="shader">Shader:</label>
                <select name="shader" id="shader" disabled>
                    <option value="" selected="selected">No Shaders Available</option>
                </select>
                <br><br>

                <label for="modLoader">Mod Loader:</label>
                <select name="modLoader" id="modLoader" required>
                    <option value="" selected="selected">Select mod loader</option>
                </select>
                <br><br>

                <input type="submit" value="Download">
            </form>
        </div>


        <div class="user-info-box" id="userInfoBox">

            <h3>JuJu's Better Wynncraft: Essentials</h3>
            <p>The Essentials pack focuses on fast performance, whilst also including a few quality of life mods.</p>

            <h4>Mods</h4>

            <li>Cloth Config API</li>
            <li>Controlling</li>
            <li>Fabric API</li>
            <li>Fabric Language Kotlin</li>
            <li>Iris Shaders</li>
            <li>FPS Reducer</li>
            <li>Searchables</li>
            <li>Sodium</li>
            <li>Sodium Extra</li>
            <li>Voices of Wynn</li>
            <li>Wynntils</li>
            <li>YetAnotherConfigLib</li>
        </div>


        <div class="user-info-box" id="userInfoBox">

            <h3>JuJu's Better Wynncraft: Extras</h3>
            <p>The Extras pack improves slightly more on performance and adds some extra quality of life mods.</p>

            <h4>Mods</h4>

            <p>Includes everything from Essentials, Plus:</p>

            <li>AmbientSounds 5</li>
            <li>Athena</li>
            <li>Better Third Person</li>
            <li>Capes</li>
            <li>CompleteConfig</li>
            <li>CreativeCore</li>
            <li>Debugify</li>
            <li>Enhanced Block Entities</li>
            <li>Entity Texture Features</li>
            <li>Falling Leaves</li>
            <li>FerriteCore</li>
            <li>Indium</li>
            <li>Krypton</li>
            <li>LazyDFU</li>
            <li>Lithium</li>
            <li>Mouse Tweaks</li>
            <li>Not Enough Animations</li>
            <li>Physics Mod</li>
            <li>Skin Layers 3D</li>
            <li>Sound Physics Remastered</li>
            <li>Starlight</li>
            <li>YDM's Weapon Master</li>
            <li>Zoomify</li>

        </div>


        <div class="user-info-box" id="userInfoBox">

            <h3>JuJu's Better Wynncraft: Extreme</h3>
            <p>The Extreme pack adds more quality of life features, as well as some advanced mods.</p>

            <h4>Mods</h4>

            <p>Includes everything from Essentials and Extras, Plus:</p>

            <li>Avomod</li>
            <li>Better Beds</li>
            <li>Blur</li>
            <li>CIT Resewn</li>
            <li>Don't Clear Chat History</li>
            <li>Entity View Distance</li>
            <li>Inventory HUD+</li>
            <li>More Chat History</li>
            <li>Reese's Sodium Options</li>
            <li>Replay Mod</li>
            <li>Satin API</li>
            <li>Shoulder Surfing Reloaded</li>
            <li>Show Me Your Skin</li>
            <li>ShowMeMyDPS!</li>
            <li>Sounds</li>
            <li>Visuality</li>
            <li>Wavey Capes</li>
        </div>


        <div class="user-info-box" id="userInfoBox">
            <p>Join the Wave Development Discord Server for support: <a
                    href="https://discord.gg/JEeUqPQwBF">discord.gg/JEeUqPQwBF</a><br>
                Additionally, you can gain access to our Beta Program and Archive Downloads by request.</p>
        </div>

    </div>
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