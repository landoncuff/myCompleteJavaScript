'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

/*
TODO: Refactoring for Project Architecture:
 */

class App {
  #map;
  #mapEvent;
  constructor() {
    this._getPosition();
    form.addEventListener('submit', this._newWorkout.bind(this));
    inputType.addEventListener('change', this._toggleElevationField.bind(this));
  }

  _getPosition(){
    navigator.geolocation.getCurrentPosition(this._loadMap.bind(this), function (){
      alert('Could not get your current location');
    });
  }

  _loadMap(position){
    const {latitude} = position.coords;
    const {longitude} = position.coords;
    const coords = [latitude, longitude];

    this.#map = L.map('map').setView(coords, 13); // Second param is the zoom

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.#map);

    this.#map.on('click', this._showForm.bind(this));
  }

  _showForm(leafMapEvent){
    this.#mapEvent = leafMapEvent;
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  _toggleElevationField(){
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _newWorkout(event){
    event.preventDefault();
    inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = '';

    const {lat, lng} = this.#mapEvent.latlng;
    L.marker([lat, lng])
      .addTo(this.#map)
      .bindPopup(L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: 'running-popup'
        })
      ).setPopupContent('Workout')
      .openPopup();
  }
}

const app = new App();


/*
TODO: Geolocation API

// Current Google Maps URL https://www.google.com/maps/@40.3623163,-111.8666752,14z
navigator.geolocation.getCurrentPosition(function (position){
  // using destructuring to put values into an object
  const {latitude} = position.coords;
  const {longitude} = position.coords;
  console.log(`https://www.google.com/maps/@${latitude},${longitude},14z`);

  const coords = [latitude, longitude];
}, function (){
  alert('Could not get your current location');
});

 */

/*
TODO: Displaying a Map using Leaflet Library
navigator.geolocation.getCurrentPosition(function (position){
  // using destructuring to put values into an object
  const {latitude} = position.coords;
  const {longitude} = position.coords;
  console.log(`https://www.google.com/maps/@${latitude},${longitude},14z`);

  const coords = [latitude, longitude];

  const map = L.map('map').setView(coords, 13); // Second param is the zoom

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  L.marker(coords).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();

}, function (){
  alert('Could not get your current location');
});

 */

/*
TODO: Displaying a Map Marker:
navigator.geolocation.getCurrentPosition(function (position){
  // using destructuring to put values into an object
  const {latitude} = position.coords;
  const {longitude} = position.coords;
  // console.log(`https://www.google.com/maps/@${latitude},${longitude},14z`);

  const coords = [latitude, longitude];

  const map = L.map('map').setView(coords, 13); // Second param is the zoom

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  // Creating an event on the map
  map.on('click', function (leafMapEvent){
    const {lat, lng} = leafMapEvent.latlng;
    L.marker([lat, lng])
      .addTo(map)
      .bindPopup(L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false, // Keeping the popup open
          closeOnClick: false, // Keeps popup open when the user clicks map
          className: 'running-popup' // Style according to our needs
        })
      ).setPopupContent('Workout').openPopup();
    console.log(lat, lng);
  });
}, function (){
  alert('Could not get your current location');
});

 */

/*
TODO: Rendering Workout Input Forms

let map;
let mapEvent;
navigator.geolocation.getCurrentPosition(function (position){
  // using destructuring to put values into an object
  const {latitude} = position.coords;
  const {longitude} = position.coords;
  const coords = [latitude, longitude];

  map = L.map('map').setView(coords, 13); // Second param is the zoom

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  // Handling clicks on maps
  map.on('click', function (leafMapEvent){
    mapEvent = leafMapEvent;
    form.classList.remove('hidden') // Show form
    // Setting input distance the focus when form loads
    inputDistance.focus();
  });
}, function (){
  alert('Could not get your current location');
});

// Creating an event listener from the user input
form.addEventListener('submit', function (event){
  event.preventDefault();
  // Clearing all input fields
  inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = '';

  // Will create/display marker
  const {lat, lng} = mapEvent.latlng;
  L.marker([lat, lng])
    .addTo(map)
    .bindPopup(L.popup({
        maxWidth: 250,
        minWidth: 100,
        autoClose: false,
        closeOnClick: false,
        className: 'running-popup'
      })
    ).setPopupContent('Workout')
    .openPopup();
});

// Toggling the input field depending on cycling or running
inputType.addEventListener('change', function (e){
  // Getting the closest parent and toggling the hidden class
  inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
  inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
});

 */

















































































































































































































