document.addEventListener("DOMContentLoaded", function() {
    const playlistId = "PL5irix3qFbXPNNdVPnbiANEVBVyls9mzg";
    const apiKey = "AIzaSyDiTiPWUO1XT7wovet0t005xI5aZ-DMQmA";
    const maxResults = 10; // Max videos to display
  
    fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=${maxResults}&playlistId=${playlistId}&key=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      const videos = data.items;
      const videoGrid = document.getElementById("video-grid");

      videos.forEach(video => {
        const videoId = video.snippet.resourceId.videoId;
        const videoTitle = video.snippet.title;
        const thumbnailUrl = video.snippet.thumbnails.medium.url;

        const videoThumbnail = document.createElement("div");
        videoThumbnail.classList.add("video-thumbnail");

        const thumbnailImg = document.createElement("img");
        thumbnailImg.src = thumbnailUrl;

        const playButton = document.createElement("div");
        playButton.classList.add("play-button");
        playButton.addEventListener("click", function() {
          embedVideo(videoId, videoThumbnail);
        });

        videoThumbnail.appendChild(thumbnailImg);
        videoThumbnail.appendChild(playButton);

        const videoTitleLink = document.createElement("a");
        videoTitleLink.href = `https://www.youtube.com/watch?v=${videoId}`;
        videoTitleLink.textContent = videoTitle;

        videoGrid.appendChild(videoThumbnail);
        videoGrid.appendChild(videoTitleLink);
      });
    })
    .catch(error => console.error("Error fetching videos: ", error));

  function embedVideo(videoId, thumbnail) {
    const embedContainer = document.createElement("div");
    embedContainer.innerHTML = `
      <iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
    `;

    thumbnail.replaceWith(embedContainer);
  }
});