document.addEventListener("DOMContentLoaded", function() {
    // Fetch resource data from JSON file (Assuming resources.json is the name)
    fetch('stories.json')
      .then(response => response.json())
      .then(data => {
        const grid = document.getElementById('resource-grid');
        const searchInput = document.querySelector('.search-bar');
        const noResultsMessage = document.createElement('div');
        noResultsMessage.classList.add('no-results');
        noResultsMessage.textContent = "We can't find what you're looking for.";
  
        // Function to filter resources based on search input
        function filterResources(searchText) {
          const filteredData = data.filter(resource => 
            resource.title.toLowerCase().includes(searchText.toLowerCase()) ||
            resource.description.toLowerCase().includes(searchText.toLowerCase())
          );
  
          // Sort filteredData alphabetically by resource title
          filteredData.sort((a, b) => a.title.localeCompare(b.title));
          
          // Animate removal of items
          grid.classList.add('fadeOut');
          
          // Remove previous no results message
          const prevNoResultsMessage = grid.querySelector('.no-results');
          if (prevNoResultsMessage) {
            prevNoResultsMessage.remove();
          }
  
          setTimeout(() => {
            // Clear existing resources
            grid.innerHTML = '';
            
            // Render filtered resources if any, otherwise show no results message
            if (filteredData.length > 0) {
              filteredData.forEach(resource => {
                const resourceItem = document.createElement('div');
                resourceItem.classList.add('resource-item');
  
                const imageLink = document.createElement('a');
                imageLink.href = resource.resourceUrl;
                imageLink.classList.add('image-link');
  
                const image = document.createElement('img');
                image.classList.add('resource-image');
                image.src = resource.imageUrl;
                image.alt = resource.title;
                imageLink.appendChild(image);
  
                const details = document.createElement('div');
                details.classList.add('resource-details');
  
                const title = document.createElement('div');
                title.classList.add('resource-title');
                title.textContent = resource.title;
  
                const description = document.createElement('div');
                description.classList.add('description');
                description.textContent = resource.description;
  
                details.appendChild(title);
                details.appendChild(description);
  
                if (resource.description && resource.description.length > 100) {
                  const moreDetails = document.createElement('div');
                  moreDetails.classList.add('more-details');
                  moreDetails.innerHTML = `More details <span class="arrow">&#9660;</span>`;
                  moreDetails.addEventListener('click', function() {
                    if (!description.classList.contains('expanded')) {
                      description.classList.add('expanded');
                      moreDetails.innerHTML = `Less details <span class="arrow">&#9650;</span>`;
                      description.style.maxHeight = description.scrollHeight + 'px';
                    } else {
                      description.classList.remove('expanded');
                      moreDetails.innerHTML = `More details <span class="arrow">&#9660;</span>`;
                      description.style.maxHeight = '100px';
                    }
                  });
                  details.appendChild(moreDetails);
                }
  
                resourceItem.appendChild(imageLink);
                resourceItem.appendChild(details);
  
                grid.appendChild(resourceItem);
              });
  
              // Adjust size of grid items if there's only one item
              if (filteredData.length === 1) {
                grid.classList.add('single-item');
              } else {
                grid.classList.remove('single-item');
              }
            } else {
              grid.appendChild(noResultsMessage);
            }
  
            // Animate addition of items
            grid.classList.remove('fadeOut');
            grid.classList.add('fadeIn');
          }, 200); // Wait for removal animation to finish before adding new items
        }
        
        // Event listener for input in search bar
        searchInput.addEventListener('input', function() {
          filterResources(this.value);
        });
        
        // Initial rendering of resources
        filterResources('');
      })
      .catch(error => console.error('Error fetching resources:', error));
  });  