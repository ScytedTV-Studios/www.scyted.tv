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
    const data = await response.json();
    return data.id;
}

async function getResources() {
    const accessToken = document.cookie.split('; ').find(row => row.startsWith('accessToken')).split('=')[1];
    const userId = await getUserID(accessToken);

    const userInfo = await fetchJSON(addCacheBuster('https://api.scyted.tv/v1/website/staff-portal/user-info.json'));
    const roleAccess = await fetchJSON('role-access.json');
    const resources = await fetchJSON('resources.json');

    const userRoles = userInfo[userId] || [];
    const accessibleResources = [];

    for (const resourceId in roleAccess) {
        const resourceRoles = roleAccess[resourceId];
        if (userRoles.some(role => resourceRoles.includes(role))) {
            accessibleResources.push(resources[resourceId]);
        }
    }

    return accessibleResources;
}

function addCacheBuster(url) {
    const cacheBuster = `cb=${new Date().getTime()}`;
    return url.includes('?') ? `${url}&${cacheBuster}` : `${url}?${cacheBuster}`;
}

async function fetchJSON(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
    }
    return response.json();
}


function displayResources(resources) {
    const resourceList = document.getElementById('resource-list');
    resourceList.innerHTML = ''; // Clear the list before re-displaying
    resources.forEach(resource => {
        const resourceElement = document.createElement('div');
        resourceElement.className = 'resource';
        
        const imageElement = document.createElement('img');
        imageElement.src = resource.imageURL;
        imageElement.alt = resource.title;
        imageElement.onclick = () => window.location.href = resource.redirectURL;

        const detailsElement = document.createElement('div');
        detailsElement.className = 'resource-details';

        const titleElement = document.createElement('h2');
        titleElement.className = 'resource-title';
        titleElement.innerText = resource.title;

        const descriptionElement = document.createElement('p');
        descriptionElement.className = 'resource-description';
        descriptionElement.innerText = resource.description;

        detailsElement.appendChild(titleElement);
        detailsElement.appendChild(descriptionElement);

        resourceElement.appendChild(imageElement);
        resourceElement.appendChild(detailsElement);

        resourceList.appendChild(resourceElement);
    });
}

function filterResources(resources, query) {
    return resources.filter(resource => 
        resource.title.toLowerCase().includes(query.toLowerCase()) || 
        resource.description.toLowerCase().includes(query.toLowerCase())
    );
}

async function init() {
    let resources = await getResources();
    resources.sort((a, b) => a.title.localeCompare(b.title)); // Sort resources by title
    displayResources(resources);

    const searchBar = document.getElementById('search-bar');
    searchBar.addEventListener('input', () => {
        const query = searchBar.value;
        const filteredResources = filterResources(resources, query);
        displayResources(filteredResources);
    });
}

window.onload = init;