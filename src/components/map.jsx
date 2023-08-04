/**
 * Primary component for the map
 *
 */

import React, { useContext } from "react";
import {
  Circle,
  LayersControl,
  MapContainer,
  Marker,
  Popup,
  GeoJSON,
  TileLayer,
  useMapEvent,
} from "react-leaflet";

import { ThemeContext } from "../App";
import data from "../lib/data";
import GeoJsonLayers from "./geojsonLayers";

const Map = () => {
  const position = [41.705728515237524, -102.04101562500001];

  const { userTheme } = useContext(ThemeContext);

  const darkModeLayerUrl =
    "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png";

  const lightModeLayerUrl = "https://tile.openstreetmap.org/{z}/{x}/{y}.png";

  const activetitleLayer =
    userTheme === "dark" ? darkModeLayerUrl : lightModeLayerUrl;

  return (
    <React.Fragment>
      <MapContainer
        center={position}
        zoom={5}
        scrollWheelZoom={false}
        className="h-full w-full dark:bg-neutral-800"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url={activetitleLayer}
        />

        <MapControls />
        <Event />
        <MyMarker pos={position} />
        <GeoJsonLayers />
        <MapCircle opts={{ color: "purple" }} center={position} />
      </MapContainer>
    </React.Fragment>
  );
};

export default Map;

const MyMarker = ({ pos }) => (
  <Marker position={pos}>
    <Popup>This is a marker</Popup>
  </Marker>
);

const Event = () => {
  const map = useMapEvent("click", (e) => {
    console.log(e);
  });

  return null;
};

const MapCircle = ({ center, opts }) => (
  <Circle center={center} pathOptions={opts} radius={200} />
);

const MapControls = () => {
  return (
    <LayersControl>
      <LayersControl.BaseLayer name="light mode">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url={"https://tile.openstreetmap.org/{z}/{x}/{y}.png"}
        />
      </LayersControl.BaseLayer>
      <LayersControl.BaseLayer name="dark mode">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url={"https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"}
        />
      </LayersControl.BaseLayer>

      <LayersControl.BaseLayer name="Google streets mode">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url={"http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"}
          maxZoom={20}
          subdomains={["mt0", "mt1", "mt2", "mt3"]}
        />
      </LayersControl.BaseLayer>

      <LayersControl.Overlay name="groups">
        <GeoJSON attribution="&copy; ..." data={data} />
      </LayersControl.Overlay>
    </LayersControl>
  );
};
