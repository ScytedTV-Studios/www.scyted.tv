---
title: Seaside Shop Listings
layout: page
type: seaside
---

<style>
    html, body {
      margin: 0;
      padding: 0;
      height: 100%;
      overflow: auto;
    }

    iframe {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 100%;
      border: none;
      overflow: hidden;
    }

    #footer {
      position: relative;
      width: 100%;
      background-color: black;
    }

    #footer #credits {
      background-color: black;
      padding: .75rem;
      font-size: .85rem;
      color: white;
      text-align: center;
    }

    #footer #credits a {
      text-decoration: underline;
      font-weight: bolder;
      color: #fff;
    }

    /* Ensure footer stays at the bottom */
    #footer {
      position: absolute;
      bottom: 0;
      width: 100%;
    }
  </style>

<iframe id="fullscreenIframe" src="https://api.scyted.tv/shop" frameborder="0"></iframe>

  <script>
    window.addEventListener('resize', resizeIframe);
    
    function resizeIframe() {
      const iframe = document.getElementById('fullscreenIframe');
      iframe.style.height = `${window.innerHeight}px`;
    }

    resizeIframe();
  </script>