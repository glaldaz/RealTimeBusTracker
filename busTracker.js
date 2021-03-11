mapboxgl.accessToken = 'pk.eyJ1IjoiZ2xhbGRheiIsImEiOiJja20wdmx4eDMxOWt1Mm5wa2dsOWg4dnVrIn0.LV580RAeo92v-71bISiN6g';

var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/streets-v11',
	center: [-71.104081, 42.365554],
	zoom: 14
})

let markers = [];
makeMarkers();

async function run(){
	// get bus data    
	const locations = await getBusLocations();
	for (let i = 0; i < locations.length; i++) {

		// Update location of bus
		let newLocation = [locations[i].attributes.longitude, locations[i].attributes.latitude];
		markers[i].setLngLat(newLocation);

		// Update ocupancy status of buss
		markers[i]._element.style.className = 'marker';
	}

	// timer
	setTimeout(run, 15000);
}

//Make bus markers
async function makeMarkers() {
	const locations = await getBusLocations();
	for (let local of locations) {
		let newLocation = [local.attributes.longitude, local.attributes.latitude];
		let newMarker = new mapboxgl.Marker()
			.setLngLat(newLocation)
			.addTo(map);
		markers.push(newMarker);
	}
}
		
// Request bus data from MBTA
async function getBusLocations(){
	const url = 'https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip';
	const response = await fetch(url);
	const json     = await response.json();
	return json.data;
}
		
run();