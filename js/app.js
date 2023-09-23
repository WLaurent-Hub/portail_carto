maplibregl.accessToken = 'zpSCRuCwKnFGNI5qirB1';

var map = new maplibregl.Map({
  container: 'map',
  style: 'https://api.maptiler.com/maps/openstreetmap/style.json?key=4sE0MBX4XpmZocqe4c6z',
  zoom: 10.1,
  center: [2.8884657, 48.9562018],
});

map.on('load', function () {
  map.addSource('communes', {
    type: 'geojson',
    data: './data/communes.geojson'
  });

  map.addSource('parcel_2007', {
    type: 'geojson',
    data: './data/parcel_2007.geojson'
  });
  map.addSource('parcel_2021', {
    type: 'geojson',
    data: './data/parcel_2021.geojson',
  });

  map.addSource('parcel_perdu', {
    type: 'geojson',
    data: './data/parcel_perdu.geojson',
  });

  map.addLayer({
    'id': 'commune',
    'type': 'fill',
    'source': 'communes',
    'paint': {
      'fill-color': 'red',
      'fill-opacity': 0.5
    }
  });
  map.setLayoutProperty('commune', 'visibility', 'none');
  map.addLayer({
    'id': 'outline_commune',
    'type': 'line',
    'source': 'communes',
    'paint': {
      'line-color': 'black',
      'line-opacity': 1
    }
  });
  map.setLayoutProperty('outline_commune', 'visibility', 'none');
  map.addLayer({
    'id': 'parcel_2007',
    'type': 'fill',
    'source': 'parcel_2007',
    'paint': {
      'fill-color': 'green',
      'fill-opacity': 0.8
    }
  });
  map.setLayoutProperty('parcel_2007', 'visibility', 'none');
  map.addLayer({
    'id': 'parcel_2007_red',
    'type': 'fill',
    'source': 'parcel_2007',
    'paint': {
      'fill-color': 'red',
      'fill-opacity': 0.8
    }
  });
  map.setLayoutProperty('parcel_2007_red', 'visibility', 'none');
  map.addLayer({
    'id': 'outline_parcel_2007',
    'type': 'line',
    'source': 'parcel_2007',
    'paint': {
      'line-color': 'black',
      'line-opacity': 0.8
    }
  });
  map.setLayoutProperty('outline_parcel_2007', 'visibility', 'none');
  map.addLayer({
    'id': 'parcel_2021',
    'type': 'fill',
    'source': 'parcel_2021',
    'paint': {
      'fill-color': 'green',
      'fill-opacity': 0.8
    }
  });
  map.setLayoutProperty('parcel_2021', 'visibility', 'none');

  map.addLayer({
    'id': 'outline_parcel_2021',
    'type': 'line',
    'source': 'parcel_2021',
    'paint': {
      'line-color': 'black',
      'line-opacity': 0.7
    }
  });
  map.setLayoutProperty('outline_parcel_2021', 'visibility', 'none');
  map.addLayer({
    'id': 'parcel_perdu',
    'type': 'fill',
    'source': 'parcel_perdu',
    'paint': {
      'fill-color': 'red',
      'fill-opacity': 0.8
    }
  });
  map.setLayoutProperty('parcel_perdu', 'visibility', 'none');
  map.addLayer({
    'id': 'outline_parcel_perdu',
    'type': 'line',
    'source': 'parcel_perdu',
    'paint': {
      'line-color': 'black',
      'line-opacity': 0.7
    }
  });
  map.setLayoutProperty('outline_parcel_perdu', 'visibility', 'none');
});

var checkbox1 = document.getElementById('checkbox1');
var legend1 = document.getElementById('legend-commune');
var legend2 = document.getElementById('legend-2007')
var legend3 = document.getElementById('legend-2021')
var legend4 = document.getElementById('legend-evolution')
var legend5 = document.getElementById('legend-perdu')

checkbox1.addEventListener('change', function () {
  if (this.checked) {
    legend1.style.display = 'block'; // Afficher la légende
    map.setLayoutProperty('commune', 'visibility', 'visible');
    map.setLayoutProperty('outline_commune', 'visibility', 'visible');
  } else {
    // La checkbox n'est pas cochée, masquez la couche
    legend1.style.display = 'none'; // Masquer la légende
    map.setLayoutProperty('commune', 'visibility', 'none');
    map.setLayoutProperty('outline_commune', 'visibility', 'none');
  }
});

var checkbox2 = document.getElementById('checkbox2');
checkbox2.addEventListener('change', function () {
  if (this.checked) {
    legend2.style.display = 'block'; // Afficher la légende
    map.setLayoutProperty('parcel_2007', 'visibility', 'visible');
    map.setLayoutProperty('outline_parcel_2007', 'visibility', 'visible');
  } else {
    legend2.style.display = 'none'; // Masquer la légende
    // La checkbox n'est pas cochée, masquez la couche
    map.setLayoutProperty('parcel_2007', 'visibility', 'none');
    map.setLayoutProperty('outline_parcel_2007', 'visibility', 'none');
  }
});

var checkbox3 = document.getElementById('checkbox3');
checkbox3.addEventListener('change', function () {
  if (this.checked) {
    legend3.style.display = 'block'; // Masquer la légende
    map.setLayoutProperty('parcel_2021', 'visibility', 'visible');
    map.setLayoutProperty('outline_parcel_2021', 'visibility', 'visible');

  } else {
    legend3.style.display = 'none'; // Masquer la légende
    // La checkbox n'est pas cochée, masquez la couche
    map.setLayoutProperty('parcel_2021', 'visibility', 'none');
    map.setLayoutProperty('outline_parcel_2021', 'visibility', 'none');

  }
});

var checkbox4 = document.getElementById('checkbox4');
checkbox4.addEventListener('change', function () {
  if (this.checked) {
    legend4.style.display = 'block'; // Masquer la légende
    map.setLayoutProperty('parcel_2007_red', 'visibility', 'visible');
    map.setLayoutProperty('outline_parcel_2007', 'visibility', 'visible');
    map.setLayoutProperty('parcel_2021', 'visibility', 'visible');
    map.setLayoutProperty('outline_parcel_2021', 'visibility', 'visible');

  } else {
    legend4.style.display = 'none'; // Masquer la légende
    map.setLayoutProperty('parcel_2007_red', 'visibility', 'none');
    map.setLayoutProperty('outline_parcel_2007', 'visibility', 'none');
    map.setLayoutProperty('parcel_2021', 'visibility', 'none');
    map.setLayoutProperty('outline_parcel_2021', 'visibility', 'none');
  }
});

var checkbox5 = document.getElementById('checkbox5');
checkbox5.addEventListener('change', function () {
  if (this.checked) {
    legend5.style.display = 'block'; // Masquer la légende
    map.setLayoutProperty('parcel_perdu', 'visibility', 'visible');
    map.setLayoutProperty('outline_commune', 'visibility', 'visible');
    map.setLayoutProperty('outline_parcel_perdu', 'visibility', 'visible');
    map.setLayoutProperty('outline_parcel_perdu', 'visibility', 'visible');

  } else {
    legend5.style.display = 'none'; // Masquer la légende

    // La checkbox n'est pas cochée, masquez la couche
    map.setLayoutProperty('parcel_perdu', 'visibility', 'none');
    map.setLayoutProperty('outline_commune', 'visibility', 'none');
    map.setLayoutProperty('outline_parcel_perdu', 'visibility', 'none');
    map.setLayoutProperty('outline_parcel_perdu', 'visibility', 'none');
  }
});


