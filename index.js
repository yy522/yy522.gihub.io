let layerStyle_DA = {
    fillColor: "purple",
    fillOpacity: 1,
    strokeColor: 'yellow',
    strokeOpacity: 1,
    strokeWeight: 1,
  };


let areLayersVisibleRight_WV = true;
let areLayersVisibleRight_IAN_EO = true;
let areLayersVisibleRight_Prob = false;


function initMap() {
    const mapOptions = {
      center: { lat: 37.5819033302233, lng: 36.92225755662163},
      zoom: 17,
      scaleControl: false,
      streetViewControl: false,
    };
  
  

    // instantiate the map on the right with control positioning
    const mapRight = new google.maps.Map(document.getElementById("map-right"), {
      ...mapOptions,
      fullscreenControlOptions: {
        position: google.maps.ControlPosition.RIGHT_BOTTOM,
      },
      mapTypeControlOptions: {
        position: google.maps.ControlPosition.RIGHT_TOP,
      },
      zoomControlOptions: {
        position: google.maps.ControlPosition.RIGHT_BOTTOM,
      },
    });



    function getUrlsPost_WV() {
      return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        var url = 'https://storage.googleapis.com/kalretykml/KML/Overlays_WV_Post/patches_info.json';
        var urls = [];
        var norths = [];
        var easts = [];
        var souths = [];
        var wests = [];
        xhr.onreadystatechange = function() {
          if (xhr.readyState === 4 && xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);
            data.features.forEach(feature => {
              urls.push(feature.properties.url);
              norths.push(feature.properties.uly);
              easts.push(feature.properties.lrx);
              souths.push(feature.properties.lry);
              wests.push(feature.properties.ulx);
            });
            resolve({ urls: urls, norths: norths, easts: easts, souths: souths, wests: wests});
          }
        };
        xhr.open("GET", url, true);
        xhr.send();
      });
    }


    function getUrlsPost_Prob() {
      return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        var url = 'https://storage.googleapis.com/kalretykml/KML/Overlays_Prob_Post/patches_info.json';
        var urls = [];
        var norths = [];
        var easts = [];
        var souths = [];
        var wests = [];
        xhr.onreadystatechange = function() {
          if (xhr.readyState === 4 && xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);
            data.features.forEach(feature => {
              urls.push(feature.properties.url);
              norths.push(feature.properties.uly);
              easts.push(feature.properties.lrx);
              souths.push(feature.properties.lry);
              wests.push(feature.properties.ulx);
            });
            resolve({ urls: urls, norths: norths, easts: easts, souths: souths, wests: wests});
          }
        };
        xhr.open("GET", url, true);
        xhr.send();
      });
    }



    function getUrlsPost_IAN_EO() {
      return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        var url = 'https://storage.googleapis.com/kalretykml/KML/IAN0929NEW/patches_info_modifiedjson';
        var urls = [];
        var norths = [];
        var easts = [];
        var souths = [];
        var wests = [];
        xhr.onreadystatechange = function() {
          if (xhr.readyState === 4 && xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);
            data.features.forEach(feature => {
              urls.push(feature.properties.url);
              norths.push(feature.properties.uly);
              easts.push(feature.properties.lrx);
              souths.push(feature.properties.lry);
              wests.push(feature.properties.ulx);
            });
            resolve({ urls: urls, norths: norths, easts: easts, souths: souths, wests: wests});
          }
        };
        xhr.open("GET", url, true);
        xhr.send();
      });
    }

    function loadOverlayPost_WV(urls,norths,easts,souths,wests) {
      let overlayBundle = [];
      console.log(norths)
      for (let i = 0; i < urls.length; i++) {
        let bounds = new google.maps.LatLngBounds(
          new google.maps.LatLng(souths[i], wests[i]),
          new google.maps.LatLng(norths[i], easts[i])
        );
    
        let overlay = new google.maps.GroundOverlay(urls[i], bounds);
        overlay.setOpacity(1); // Set the desired opacity
        overlay.setMap(mapRight);
        overlayBundle.push(overlay);
      }

      const toggleLayerRightMap = document.getElementById("toggleLayer2");
      toggleLayerRightMap.addEventListener("change", function () {
          areLayersVisibleRight_WV = !areLayersVisibleRight_WV
          overlayBundle.forEach((layer) => {
            if (areLayersVisibleRight_WV) {
              layer.setOpacity(1);
            } else {
              layer.setOpacity(0);
            }
          })
      });
    }

    function loadOverlayPost_IAN_EO(urls,norths,easts,souths,wests) {
      let overlayBundle = [];
      console.log(norths)
      for (let i = 0; i < urls.length; i++) {
        let bounds = new google.maps.LatLngBounds(
          new google.maps.LatLng(souths[i], wests[i]),
          new google.maps.LatLng(norths[i], easts[i])
        );
    
        let overlay = new google.maps.GroundOverlay(urls[i], bounds);
        overlay.setOpacity(1); // Set the desired opacity
        overlay.setMap(mapRight);
        overlayBundle.push(overlay);
      }

      const toggleLayerRightMap = document.getElementById("toggleLayer_IAN_EO");
      toggleLayerRightMap.addEventListener("change", function () {
        areLayersVisibleRight_IAN_EO = !areLayersVisibleRight_IAN_EO
          overlayBundle.forEach((layer) => {
            if (areLayersVisibleRight_IAN_EO) {
              layer.setOpacity(1);
            } else {
              layer.setOpacity(0);
            }
          })
      });
    }
    
    



    function loadOverlayPost_Prob(urls,norths,easts,souths,wests) {
      let overlayBundle = [];
      console.log(norths)
      for (let i = 0; i < urls.length; i++) {
        let bounds = new google.maps.LatLngBounds(
          new google.maps.LatLng(souths[i], wests[i]),
          new google.maps.LatLng(norths[i], easts[i])
        );
    
        let overlay = new google.maps.GroundOverlay(urls[i], bounds);
        overlay.setOpacity(0); // Set the desired opacity
        overlay.setMap(mapRight);
        overlayBundle.push(overlay);
      }

  const toggleLayerRightMap = document.getElementById("toggleLayer4");
  // const opacitySliderContainer1 = document.getElementById("opacitySliderContainer1");
  const colorBarContainer = document.getElementById("color-bar-container");

  toggleLayerRightMap.addEventListener("change", function () {
    areLayersVisibleRight_Prob = !areLayersVisibleRight_Prob;
    overlayBundle.forEach((layer) => {
      if (areLayersVisibleRight_Prob) {
        layer.setOpacity(1);
        // opacitySliderContainer1.style.display = "block"; // Show the opacity slider
        colorBarContainer.classList.add("show");
      } else {
        layer.setOpacity(0);
        // opacitySliderContainer1.style.display = "none"; // Hide the opacity slider
        colorBarContainer.classList.remove("show");
      }
    });
  });



    }

    var urlsPromise = getUrlsPost_WV();
    urlsPromise.then(function(data) {
      var urls = data.urls;
      var norths = data.norths;
      var easts = data.easts;
      var souths = data.souths;
      var wests = data.wests;
      loadOverlayPost_WV(urls, norths, easts, souths, wests);
    });

    var urlsPromise = getUrlsPost_IAN_EO();
    urlsPromise.then(function(data) {
      var urls = data.urls;
      var norths = data.norths;
      var easts = data.easts;
      var souths = data.souths;
      var wests = data.wests;
      loadOverlayPost_IAN_EO(urls, norths, easts, souths, wests);
    });


    // Load JSON data and set style options
    const JSONData= new google.maps.Data();
    JSONData.loadGeoJson("https://storage.googleapis.com/kalretykml/KML/population_polygon_layer.json");
    JSONData.setStyle({visible:false});
    JSONData.setMap(mapRight)


    // Add event listener to toggle layer
    const toggleLayer = document.getElementById("toggleLayer1");
    toggleLayer.checked = false; // Uncheck the checkbox
