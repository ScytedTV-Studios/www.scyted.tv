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

<div class="banner">
    <img src="https://cdn.scyted.tv/website-assets/resource-portal/banner.jpg" alt="Banner Image" class="banner-image">
  </div>

<div class="resource-container">
  
  <div class="resource-wrapper">
  
  <div class="resource-back" onclick="backButton()"><p>← back</p></div>

  <div class="resource-info-box">
    <img src="https://cdn.scyted.tv/website-assets/resource-portal/logos/audacity.jpg" alt="Resource Image" class="resource-image">
    <h3>Clean Audio</h3>
    These are some good settings to help clean up microphone audio in Audacity.<br>
    <br>
    <em>Source: <a href="https://www.reddit.com/r/letsplay/comments/40gzmh/comment/cyu2dwc" class="url">reddit.com</a></em>
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

<h3>STEP 1: Remove Background Noise</h3>

To remove background noise, apply the "Noise Reduction" effect to your audio by first getting a noise profile of the background noise. Select a period of time in your audio clip that consists of just background noise, then click the "Get Noise Profile" button in the Noise Reduction effect.

<br><br>

Now that you've done that, set "Noise reduction (dB)" to 10, "Sensativity" to 2.00, and "Frequency smoothing (bands)" to 4. Make sure you have it set to "Reduce" and not "Residue", then click apply.

<br><br>

<img src="https://cdn.scyted.tv/website-assets/resource-portal/images/audacity/step1.png" alt="Step 1: Remove Background Noise" width="50%" height="auto">

</div>
</div>
</div>
</div>

<script src="https://api.scyted.tv/wave-development/dashboard/page-loading-script.js"></script>
<script src="index-script.js"></script>
<script src="insert-scripts.js"></script>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-LF3ZTHGQHE"></script>

</body>