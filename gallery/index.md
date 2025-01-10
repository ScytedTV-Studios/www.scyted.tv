---
title: Gallery
layout: page
---

<style>
    hr.has-background-black {
        display: none;
    }

    h1.title {
        display: none;
    }

    body {
        background: #FFEA00;
    }
</style>
<html>
<head>
<meta http-equiv="cache-control" content="max-age=0" />
    <meta http-equiv="cache-control" content="no-cache" />
    <meta http-equiv="expires" content="0" />
    <meta http-equiv="expires" content="Tue, 01 Jan 1980 1:00:00 GMT" />
    <meta http-equiv="pragma" content="no-cache" />
    <link href="https://fonts.googleapis.com/css?family=Rubik&display=swap" rel="stylesheet">
    <style>
        .staticrypt-hr {
            margin-top: 20px;
            margin-bottom: 20px;
            border: 0;
            border-top: 1px solid #eee;
        }
        .staticrypt-page {
            width: 360px;
            padding: 8% 0 0;
            margin: auto;
            box-sizing: border-box;
        }
        .staticrypt-form {
            position: relative;
            z-index: 1;
            background: #ffffff;
            max-width: 360px;
            margin: 0 auto 100px;
            padding: 45px;
            text-align: center;
            box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
        }
        .staticrypt-form input[type="username"] {
            outline: 0;
            background: #f2f2f2;
            width: 100%;
            border: 0;
            margin: 0 0 15px;
            padding: 15px;
            box-sizing: border-box;
            font-size: 14px;
        }
        .staticrypt-form .protected__content__btn {
            text-transform: uppercase;
            outline: 0;
            background: #000000;
            width: 100%;
            border: 0;
            padding: 15px;
            color: #ffffff;
            font-size: 14px;
            cursor: pointer;
        }
        .staticrypt-form .protected__content__btn:hover,
        .staticrypt-form .protected__content__btn:active,
        .staticrypt-form .protected__content__btn:focus {
            background: #000000;
            filter: brightness(92%);
        }
        .staticrypt-html {
            height: 100%;
        }
        .staticrypt-body {
            height: 100%;
            margin: 0;
        }
        .staticrypt-content {
            height: 100%;
            margin-bottom: 1em;
            background: #FFEA00;
            font-family: 'Rubik', sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }
        .staticrypt-instructions {
            margin-top: -1em;
            margin-bottom: 1em;
        }
        .staticrypt-title {
            font-size: 1.5em;
        }
        label.staticrypt-remember {
            display: flex;
            align-items: center;
            margin-bottom: 1em;
        }
        .staticrypt-remember input[type="checkbox"] {
            transform: scale(1.5);
            margin-right: 1em;
        }
        .hidden {
            display: none !important;
        }
        .staticrypt-spinner-container {
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .staticrypt-spinner {
            display: inline-block;
            width: 2rem;
            height: 2rem;
            vertical-align: text-bottom;
            border: 0.25em solid gray;
            border-right-color: transparent;
            border-radius: 50%;
            -webkit-animation: spinner-border 0.75s linear infinite;
            animation: spinner-border 0.75s linear infinite;
            animation-duration: 0.75s;
            animation-timing-function: linear;
            animation-delay: 0s;
            animation-iteration-count: infinite;
            animation-direction: normal;
            animation-fill-mode: none;
            animation-play-state: running;
            animation-name: spinner-border;
        }
        @keyframes spinner-border {
            100% {
                transform: rotate(360deg);
            }
        }
    </style>
    </head>
    <body class="staticrypt-body">
    <div id="staticrypt_loading" class="staticrypt-spinner-container">
        <div class="staticrypt-spinner"></div>
    </div>
    <div id="staticrypt_content" class="staticrypt-content hidden">
        <div class="staticrypt-page">
            <div class="staticrypt-form">
                <div class="staticrypt-instructions">
                    <p class="staticrypt-title">ScytedTV Gallery</p>
                    <p></p>
                </div>
                <hr class="staticrypt-hr" />
                <form id="staticrypt-form" action="#" method="post">
                    <input class="protected__content__input" data-id="username" type="username" name="username"
                        placeholder="Gallery Code (Case-Sensative)" autofocus />
                    <!-- <input class="protected__content__input" data-id="username" type="username" placeholder="username"/> -->
                    <!-- <label id="staticrypt-remember-label" class="staticrypt-remember hidden"> -->
                    <!-- <input id="staticrypt-remember" type="checkbox" name="remember" />
                        Remember me -->
                    <!-- </label> -->
                    <!-- <input data-id="button" type="button" class="protected__content__btn" value="Login" /> -->
                    <button style="margin-bottom: 10px;" data-id="button" type="button"
                        class="protected__content__btn">Continue</button>
                    <!-- <a style="color: #858585; font-size: 13px;"
                        href="https://api.scyted.tv/v1/dashboard/request-form/">Request an Account</p> -->
                </form>
            </div>
        </div>
    </div>
    <script type="text/javascript" src="scripts1.js"></script>
    <script src="scripts2.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/js-sha1/0.6.0/sha1.min.js"></script>
    </body>
    </html>