//     toggleLayer.addEventListener("change", function () {
//       JSONData.setStyle({
//         ...layerStyle_DA,
//         visible: this.checked
//         });
//     });

const colorScale = [
  { population: 0, color: '#0000FF' },      // Blue
  { population: 15, color: '#00FFFF' },  // Cyan
  { population: 30, color: '#00FF00' },  // Green
  { population: 45, color: '#ADFF2F' },  // Green-Yellow
  { population: 60, color: '#FFFF00' },  // Yellow
  { population: 75, color: '#FFA500' }  // Orange
 // Red

];


// Function to get the color based on the population level and opacity
function getColor(population, opacity) {
  for (let i = 0; i < colorScale.length; i++) {
    if (population <= colorScale[i].population) {
      const color = colorScale[i].color;
      return color + Math.floor(opacity * 255).toString(16); // Append opacity to the color
    }
  }
  // If population exceeds the maximum defined level, return the color for the maximum level
  const maxColor = colorScale[colorScale.length - 1].color;
  return maxColor + Math.floor(opacity * 255).toString(16); // Append opacity to the color
}

const opacitySliderContainer2 = document.getElementById("opacitySliderContainer2");
var slider = document.getElementById('transparency-slider');
var ind = document.getElementById('ind-text');
const colorBarContainer_pop = document.getElementById("color-bar-container_pop");

