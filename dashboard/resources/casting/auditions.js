async function fetchJSON(url) {
    const response = await fetch(url);
    return response.json();
}

async function getUserID(accessToken) {
    const response = await fetch('https://discord.com/api/v9/users/@me', {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    });
    return response.json();
}

async function getUserData() {
    const accessToken = document.cookie.split('; ').find(row => row.startsWith('accessToken')).split('=')[1];
    const userData = await getUserID(accessToken);
    return userData;
}

async function getAuditions() {
    const auditions = await fetchJSON(addCacheBuster('https://api.scyted.tv/website/staff-portal/auditions.json'));
    return auditions;
}

function displayAuditions(auditions, username) {
    const auditionList = document.getElementById('audition-list');
    const items = Array.from(auditionList.getElementsByClassName('audition-role'));
    
    items.forEach(item => {
        item.style.animation = 'pop-out 0.5s forwards';
        setTimeout(() => item.remove(), 500); // Remove the item after the animation
    });

    setTimeout(() => {
        auditions.forEach(audition => {
            const roleElement = document.createElement('div');
            roleElement.className = 'audition-role';
            roleElement.innerHTML = `
                <span>${audition.roleName}</span>
                <span>${audition.username ? `Taken by: ${audition.username}` : 'Available'}</span>
            `;

            if (audition.username) {
                roleElement.classList.add('taken');
            } else {
                roleElement.classList.add('available');
            }

            if (audition.username === username) {
                roleElement.classList.add('highlighted');
                triggerConfetti();
            }

            auditionList.appendChild(roleElement);
            roleElement.style.animation = 'pop-in 0.5s forwards'; // Add animation for new items
        });
    }, 500); // Delay adding items to let old items finish animation
}

async function init() {
    const userData = await getUserData();
    const auditions = await getAuditions();
    displayAuditions(auditions, userData.username);
}

function triggerConfetti() {
    const confettiSettings = { 
        target: 'confetti-canvas',
        max: 100,
        size: 1,
        animate: true,
        props: ['circle', 'square', 'triangle', 'line'],
        colors: [[165, 104, 246], [230, 61, 135], [0, 199, 228], [253, 214, 126]],
        clock: 25,
        rotate: true,
        width: window.innerWidth,
        height: window.innerHeight,
        start_from_edge: true
    };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
}

function filterAuditions() {
    const searchValue = document.getElementById('search-bar').value.toLowerCase();
    const auditionList = document.getElementById('audition-list');
    const auditions = auditionList.getElementsByClassName('audition-role');

    Array.from(auditions).forEach(audition => {
        const roleName = audition.getElementsByTagName('span')[0].innerText.toLowerCase();
        const roleStatus = audition.getElementsByTagName('span')[1].innerText.toLowerCase();
        if (roleName.includes(searchValue) || roleStatus.includes(searchValue)) {
            audition.style.display = '';
        } else {
            audition.style.display = 'none';
        }
    });
}

async function reloadAuditions() {
    const userData = await getUserData();
    const auditions = await getAuditions();
    displayAuditions(auditions, userData.username);
}

window.onload = init;
