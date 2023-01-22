'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

/*
getCountry AJAX call before helper function
const getCountryData = function (country){
  // Country 1
  const request = fetch(`https://restcountries.com/v2/name/${country}`)
    // First param is success, second param is error (err => alert(err))
    .then((response) => {
      if(!response.ok){
        throw new Error(`Something went wrong (${response.status})`);
      }
      return response.json();
    })
    .then((data) => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      if(!neighbour) return;
      // Country 2
      return fetch(`https://restcountries.com/v2/alpha/${neighbour}`)
    })
    .then(response => {
      if(!response.ok){
        throw new Error(`Country not found (${response.status})`);
      }
      return response.json()
    })
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.error(`${err} first error`);
      renderError(`Something went wrong!! ${err.message}`);
    }).finally(() =>{
      countriesContainer.style.opacity = "1"
    });
}
 */

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

 */

/*
TODO: Promises and the Fetch API

// Instead of the AJAX call from other examples, we use the fetch method
const request = fetch('https://restcountries.com/v2/name/usa');
console.log(request); // Returns a Promise

 */

/*
TODO: Consuming Promises

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

const getCountryData = function (country){
  const request = fetch(`https://restcountries.com/v2/name/${country}`)
    .then((response) => response.json())
    .then((data) => renderCountry(data[0])
  );
}

getCountryData('usa');
getCountryData('portugal');

 */

/*
TODO: Chaining Promises
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

const getCountryData = function (country){
  // Country 1
  const request = fetch(`https://restcountries.com/v2/name/${country}`)
    .then((response) => response.json())
    .then((data) => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      if(!neighbour) return;
      // Country 2
      return fetch(`https://restcountries.com/v2/alpha/${neighbour}`)
    })
    .then(response => response.json())
    .then(data => renderCountry(data, 'neighbour'));
}

getCountryData('usa');
// getCountryData('portugal');

 */

/*
TODO: Handling Rejected Promises
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
  // now handled in the finally method
  // countriesContainer.style.opacity = 1;
}
const renderError = function (message){
  countriesContainer.insertAdjacentText('beforeend', message);
  // now handled in the finally method
  // countriesContainer.style.opacity = '1';
}

const getCountryData = function (country){
  // Country 1
  const request = fetch(`https://restcountries.com/v2/name/${country}`)
    // First param is success, second param is error (err => alert(err))
    .then((response) => response.json())
    .then((data) => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      if(!neighbour) return;
      // Country 2
      return fetch(`https://restcountries.com/v2/alpha/${neighbour}`)
    })
    .then(response => response.json())
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.error(`${err} first error`);
      renderError(`Something went wrong!! ${err.message}`);
    }).finally(() =>{
      countriesContainer.style.opacity = "1"
    });
}

btn.addEventListener('click', function (e){
  getCountryData('usa');
});

 */

/*
TODO: Throwing Errors Manually

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
  // now handled in the finally method
  // countriesContainer.style.opacity = 1;
}
const renderError = function (message){
  countriesContainer.insertAdjacentText('beforeend', message);
  // now handled in the finally method
  // countriesContainer.style.opacity = '1';
}

// Setting default message
const getJSON = function (url, errorMsg = 'Something went wrong'){
  return fetch(url).then(response => {
    if(!response.ok){
      throw new Error(`${errorMsg} (${response.status})`);
    }
    return response.json();
  });
}

const getCountryData = function (country){
  // Country 1
  getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
    .then((data) => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      if(!neighbour) throw new Error('No neighbour found!');

      // Country 2
      return getJSON(`https://restcountries.com/v2/alpha/${neighbour}`, 'Country not found');
    })
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      renderError(`Something went wrong!! ${err.message}`);
    }).finally(() =>{
      countriesContainer.style.opacity = "1"
    });
}

btn.addEventListener('click', function (e){
  getCountryData('usa');
});

getCountryData('djakfjdsd'); // throws 404 error

 */

/*
TODO: Coding Challenge #1

In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates.
For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng)
  (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a
  meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
  The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json.
  Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the
  provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403.
  This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error
  to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country.
  So take the relevant attribute from the geocoding API result,
  and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture
  (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
 */

// Code from lecture
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
  // now handled in the finally method
  // countriesContainer.style.opacity = 1;
}
const renderError = function (message){
  countriesContainer.insertAdjacentText('beforeend', message);
  // now handled in the finally method
  // countriesContainer.style.opacity = '1';
}

// Setting default message
const getJSON = function (url, errorMsg = 'Something went wrong'){
  return fetch(url).then(response => {
    if(!response.ok){
      throw new Error(`${errorMsg} (${response.status})`);
    }
    return response.json();
  });
}

const getCountryData = function (country){
  // Country 1
  getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
    .then((data) => {
     return renderCountry(data[0]);
    })
    .catch(err => {
      renderError(`Something went wrong!! ${err.message}`);
    }).finally(() =>{
    countriesContainer.style.opacity = "1"
  });
}

// Step #1: Create a function that takes latitude & Longitude
const whereAmI = function (lat, lng){
  // Step #2: Use fetch API to figure out where the user is located
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(response => {
      // Step #5: Throw an error message manually
      if(!response.ok){
        throw new Error(`The request for data can only make 3 request per second. Please give it time to load`);
      }
     return response.json()
    })
    .then(data => {
      // Step #3: Look through data once we have it and log message to console
      console.log(`You are in ${data.city}, ${data.country}`);
      // Step #6 & #7: Send country through country API
      return getCountryData(data.country.toLowerCase());
    })
    // Step #4: Chain a catch to throw errors
    .catch(err => console.error(`Something went wrong. ${err.message}`))
}

whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);


/* Professor Code:
const whereAmI2 = function (lat, lng){
  // Step #2: Use fetch API to figure out where the user is located
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(response => {
      // Step #5: Throw an error message manually
      if(!response.ok){
        throw new Error(`The request for data can only make 3 request per second. Please give it time to load`);
      }
      return response.json()
    })
    .then(data => {
      // Step #3: Look through data once we have it and log message to console
      console.log(`You are in ${data.city}, ${data.country}`);
      // Step #6 & #7: Send country through country API
      return fetch(`https://restcountries.com/v2/name/${data.country}`);
    })
    // Step #6
    .then(res => {
      if(!res.ok){
        throw new Error(`Country not found ${res.status}`);
      }
      return res.json();
    })
    .then(data => renderCountry(data[0]))
    // Step #4: Chain a catch to throw errors
    .catch(err => console.error(`Something went wrong. ${err.message}`))
}

whereAmI2(52.508, 13.381);

 */
































































































































