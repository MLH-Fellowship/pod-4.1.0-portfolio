var podmap = L.map('map-pod').setView([35, -98], 5);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(podmap);

var imageOfPodMembers = [
  //   'aman',
  //   'devyansh',
  //   'manasvi',
  //   'manisha',
  'naman',
  //   'priyaraj',
  //   'raunak',
  //   'swift',
  //   'hugo',
];

var markerIcon = L.icon({
  iconUrl: '/assets/img/naman.jpg',
  iconSize: [50, 50], // size of the icon
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
  className: 'markerImage',
});

imageOfPodMembers.map((name) => {
  (markerIcon.iconUrl = `/assets/img/${name}.jpg`),
    L.marker([35, -98], { icon: markerIcon }).addTo(podmap);
});
