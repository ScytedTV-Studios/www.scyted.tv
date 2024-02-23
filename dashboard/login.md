---
title: Login
layout: page
type: dashboard
---
<style>
    .beta-box {
        position: absolute;
        top: calc(50% - 8px);
        left: calc(50% + 75px);
        transform: translateY(-50%);
        border: 2px solid black;
        border-radius: 5px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        vertical-align: super;
    }
  
    .beta-label {
        color: black;
        font-weight: bold;
        padding: 2.5px;
        border-radius: 50%;
        font-size: 10px;
    }

    .dashboard-text {
        display: inline-block;
        vertical-align: middle;
        text-align: center;
        width: 50%;
    }

    .h3-container {
        position: relative;
    }
</style>
<style>
    hr.has-background-black {
        display: none;
    }

    h1.title {
        display: none;
    }

    button {
        background-color: #FFFFFF;
        color: #111111;
        padding: 10px;
        font-size: 18px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        border: 0.5px solid black;
    }

    button img {
        width: auto;
        height: 25px;
        vertical-align: middle;
        margin-right: 1.2px;
        display: inline-block;
        padding-bottom: 5px;
    }

    .login-container {
        background-color: #E5E5E5;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        padding: 20px;
        text-align: center;
        max-width: 400px;
        width: 90%;
        margin: 0 auto;
    }
</style>

<body>

<div class="login-container">
    <h3 class="h3-container">
        <span class="dashboard-text">Dashboard</span>
        <span class="beta-box"><span class="beta-label">BETA</span></span>
    </h3>
    <p>Easy access to company assets, account information, and more.</p>
    <button onclick="redirectToDiscord()" class="discord-button"><img src="https://cdn.scyted.tv/website-assets/dashboard/discord-logo.png" alt="Discord" class="discord-icon" /> Continue with Discord</button>
    <div id="error-message" style="color: red;"></div>
</div>

<script src="https://api.scyted.tv/wave-development/dashboard/page-loading-script.js"></script>
<script src="login-script.js"></script>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-LF3ZTHGQHE"></script>

</body>