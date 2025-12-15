import React, { useState, useEffect } from "react";
import "../App.css";
import {
  fetchAirportsData,
  fetchFlightsByAirport,
} from "../utils/fetchAPIData";

export default function FlightArrivals() {
  const [selectedAirport, setSelectedAirport] = useState("");
  const [airports, setAirports] = useState([]);
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadAirports();
  }, []);

  useEffect(() => {
    if (selectedAirport) {
      loadFlights();
    }
  }, [selectedAirport]);

  const loadAirports = async () => {
    setLoading(true);
    setError(null);

    try {
      const airportsData = await fetchAirportsData();
      setAirports(airportsData || []);
      if (airportsData && airportsData.length > 0) {
        setSelectedAirport(airportsData[0].code);
      }
    } catch (err) {
      setError("Failed to load airports");
      console.error("Error loading airports:", err);
    } finally {
      setLoading(false);
    }
  };

  const loadFlights = async () => {
    setLoading(true);
    setError(null);

    try {
      const flightsData = await fetchFlightsByAirport(selectedAirport);
      setFlights(flightsData || []);
    } catch (err) {
      setError("Failed to load flights");
      console.error("Error loading flights:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleAirportChange = (event) => {
    setSelectedAirport(event.target.value);
  };

  const currentAirportName =
    airports.find((airport) => airport.code === selectedAirport)?.name ||
    selectedAirport;

  const formatTime = (dateTimeString) => {
    if (!dateTimeString) return "N/A";
    const date = new Date(dateTimeString);
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  if (loading && airports.length === 0) {
    return (
      <div className="flight-arrivals-container">
        <h1 className="main-title">Flight Arrivals</h1>
        <p className="message-center">Loading...</p>
      </div>
    );
  }

  if (error && airports.length === 0) {
    return (
      <div className="flight-arrivals-container">
        <h1 className="main-title">Flight Arrivals</h1>
        <p className="error-message">Error: {error}</p>
      </div>
    );
  }

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
            <option key={airport.id} value={airport.code}>
              {airport.code} - {airport.name}
            </option>
          ))}
        </select>
      </div>

      <div className="table-wrapper">
        <div className="table-header">
          <h2>Flights at {currentAirportName}</h2>
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
            {loading ? (
              <tr>
                <td colSpan="4" className="empty-state">
                  Loading flights...
                </td>
              </tr>
            ) : flights.length === 0 ? (
              <tr>
                <td colSpan="4" className="empty-state">
                  No flights found for this airport
                </td>
              </tr>
            ) : (
              flights.map((flight) => (
                <tr key={flight.id}>
                  <td className="flight-number">{flight.flightNumber}</td>
                  <td>{flight.fromAirport?.name || "Unknown"}</td>
                  <td>{formatTime(flight.scheduledTime)}</td>
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
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
