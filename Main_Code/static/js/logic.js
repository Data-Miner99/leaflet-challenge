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
            fillOpacity: 0.9,
            color: "Red",
            weight: 0.5,
            radius: (earthquake.properties.mag) * 2000
        }).bindPopup(`<h3>${earthquake.properties.place}</h3><hr><p>Magnitude:${earthquake.properties.mag}<p><p>Depth:${depth} km<p>`).addTo(myMap);
    };
};

function chooseColor(depth) {
    let color = "";
    if (depth >= 90) {
        color = "#fc4653";
    }
    else if (depth >= 70) {
        
    }
}