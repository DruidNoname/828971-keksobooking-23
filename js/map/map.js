import './popup-baloon.js';
import './filter.js';
import { drawBalloon } from './popup-baloon.js';
import {
  INITIAL_COORDS,
  setAddressField
} from '../form/address.js';

const MAP_SCALE = 13;
const NUMBER_OF_MARKERS = 10;
const USER_MARKER_SIZE = 52;
const USER_MARKER_HALF = USER_MARKER_SIZE/2;
const OFFER_MARKER_SIZE = 40;
const OFFER_MARKER_HALF = OFFER_MARKER_SIZE/2;


const map = L.map('map-canvas');

const mapLoading = async () => {
  await map.setView(INITIAL_COORDS, MAP_SCALE);
};

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
    iconSize: [USER_MARKER_SIZE, USER_MARKER_SIZE],
    iconAnchor: [USER_MARKER_HALF, USER_MARKER_SIZE],
  },
);

const userMarker = L.marker(
  INITIAL_COORDS,
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
  userMarker.setLatLng(INITIAL_COORDS);
  map.setView(INITIAL_COORDS, MAP_SCALE);
};

const customOfferMarkerIcon = L.icon(
  {
    iconUrl: '../../img/pin.svg',
    iconSize: [OFFER_MARKER_SIZE, OFFER_MARKER_SIZE],
    iconAnchor: [OFFER_MARKER_HALF, OFFER_MARKER_SIZE],
  },
);

const createAdMarker = (value) => {
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

const createAdMarkers = function(ads) {
  ads.forEach((value) => {
    createAdMarker(value);
  });
};

const createInitialMarkers = function(ads) {
  createAdMarkers(ads.slice(0, NUMBER_OF_MARKERS));
};

const clearAdMarkers = () => {
  markerGroup.clearLayers();
};

export {
  INITIAL_COORDS,
  NUMBER_OF_MARKERS,
  mapLoading,
  setInitialMarkerPosition,
  createAdMarkers,
  createInitialMarkers,
  clearAdMarkers
};
