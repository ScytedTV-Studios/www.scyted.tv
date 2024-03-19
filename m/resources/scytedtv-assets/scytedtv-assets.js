// IF YOU'RE IN THE CODE TRYING TO FIND A WAY TO BYPASS THE DISCORD ACCOUNT LIMITATIONS, YOU WILL MOST LIKELY FIND A WAY THROUGH THE SYSTEM VERY EASILY IF YOU KNOW WHAT YOU'RE DOING. THIS ISN'T MEANT TO BE THE MOST SECURE THING EVER. SO IF YOU FIND A WAY TO GET THROUGH IT, DON'T PRETEND YOU'RE ALMIGHTY, I LITERALLY SETUP IT UP LAZILY BECAUSE IT DOESN'T REALISTICALLY MATTER IF YOU FORCE ACCESS TO SCYTEDTV ASSETS.

function changeApiUrl(newUrl) {
    // Fetch the JSON data with the new URL
    fetch(newUrl)
        .then(response => response.json())
        .then(data => {
            // Clear the existing table content
            document.getElementById('userInfoBox').innerHTML = '';
            // Populate the table with the new data
            populateTable(data.items);
        })
        .catch(error => console.error('Error fetching JSON:', error));
}

// Table generation code from the first file
function populateTable(items) {
    const tableBody = document.getElementById('userInfoBox');

    items.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.fileName}</td>
            <td>
                <div class="preview-container">
                    ${getMediaPreview(item.fileLink, item.fileName)}
                    <div class="lightbox" onclick="closeLightbox()">
                        ${getLargeMediaPreview(item.fileLink, item.fileName)}
                        <span class="close" onclick="closeLightbox()">&times;</span>
                    </div>
                </div>
            </td>
            <td><a href="${item.fileDownloadLink}" download><button>Download</button></a></td>
        `;
        tableBody.appendChild(row);
    });
}

function getMediaPreview(src, fileName) {
    const ext = fileName.split('.').pop().toLowerCase();
    if (ext === 'mp4') {
        return `
  <video class="preview" width="50" height="50" onclick="openLightbox('${src}')">
    <source src="${src}" type="video/mp4">
    Your browser does not support the video tag.
  </video>`;
    } else if (ext.match(/(png|jpe?g|gif)$/)) {
        return `<img class="preview" src="${src}" alt="${fileName}" onclick="openLightbox('${src}')">`;
    } else {
        // Display a file icon for other file types
        return `<img class="preview" src="file-icon.png" alt="${fileName}" onclick="openLightbox('${src}')">`;
    }
}

function getLargeMediaPreview(src, fileName) {
    const ext = fileName.split('.').pop().toLowerCase();
    if (ext === 'mp4') {
        return `
  <video class="preview-large" controls>
    <source src="${src}" type="video/mp4">
    Your browser does not support the video tag.
  </video>`;
    } else if (ext.match(/(png|jpe?g|gif)$/)) {
        return `<img class="preview-large" src="${src}" alt="${fileName}">`;
    } else {
        // Display a file icon for other file types
        return `<img class="preview-large" src="file-icon.png" alt="${fileName}">`;
    }
}

function openLightbox(src) {
    const lightbox = document.querySelector('.lightbox');
    const media = lightbox.querySelector('.preview-large');
    media.src = src;
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    const lightbox = document.querySelector('.lightbox');
    const media = lightbox.querySelector('.preview-large');
    if (media.tagName === 'VIDEO') {
        media.pause();
    }
    lightbox.style.display = 'none';
}

// Fetch the JSON data
fetch('https://api.scyted.tv/assets-library/libraries/logos.json')
    .then(response => response.json())
    .then(data => populateTable(data.items))
    .catch(error => console.error('Error fetching JSON:', error));