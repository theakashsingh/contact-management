import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useQuery } from '@tanstack/react-query';
import { getHistoricalData } from '../../api/covidApi';
import { ChartData, HistoricalData } from '../../types/CovidDataType';


const LineGraph: React.FC = () => {
  // Specify the type for the data returned by the query
  const { data, isLoading, error } = useQuery<HistoricalData>({
    queryKey: ['historicalData'],
    queryFn: getHistoricalData,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred</div>;

  // Convert the data into the required format for the chart
  const chartData: ChartData[] = Object.keys(data!.cases).map((date) => ({
    date,
    cases: data!.cases[date],
    deaths: data!.deaths[date],
    recovered: data!.recovered[date],
  }));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="cases" stroke="#8884d8" name="Cases" />
        <Line type="monotone" dataKey="deaths" stroke="#ff0000" name="Deaths" />
        <Line type="monotone" dataKey="recovered" stroke="#00c851" name="Recovered" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineGraph;
