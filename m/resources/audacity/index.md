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

<!-- <div class="mobile-error">
  <div id="error-message" style="color: red;">
    ScytedTV Resources isn't currently available to mobile users at this time.
  </div>
</div> -->

<div class="banner">
    <img src="https://cdn.scyted.tv/website-assets/resource-portal/banner.jpg" alt="Banner Image" class="banner-image">
  </div>

<div class="resource-container">
  
  <div class="resource-wrapper">
  
  <div class="resource-back" onclick="backButton()"><p>← back</p></div>

  <div class="resource-info-box">
    <img src="https://cdn.scyted.tv/website-assets/resource-portal/logos/audacity.jpg" alt="Resource Image" class="resource-image">
    <h3>Clean Audio in Audacity</h3>
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

<em>The information provided in this resource is from <a href="https://www.reddit.com/r/letsplay/comments/40gzmh/comment/cyu2dwc" class="url">u/kyleblane</a> on Reddit.</em>

</div>

<div class="user-info-box" id="userInfoBox">

<h3>STEP 1: Remove Background Noise</h3>

To remove background noise, apply the "Noise Reduction" effect to your audio by first getting a noise profile of the background noise. Select a period of time in your audio clip that consists of just the background noise you want to remove, then click the "Get Noise Profile" button in the Noise Reduction effect.

<br><br>

Now that you've done that, set "Noise reduction (dB)" to 10, "Sensativity" to 2.00, and "Frequency smoothing (bands)" to 4. Make sure you have it set to "Reduce" and not "Residue", then click apply.

<br><br>

<img src="https://cdn.scyted.tv/website-assets/resource-portal/images/audacity/step1.png" alt="Step 1: Remove Background Noise" width="100%" height="auto">

<br>

<h3>STEP 2: Make Louds Softer and Softs Louder</h3>

Now you need to find the "Dynamic Range Compressor" effect and the sliders as follows:

<br><br>

<li>Threshold: -18 dB</li>
<li>Noise Floor: -50 dB</li>
<li>Ratio: 2:1</li>
<li>Attack Time: 0.20 Secs</li>
<li>Release Time: 1.0 Secs</li>

<br>

Enable "Make-up gain for 0 dB after compressing" and disable "Compress based on Peaks", then hit okay.

<br><br>

<img src="https://cdn.scyted.tv/website-assets/resource-portal/images/audacity/step2.png" alt="STEP 2: Make Louds Softer and Softs Louder" width="100%" height="auto">

<h3>STEP 3: Make Voice Sound More Clear</h3>

Open your EQ (Equalization) effect and copy the settings on the chart below. Keep in mind that these settings may very depending on your voice and microphone, so it may require some tampering to get it right.

<br><br>

<img src="https://cdn.scyted.tv/website-assets/resource-portal/images/audacity/step3.png" alt="STEP 3: Make Voice Sound More Clear" width="100%" height="auto">

<h3>STEP 4: Smooth Out Peak Levels</h3>

Find the "Normalize" effect. This one will help smooth out the louder parts of your audio.

<br><br>

Turn on "Remove DC offset" and "Normalize maximum aplitude to", setting it to "-2.0 dB"; disable "Normalize stereo channels independantly", then click "ok" to apply.

<br><br>

<img src="https://cdn.scyted.tv/website-assets/resource-portal/images/audacity/step4.png" alt="STEP 4: Smooth Out Peak Levels" width="100%" height="auto">

<h3>STEP 5: Use Chains (optional)</h3>

The last thing recommended by u/kyleblane was to use chains to automate this. More information on how to do that in the video below.

<br><br>

<style>

.video-container {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
}
.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 15px;
}

</style>

<div class="video-container">

<iframe width="100%" height="0" src="https://www.youtube.com/embed/KLDBrAw8zq0" title="Audacity Tip - How to Batch Processing Effects (Formerly Chains - Now Macros)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

</div>

</div>
</div>
</div>
</div>

<script src="https://api.scyted.tv/wave-development/dashboard/page-loading-script.js"></script>
<script src="index-script.js"></script>
<script src="insert-scripts.js"></script>
<script src="https://api.scyted.tv/wave-development/dashboard/mobile-redirect.js"></script>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-LF3ZTHGQHE"></script>

</body>