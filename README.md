# Contact Management App

This project is a Contact Management system built using React, TypeScript, Redux Toolkit, React Query, Leaflet, and TailwindCSS. It displays COVID-19 data on a world map, providing country-specific statistics like active cases, deaths, and recoveries.

## Features

- Contact Management: Add, edit, and delete contacts
- COVID-19 Dashboard: View worldwide and country-specific -COVID-19 data
- Charts: Visualize COVID-19 case fluctuations over time
- Maps: Interactive map showing COVID-19 data for different countries

## Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

## Installation

1. Clone the repository:
`git clone https://github.com/your-username/contact-management-app.git`

2. Navigate to the project directory:
`cd contact-management-app`

2. install dependencies:
`npm install`

The app will be available at http://localhost:3000.

## Building for Production

To create a production build:
npm run build

## API Endpoints
The app uses the following API endpoints:

- Worldwide COVID-19 data: https://disease.sh/v3/covid-19/all
- Country-specific COVID-19 data: https://disease.sh/v3/covid-19/countries
- Historical COVID-19 data: https://disease.sh/v3/covid-19/historical/all?lastdays=all

## Technologies Used

- React
- TypeScript
- Redux Toolkit
- React Query
- React Router
- Tailwind CSS
- Recharts
- React Leaflet

## License
This project is licensed under the MIT License.