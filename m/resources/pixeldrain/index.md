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

<div class="banner">
    <img src="https://cdn.scyted.tv/website-assets/resource-portal/banner.jpg" alt="Banner Image" class="banner-image">
  </div>

<div class="resource-container">
  
  <div class="resource-wrapper">
  
  <div class="resource-back" onclick="backButton()"><p>← back</p></div>

  <div class="resource-info-box">
    <img src="https://cdn.scyted.tv/website-assets/resource-portal/logos/pixeldrain.jpg" alt="Resource Image" class="resource-image">
    <h3>Watch & Download PD Videos</h3>
    Watch Pixeldrain videos, save your watch position, and bypass download restrictions.<br>
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
    .input-group {
    display: flex;
    margin-bottom: 20px;
  }
  .input-group input[type="text"] {
    flex: 1;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
  }
  .input-group button {
    padding: 10px 20px;
    background-color: #161616;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    margin: 5px;
  }
  .input-group button:hover {
    background-color: #45a049;
  }
  #error {
    color: red;
    margin-top: 10px;
  }
    </style>
<div class="container">

<div class="user-info-box" id="userInfoBox">

This resource isn't meant for mobile devices. Please try again on a Desktop or PC.

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