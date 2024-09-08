import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useQuery } from "@tanstack/react-query";
import "leaflet/dist/leaflet.css";
import { getCountryData } from "../../api/covidApi";
import { CountryData } from "../../types/CovidDataType";

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
      style={{ height: "600px", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <SetMapView center={[20, 0]} zoom={2} />
      {data.map(country => (
        <Marker
        key={country.country}
        position={[country.countryInfo.lat, country.countryInfo.long]}
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
