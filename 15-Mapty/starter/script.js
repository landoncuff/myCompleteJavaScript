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
 */

// Current Google Maps URL https://www.google.com/maps/@40.3623163,-111.8666752,14z
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