// Hide the slider initially
// slider.style.display = "none";

// Add event listener to show/hide the slider when the checkbox is checked/unchecked
toggleLayer.addEventListener("change", function () {
if (this.checked) {
opacitySliderContainer2.style.display = "block";
ind.style.display = "block";  // Show the slider
colorBarContainer_pop.classList.add("show");
} else {
opacitySliderContainer2.style.display = "none"; // Hide the slider
ind.style.display = "none";  // Show the slider
colorBarContainer_pop.classList.remove("show");
}
});




// Function to style the polygon layer based on the population level and opacity
function styleFunction(feature) {
  const population = feature.getProperty('population');
  const opacity = slider.value / 100; // Get the opacity value from the slider
  const color = getColor(population, opacity);
  return {
    visible: toggleLayer.checked,  // Set visibility based on the toggle checkbox
    fillColor: color,
    fillOpacity: opacity,
    strokeColor: '#000000',
    strokeWeight: 1
  };
}

// Set the style function for the polygon layer
JSONData.setStyle(styleFunction);

// Add event listener to toggle layer
toggleLayer.addEventListener("change", function () {
  JSONData.setStyle(styleFunction);
});

// Add event listener to adjust the opacity of the layer
slider.addEventListener('input', function () {
  JSONData.setStyle(styleFunction);
});




    // Load JSON data and set style options
    const JSONData_Bul= new google.maps.Data();
    JSONData_Bul.loadGeoJson("https://storage.googleapis.com/kalretykml/KML/Building_Footprint.json");
    JSONData_Bul.setStyle({visible:false});
    JSONData_Bul.setMap(mapRight)


    // Add event listener to toggle layer
    const toggleLayer_bul = document.getElementById("toggleLayer_bul");
    toggleLayer_bul.checked = false; 

const colorScale_bul = [
  { portion_area: 0, color: '#000000' },      // Blue
  { portion_area: 0.2, color: '#320000' },  // Cyan
  { portion_area: 0.4, color: '#960000' },  // Green
  { portion_area: 0.6, color: '#FF3200' },  // Green-Yellow
  { portion_area: 0.8, color: '#FF9600' },  // Yellow
  { portion_area: 1, color: '#FFFF00' }  // Orange
 // Red

];


// Function to get the color based on the population level and opacity
function getColor_bul(portion_area) {
  for (let i = 0; i < colorScale_bul.length; i++) {
    if (portion_area <= colorScale_bul[i].portion_area) {
      const color = colorScale_bul[i].color;
      return color // Append opacity to the color
    }
  }
  // If population exceeds the maximum defined level, return the color for the maximum level
  const maxColor = colorScale_bul[colorScale_bul.length - 1].color;
  return maxColor // Append opacity to the color
}


var ind_bul = document.getElementById('ind-text_bul');
const colorBarContainer_bul = document.getElementById("color-bar-container_bul");

// Hide the slider initially
// slider.style.display = "none";

// Add event listener to show/hide the slider when the checkbox is checked/unchecked
toggleLayer_bul.addEventListener("change", function () {
if (this.checked) {
ind_bul.style.display = "block";  // Show the slider
colorBarContainer_bul.classList.add("show");
} else {
ind_bul.style.display = "none";  // Show the slider
colorBarContainer_bul.classList.remove("show");
}
});




// Function to style the polygon layer based on the population level and opacity
function styleFunction_bul(feature) {
  const portion_area = feature.getProperty('portion_area');
  const color = getColor_bul(portion_area);
  return {
    visible: toggleLayer_bul.checked,  // Set visibility based on the toggle checkbox
    fillColor: '#00000000',
    strokeColor: color,
    strokeWeight: 2
  };
}

