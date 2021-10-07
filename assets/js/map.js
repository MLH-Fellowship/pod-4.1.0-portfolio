var podmap = L.map('map-pod').setView([35, -98], 1);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution:
		'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(podmap);

var podMembersInfo = [
	{
		name: 'akhil',
		coordinates: [20, 73],
		location: 'Silvassa, India',
		role: 'Fellow',
	},
	{
		name: 'aman',
		coordinates: [25, 85],
		location: 'Bihar, India',
		role: 'Fellow',
	},
	{
		name: 'devyansh',
		coordinates: [29, 76],
		location: 'Haryana, India',
		role: 'Fellow',
	},
	{
		name: 'manasvi',
		coordinates: [24, 75],
		location: 'Rajasthan, India',
		role: 'Fellow',
	},
	{
		name: 'manisha',
		coordinates: [22, 88],
		location: 'Kolkata, India',
		role: 'Fellow',
	},
	{
		name: 'naman',
		coordinates: [27.01, 76],
		location: 'Haryana, India',
		role: 'Fellow',
	},
	{
		name: 'priyaraj',
		coordinates: [28, 77],
		location: 'New Delhi, India',
		role: 'Fellow',
	},
	{
		name: 'raunak',
		coordinates: [20, 84],
		location: 'Odisha, India',
		role: 'Fellow',
	},
	{
		name: 'nishtha',
		coordinates: [27.03, 76],
		location: 'Haryana, India',
		role: 'Fellow',
	},
	{
		name: 'hugo',
		coordinates: [-35, -71],
		location: 'Talca, Chile',
		role: 'Fellow',
	},
	{
		name: 'apurva',
		coordinates: [21, 81],
		location: 'Chhattisgrah, India',
		role: 'Fellow',
	},
	{
		name: 'henok',
		coordinates: [50, 50],
		location: 'Pending',
		role: 'Fellow',
	},
	{
		name: 'rudransh',
		coordinates: [28, 77],
		location: 'Odisha, India',
		role: 'Fellow',
	},
	{
		name: 'yogesh',
		coordinates: [50, 50],
		location: 'Pending',
		role: 'Fellow',
	},
	{
		name: 'grace',
		coordinates: [35, -86],
		location: 'Tennessee, United States',
		role: 'Pod Leader',
	},
	{
		name: 'will',
		coordinates: [51, 0],
		location: 'London, United Kingdom',
		role: 'MLH Program Manager',
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
