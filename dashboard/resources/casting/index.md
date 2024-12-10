---
layout: page
---

<link rel="stylesheet" href="styles.css">
<body>
    <div id="audition-container">
        <h2>Available Audition Spots</h2>
        <input type="text" id="search-bar" placeholder="Search..." oninput="filterAuditions()">
        <button id="reload-button" onclick="reloadAuditions()">
            <span>Reload</span>
            <div class="reload-icon"></div>
        </button>
        <div id="audition-list"></div>
    </div>
    <canvas id="confetti-canvas"></canvas>
    <script src="https://cdn.jsdelivr.net/npm/confetti-js@0.0.18/dist/index.min.js"></script>
    <script src="auditions.js"></script>
</body>