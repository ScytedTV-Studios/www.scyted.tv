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
    <img src="https://cdn.scyted.tv/website-assets/resource-portal/logos/loyd-shows.jpg" alt="Resource Image" class="resource-image">
    <h3>Show Tracking</h3>
    Loyd's show tracking.<br>
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
  <style>
  .achievements-container body {
    font-family: Arial, sans-serif;
    background-color: #f2f2f2;
    color: #333;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }
  .achievements-container .container  {
    max-width: 800px;
    width: 100%;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    overflow-y: auto;
  }
  .achievements-container h1 {
    font-size: 24px;
    text-align: center;
    margin-bottom: 20px;
    color: #333;
  }
  .achievements-container .achievement {
    border-bottom: 1px solid #ddd;
    padding: 20px;
    display: flex;
    align-items: center;
  }
  .achievements-container .achievement:last-child {
    border-bottom: none;
  }
  .achievements-container .achievement h3 {
    margin: 0;
    font-size: 18px;
    color: #333;
    margin-left: 15px;
  }
  .achievements-container .achievement p {
    margin: 5px 0;
    font-size: 14px;
    color: #666;
    margin-left: 15px;
  }
  .achievements-container .achievement-details {
    flex-grow: 1;
    margin-right: 20px;
  }
  .achievements-container .achievement-status {
    font-size: 16px;
    font-weight: bold;
    color: #4caf50;
    margin-left: 15px;
  }
  .achievements-container .achievement-status.incomplete {
    color: #f44336;
  }
  .achievements-container .achievement-date-time {
    font-size: 14px;
    color: #888;
    margin-left: 15px;
  }
  .achievements-container .date-time-box {
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 5px 10px;
    display: inline-block;
  }
  .achievements-container .progress-bar {
    width: calc(100% - 55px);
    height: 20px;
    background-color: #f2f2f2;
    border-radius: 10px;
    margin-top: 5px;
    overflow: hidden;
    border: 1px solid #ddd;
    margin-left: 15px;
    position: relative;
  }
  .achievements-container .progress {
    height: 100%;
    background-color: #4caf50;
    border-radius: 10px;
    transition: width 0.5s ease-in-out;
  }
  .achievements-container .incomplete .progress {
    background-color: #f44336;
  }
  .achievements-container .progress-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 14px;
    color: #1a0180; /* Changed to dark gray */
    z-index: 1;
  }
  .achievements-container img {
    min-width: 112px;
    min-height: 112px;
    max-width: 112px;
    max-height: 112px;
  }
</style>
<div class="container">

<div class="user-info-box" id="userInfoBox">

<h3>Show Tracking</h3>

I'm someone who really enjoys collecting achievements and trophies from games. Some games I am attempting to get every acahievement possible. This page specifically targets my progress on the PC version of Phasmophobia. Below is the entire list of all of my achievements on the game that I update periodically.

<br><br>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">

<div class="achievements-container">
  <div id="achievements"></div>
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