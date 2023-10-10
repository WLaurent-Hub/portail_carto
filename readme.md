# Map portal on the evolution of agricultural land

## Presentation

This map portal summarizes the **evolution of agricultural land in the Pays de Meaux** conurbation between 2007 and 2021.

This evolution is characterized by several polygon layers:
- commune layer of the Pays de Meaux
- parcel of agricultural land in the Pays de Meaux conurbation in 2007
- parcel of agricultural land in the Pays de Meaux conurbation in 2021
- parcel of agricultural land in the Pays de Meaux conurbation lost between 2007 and 2021

Each polygon's geojson layer is located in :
<pre>
📦evolution-agricultural-land_map-portal
 ┣ 📂data
 ┃ ┣ 📜communes.geojson
 ┃ ┣ 📜parcel_2007.geojson
 ┃ ┣ 📜parcel_2021.geojson
 ┃ ┗ 📜parcel_perdu.geojson
</pre>

The layers are also represented as static maps created with QGIS in PDF format:
<pre>
📦evolution-agricultural-land_map-portal
 ┣ 📂cartes
 ┃ ┣ 📜2007.pdf
 ┃ ┣ 📜2021.pdf
 ┃ ┣ 📜EVO.pdf
 ┃ ┗ 📜PP.pdf
</pre>

An analytic synthesis is located in this path:
<pre>
📦evolution-agricultural-land_map-portal
 ┣ 📂cartes
 ┃ ┗ 📜rapport.pdf
</pre>

## Run locally

1. Clone the project :

```bash
git clone https://github.com/WLaurent-Hub/evolution-agricultural-land_map-portal.git
cd evolution-agricultural-land_map-portal
```

3. Run index.html with live server or local server:
<pre>
📦evolution-agricultural-land_map-portal
┣ 📜index.html
</pre>