// Set the style function for the polygon layer
JSONData_Bul.setStyle(styleFunction_bul);

// Add event listener to toggle layer
toggleLayer_bul.addEventListener("change", function () {
  JSONData_Bul.setStyle(styleFunction_bul);
});


    // Load JSON data and set style options
    const JSONData_IFP= new google.maps.Data();
    JSONData_IFP.loadGeoJson("https://storage.googleapis.com/kalretykml/KML/ImageFootprint/ft2.json");
    JSONData_IFP.setStyle({strokeWeight: 2,fillColor: "transparent",strokeColor: "red",fillOpacity: 0});
    JSONData_IFP.setMap(mapRight)

function JSON_getArray() {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    var url = 'https://storage.googleapis.com/kalretykml/KML/population_polygon_layer.json';
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        resolve(data);
      }
    };
    xhr.open("GET", url, true);
    xhr.send();
  });
}




var JSON_Promise = JSON_getArray();
JSON_Promise.then(function(data) {
  const totalAreaElement = document.getElementById('totalArea');
  const totalPopElement = document.getElementById('totalPop');
    
  // Create an empty array to store the polygons falling inside the map bounds
  let polygonsInsideBounds = [];

  const bounds = mapRight.getBounds(); 
  // Filter the polygons that fall inside the map bounds
  polygonsInsideBounds = data.features.filter(feature => {
    const polygonBounds = new google.maps.LatLngBounds();
    // Extract the coordinates of the polygon
    const coordinates = feature.geometry.coordinates[0];
    coordinates.forEach(point => {
      const latLng = new google.maps.LatLng(point[1], point[0]);
      polygonBounds.extend(latLng);
    });
    // Check if the polygon bounds intersect with the map bounds
    return bounds.intersects(polygonBounds);
  });
  
  // Calculate the sum of areas for polygons inside the bounds
  let areaSum = 0;
  let popSum = 0;
  polygonsInsideBounds.forEach(feature => {
    const coordinates = feature.geometry.coordinates[0];
    const polygonPath = coordinates.map(point => new google.maps.LatLng(point[1], point[0]));
    const area = google.maps.geometry.spherical.computeArea(polygonPath);
    areaSum += area;
    popSum += feature['properties']['population'];
  });

  // Output the sum of areas
  totalAreaElement.textContent = areaSum.toFixed(2);
  totalPopElement.textContent = popSum.toFixed(0);



  // Add event listener to get initial map bounds
  google.maps.event.addListener(mapRight, 'idle', function() {
    // Get the current map bounds
    const bounds = mapRight.getBounds();
    
    // Filter the polygons that fall inside the map bounds
    polygonsInsideBounds = data.features.filter(feature => {
      const polygonBounds = new google.maps.LatLngBounds();

      // Extract the coordinates of the polygon
      const coordinates = feature.geometry.coordinates[0];
      coordinates.forEach(point => {
        const latLng = new google.maps.LatLng(point[1], point[0]);
        polygonBounds.extend(latLng);
      });

      // Check if the polygon bounds intersect with the map bounds
      return bounds.intersects(polygonBounds);
    });
    
    // Calculate the sum of areas for polygons inside the bounds
    let areaSum = 0;
    polygonsInsideBounds.forEach(feature => {
      const coordinates = feature.geometry.coordinates[0];
      const polygonPath = coordinates.map(point => new google.maps.LatLng(point[1], point[0]));
      const area = google.maps.geometry.spherical.computeArea(polygonPath);
      areaSum += area;
      popSum += feature['properties']['population'];
    });

    // Output the sum of areas
    totalAreaElement.textContent = areaSum.toFixed(2);
    totalPopElement.textContent = popSum.toFixed(0);
  });
});




function JSON_getArray_Bul() {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    var url = 'https://storage.googleapis.com/kalretykml/KML/Building_Footprint.json';
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        resolve(data);
      }
    };
    xhr.open("GET", url, true);
    xhr.send();
  });
}

