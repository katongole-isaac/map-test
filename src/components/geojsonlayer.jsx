/**
 * Geojson component
 * it's used in geojsonlayers file
 *
 */

import { GeoJSON, Tooltip } from "react-leaflet";

/**
 * Geojson layer control
 * @param {object} props geojson object
 * @returns
 */

const GeoJsonLayer = (props) => {
  return (
    <GeoJSON {...props}>
      <Tooltip> Here are </Tooltip>
    </GeoJSON>
  );
};

export default GeoJsonLayer;
