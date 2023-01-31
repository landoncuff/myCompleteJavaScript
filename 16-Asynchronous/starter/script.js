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

// Professor Code:
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

/*
TODO: Event Loop in Practice

console.log('Test Start');
// Called after 0 seconds
setTimeout(() => console.log('0 sec timer'), 0);
// Promise that resolves right away
Promise.resolve('Resolved Promise 1').then(res => console.log(res));

// Making it take a long time
Promise.resolve('Resolve Promise 2').then(res => {
  for (let i=0; i < 1000000000; i++){}
  console.log(res)
});
console.log('Test end');

 */

/*
TODO: Building a simple Promise

// Creating an execute function
const lotteryPromise = new Promise(function (resolve, reject){
  console.log('Draw is happening')
  setTimeout(function (){
    // if the number matches, then resolve Promise
    if(Math.random() >= 0.5){
      resolve('You WIN!!!');
    }else{
      reject(new Error('You LOSE!!'));
    }
  }, 2000);
});

// Consuming the Promise
lotteryPromise
  .then(res => console.log(res)) // Will become the 'resolve' param
  .catch(err => console.log(err)); // Will become the 'reject' param



// Promisifying setTimeout
const wait = function (seconds){
  return new Promise(function (resolve){
    setTimeout(resolve, seconds * 1000);
  });
}

// Consuming new promise & chaining Promises
wait(1).then(() => {
  console.log('1 Second has passed');
  return wait(1);
}).then(() => {
  console.log('2 Seconds has passed');
  return wait(1);
}).then(() => {
  console.log('3 Seconds has passed');
  return wait(1);
}).then(() => {
  console.log('4 Seconds has passed');
  return wait(1);
});

// Creating a rejected & resolved promise
Promise.resolve('Timer is done').then(x => console.log(x));
Promise.reject(new Error('Timer is broken')).catch(err => console.log(err));

 */

/*
TODO: Promisifying the Geolocation API

const getPosition = function (){
  return new Promise(function (resolve, reject){
    // Geolocation API
    // navigator.geolocation
    //   .getCurrentPosition(position => resolve(position), err => reject(err));

    // Same code as above
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

// Code from Coding Challenge #1
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
}
const renderError = function (message){
  countriesContainer.insertAdjacentText('beforeend', message);
}
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
const whereAmI = function (){
  // New Promise we created
  getPosition().then(pos => {
    const {latitude: lat, longitude: lng} = pos.coords;
    return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
  })
    .then(response => {
      if(!response.ok){
        throw new Error(`The request for data can only make 3 request per second. Please give it time to load`);
      }
      return response.json()
    })
    .then(data => {
      console.log(`You are in ${data.city}, ${data.country}`);
      return getCountryData(data.country);
    })
    .catch(err => console.error(`Something went wrong. ${err.message}`))
}

btn.addEventListener('click', whereAmI);

 */

/*
TODO: Coding Challenge #2:

Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own.
  Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a
  new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image
  is done loading, append it to the DOM element with the 'images' class, and resolve the promise.
  The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event),
  reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image
  (HINT: Use the image element returned by the createImage promise to hide the current image.
   You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path.
  Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀

// Capturing the images container
const imgContainer = document.querySelector('.images');

let imgAtt;

// Step #1:
const createImage = function (imgPath){
  return new Promise(function (resolve, reject){
    const img = document.createElement('img');
    img.src = imgPath;
    img.addEventListener('load', function (e){
      // appending the element to the images class container
      imgContainer.append(img);
      resolve(img); // Resolving the promise with the img
    });

    // listening to the error message
    img.addEventListener('error', function (){
      reject(new Error('Image not found'));
    })
  });
}

const wait = function (seconds){
  return new Promise(function (resolve){
    setTimeout(resolve, seconds * 1000);
  });
}

// Step #2:
createImage('./img/img-1.jpg')
  .then(img => {
    console.log("Image was loaded");
    imgAtt = img;
    // Step #3:
    return wait(2);
  })
  .then(() => {
    console.log(imgAtt);
    // Step #4:
    imgAtt.style.display = 'none';
    return createImage('./img/img-2.jpg');
  })
  .then(img => {
    console.log("Image was loaded 2");
    imgAtt = img;
    // Step #5:
    return wait(2);
  })
  // Step #6:
  .then(() => {
    console.log(imgAtt);
    imgAtt.style.display = 'none';
    return createImage('./img/img-3.jpg');
  })
  .then(img => {
    console.log("Image was loaded 3");
    imgAtt = img;
    return wait(2);
  })
  .catch(err => console.log(err));

 */