var JSON_Promise_Bul = JSON_getArray_Bul();
JSON_Promise_Bul.then(function(data) {
  const totalElement = document.getElementById('NOB');
    
  // Create an empty array to store the polygons falling inside the map bounds
  let polygonsInsideBounds = [];

  const bounds = mapRight.getBounds(); 
  // Filter the polygons that fall inside the map bounds
  polygonsInsideBounds = data.features.filter(feature => {
    const polygonBounds = new google.maps.LatLngBounds();
    // Extract the coordinates of the polygon
    const coordinates = feature.geometry.coordinates[0];
    coordinates.forEach(point => {
      const latLng = new google.maps.LatLng(point[1], point[0]);
      polygonBounds.extend(latLng);
    });
    // Check if the polygon bounds intersect with the map bounds
    return bounds.intersects(polygonBounds);
  });
  
  // Calculate the sum of areas for polygons inside the bounds
  let  nob = polygonsInsideBounds.length;

  // Output the sum of areas
  totalElement.textContent = nob.toFixed();



  // Add event listener to get initial map bounds
  google.maps.event.addListener(mapRight, 'idle', function() {
    // Get the current map bounds
    const bounds = mapRight.getBounds();
    
    // Filter the polygons that fall inside the map bounds
    polygonsInsideBounds = data.features.filter(feature => {
      const polygonBounds = new google.maps.LatLngBounds();

      // Extract the coordinates of the polygon
      const coordinates = feature.geometry.coordinates[0];
      coordinates.forEach(point => {
        const latLng = new google.maps.LatLng(point[1], point[0]);
        polygonBounds.extend(latLng);
      });

      // Check if the polygon bounds intersect with the map bounds
      return bounds.intersects(polygonBounds);
    });
    
    // Calculate the sum of areas for polygons inside the bounds
    let nob = polygonsInsideBounds.length;
    

    // Output the sum of areas
    totalElement.textContent = nob.toFixed();
  });
});






const drawerButton = document.getElementById('drawerButton');
const drawer = document.getElementById('drawer');
drawerButton.addEventListener('click', () => {
  drawer.classList.toggle('open');
});

  // Load JSON data and set style options
  const JSONData_pop= new google.maps.Data();
  JSONData_pop.loadGeoJson("https://storage.googleapis.com/kalretykml/KML/Turkey_Population/file_1.json");
  JSONData_pop.setStyle({visible:false});
  JSONData_pop.setMap(mapRight)

 
  
  // Define a function to map population values to colors
  function getColorForPopulation(population) {
    // Add your logic to map population values to colors
    // For example, you can use a conditional statement or a color scale library
  
    // Here's a basic example to get you started
    if (population > 5) {
      return 'red';
    } else if (population > 4) {
      return 'orange';
    } else if (population > 3) {
      return 'yellow';
    } else {
      return 'green';
    }
  }
  // Add event listener to toggle layer
  const toggleLayer_pop = document.getElementById("toggleLayer_pop");
  toggleLayer_pop.checked = false; // Uncheck the checkbox
  toggleLayer_pop.addEventListener("change", function () {
    const bn = this.checked
    JSONData_pop.setStyle(function(feature) {
      var population = feature.getProperty('population');
      var fillColor = getColorForPopulation(population);
    
      return {
        visible: bn,
        icon: {
          path: google.maps.SymbolPath.CIRCLE, // Use a circle as the point marker
          scale: 3, // Adjust the size of the points
          fillColor: fillColor, // Set the fill color based on population
          fillOpacity: 1, // Customize the fill opacity
          strokeWeight: 1, // Customize the stroke weight
          strokeColor: fillColor
        }
      };
    });
  });

  JSONData_pop.addListener('click', function(event) {
    var feature = event.feature;
    var population = feature.getProperty('population');
    var coordinates = event.latLng;
  
    // Create the content for the pop-up
    var content = '<div>Population: ' + population + '</div>';
  
    // Create the info window and set its content
    var infoWindow = new google.maps.InfoWindow({
      content: content
    });
  
    // Open the info window at the clicked coordinates
    infoWindow.setPosition(coordinates);
    infoWindow.open(mapRight);
  });
  
  function handleButtonClick(propertyValue) {
    // Iterate through the features to find the matching property value
    JSONData_IFP.forEach(function(feature) {
      var specificProperty = feature.getProperty('name');
      if (specificProperty === propertyValue) {
        // Get the bounds of the feature
        var bounds = new google.maps.LatLngBounds();
        feature.getGeometry().forEachLatLng(function(latLng) {
          bounds.extend(latLng);
        });
  
        // Zoom the map to the bounds of the feature
        mapRight.fitBounds(bounds);

      }
    });
  }


  const expandButton = document.getElementById('expandButton');
  const enclose = document.getElementById('enclose');
  expandButton.addEventListener('click', function() {
    enclose.classList.toggle('show');
    expandButton.classList.toggle('expanded');
    handleButtonClick(1)
  });
  
  const expandButton2 = document.getElementById('expandButton2');
  const enclose2 = document.getElementById('enclose2');
  expandButton2.addEventListener('click', function() {
    enclose2.classList.toggle('show');
    expandButton2.classList.toggle('expanded');
    handleButtonClick(2)
  });



    var urlsPromise = getUrlsPost_Prob();
    urlsPromise.then(function(data) {
      var urls = data.urls;
      var norths = data.norths;
      var easts = data.easts;
      var souths = data.souths;
      var wests = data.wests;
      loadOverlayPost_Prob(urls, norths, easts, souths, wests);
    });


    // const toggleLayerRightMap = document.getElementById("toggleLayer2");
    // toggleLayerRightMap.addEventListener("change", function () {
    //     areLayersVisibleRight = !areLayersVisibleRight
    //   RightLayerBoundle.forEach((layer) => {
    //     layer.setMap(areLayersVisibleRight ? mapRight : null);
    //     })
    // });
  
  
    document.addEventListener('DOMContentLoaded', function() {
      var drawer = document.getElementById('drawer');
    
      function opendrawer() {
        drawer.classList.remove('drawer-closed');
        drawer.classList.add('drawer-opened');
      }
    
      function closedrawer() {
        drawer.classList.remove('drawer-opened');
        drawer.classList.add('drawer-closed');
      }
    
      // Event listener for opening the drawer
      var arrowIcon = document.querySelector('.arrow-icon');
      arrowIcon.addEventListener('click', function() {
        opendrawer();
      });
    
      // Event listener for closing the drawer
      var popup = document.getElementById('popup');
      popup.addEventListener('click', function() {
        closedrawer();
      });
    });
    
