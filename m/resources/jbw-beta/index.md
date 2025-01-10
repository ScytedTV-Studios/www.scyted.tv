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
<link rel="stylesheet" href="https://api.scyted.tv/v1/wave-development/dashboard/scytedtv-resources-mobile.css">
<body>

<!-- <div class="mobile-error">
  <div id="error-message" style="color: red;">
    ScytedTV Resources isn't currently available to mobile users at this time.
  </div>
</div> -->
<script src="jujus-better-wynncraft.js"></script>

<div class="banner">
    <img src="https://cdn.scyted.tv/website-assets/resource-portal/banner.jpg" alt="Banner Image" class="banner-image">
  </div>

<div class="resource-container">
  
  <div class="resource-wrapper">
  
  <div class="resource-back" onclick="backButton()"><p>← back</p></div>

  <div class="resource-info-box">
    <img src="https://cdn.scyted.tv/jujus-better-wynncraft/logo-inverted.png" alt="Resource Image" class="resource-image">
    <h3>JBW Beta</h3>
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
            <h2>DOWNLOAD BETA [v2.4]</h2>

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

    </div>
    </div>
    </div>

<script src="https://api.scyted.tv/v1/wave-development/dashboard/page-loading-script.js"></script>
<script src="index-script.js"></script>
<script src="insert-scripts.js"></script>
<script src="https://api.scyted.tv/v1/wave-development/dashboard/mobile-redirect.js"></script>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-LF3ZTHGQHE"></script>

</body>