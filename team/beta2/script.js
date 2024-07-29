document.addEventListener("DOMContentLoaded", function() {
  const grid = document.getElementById('resource-grid');
  const searchInput = document.querySelector('.search-bar');
  const noResultsMessage = document.createElement('div');
  noResultsMessage.classList.add('no-results');
  noResultsMessage.textContent = "We can't find what you're looking for.";

  // Fetch categories and people data
  Promise.all([
      fetch('categories.json').then(response => response.json()),
      fetch('people.json').then(response => response.json())
  ]).then(([categories, people]) => {
      // Create a map of category IDs to category names
      const categoryMap = new Map(categories.map(category => [category.id, category.name]));

      // Create a map of categories to people
      const peopleByCategory = new Map();
      people.forEach(person => {
          person.categories.forEach(categoryId => {
              if (!peopleByCategory.has(categoryId)) {
                  peopleByCategory.set(categoryId, []);
              }
              peopleByCategory.get(categoryId).push(person);
          });
      });

      function filterResources(searchText) {
          grid.innerHTML = ''; // Clear existing content
          let hasResults = false;

          categories.forEach(category => {
              const categoryId = category.id;
              const categoryMembers = peopleByCategory.get(categoryId) || [];
              const filteredMembers = categoryMembers.filter(member =>
                  member.name.toLowerCase().includes(searchText.toLowerCase()) ||
                  member.description.toLowerCase().includes(searchText.toLowerCase())
              );

              if (filteredMembers.length > 0) {
                  hasResults = true;

                  const categoryHeader = document.createElement('h2');
                  categoryHeader.textContent = category.name;
                  categoryHeader.classList.add('category-header');
                  grid.appendChild(categoryHeader);

                  const peopleGrid = document.createElement('div');
                  peopleGrid.classList.add('people-grid');
                  grid.appendChild(peopleGrid);

                  filteredMembers.forEach(member => {
                      const resourceItem = document.createElement('div');
                      resourceItem.classList.add('resource-item');

                      const imageLink = document.createElement('a');
                      imageLink.href = member.resourceUrl;
                      imageLink.classList.add('image-link');

                      const image = document.createElement('img');
                      image.classList.add('resource-image');
                      image.src = member.imageUrl;
                      image.alt = member.name;
                      imageLink.appendChild(image);

                      const details = document.createElement('div');
                      details.classList.add('resource-details');

                      const title = document.createElement('div');
                      title.classList.add('resource-title');
                      title.textContent = member.name;

                      const description = document.createElement('div');
                      description.classList.add('description');
                      description.textContent = member.description;

                      details.appendChild(title);
                      details.appendChild(description);
                      resourceItem.appendChild(imageLink);
                      resourceItem.appendChild(details);

                      peopleGrid.appendChild(resourceItem);
                  });
              }
          });

          if (!hasResults) {
              grid.appendChild(noResultsMessage);
          }
      }

      // Initial load
      filterResources('');

      // Handle search input
      searchInput.addEventListener('input', function() {
          filterResources(searchInput.value);
      });
  });
});
