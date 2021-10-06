var podmap = L.map('map-pod').setView([35, -98], 5);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution:
		'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(podmap);

var podMembersInfo = [
	{
		name: 'aaron',
		coordinates: [35.9, -98.5],
	},
	{
		name: 'akhil',
		coordinates: [34.9, -98.5],
	},
	{
		name: 'aman',
		coordinates: [33.9, -98.5],
	},
	{
		name: 'devyansh',
		coordinates: [32.9, -98.5],
	},
	{
		name: 'manasvi',
		coordinates: [31.9, -98.5],
	},
	{
		name: 'manisha',
		coordinates: [30.9, -98.5],
	},
	{
		name: 'naman',
		coordinates: [29.9, -98.5],
	},
	{
		name: 'priyaraj',
		coordinates: [28.9, -98.5],
	},
	{
		name: 'raunak',
		coordinates: [27.9, -98.5],
	},
];

/* Old code
var markerIcon = L.icon({
	iconUrl: '/assets/img/naman.jpg',
	iconSize: [50, 50], // size of the icon
	iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
	popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
	className: 'markerImage',
});*/

podMembersInfo.map(member => {
	var markerIcon = L.icon({
		iconUrl: `assets/img/${member.name}.jpg`,
		iconSize: [50, 50], // size of the icon
		iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
		popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
		className: 'markerImage',
	});

	L.marker([member.coordinates[0], member.coordinates[1], -98], {
		icon: markerIcon,
	}).addTo(podmap);
});
