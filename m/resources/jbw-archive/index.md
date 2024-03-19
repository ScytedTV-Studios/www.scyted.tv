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
<link rel="stylesheet" href="https://api.scyted.tv/wave-development/dashboard/scytedtv-resources-mobile.css">
<body>

<script src="jujus-better-wynncraft.js"></script>

<div class="banner">
    <img src="https://cdn.scyted.tv/website-assets/resource-portal/banner.jpg" alt="Banner Image" class="banner-image">
  </div>

<div class="resource-container">
  
  <div class="resource-wrapper">
  
  <div class="resource-back" onclick="backButton()"><p>← back</p></div>

  <div class="resource-info-box">
    <img src="https://cdn.scyted.tv/jujus-better-wynncraft/logo-inverted.png" alt="Resource Image" class="resource-image">
    <h3>JBW Archive</h3>
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

            <h2>ARCHIVE DOWNLOADS</h2>
            <form name="archiveForm" id="archiveForm" action="" onsubmit="return validateArchiveForm()">

                <!-- Major Version Section -->
                <label for="majorVersion">Major Version:</label>
                <select name="majorVersion" id="majorVersion" onchange="updateArchiveOptions()" required>
                    <option value="" selected="selected">Select Major Version</option>
                    <option value="version1">Version 1</option>
                    <option value="version2">Version 2</option>
                </select>
                <br><br>

                <!-- Version Section -->
                <label for="version">Version:</label>
                <select name="version" id="version" onchange="updateArchiveOptionsVersions()" disabled required>
                    <option value="" selected="selected">Select a Major Version</option>
                </select>
                <br><br>

                <!-- Pack Section -->
                <label for="archivePack">Pack:</label>
                <select name="archivePack" id="archivePack" disabled required>
                    <option value="" selected="selected">Select a Major Version</option>
                    <option value="essentials">Essentials</option>
                    <option value="extras">Extras</option>
                    <option value="extreme">Extreme</option>
                </select>
                <br><br>

                <!-- Shader Section -->
                <label for="archiveShader">Shader:</label>
                <select name="archiveShader" id="archiveShader" disabled required>
                    <option value="" selected="selected">Select a Major Version</option>
                </select>
                <br><br>

                <!-- Mod Loader Section -->
                <label for="archiveModLoader">Mod Loader:</label>
                <select name="archiveModLoader" id="archiveModLoader" disabled required>
                    <option value="" selected="selected">Select a Major Version</option>
                    <option value="CurseForge">CurseForge</option>
                    <option value="Modrinth">Modrinth</option>
                </select>
                <br><br>

                <input type="submit" value="Download">
            </form>

            <div id="messageContainer"></div>
        </div>

        <!-- <div class="user-info-box" id="userInfoBox">
            <p>Join the Wave Development Discord Server for support: <a
                    href="https://discord.gg/JEeUqPQwBF">discord.gg/JEeUqPQwBF</a></p>
        </div> -->

    </div>
    </div>
    </div>

<script src="https://api.scyted.tv/wave-development/dashboard/page-loading-script.js"></script>
<script src="index-script.js"></script>
<script src="insert-scripts.js"></script>
<script src="https://api.scyted.tv/wave-development/dashboard/mobile-redirect.js"></script>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-LF3ZTHGQHE"></script>

</body>