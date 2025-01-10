---
title: Events
layout: page
type: events
---

<link rel="stylesheet" href="https://api.scyted.tv/v1/wave-development/scrollbar-styles.css">
<style>
body {
    background-color: #141414;
}
#events-container {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #141414;
    color: #fff;
}
#events-container h1 {
    text-align: center;
    color: #fff;
    padding: 20px 0;
    margin-bottom: 0;
    font-size: 2rem;
}
#events-container h3 {
    text-align: center;
}
#events-container .section-title {
    font-size: 1.8rem;
    color: #FEEA3B;
    margin: 30px 0 10px;
}
#events-container .event {
    position: relative;
    background-color: #FEEA3B;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    margin-bottom: 30px;
    overflow: hidden;
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}
#events-container .event:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}
#events-container .event h2 {
    background-color: #feea3b;
    color: black;
    padding: 15px;
    margin: 0;
    font-size: 1.5rem;
}
#events-container .live-indicator {
    position: absolute;
    top: 15px;
    right: 15px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: gray;
    transition: background-color 0.3s ease;
}
#events-container .flashing {
    animation: flash 1s infinite;
}
#events-container .iframe-wrapper {
    position: relative;
    height: 400px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    background-position: center;
}
#events-container .iframe-wrapper .blurred-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-size: cover;
    background-position: center;
    filter: blur(8px);
    z-index: 0;
}
#events-container .event iframe {
    position: relative;
    z-index: 1;
    width: 90%;
    height: 90%;
    border: none;
    background-color: transparent;
}
@keyframes flash {
    0% {
        background-color: lightcoral;
    }
    50% {
        background-color: red;
    }
    100% {
        background-color: lightcoral;
    }
}
#events-container .green {
    background-color: green;
}
@media (max-width: 768px) {
    #events-container h1 {
        font-size: 1.8rem;
        padding: 15px 0;
    }
    #events-container .event {
        margin-bottom: 20px;
    }
    #events-container .event h2 {
        font-size: 1.3rem;
        padding: 12px;
    }
}
@media (max-width: 480px) {
    #events-container h1 {
        font-size: 1.5rem;
    }
    #events-container .event h2 {
        font-size: 1.2rem;
        padding: 10px;
    }
}
</style>

<body>
    <div id="events-container">
    <h1>Upcoming Events</h1>
        <div id="live-discussions">
            <h2 class="section-title">Live Discussions</h2>
        </div>
        <div id="releases">
            <h2 class="section-title">Releases</h2>
        </div>
    </div>
    <script>
        const jsonUrl = `https://api.scyted.tv/v1/parties/events.json?timestamp=${new Date().getTime()}`;
        fetch(jsonUrl)
            .then(response => response.json())
            .then(data => {
                const events = data.events.sort((a, b) => a.epoch - b.epoch);
                const liveDiscussions = events.filter(event => event.epoch && event.endEpoch);
                const releases = events.filter(event => event.epoch && !event.endEpoch);
                const liveContainer = document.getElementById('live-discussions');
                const releasesContainer = document.getElementById('releases');
                if (liveDiscussions.length > 0) {
                    const liveEvent = liveDiscussions[0];
                    const liveEventDiv = createEventDiv(liveEvent);
                    liveContainer.appendChild(liveEventDiv);
                } else {
                    liveContainer.innerHTML += "<p>No live discussions available.</p>";
                }
                releases.slice(0, 3).forEach(release => {
                    const releaseDiv = createEventDiv(release);
                    releasesContainer.appendChild(releaseDiv);
                });
                setInterval(() => {
                    events.forEach(event => {
                        const eventDiv = document.getElementById(`event-${event.id}`);
                        const indicator = eventDiv.querySelector('.live-indicator');
                        updateLiveIndicator(event, indicator);
                    });
                }, 1000);
            })
            .catch(error => console.error('Error fetching events:', error));
        function createEventDiv(event) {
            const eventDiv = document.createElement('div');
            eventDiv.classList.add('event');
            eventDiv.id = `event-${event.id}`;
            const coverStyle = event.cover
                ? `background-image: url('${event.cover}');`
                : `background-color: #ffea3b;`;
            eventDiv.innerHTML = `
                <h2>${event.name}</h2>
                <div class="iframe-wrapper">
                    <div class="blurred-background" style="${coverStyle}"></div>
                    <iframe src="https://api.scyted.tv/v1/parties/timer.html?id=${event.id}" frameborder="0"></iframe>
                </div>
                <div class="live-indicator"></div>
            `;
            return eventDiv;
        }
        function updateLiveIndicator(event, indicator) {
            const now = Math.floor(Date.now() / 1000);
            const { epoch, endEpoch } = event;
            let indicatorColor = 'gray';
            if (now < epoch) {
                indicatorColor = 'gray';
            } else if (now >= epoch && now <= epoch + 10) {
                indicator.classList.add('flashing');
                indicatorColor = 'yellow';
            } else if (now >= epoch && now <= endEpoch) {
                indicator.classList.add('flashing');
                indicatorColor = 'red';
            } else if (now > endEpoch) {
                indicatorColor = 'green';
            }
            indicator.style.backgroundColor = indicatorColor;
        }
    </script>
</body>