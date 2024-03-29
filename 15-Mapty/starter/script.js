'use strict';
const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

/*
Final Code:
 */

class Workout{
  date = new Date();
  id = (Date.now() + "").slice(-10); // getting the last 10 numbers
  constructor(coords, distance, duration) {
    this.coords = coords; // Array of latitude & longitude
    this.distance = distance;
    this.duration = duration;
  }

  _setDescription(){
    // this.type is coming from the children class
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${months[this.date.getMonth()]} ${this.date.getDate()}`;
  }
}

class Running extends Workout{
  type = 'running';
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
    this._setDescription(); // Calling from parent class
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
    this._setDescription(); // Calling from parent class
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
  #mapZoomLevel = 13;
  #workouts = [];
  constructor() {
    // Get users position
    this._getPosition();
    // Loading database when page loads
    this._getLocalStorage();
    form.addEventListener('submit', this._newWorkout.bind(this));
    inputType.addEventListener('change', this._toggleElevationField.bind(this));
    containerWorkouts.addEventListener("click", this._moveToPopup.bind(this));
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

    this.#map = L.map('map').setView(coords, this.#mapZoomLevel); // Second param is the zoom

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.#map);

    this.#map.on('click', this._showForm.bind(this));

    this.#workouts.forEach(work => {
      this._renderWorkoutMarker(work); // Rendering the workout marker
    });
  }

  _showForm(leafMapEvent){
    this.#mapEvent = leafMapEvent;
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  _hideForm(){
    inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = '';
    form.style.display = 'none';
    form.classList.add('hidden');
    // Adding the form display method back to grid after 1 second
    setTimeout(() => form.style.display = 'grid', 1000);
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
    this._renderWorkoutMarker(workout);

    // render workout on list
    this._renderWorkout(workout);

    // hide form and clear input values
    this._hideForm();

    // Set localstorage to all workouts
    this._setLocalStorage();
  }

  _renderWorkoutMarker(workout){
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
      .setPopupContent(`${workout.type === 'running'? '🏃': '🚴‍'} ${workout.description}`)
      .openPopup();
  }

  // Rendering the workout
  _renderWorkout(workout){
    // DOM manipulation
    let html = `
       <li class="workout workout--${workout.type}" data-id="${workout.id}">
          <h2 class="workout__title">${workout.description}</h2>
          <div class="workout__details">
            <span class="workout__icon">${workout.type === 'running'? '🏃': '🚴‍'}️</span>
            <span class="workout__value">${workout.distance}</span>
            <span class="workout__unit">km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⏱</span>
            <span class="workout__value">${workout.duration}</span>
            <span class="workout__unit">min</span>
          </div>
    `;

    if(workout.type === 'running'){
      html += `
          <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.pace.toFixed(1)}</span>
            <span class="workout__unit">min/km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">🦶🏼</span>
            <span class="workout__value">${workout.cadence}</span>
            <span class="workout__unit">spm</span>
          </div>
        </li>
      `;
    }

    if(workout.type === 'cycling'){
      html += `
          <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.speed.toFixed(1)}</span>
            <span class="workout__unit">km/h</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⛰</span>
            <span class="workout__value">${workout.elevationGain}</span>
            <span class="workout__unit">m</span>
          </div>
        </li>
      `;
    }
    // inserting the HTML as sibling tag
    form.insertAdjacentHTML('afterend', html);
  }

  // Move user to the workout on click
  _moveToPopup(e){
    const workoutEl = e.target.closest('.workout');

    if(!workoutEl) return;

    // get workout data
    const workout = this.#workouts.find(work => work.id === workoutEl.dataset.id);

    // Method from Leaflet: params (coordinates, zoom level, object of options)
    this.#map.setView(workout.coords, this.#mapZoomLevel, {
      animate: true,
      pan: {
        duration: 1
      }
    });
  }

  // Creating new value in localstorage
  _setLocalStorage(){
    // Using local storage is an API from our browser we can use
    localStorage.setItem('workouts', JSON.stringify(this.#workouts));
  }

  _getLocalStorage(){
    const data = JSON.parse(localStorage.getItem('workouts'));

    if(!data) return;

    // setting the workout array to equal the data in the database
    this.#workouts = data;

    this.#workouts.forEach(work => {
      this._renderWorkout(work); // Rendering the workout
    });
  }

  // Delete items from local storage and reloading page
  reset(){
    localStorage.removeItem('workouts');
    // Reloading page
    location.reload();
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

/*
TODO: Rendering Workouts

class Workout{
  date = new Date();
  id = (Date.now() + "").slice(-10); // getting the last 10 numbers
  constructor(coords, distance, duration) {
    this.coords = coords; // Array of latitude & longitude
    this.distance = distance;
    this.duration = duration;
  }

  _setDescription(){
    // this.type is coming from the children class
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${months[this.date.getMonth()]} ${this.date.getDate()}`;
  }
}

class Running extends Workout{
  type = 'running';
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
    this._setDescription(); // Calling from parent class
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
    this._setDescription(); // Calling from parent class
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

  _hideForm(){
    inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = '';
    form.style.display = 'none';
    form.classList.add('hidden');
    // Adding the form display method back to grid after 1 second
    setTimeout(() => form.style.display = 'grid', 1000);
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
    this._renderWorkoutMarker(workout);

    // render workout on list
    this._renderWorkout(workout);

    // hide form and clear input values
    this._hideForm();
  }

  _renderWorkoutMarker(workout){
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
      .setPopupContent(`${workout.type === 'running'? '🏃': '🚴‍'} ${workout.description}`)
      .openPopup();
  }

