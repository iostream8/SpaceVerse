const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
  if (this.readyState === this.DONE) {
    const planetList = document.getElementById('planetList');
    const response = JSON.parse(this.responseText);
    
    if (Array.isArray(response)) {
      planetList.innerHTML = ''; // Clear the existing planet information
      
      const searchInput = document.getElementById('searchInput').value.toLowerCase();
      
      response.forEach(planet => {
        if (planet.name.toLowerCase().includes(searchInput)) {
          const planetInfo = document.createElement('div');
          planetInfo.className = 'planet-info';
          planetInfo.innerHTML = `
            <h2>${planet.name}</h2>
            <p>${planet.description}</p>
            <p><strong>Volume:</strong> ${planet.basicDetails.volume}</p>
            <p><strong>Mass:</strong> ${planet.basicDetails.mass}</p>
            <p><strong>Source:</strong> ${planet.source}</p>
            <p><a href="${planet.wikiLink}" target="_blank">Learn more</a></p>
            <img src="${planet.imgSrc.img}" alt="${planet.imgSrc.imgDescription}">
            <hr>
          `;
          planetList.appendChild(planetInfo);
        }
      });
    }
  }
});

xhr.open('GET', 'https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planets/');
xhr.setRequestHeader('X-RapidAPI-Key', '2a81661d4dmsh37dea867ee59994p1ae41fjsn84667b0ecc39');
xhr.setRequestHeader('X-RapidAPI-Host', 'planets-info-by-newbapi.p.rapidapi.com');

const searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', function() {
  xhr.send();
});
