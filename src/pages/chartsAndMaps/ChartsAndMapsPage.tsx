import React from "react";
import LineGraph from "../../component/mapAndCharts/LineGraph";
import MapComponent from "../../component/mapAndCharts/Map";

const ChartsAndMaps = () => {
  return (
    <div className="w-9/12 mx-auto flex flex-col gap-10">
      <h1>Charts And Maps</h1>
      <div>
        <LineGraph />
      </div>
      <div>
        <MapComponent/>
      </div>
    </div>
  );
};

export default ChartsAndMaps;
