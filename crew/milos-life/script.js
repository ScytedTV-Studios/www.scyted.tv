fetch('credits.json')
      .then(response => response.json())
      .then(data => {
        const creditsDiv = document.getElementById('credits');
        for (const category in data) {
          if (data.hasOwnProperty(category)) {
            const categoryBox = document.createElement('div');
            categoryBox.classList.add('category-box');

            const categoryElement = document.createElement('div');
            categoryElement.classList.add('category');
            categoryElement.textContent = category;
            categoryBox.appendChild(categoryElement);

            const namesElement = document.createElement('div');
            data[category].forEach(name => {
              const nameElement = document.createElement('div');
              nameElement.textContent = name;
              namesElement.appendChild(nameElement);
            });
            categoryBox.appendChild(namesElement);
            creditsDiv.appendChild(categoryBox);
          }
        }
      });