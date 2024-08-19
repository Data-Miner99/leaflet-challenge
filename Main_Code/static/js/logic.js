// Create a map object.
let myMap = L.map("map", {
    center: [37.09, -95.71],
    zoom: 6
  });

  // Add a tile layer.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Store the API endpoint as queryUrl.
let queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Perform a GET request to the queryUrl/
d3.json(queryUrl).then(function(data){
    // Once we get a response, send the data.features object to the createFeatures function.
    createFeatures(data.features);
});

function createFeatures(earthquakeData) {
    for (let i = 0; i < earthquakeData.length; i++){
        let earthquake = earthquakeData[i];
        let geo = earthquake.geometry;
        let location = [geo.coordinates[1], geo.coordinates[0]];
        let depth = geo.coordinates[2];

        let color = chooseColor(depth);

        let circle = L.circle(location,{
            fillColor: color,
            fillOpacity: 1,
            color: "Blue",
            weight: 0.8,
            radius: (earthquake.properties.mag) * 2000
        }).bindPopup(`<h3>${earthquake.properties.place}</h3><hr><p>Magnitude:${earthquake.properties.mag}<p><p>Depth:${depth} km<p>`).addTo(myMap);
    };
};
//      
function chooseColor(depth) {
    let color = "";
    if (depth >= 90) {
        color = "#fc4653";
    }
    else if (depth >= 70) {
        color = "#f9914b";
    }
    else if (depth >= 50) {
        color = "#faa921";
    }
    else if (depth >= 30) {
        color = "#f4d612";
    }
    else if (depth >= 10) {
        color = "#d5f70a";
    }
    else {
        color = "#96f909";
    }
    return color;
};