/*
TODO: Consuming Promises with ASYNC/AWAIT

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
  countriesContainer.style.opacity = '1';
}

// Creating new Promise
const getPosition = function (){
  return new Promise(function (resolve, reject){
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

const whereAmI = async function (){
  const pos = await getPosition()
  const {latitude: lat, longitude: lng} = pos.coords;
  const geoLoc = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
  const geoData = await geoLoc.json();
  const res = await fetch(`https://restcountries.com/v2/name/${geoData.country}`);
 // Destructuring the value out of the array
  const [data] = await res.json();
  renderCountry(data);
}

whereAmI();
console.log('I am displayed first')

 */

/*
TODO: Error Handling with Try..Catch

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
  countriesContainer.style.opacity = '1';
}

const renderError = function (message){
  countriesContainer.insertAdjacentText('beforeend', message);
  // now handled in the finally method
  countriesContainer.style.opacity = '1';
}

// Creating new Promise
const getPosition = function (){
  return new Promise(function (resolve, reject){
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

const whereAmI = async function (){
  try {
    const pos = await getPosition()
    const {latitude: lat, longitude: lng} = pos.coords;
    const geoLoc = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if(!geoLoc.ok) throw new Error('Problem getting location');
    const geoData = await geoLoc.json();
    const res = await fetch(`https://restcountries.com/v2/name/${geoData.country}`);
    if(!res.ok) throw  new Error('Cant find country');
    // Destructuring the value out of the array
    const [data] = await res.json();
    renderCountry(data);
  }catch (err){
    console.log(err);
    renderError(`something went wrong ${err.message}`)
  }
}

whereAmI();
whereAmI();
whereAmI();
whereAmI();
console.log('I am displayed first');

 */

/*
TODO: Returning Values from Async Functions

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
  countriesContainer.style.opacity = '1';
}

const renderError = function (message){
  countriesContainer.insertAdjacentText('beforeend', message);
  // now handled in the finally method
  countriesContainer.style.opacity = '1';
}

// Creating new Promise
const getPosition = function (){
  return new Promise(function (resolve, reject){
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

const whereAmI = async function (){
  try {
    const pos = await getPosition()
    const {latitude: lat, longitude: lng} = pos.coords;
    const geoLoc = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if(!geoLoc.ok) throw new Error('Problem getting location');
    const geoData = await geoLoc.json();

    const res = await fetch(`https://restcountries.com/v2/name/${geoData.country}`);
    if(!res.ok) throw  new Error('Cant find country');
    // Destructuring the value out of the array
    const [data] = await res.json();

    renderCountry(data);

    return `You are in ${geoData.city}, ${geoData.country}`;
  }catch (err){
    console.log(err);
    renderError(`something went wrong ${err.message}`);

    // Reject promise that is returned from async function
    throw err;
  }
}
console.log('1: Will get location');
// Get value of the return value from the async function
// whereAmI()
//   .then(city => console.log(`2: ${city}`))
//   .catch(err => console.error(`2: ${err.message}`))
//   .finally(() => console.log('3: Finished getting location'));

(async function(){
  try {
    const city = await whereAmI();
    console.log(`2: ${city}`);
  }catch (e) {
    console.log(`2: ${e.message}`);
  }
  console.log('3: Finished getting location')
})();

 */

