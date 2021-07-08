import '../form/form.js';
import './map-labels.js';
import './popup-baloon.js';
import { getData } from '../server/server.js';
import { activateForms } from '../modes/active-mode.js';
import { setAddressField } from '../form/address.js';
import { showAlert } from '../utils/utils.js';
import { drawBalloon } from './popup-baloon.js';
import { sortingAds } from './filter.js';

const USER_MARKER_COORDS = L.latLng(35.6825, 139.75276);
const MAP_SCALE = 13;

const map =  L.map('map-canvas')
  .on('load', () => {
    activateForms();
  })

  .setView(USER_MARKER_COORDS, MAP_SCALE);

const markerGroup = L.layerGroup().addTo(map);

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

const setInitialMarkerPosition = () => {
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
    .addTo(markerGroup)
    .bindPopup(
      drawBalloon(value),
    );
};

const randomBalloons = function(ads) {
  markerGroup.clearLayers();
  sortingAds(ads)
    .forEach((value) => {
      createRandomMarker(value);
    });
};

getData( (rentalAds) => randomBalloons(rentalAds.slice(0, 10)), (message) => showAlert(message));

export {
  setInitialMarkerPosition,
  randomBalloons,
  USER_MARKER_COORDS
};
