
 // Define streetmap layer
 var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "streets-v11",
    accessToken: API_KEY
  });

  // Define a baseMaps object to hold our base layers
  let baseMaps = {
    "Street Map": streetmap
  };

// Create our map, giving it the streetmap and earthquakes layers to display on load
var myMap = L.map("map", {
    center: [ 37.09, -95.71 ],
    zoom: 5,
    layers: [streetmap]     //default selected layer
    });

// Add streetmap tile to map
streetmap.addTo(myMap);

// create earthquakes & faultlines layers;  attach data later on
var deforestation = new L.LayerGroup();

// Create overlay object to hold our overlay layer
let overlayMaps = {
  "Deforestation": deforestation
};

// Create a layer control
// Pass in our baseMaps and overlayMaps
// Set collapsed to false to show options in layer control
L.control.layers(baseMaps, overlayMaps, {
  collapsed: false
}).addTo(myMap);

// use this query url for global data
var queryAPI = "api/all";

// Perform a GET request to the query URL
d3.json("api/all").then((incomingData) => {
  let acState = incomingData[0].AC;
  console.log(acState)
  let amState = incomingData[0].AM;
  let apState =  incomingData[0].AP;
  let maState = incomingData[0].MA;
  let mtState =  incomingData[0].MT;
  let paState = incomingData[0].PA;
  let roState = incomingData[0].RO;
  let rrState = incomingData[0].RR;
  let toState = incomingData[0].TO;
  let years = incomingData[0]["Ano/Estados"];

  
});


// Conditionally color the circle markers
// function circleColor(depth) {
//     if (depth > 25) {
//         color = "red";
//     } else if (depth > 12.5) {
//         color = "orange";
//     } else if (depth > 6.25) {
//         color = "yellow";
//     } else {
//         color = "green";
//     }
//     return color; 
// };

// Referenced below sources:

// https://leafletjs.com/reference-1.7.1.html#geojson-option 
// https://leafletjs.com/examples/geojson/
// https://leafletjs.com/reference-1.7.1.html#geojson-option
// https://leafletjs.com/examples/geojson/ 
// https://www.usgs.gov/natural-hazards/earthquake-hazards
