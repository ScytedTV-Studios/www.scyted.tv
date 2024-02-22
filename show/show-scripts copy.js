const apiKey = "AIzaSyDiTiPWUO1XT7wovet0t005xI5aZ-DMQmA";
  const videoGrid = document.getElementById("video-grid");
  let currentVideoItem = null;

  // Get all elements with class "video-grid"
const videoGrids = document.querySelectorAll('.video-grid');

videoGrids.forEach(videoGrid => {
    // Get the playlistId from the data attribute of each video-grid element
    const playlistId = videoGrid.dataset.playlistId;

    // Call fetchVideos with the playlistId
    fetchVideos(playlistId, videoGrid);
});

function fetchVideos(playlistId, videoGrid) {
  fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistId}&key=${apiKey}`)
      .then(response => response.json())
      .then(data => {
          // Filter out private videos
          const filteredItems = data.items.filter(item => item.snippet && item.snippet.title && item.snippet.thumbnails && item.snippet.thumbnails.default && item.snippet.resourceId && item.snippet.resourceId.videoId && item.snippet.privacyStatus !== "private");

          filteredItems.forEach(item => {
              const videoId = item.snippet.resourceId.videoId;
              const videoTitle = item.snippet.title;
              // Select the highest quality thumbnail available, falling back to mq if maxres is not available
              let thumbnailUrl;
              if (item.snippet.thumbnails.maxres) {
                  thumbnailUrl = item.snippet.thumbnails.maxres.url;
              } else if (item.snippet.thumbnails.medium) {
                  thumbnailUrl = item.snippet.thumbnails.medium.url;
              } else if (item.snippet.thumbnails.default) {
                  thumbnailUrl = item.snippet.thumbnails.default.url;
              } else {
                  // If no thumbnail is available, set a placeholder image or handle the case accordingly
                  thumbnailUrl = "placeholder.jpg";
              }

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
  margin: 20px;
}

.video-item {
  position: relative;
  overflow: hidden;
  border-radius: 5px;
  height: calc(100% - 7.2px);
  max-width: 600px
}

.video-item img {
  border: 1px solid #000;
  width: 100%;
  height: auto;
  border-radius: 5px;
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
  box-sizing: border-box;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border-radius: 5px;
  // border: 1.5px solid #000;
}
  `;
document.head.appendChild(styleElement);