import React from "react";
import LineGraph from "../../component/mapAndCharts/LineGraph";
import MapComponent from "../../component/mapAndCharts/Map";

const ChartsAndMaps = () => {
  return (
    <div className="mx-auto bg-[#ECE9E4] min-h-screen">
      <h1 className="text-3xl font-bold mb-6 py-4 md:sticky top-0 text-center md:bg-blue-500 z-10">
        Charts And Maps
      </h1>
      <div className="p-10 -z-40">
        <div>
          <h2 className="text-xl font-semibold mb-4 text-center">
            Graph Covid Data
          </h2>
          <LineGraph />
        </div>
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-4 text-center">
            Map Covid Data
          </h2>
          <MapComponent />
        </div>
      </div>
    </div>
  );
};

export default ChartsAndMaps;
