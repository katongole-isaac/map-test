/**
 * Geojson component
 * it's used in geojsonlayers file
 *
 */

import { GeoJSON, Tooltip, useMapEvent } from "react-leaflet";

// import { lookUp } from 'geojson-places'

/**
 * Geojson layer control
 * @param {object} props geojson object
 * @returns
 */

const GeoJsonLayer = (props) => {

  
  return (
    <GeoJSON {...props}   style={
      {
        fillColor: 'black',
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
      }
    } >
      <Tooltip> Here are </Tooltip>
    </GeoJSON>
  );
};

export default GeoJsonLayer;
