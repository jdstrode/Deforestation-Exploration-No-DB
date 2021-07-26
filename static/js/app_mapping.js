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
  center: [ -10.16, -55.12 ],
  zoom: 4,
  layers: [streetmap]     //default selected layer
  });

// Add streetmap tile to map
streetmap.addTo(myMap);

//NEW ADDITIONS

let deforestation = new L.LayerGroup();

let overlayMaps = {
  "Deforestation": deforestation
};

L.control.layers(baseMaps, overlayMaps, {
  collapsed: false
}).addTo(myMap);

function init() {
  d3.json("../static/data/mapfile.json").then((incomingData) => {
      console.log(incomingData)
      let yearlyDeforestData = Object.values(incomingData["2004"]);
      console.log(yearlyDeforestData);
      let latitudes = Object.values(incomingData.Latitude);
      console.log(latitudes);
      let longitudes = Object.values(incomingData.Longitude);
      console.log(longitudes);
      let state = Object.values(incomingData.States);
      console.log(state);

      for (var i = 0; i < longitudes.length-1; i++) {

      let circle = L.circle([latitudes[i],longitudes[i]], {
        // color: 'red',
        // fillColor: '#f03',
        color: circleColor(yearlyDeforestData[i]),
        fillOpacity: 0.5,
        radius: yearlyDeforestData[i] * 50
      // }).addTo(myMap);

  }).bindPopup("<h4> State: " + state[i] + "</h4> <hr> <h5>Deforestation: " + yearlyDeforestData[i] + "</h5>").addTo(deforestation);

  deforestation.addTo(myMap);
  
}});
}

init();



d3.selectAll("#selDataset").on("change", getData);

function getData() {

  let dropdownMenu = d3.select("#selDataset");
  var selector = dropdownMenu.property("value");

  console.log(selector)

  var data = [];
  console.log(data);
  deforestation.clearLayers();
    d3.json("../static/data/mapfile.json").then((incomingData) => {
      console.log(incomingData)
        let yearlyDeforestData = Object.values(incomingData["2004"]);
        console.log(yearlyDeforestData);
        let latitudes = Object.values(incomingData.Latitude);
        console.log(latitudes);
        let longitudes = Object.values(incomingData.Longitude);
        console.log(longitudes);
        let state = Object.values(incomingData.States);
        console.log(state);

        if (selector == "2004") {
          data = Object.values(incomingData["2004"]);
          console.log(data);
        }
        else if (selector == "2005") {
            data = Object.values(incomingData["2005"]);
        }
        else if (selector == "2006") {
            data =  Object.values(incomingData["2006"]);
        }
        else if (selector == "2007") {
            data =  Object.values(incomingData["2007"]);
        }
        else if (selector == "2008") {
            data =  Object.values(incomingData["2008"]);
        }
        else if (selector == "2009") {
            data =  Object.values(incomingData["2009"]);
        }
        else if (selector == "2010") {
            data =  Object.values(incomingData["2010"]);
        }
        else if (selector == "2011") {
            data =  Object.values(incomingData["2011"]);
        }
        else if (selector == "2012") {
            data =  Object.values(incomingData["2012"]);
        }
        else if (selector == "2013") {
            data =  Object.values(incomingData["2013"]);
        }
        else if (selector == "2014") {
            data =  Object.values(incomingData["2014"]);
        }
        else if (selector == "2015") {
            data =  Object.values(incomingData["2015"]);
        }
        else if (selector == "2016") {
            data =  Object.values(incomingData["2016"]);
        }
        else if (selector == "2017") {
            data =  Object.values(incomingData["2017"]);
        }
        else if (selector == "2018") {
            data =  Object.values(incomingData["2018"]);
        }
        else if (selector == "2019") {
            data =  Object.values(incomingData["2019"]);
        }

        for (var i = 0; i < longitudes.length-1; i++) {

        let circle = L.circle([latitudes[i],longitudes[i]], {
          // color: 'red',
          // fillColor: '#f03',
          color: circleColor(data[i]),
          fillOpacity: 0.5,
          radius: data[i] * 50
        // }).addTo(myMap);

    }).bindPopup("<h4> State: " + state[i] + "</h4> <hr> <h5>Deforestation: " + data[i] + "</h5>").addTo(deforestation);

    deforestation.addTo(myMap);
  }});
}

  function circleColor(deforest) {
    if (deforest > 2000) {
        color = "red";
    } else if (deforest > 1000) {
        color = "orange";
    } else if (deforest > 500) {
        color = "yellow";
    } else {
        color = "green";
    }
    return color; 
};