// Create a map object.
let myMap = L.map("map", {
    center: [37.5816, -121.4944],
    zoom: 8
  });

  // Add a tile layer.
let topo = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
    }).addTo(myMap);
    
// Store the API endpoint as queryUrl.
let queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Perform a GET request to the queryUrl/
d3.json(queryUrl).then(function(data){
    // Once we get a response, send the data.features object to the createFeatures function.
    createFeatures(data.features);
});

function createFeatures(earthquakeData) {
    // Loop through each earthquake data
    earthquakeData.forEach(earthquake => {
        let location = [earthquake.geometry.coordinates[1], earthquake.geometry.coordinates[0]];
        let depth = earthquake.geometry.coordinates[2];

        let color = chooseColor(depth);
        // Create a circle marker
        L.circle(location, {
            fillColor: color,
            fillOpacity: 1,
            color: "Blue",
            weight: 0.8,
            radius: (earthquake.properties.mag) * 2000
        }).bindPopup(`<h3>${earthquake.properties.place}</h3><hr><p>Magnitude:${earthquake.properties.mag}<p><p>Depth:${depth} km<p>`).addTo(myMap);
    });
};
//      
function chooseColor(depth) {
    if (depth >= 90) return "#fc4653";
    if (depth >= 70) return "#f9914b";
    if (depth >= 50) return "#faa921";
    if (depth >= 30) return "#f4d612";
    if (depth >= 10) return "#d5f70a";
    return "#96f909";
}

// Add the legend
 let legend = L.control({
    position: "bottomright"
 });

legend.onAdd = function () {
    let div = L.DomUtil.create('div', 'info legend'),
        depthRanges = [-10, 10, 30, 50, 70, 90];
        
        // Loop through depth intervals and generate a label with a colored square for each interval
        depthRanges.forEach((depth, index) => {
            div.innerHTML +=
                '<i style="background:' + chooseColor(depth + 1) + '"></i> ' +
                depth + (depthRanges[index + 1] ? '&ndash;' + depthRanges[index + 1] + '<br>' : '+');
        });

    return div;
};

// Add the legend to the map
legend.addTo(myMap);
