import React, { useState } from "react";
import "../App.css";

export default function FlightArrivals() {
  const [selectedAirport, setSelectedAirport] = useState("YYT");

  const airports = [
    { code: "YYT", name: "St. John's International Airport" },
    { code: "YHZ", name: "Halifax Stanfield International Airport" },
  ];

  const flightData = {
    YYT: [
      {
        flightNumber: "AC612",
        from: "Toronto",
        scheduledTime: "14:30",
        status: "On Time",
      },
      {
        flightNumber: "WS264",
        from: "Halifax",
        scheduledTime: "15:45",
        status: "Delayed",
      },
      {
        flightNumber: "AC692",
        from: "Montreal",
        scheduledTime: "16:20",
        status: "On Time",
      },
      {
        flightNumber: "WS3456",
        from: "Toronto",
        scheduledTime: "17:00",
        status: "Landed",
      },
    ],
    YHZ: [
      {
        flightNumber: "AC610",
        from: "Toronto",
        scheduledTime: "13:15",
        status: "On Time",
      },
      {
        flightNumber: "WS240",
        from: "Calgary",
        scheduledTime: "14:30",
        status: "On Time",
      },
      {
        flightNumber: "AC8924",
        from: "St. John's",
        scheduledTime: "16:45",
        status: "Delayed",
      },
    ],
  };

  const handleAirportChange = (event) => {
    setSelectedAirport(event.target.value);
  };

  const currentFlights = flightData[selectedAirport] || [];
  const currentAirportName = airports.find(
    (airport) => airport.code === selectedAirport
  )?.name;

  return (
    <div className="flight-arrivals-container">
      <h1 className="main-title">Flight Arrivals</h1>

      <div className="dropdown-container">
        <label htmlFor="airport-select" className="dropdown-label">
          Select Airport:
        </label>
        <select
          id="airport-select"
          value={selectedAirport}
          onChange={handleAirportChange}
          className="airport-select"
        >
          {airports.map((airport) => (
            <option key={airport.code} value={airport.code}>
              {airport.code} - {airport.name}
            </option>
          ))}
        </select>
      </div>

      <div className="table-wrapper">
        <div className="table-header">
          <h2>Arriving at {currentAirportName}</h2>
        </div>
        <table className="flights-table">
          <thead>
            <tr>
              <th>Flight Number</th>
              <th>From</th>
              <th>Scheduled Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {currentFlights.map((flight, index) => (
              <tr key={index}>
                <td className="flight-number">{flight.flightNumber}</td>
                <td>{flight.from}</td>
                <td>{flight.scheduledTime}</td>
                <td>
                  <span
                    className={`status-badge status-${flight.status
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    {flight.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