/*
TODO: Running Promises in Parallel

const getJSON = function (url, errorMsg = 'Something went wrong'){
  return fetch(url).then(res => {
    if(!res.ok) throw new Error(`${errorMsg} {${res.status}`);

    return res.json();
  })
}
const get3Countries = async function(c1, c2, c3){
  try {
    // Destructuring returned data
    // const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);
    // const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`);
    // console.log([data1.captial, data2.captial, data3.captial]);

    const promiseArray = [
      getJSON(`https://restcountries.com/v2/name/${c1}`),
      getJSON(`https://restcountries.com/v2/name/${c2}`),
      getJSON(`https://restcountries.com/v2/name/${c3}`)
    ];
    const data = await Promise.all(promiseArray);

    console.log(data.map(d => d[0].capital));

  }catch (e) {
    console.error(e);
  }
}

get3Countries('USA', 'portugal', 'canada');

 */

/*
TODO: Other Promise Combinators:

const getJSON = function (url, errorMsg = 'Something went wrong'){
  return fetch(url).then(res => {
    if(!res.ok) throw new Error(`${errorMsg} {${res.status}`);

    return res.json();
  })
}

// // Promise.race:
// (async function(){
//   const promiseArray = [
//     getJSON(`https://restcountries.com/v2/name/italy`),
//     getJSON(`https://restcountries.com/v2/name/egypt`),
//     getJSON(`https://restcountries.com/v2/name/mexico`)
//   ];
//   const race = await Promise.race(promiseArray);
//   console.log(race[0]);
// })();

const timeout = function (sec){
  return new Promise(function (_, reject){
    setTimeout(function (){
      reject(new Error('Request took too long!'));
    }, sec * 1000)
  });
}

Promise.race([
  getJSON(`https://restcountries.com/v2/name/italy`),
  timeout(3)
])
  .then(res => console.log(res[0]))
  .catch(err => console.error(err));

// Promise.allSettled
Promise.allSettled([
  Promise.resolve('Success'),
  Promise.resolve('Success 2'),
  Promise.reject('Error'),
]).then(res => console.log(res));
// Will throw an error because one rejects
// Promise.all([
//   Promise.resolve('Success'),
//   Promise.resolve('Success 2'),
//   Promise.reject('Error'),
// ]).then(res => console.log(res));


Promise.any([
  Promise.resolve('Success'),
  Promise.resolve('Success 2'),
  Promise.reject('Error'),
]).then(res => console.log(res));

 */

/*
TODO: Coding Challenge #3
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await
  (only the part where the promise is consumed). Compare the two versions, think about the big differences,
    and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage'
  function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 😉
5. Add the 'paralell' class to all the images (it has some CSS styles).

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.

GOOD LUCK 😀
 */



const imgContainer = document.querySelector('.images');
let imgAtt;

const createImage = function (imgPath){
  return new Promise(function (resolve, reject){
    const img = document.createElement('img');
    img.src = imgPath;
    img.addEventListener('load', function (e){
      // appending the element to the images class container
      imgContainer.append(img);
      resolve(img); // Resolving the promise with the img
    });

    // listening to the error message
    img.addEventListener('error', function (){
      reject(new Error('Image not found'));
    })
  });
}

const wait = function (seconds){
  return new Promise(function (resolve){
    setTimeout(resolve, seconds * 1000);
  });
}

// Part 1:
const loadNPause = async function(){
  try{
    const img1 = await createImage('./img/img-1.jpg');
    imgAtt = img1;
    await wait(2);
    imgAtt.style.display = 'none';
    const img2 = await createImage('./img/img-2.jpg');
    imgAtt = img2;
    await wait(2);
    imgAtt.style.display = 'none';
    const img3 = await createImage('./img/img-3.jpg');
    imgAtt = img3;
  }catch (e) {
    console.error(e);
  }
}
loadNPause();

// Part 2:
const imgArr = [
  './img/img-1.jpg',
  './img/img-2.jpg',
  './img/img-3.jpg'
];

const loadAll = async function(imgArr){
  try {
    const imgs = imgArr.map(async img => await createImage(img));
    const imgsEl = await Promise.all(imgs);
    console.log(imgsEl);
    imgsEl.forEach(img => img.classList.add('parallel'));
  } catch (err) {
    console.error(err);
  }
}

loadAll(imgArr);





























































































