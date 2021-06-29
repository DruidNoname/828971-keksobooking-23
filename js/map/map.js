import '../utils/utils.js';
import '../server/server.js';
import './filter/filter.js';
import './map-labels/map-labels.js';
import './popup-baloon/popup-baloon.js';
import { points } from '../data/data.js';
import { setActiveMode } from '../form/form.js';
import { setAddressField } from '../form/tools/address.js';
import { randomBalloons } from './popup-baloon/popup-baloon.js';

const map =  L.map('map-canvas')
  .on('load', () => {
    setActiveMode();
  })

  .setView({
    lat: 35.6825,
    lng: 139.75276,
  }, 13);

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
  {
    lat: 35.6825,
    lng: 139.75276,
  },
  {
    draggable: true,
    icon: userMarkerIcon,
  },
);

const customOfferMarkerIcon = L.icon(
  {
    iconUrl: '../../img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

userMarker.on('moveend', (evt) => {
  const address = document.querySelector('#address');
  const coords = evt.target.getLatLng();

  setAddressField(coords, address);
});

userMarker.addTo(map);

points.forEach(({lat, lng}, index) => {
  const customOffermarker = L.marker(
    {
      lat,
      lng,
    },
    {
      icon: customOfferMarkerIcon,
    },
  );

  customOffermarker
    .addTo(map)
    .bindPopup(
      randomBalloons()[index],
    );
});
