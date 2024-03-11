---
title: Resource Directory
layout: page
type: resources
---
<style>
    hr.has-background-black {
        display: none;
    }

    h1.title {
        display: none;
    }
</style>
<link rel="stylesheet" href="https://api.scyted.tv/wave-development/dashboard/scytedtv-resources.css">
<link rel="stylesheet" href="https://api.scyted.tv/wave-development/dashboard/mobile-lock.css">
<body>

<div class="mobile-error">
  <div id="error-message" style="color: red;">
    ScytedTV Resources isn't currently available to mobile users at this time.
  </div>
</div>
<script src="jujus-better-wynncraft.js"></script>

<div class="banner">
    <img src="https://cdn.scyted.tv/website-assets/resource-portal/banner.jpg" alt="Banner Image" class="banner-image">
  </div>

<div class="resource-container">
  
  <div class="resource-wrapper">
  
  <div class="resource-back" onclick="backButton()"><p>← back</p></div>

  <div class="resource-info-box">
    <img src="https://cdn.scyted.tv/jujus-better-wynncraft/logo.png" alt="Resource Image" class="resource-image">
    <h3>JuJu's Better Wynncraft</h3>
    A Minecraft Modpack for your Wynncraft Essentials and Quality of Life changes.
  </div>
  
  </div>
  
<div class="resource-box">

  <div id="login-container" class="login-container">
  </div>

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


        <!-- <div class="user-info-box" id="userInfoBox">
            <p>Join the Wave Development Discord Server for support: <a
                    href="https://discord.gg/JEeUqPQwBF">discord.gg/JEeUqPQwBF</a><br>
                Additionally, you can gain access to our Beta Program and Archive Downloads by request.</p>
        </div> -->

    </div>
    </div>
    </div>

<script src="https://api.scyted.tv/wave-development/dashboard/page-loading-script.js"></script>
<script src="index-script.js"></script>
<script src="insert-scripts.js"></script>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-LF3ZTHGQHE"></script>

</body>