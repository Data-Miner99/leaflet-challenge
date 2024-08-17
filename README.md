# leaflet-challenge

You will develop a way to visualize USGS data that will allow them to better educate the public and other government organizations on issues facing our planet.

## Instructions

* Part 1: Create the Earthquake Visualization
* Part 2: Gather and Plot More Data

Your first task is to visualize an earthquake dataset. Complete the following steps:

1. Get your dataset. To do so, follow these steps:
    * The USGS provides earthquake data in a number of different formats, updated every 5 minutes. Visit the USGS GeoJSON Feed <http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php> page and choose a dataset to visualize.
    * When you click a dataset, you will be given a JSON representation of that data. Use the URL of this JSON to pull in the data for the visualization.

2. Import and visualize the data by doing the following:
    * Using Leaflet, create a map that plots all the earthquakes from your dataset based on their longitude and latitude.
        * Your data markers should reflect the magnitude of the earthquake by their size and the depth of the earthquake by color. Earthquakes with higher magnitudes should appear larger, and earthquakes with greater depth should appear darker in color.
    * Include popups that provide additional information about the earthquake when its associated marker is clicked.
    * Create a legend that will provide context for your map data.

## References

Dataset created by the United States Geological Survey <http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php>.