// Function to hide all buttons
function hideAllButtons() {
  // Hide button1
  expandButton.style.display = 'none';
  // Hide button2
  expandButton2.style.display = 'none';
}
hideAllButtons();

// Function to show a specific button
function showButton(button) {
  button.style.display = 'block';
}



    // Create a DrawingManager object
var drawingManager = new google.maps.drawing.DrawingManager({
  drawingMode: google.maps.drawing.OverlayType.POLYGON,
  drawingControl: true,
  drawingControlOptions: {
    position: google.maps.ControlPosition.TOP_LEFT,
    drawingModes: [google.maps.drawing.OverlayType.POLYGON]
  },
  polygonOptions: {
    editable: true,
    fillColor: 'transparent',
    strokeWeight: 2
  }
});

// Add the Drawing Manager to the map
drawingManager.setMap(mapRight);

var drawnPolygon = null;

// Add an event listener for the polygon complete event
google.maps.event.addListener(drawingManager, 'polygoncomplete', function(polygon) {
  if (drawnPolygon) {
    drawnPolygon.setMap(null); // Remove the previously drawn polygon from the map
  }

  // Store the new drawn polygon
  drawnPolygon = polygon;

  // Perform any additional actions here, such as filtering the GeoJSON features

  // Call a function to retrieve the specific property from the filtered features
  var specificPropertyList = getSpecificPropertyList(polygon.getPath().getArray());
  
  hideAllButtons();


    enclose.classList.remove('show');
    expandButton.classList.remove('expanded');
    enclose2.classList.remove('show');
    expandButton2.classList.remove('expanded');

 

  // Show the buttons corresponding to the selected polygons
  for (var i = 0; i < specificPropertyList.length; i++) {
    var specificProperty = specificPropertyList[i];

    // Show the button based on the specific property value
    if (specificProperty === 1) {
      showButton(expandButton);
    } else if (specificProperty === 2) {
      showButton(expandButton2);
    }
  }
  
});

