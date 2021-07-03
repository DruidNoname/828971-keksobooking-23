import '../form/form.js';
import './map-labels/map-labels.js';
import './popup-baloon/popup-baloon.js';
import { getData } from '../server/server.js';
import { makeActive } from '../modes/active-mode.js';
import { setAddressField } from '../form/tools/address.js';
import { showAlert } from '../utils/utils.js';
import { drawBalloon } from './popup-baloon/popup-baloon.js';

const USER_MARKER_COORDS = L.latLng(35.6825, 139.75276);
const MAP_SCALE = 13;

const map =  L.map('map-canvas')
  .on('load', () => {
    makeActive();
  })

  .setView(USER_MARKER_COORDS, MAP_SCALE);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const userMarkerIcon = L.icon(
  {
    iconUrl: '../../img/main-pin.svg',
    iconSize: [52, 52],
    iconAnchor: [26, 52],
  });

const userMarker = L.marker(
  USER_MARKER_COORDS,
  {
    draggable: true,
    icon: userMarkerIcon,
  },
);

userMarker.on('moveend', (evt) => {
  const address = document.querySelector('#address');
  const coords = evt.target.getLatLng();

  setAddressField(coords, address);
});

userMarker.addTo(map);

const resetMapAndMarkerPosition = () => {
  userMarker.setLatLng(USER_MARKER_COORDS);
  map.setView(USER_MARKER_COORDS, MAP_SCALE);
};

const customOfferMarkerIcon = L.icon(
  {
    iconUrl: '../../img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

const createRandomMarker = (value) => {
  const customOffermarker = L.marker(
    {
      lat: value.location.lat,
      lng: value.location.lng,
    },
    {
      icon: customOfferMarkerIcon,
    },
  );

  customOffermarker
    .addTo(map)
    .bindPopup(
      drawBalloon(value),
    );
};


const randomBalloons = function(offers) {
  offers.forEach((value) => {
    createRandomMarker(value);
  });
};

getData( (rentalAds) => randomBalloons(rentalAds.slice(0, 10)), (message) => showAlert(message));

export {
  resetMapAndMarkerPosition,
  USER_MARKER_COORDS
};
