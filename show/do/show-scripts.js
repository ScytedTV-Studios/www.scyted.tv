window.onload = function() {
    var video = document.getElementById('videoPlayer');
    var playPauseBtn = document.getElementById('playPauseBtn');
    var currentTimeSpan = document.getElementById('currentTime');
    var durationSpan = document.getElementById('duration');
    var volumeControl = document.getElementById('volumeControl');
    var videoUrl = window.location.href;
    var wasPlaying = false;

    video.onloadedmetadata = function() {
        durationSpan.textContent = formatTime(video.duration);
    };

    // Check if there's a saved playback time for this video
    var playbackTime = getCookie(videoUrl);

    if (playbackTime) {
        video.currentTime = playbackTime;
    }

    // Check if the video was playing before unloading the page
    var wasPlayingValue = getCookie("wasPlaying");

    if (wasPlayingValue === "true") {
        wasPlaying = true;
    }

    // Check if there's a saved volume for the website
    var savedVolume = getCookie("websiteVolume");

    if (savedVolume !== null) {
        video.volume = parseFloat(savedVolume);
        volumeControl.value = savedVolume;
    }

    // Save the playback time whenever the video is paused
    video.addEventListener('pause', function() {
        setCookie(videoUrl, video.currentTime, 365);
        setCookie("wasPlaying", "false", 365);
    });

    // Save the playback time and state whenever the video is played
    video.addEventListener('play', function() {
        setCookie(videoUrl, video.currentTime, 365);
        setCookie("wasPlaying", "true", 365);
    });

    // Save the volume for the website
    volumeControl.addEventListener('input', function() {
        video.volume = volumeControl.value;
        setCookie("websiteVolume", volumeControl.value, 365);
    });

    // Update current time display as video progresses
    video.addEventListener('timeupdate', function() {
        currentTimeSpan.textContent = formatTime(video.currentTime);
        setCookie(videoUrl + "_timestamp", video.currentTime, 365); // Save timestamp to cookie
    });

    // Function to set a cookie
    function setCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + value + expires + "; path=/";
    }

    // Function to get a cookie
    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    // Format time in MM:SS format
    function formatTime(seconds) {
        var minutes = Math.floor(seconds / 60);
        var remainingSeconds = Math.floor(seconds % 60);
        return `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    }

    // Play/Pause button functionality
    playPauseBtn.addEventListener('click', function() {
        if (video.paused) {
            video.play();
            playPauseBtn.textContent = 'Pause';
        } else {
            video.pause();
            playPauseBtn.textContent = 'Play';
        }
    });

    // If the video was playing before unloading the page, resume playback
    if (wasPlaying) {
        video.play();
        playPauseBtn.textContent = 'Pause';
    }
};