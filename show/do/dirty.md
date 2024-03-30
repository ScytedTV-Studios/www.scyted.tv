---
title: Dirty Laundry
layout: page
type: show
---

<style>
        .video-container {
            max-width: 800px;
            margin: 20px auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 12px;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
        }
        .video-container h1 {
            text-align: center;
            margin: 0; /* Remove margin */
            padding-bottom: 20px; /* Add padding for spacing */
            color: #333;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
        }
        .video-container video {
            width: 100%;
            border-radius: 12px;
            outline: none;
        }
        .video-container #videoControls {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 15px;
            padding: 10px;
            background-color: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(10px);
            border-radius: 12px;
        }
        .video-container #videoControls button {
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 8px;
            padding: 10px 20px;
            cursor: pointer;
            transition: background-color 0.3s;
            font-size: 16px;
            font-weight: bold;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .video-container #videoControls button:hover {
            background-color: #45a049;
        }
        .video-container #timeDisplay {
            font-size: 16px;
            font-weight: bold;
            color: #555;
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
        }
        .video-container #volumeControl {
            width: 100px;
            margin-left: 20px;
        }
    </style>

<body>
    <div class="video-container">
        <h1>Custom Video Player</h1>
        <video id="videoPlayer" controls>
            <source src="https://cdn.pd8.workers.dev/api/file/nQD7BCh2" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <div id="videoControls">
            <button id="playPauseBtn">Play/Pause</button>
            <input type="range" id="volumeControl" min="0" max="1" step="0.01">
            <div id="timeDisplay">
                <span id="currentTime">00:00</span>
                <span>/</span>
                <span id="duration">00:00</span>
            </div>
        </div>
    </div>

<script src="show-scripts.js"></script>
</body>