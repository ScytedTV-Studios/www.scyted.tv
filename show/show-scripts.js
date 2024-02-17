// Get the playlistId from the data attribute
const playlistData = document.getElementById("playlist-data");
const playlistId = playlistData.dataset.playlistId;

// Rest of your JavaScript code remains the same...
const apiKey = "AIzaSyDiTiPWUO1XT7wovet0t005xI5aZ-DMQmA";
const videoGrid = document.getElementById("video-grid");
let currentVideoItem = null;

// Remaining functions...

fetchVideos();

// Add styles dynamically to the head section
const styleElement = document.createElement('style');
styleElement.innerHTML = `
    .video-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 20px;
    }

    // Rest of your styles...
`;
document.head.appendChild(styleElement);