function getSpecificPropertyList(polygonCoordinates) {
  var selectedFeatures = [];

  // Create a polygon object from the drawn polygon coordinates
  var drawnPolygon = new google.maps.Polygon({
    paths: polygonCoordinates
  });

  // Iterate through the features of the google.maps.Data object
  JSONData_IFP.forEach(function(feature) {
    var featureGeometry = feature.getGeometry();

    if (featureGeometry.getType() === 'Polygon') {
      var featureCoordinates = featureGeometry.getArray()[0].getArray();

      // Iterate through the vertices of the feature's polygon
      for (var i = 0; i < featureCoordinates.length; i++) {
        var vertex = featureCoordinates[i];

        // Check if the vertex is within the drawn polygon
        if (google.maps.geometry.poly.containsLocation(vertex, drawnPolygon)) {
          // Get the specific property from the feature and add it to the list
          var specificProperty = feature.getProperty('name');
          selectedFeatures.push(specificProperty);
          // Exit the loop since we found an intersecting vertex
          break;
        }
      }
    }


  });

  // Return the list of specific properties
  return selectedFeatures;
}




google.maps.event.addListener(drawingManager, 'polygoncomplete', function(polygon) {
  // Get the polygon coordinates
  var polygonCoordinates = polygon.getPath().getArray();

  // Perform any additional actions here, such as filtering the GeoJSON features

  // Call a function to retrieve the specific property from the filtered features
  var specificPropertyList = getSpecificPropertyList(polygonCoordinates);

  console.log(specificPropertyList)
});






//now try sentinel api
var geoManager;
var selectedRectangle;

var SHLayer = new google.maps.ImageMapType({
    getTileUrl: function (coord, zoom) {
        if (!selectedRectangle) {
            return null;
        }

        var proj = mapRight.getProjection();
        var zfactor = Math.pow(2, zoom);
        // get Long Lat coordinates
        var top = proj.fromPointToLatLng(new google.maps.Point(coord.x * 512 / zfactor, coord.y * 512 / zfactor));
        var bot = proj.fromPointToLatLng(new google.maps.Point((coord.x + 1) * 512 / zfactor, (coord.y + 1) * 512 / zfactor));

        // create the Bounding box string
        var bbox = (top.lng()) + "," +
                (bot.lat()) + "," +
                (bot.lng()) + "," +
                (top.lat());
        // Get the bounding box coordinates of the selected rectangle
        var bounds = selectedRectangle.getBounds();
        var sw = bounds.getSouthWest();
        var ne = bounds.getNorthEast();
        var coordinates = [
        [sw.lng(), sw.lat()],
        [ne.lng(), sw.lat()],
        [ne.lng(), ne.lat()],
        [sw.lng(), ne.lat()],
        [sw.lng(), sw.lat()] // Repeat the first coordinate to close the polygon
        ];

        // Generate the URL for the Sentinel Hub API
        var url = "https://services.sentinel-hub.com/ogc/wms/3779d2f1-b4a5-4a35-9cd4-2a5be7fee9cf";
        url += "?REQUEST=GetMap";
        url += "&SERVICE=WMS";
        url += "&VERSION=1.1.1";
        url += "&LAYERS=NDVI";
        url += "&FORMAT=image/png";
        url += "&SRS=EPSG:4326";
        url += "&BBOX=" + bbox;
        url += "&GEOMETRY=" + coordinates;
        url += "&WIDTH=512";
        url += "&HEIGHT=512";
        url += "&MAXCC=0";
        url += '&TIME=2022-09-01/2022-10-31';
        url += '&TRANSPARENT=TRUE';

        return url;
    },
    tileSize: new google.maps.Size(512, 512)
});

initialize();

function initialize() {
    var mapOptions = {
        zoom: 9,
        center: new google.maps.LatLng(41, -72),
    };

    // Initialize drawing manager
    geoManager = new google.maps.drawing.DrawingManager({
        drawingMode: google.maps.drawing.OverlayType.RECTANGLE,
        drawingControl: true,
        drawingControlOptions: {
            position: google.maps.ControlPosition.TOP_CENTER,
            drawingModes: [google.maps.drawing.OverlayType.RECTANGLE]
        },
        rectangleOptions: {
            editable: true
        }
    });

    // Add drawing manager to the map
    geoManager.setMap(mapRight);

    // Add event listener for rectangle creation
    google.maps.event.addListener(geoManager, 'rectanglecomplete', function (rectangle) {
        if (selectedRectangle) {
        selectedRectangle.setMap(null); // Remove the previously drawn polygon from the map
      }
        // Store the created rectangle
        selectedRectangle = rectangle;

        // Set the updated WMS layer URL
        mapRight.overlayMapTypes.clear();
        mapRight.overlayMapTypes.push(SHLayer);
    });

}


  }
  
  
  window.initMap = initMap;


