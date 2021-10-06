var podmap = L.map('map-pod').setView([35, -98], 1);
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
		coordinates: [20, 73],
	},
	{
		name: 'aman',
		coordinates: [25, 85],
	},
	{
		name: 'devyansh',
		coordinates: [29, 76],
	},
	{
		name: 'manasvi',
		coordinates: [24, 75],
	},
	{
		name: 'manisha',
		coordinates: [22, 88],
	},
	{
		name: 'naman',
		coordinates: [27.01, 76],
	},
	{
		name: 'priyaraj',
		coordinates: [28, 77],
	},
	{
		name: 'raunak',
		coordinates: [20, 84],
	},
	{
		name: 'nishtha',
		coordinates: [27.03, 76],
	},
	{
		name: 'hugo',
		coordinates: [-35, -71],
	},
	{
		name: 'apurva',
		coordinates: [21, 81],
	},
	{
		name: 'henok',
		coordinates: [50, 50],
	},
	{
		name: 'rudransh',
		coordinates: [28, 77],
	},
	{
		name: 'yogesh',
		coordinates: [50, 50],
	},
	{
		name: 'grace',
		coordinates: [35, -86],
	},
	{
		name: 'will',
		coordinates: [51, 0],
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
		iconUrl: `/assets/img/${member.name}.jpg`,
		iconSize: [50, 50], // size of the icon
		iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
		popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
		className: 'markerImage',
	});

	L.marker([member.coordinates[0], member.coordinates[1]], {
		icon: markerIcon,
	}).addTo(podmap);
});