  // Rendering the workout
  _renderWorkout(workout){
    // DOM manipulation
    let html = `
       <li class="workout workout--${workout.type}" data-id="${workout.id}">
          <h2 class="workout__title">${workout.description}</h2>
          <div class="workout__details">
            <span class="workout__icon">${workout.type === 'running'? '🏃': '🚴‍'}️</span>
            <span class="workout__value">${workout.distance}</span>
            <span class="workout__unit">km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⏱</span>
            <span class="workout__value">${workout.duration}</span>
            <span class="workout__unit">min</span>
          </div>
    `;

    if(workout.type === 'running'){
      html += `
          <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.pace.toFixed(1)}</span>
            <span class="workout__unit">min/km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">🦶🏼</span>
            <span class="workout__value">${workout.cadence}</span>
            <span class="workout__unit">spm</span>
          </div>
        </li>
      `;
    }

    if(workout.type === 'cycling'){
      html += `
          <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.speed.toFixed(1)}</span>
            <span class="workout__unit">km/h</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⛰</span>
            <span class="workout__value">${workout.elevationGain}</span>
            <span class="workout__unit">m</span>
          </div>
        </li>
      `;
    }
    // inserting the HTML as sibling tag
    form.insertAdjacentHTML('afterend', html);
  }
}

const app = new App();

 */

/*
TODO: Move to Marker On Click & Local Storage

class Workout{
  date = new Date();
  id = (Date.now() + "").slice(-10); // getting the last 10 numbers
  constructor(coords, distance, duration) {
    this.coords = coords; // Array of latitude & longitude
    this.distance = distance;
    this.duration = duration;
  }

  _setDescription(){
    // this.type is coming from the children class
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${months[this.date.getMonth()]} ${this.date.getDate()}`;
  }
}

class Running extends Workout{
  type = 'running';
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
    this._setDescription(); // Calling from parent class
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
    this._setDescription(); // Calling from parent class
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
  #mapZoomLevel = 13;
  #workouts = [];
  constructor() {
    // Get users position
    this._getPosition();
    // Loading database when page loads
    this._getLocalStorage();
    form.addEventListener('submit', this._newWorkout.bind(this));
    inputType.addEventListener('change', this._toggleElevationField.bind(this));
    containerWorkouts.addEventListener("click", this._moveToPopup.bind(this));
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

    this.#map = L.map('map').setView(coords, this.#mapZoomLevel); // Second param is the zoom

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.#map);

    this.#map.on('click', this._showForm.bind(this));

    this.#workouts.forEach(work => {
      this._renderWorkoutMarker(work); // Rendering the workout marker
    });
  }

  _showForm(leafMapEvent){
    this.#mapEvent = leafMapEvent;
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  _hideForm(){
    inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = '';
    form.style.display = 'none';
    form.classList.add('hidden');
    // Adding the form display method back to grid after 1 second
    setTimeout(() => form.style.display = 'grid', 1000);
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
    this._renderWorkoutMarker(workout);

    // render workout on list
    this._renderWorkout(workout);

    // hide form and clear input values
    this._hideForm();

    // Set localstorage to all workouts
    this._setLocalStorage();
  }

  _renderWorkoutMarker(workout){
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
      .setPopupContent(`${workout.type === 'running'? '🏃': '🚴‍'} ${workout.description}`)
      .openPopup();
  }

  // Rendering the workout
  _renderWorkout(workout){
    // DOM manipulation
    let html = `
       <li class="workout workout--${workout.type}" data-id="${workout.id}">
          <h2 class="workout__title">${workout.description}</h2>
          <div class="workout__details">
            <span class="workout__icon">${workout.type === 'running'? '🏃': '🚴‍'}️</span>
            <span class="workout__value">${workout.distance}</span>
            <span class="workout__unit">km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⏱</span>
            <span class="workout__value">${workout.duration}</span>
            <span class="workout__unit">min</span>
          </div>
    `;

    if(workout.type === 'running'){
      html += `
          <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.pace.toFixed(1)}</span>
            <span class="workout__unit">min/km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">🦶🏼</span>
            <span class="workout__value">${workout.cadence}</span>
            <span class="workout__unit">spm</span>
          </div>
        </li>
      `;
    }

    if(workout.type === 'cycling'){
      html += `
          <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.speed.toFixed(1)}</span>
            <span class="workout__unit">km/h</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⛰</span>
            <span class="workout__value">${workout.elevationGain}</span>
            <span class="workout__unit">m</span>
          </div>
        </li>
      `;
    }
    // inserting the HTML as sibling tag
    form.insertAdjacentHTML('afterend', html);
  }

  // Move user to the workout on click
  _moveToPopup(e){
    const workoutEl = e.target.closest('.workout');

    if(!workoutEl) return;

    // get workout data
    const workout = this.#workouts.find(work => work.id === workoutEl.dataset.id);

    // Method from Leaflet: params (coordinates, zoom level, object of options)
    this.#map.setView(workout.coords, this.#mapZoomLevel, {
      animate: true,
      pan: {
        duration: 1
      }
    });
  }

  // Creating new value in localstorage
  _setLocalStorage(){
    // Using local storage is an API from our browser we can use
    localStorage.setItem('workouts', JSON.stringify(this.#workouts));
  }

  _getLocalStorage(){
    const data = JSON.parse(localStorage.getItem('workouts'));

    if(!data) return;

    // setting the workout array to equal the data in the database
    this.#workouts = data;

    this.#workouts.forEach(work => {
      this._renderWorkout(work); // Rendering the workout
    });
  }

  // Delete items from local storage and reloading page
  reset(){
    localStorage.removeItem('workouts');
    // Reloading page
    location.reload();
  }
}

const app = new App();

 */





































































































































































































