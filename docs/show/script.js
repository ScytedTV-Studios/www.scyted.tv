const playlistId = "PL5irix3qFbXPNNdVPnbiANEVBVyls9mzg";
const apiKey = "AIzaSyDiTiPWUO1XT7wovet0t005xI5aZ-DMQmA";
const videoGrid = document.getElementById("video-grid");
let currentVideoItem = null;

function fetchVideos() {
    fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistId}&key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            data.items.forEach(item => {
                const videoId = item.snippet.resourceId.videoId;
                const videoTitle = item.snippet.title;
                const thumbnailUrl = item.snippet.thumbnails.medium.url;
                const videoItem = document.createElement("div");
                videoItem.classList.add("video-item");
                videoItem.dataset.videoId = videoId;
                videoItem.innerHTML = `
            <img src="${thumbnailUrl}" alt="${videoTitle}" onclick="showPlayButton(this)">
            <div class="play-icon" onclick="playVideo(this)"></div>
            <div class="video-title" onclick="openVideo('${videoId}')">${videoTitle}</div>
          `;
                videoGrid.appendChild(videoItem);
            });
        })
        .catch(error => console.error("Error fetching videos: ", error));
}

function playVideo(playButton) {
    const videoItem = playButton.parentNode;
    const videoId = videoItem.dataset.videoId;
    if (currentVideoItem && currentVideoItem !== videoItem) {
        const thumbnail = currentVideoItem.querySelector("img");
        const playIcon = currentVideoItem.querySelector(".play-icon");
        const videoTitle = currentVideoItem.querySelector(".video-title");
        thumbnail.style.display = "block";
        playIcon.style.display = "block";
        videoTitle.style.display = "block";
        currentVideoItem.removeChild(currentVideoItem.querySelector("iframe"));
    }
    const iframe = document.createElement("iframe");
    iframe.classList.add("video-embed");
    iframe.setAttribute("width", "100%");
    iframe.setAttribute("height", "100%");
    iframe.setAttribute("src", `https://www.youtube.com/embed/${videoId}?autoplay=1`);
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allowfullscreen", "true");
    videoItem.querySelector("img").style.display = "none";
    playButton.style.display = "none";
    videoItem.querySelector(".video-title").style.display = "none";
    videoItem.appendChild(iframe);
    currentVideoItem = videoItem;
}

function showPlayButton(thumbnail) {
    const videoItem = thumbnail.parentNode;
    videoItem.querySelector(".play-icon").style.display = "block";
}

function openVideo(videoId) {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, "_blank");
}

fetchVideos();

// Add styles dynamically to the head section
const styleElement = document.createElement('style');
styleElement.innerHTML = `
    .video-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 20px;
    }

    .video-item {
      position: relative;
      overflow: hidden;
      border-radius: 5px;
    }

    .video-item img {
      width: 100%;
      height: auto;
      border-radius: 5px;
      cursor: pointer;
    }

    .play-icon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 60px;
      height: 60px;
      background: url('play-button.png') no-repeat;
      background-size: cover;
      cursor: pointer;
      z-index: 1;
    }

    .video-title {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      padding: 10px;
      background-color: rgba(0, 0, 0, 0.7);
      color: #fff;
      text-align: center;
      cursor: pointer;
      z-index: 1;
      box-sizing: border-box; /* Ensure padding is included in width calculation */
      font-size: 14px; /* Adjust font size as needed */
      white-space: nowrap; /* Prevent text from wrapping */
      overflow: hidden; /* Hide overflow text */
      text-overflow: ellipsis; /* Display ellipsis for overflow text */
    }

    .video-embed {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
    }
  `;
document.head.appendChild(styleElement);