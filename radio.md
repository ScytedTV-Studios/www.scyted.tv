---
title: Radio
layout: page
description: ScytedTV Studio's Radio Show
---

<style>
        .radio-container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }

        .radio-display {
            margin-top: 30px;
            padding: 20px;
            background:rgb(242, 242, 242);
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        }

        .radio-display h2 {
            margin: 0;
            font-size: 1.8em;
        }

        .radio-display p {
            margin: 10px 0 20px;
            font-size: 1em;
        }

        .radio-status {
            font-size: 1.2em;
            margin-top: 10px;
            color: #f39c12;
        }

        .radio-controls {
            margin-top: 20px;
        }

        .radio-controls button {
            background-color: #1db954;
            color: #ffffff;
            border: none;
            padding: 10px 20px;
            font-size: 1em;
            cursor: pointer;
            border-radius: 5px;
            margin: 5px;
        }

        .radio-controls button:hover {
            background-color: #1aa34a;
        }

        .slider-container {
            margin-top: 20px;
        }

        .slider-container label {
            display: block;
            margin-bottom: 5px;
            font-size: 1em;
        }

        .slider-container input[type="range"] {
            width: 100%;
            appearance: none;
            height: 8px;
            border-radius: 5px;
            background: #ddd;
            outline: none;
            opacity: 0.8;
            transition: opacity 0.2s;
        }

        .slider-container input[type="range"]:hover {
            opacity: 1;
        }
    </style>
<body>
    <div class="radio-container">
        <div class="radio-display">
            <h2>Now Playing</h2>
            <p id="now-playing">Fetching song information...</p>
            <div class="radio-status" id="status">Status: Paused</div>
            <audio id="radio" preload="none"></audio>
            <div class="radio-controls">
                <button onclick="playRadio()">▶ Play</button>
                <button onclick="stopRadio()">⏹ Stop</button>
            </div>
            <div class="slider-container">
                <label for="volume">Volume:</label>
                <input id="volume" type="range" min="0" max="1" step="0.01" value="0.5" onchange="changeVolume(this.value)">
            </div>
        </div>
    </div>

    <!-- <div class="radio-controls">
<button onclick="playRadio()">Recommend Song</button>
    </div>
<br><br><br>
<!-- <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSey214JQLgzEV9UFAV-98_WlKGoFJdzUdf2cKA0HZ2gZ9Bolw/viewform?embedded=true" width="100%" height="680" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> -->

<script>
        const radio = document.getElementById('radio');
        const status = document.getElementById('status');
        const nowPlaying = document.getElementById('now-playing');
        const streamUrl = "https://assets.scyted.tv/stream";
        const apiUrl = "https://api.scyted.tv/v2/radio/current.json";
        const token = "f47b0ed4a54b5722186f8c03a9066ebd";

        radio.volume = 0.5;

        function playRadio() {
            if (!radio.src || radio.src !== streamUrl) {
                radio.src = streamUrl;
            }
            radio.play();
            status.textContent = "Status: Playing";
        }

        function stopRadio() {
            radio.pause();
            radio.src = "";
            status.textContent = "Status: Paused";
        }

        function changeVolume(value) {
            radio.volume = value;
        }

        async function fetchSongInfo() {
            try {
                const response = await fetch(apiUrl, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                if (!response.ok) throw new Error("Failed to fetch song info.");
                const data = await response.json();

                if (data.title && data.artist) {
                    nowPlaying.innerHTML = `<strong>${data.title}</strong> by <strong>${data.artist}</strong>`;
                } else if (data.warning) {
                    nowPlaying.innerHTML = `<em>${data.warning}</em>`;
                } else {
                    nowPlaying.textContent = "";
                }
            } catch (error) {
                console.error("Error fetching song info:", error);
                nowPlaying.textContent = "Unable to fetch song information.";
            }
        }

        setInterval(fetchSongInfo, 15000);

        fetchSongInfo();
    </script>
</body>