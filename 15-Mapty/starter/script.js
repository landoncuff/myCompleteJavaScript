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


/*
TODO: (Workout, Running, Cy Class) Managing Workout Data: Creating classes

class Workout{
  date = new Date();
  id = (Date.now() + "").slice(-10); // getting the last 10 numbers
  constructor(coords, distance, duration) {
    this.coords = coords; // Array of latitude & longitude
    this.distance = distance;
    this.duration = duration;
  }
}

class Running extends Workout{
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
  }

  // Calculating pace
  calcPace(){
    // min/km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout{
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
  }

  // Calculating pace
  calcSpeed(){
    // min/km
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

 */

/*
TODO: (APP Class) Refactoring for Project Architecture

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

 */

/*
TODO: Creating a New Workout

class Workout{
  date = new Date();
  id = (Date.now() + "").slice(-10); // getting the last 10 numbers
  constructor(coords, distance, duration) {
    this.coords = coords; // Array of latitude & longitude
    this.distance = distance;
    this.duration = duration;
  }
}

class Running extends Workout{
  type = 'running';
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
  }

  // Calculating pace
  calcPace(){
    // min/km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout{
  type = 'cycling';
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
  }

  // Calculating pace
  calcSpeed(){
    // min/km
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

class App {
  #map;
  #mapEvent;
  #workouts = [];
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
    // Every will only return true if all inputs meet the condition
    const validInputs = (...inputs) => inputs.every(inp => Number.isFinite(inp));
    // Checking to see if value is a positive or negative
    const allPos = (...inputs) => inputs.every(inp => inp > 0);
    event.preventDefault();

    // Get data from form
    const type = inputType.value;
    const distance = +inputDistance.value; // converting to number
    const duration = +inputDuration.value;
    const {lat, lng} = this.#mapEvent.latlng;
    let workout;

    // if workout running, create running object
    if(type === 'running'){
      // Check if data is valid
      const cadence = +inputCadence.value;
      if(!validInputs(distance, duration, cadence) || !allPos(distance, duration, cadence)){
        return alert('Inputs have to be positive numbers!');
      }
      workout = new Running([lat, lng], distance, duration, cadence);
    }

    // if workout cycling, create cycling object
    if(type === 'cycling'){
      // Check if data is valid
      const elevation = +inputElevation.value;
      if(!validInputs(distance, duration, elevation) || !allPos(distance, duration)){
        return alert('Inputs have to be positive numbers!');
      }
      workout = new Cycling([lat, lng], distance, duration, elevation);
    }

    // Add new object to workout array
    this.#workouts.push(workout);

    // render workout on map as marker
    this.renderWorkoutMarker(workout);

    // render workout on list
    // hide form and clear input values
    inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = '';
  }

  renderWorkoutMarker(workout){
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`
        })
      )
      .setPopupContent('Workout')
      .openPopup();
  }
}

const app = new App();

 */









































































































































































































