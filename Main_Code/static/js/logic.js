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
    }
}