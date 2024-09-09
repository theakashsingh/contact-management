import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useQuery } from "@tanstack/react-query";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIconRetina from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { getCountryData } from "../../api/covidApi";
import { CountryData } from "../../types/CovidDataType";

// Fix the marker icons for react-leaflet
const customIcon = new L.Icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIconRetina,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const MapComponent: React.FC = () => {
  const { data, isLoading, error } = useQuery<CountryData[], Error>({
    queryKey: ["countryData"],
    queryFn: getCountryData,
  });

  const SetMapView: React.FC<{ center: [number, number]; zoom: number }> = ({
    center,
    zoom,
  }) => {
    const map = useMap();
    useEffect(() => {
      map.setView(center, zoom);
    }, [center, zoom, map]);

    return null;
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred while fetching data</div>;
  if (!data) return <div>No data available</div>;

  return (
    <MapContainer
      style={{ height: "600px", width: "100%", zIndex: "1" }}
      scrollWheelZoom={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <SetMapView center={[20, 0]} zoom={2} />
      {data.map(country => (
        <Marker
          key={country.country}
          position={[country.countryInfo.lat, country.countryInfo.long]}
          icon={customIcon} // Use the custom icon for each marker
        >
          <Popup>
            <div>
              <h3>{country.country}</h3>
              <p>
                <strong>Active cases:</strong> {country.active}
              </p>
              <p>
                <strong>Recovered:</strong> {country.recovered}
              </p>
              <p>
                <strong>Deaths:</strong> {country.deaths}
              </p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
