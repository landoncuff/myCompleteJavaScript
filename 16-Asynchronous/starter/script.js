'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

/*
TODO: XML HTTP Request

// Old school way to do AJAX call
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
// Will send off the request (getting the data)
  request.send();

// We need to wait for the data to return (asynchronous)
  request.addEventListener('load', function () {
    // Convert JSON to string
    const [data] = JSON.parse(this.responseText);
    const html = `
        <article class="country">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
          </div>
        </article>
  `;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
}

// Two AJAX calls happening at once
// Data can appear at different order because data will form at a different time
getCountryData('usa');
getCountryData('portugal');
// getCountryData('mexico');
// getCountryData('germany');

 */


/*
TODO: AJAX callback sequence (Callback Hell)
 */


const renderCountry = function (data, className = ""){
  const html = `
        <article class="country ${className}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
          </div>
        </article>
  `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
}

const getCountryDataAndNeighbour = function (country) {
  // AJAX call, country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    // Convert JSON to string
    const [data] = JSON.parse(this.responseText); // "this" is the request
    renderCountry(data);

    // get neighbour country 2
    const [neighbour] = data.borders;

    if(!neighbour) return;

    // AJAX call, country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
    request2.send();
    request2.addEventListener('load', function (){
      const data2 = JSON.parse(this.responseText); // "this" is the request
      renderCountry(data2, "neighbour");
    });
  });
}

getCountryDataAndNeighbour('usa');
// getCountryDataAndNeighbour('portugal');























































































































































