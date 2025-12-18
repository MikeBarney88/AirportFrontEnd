import React, { useState, useEffect } from "react";
import "../App.css";
import {
  fetchAirportsData,
  fetchFlightsData,
  fetchAircraftsData,
  fetchCitiesData,
} from "../utils/fetchAPIData";

export default function Admin() {
  const [activeTab, setActiveTab] = useState("flights");
  const [airports, setAirports] = useState([]);
  const [flights, setFlights] = useState([]);
  const [aircrafts, setAircrafts] = useState([]);
  const [gates, setGates] = useState([]);
  const [cities, setCities] = useState([]);

  const [flightForm, setFlightForm] = useState({
    flightNumber: "",
    fromAirportId: "",
    toAirportId: "",
    scheduledTime: "",
    status: "On Time",
  });

  const [airportForm, setAirportForm] = useState({
    name: "",
    code: "",
    cityId: "1",
  });

  const [aircraftForm, setAircraftForm] = useState({
    type: "",
    airlineName: "",
    numberOfPassengers: "",
  });

  const [gateForm, setGateForm] = useState({
    gateNumber: "",
    terminal: "",
    airportId: "",
    status: "AVAILABLE",
  });

  const [cityForm, setCityForm] = useState({
    name: "",
    state: "",
    population: "",
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [airportsData, flightsData, aircraftsData, citiesData] =
        await Promise.all([
          fetchAirportsData(),
          fetchFlightsData(),
          fetchAircraftsData(),
          fetchCitiesData(),
        ]);
      setAirports(airportsData || []);
      setFlights(flightsData || []);
      setAircrafts(aircraftsData || []);
      setCities(citiesData || []);
    } catch (error) {
      console.error("Error loading data:", error);
    }
  };

  const loadGates = async (airportId) => {
    try {
      const response = await fetch(
        `http://ec2-3-208-172-198.compute-1.amazonaws.com:80/airports/${airportId}/gates`
      );
      if (response.ok) {
        const gatesData = await response.json();
        setGates(gatesData);
      }
    } catch (error) {
      console.error("Error loading gates:", error);
    }
  };

  const handleFlightFormChange = (e) => {
    setFlightForm({ ...flightForm, [e.target.name]: e.target.value });
  };

  const handleAddFlight = async (e) => {
    e.preventDefault();

    if (!flightForm.fromAirportId || !flightForm.toAirportId) {
      alert("Please select both departure and arrival airports");
      return;
    }
    try {
      const response = await fetch(
        `http://ec2-3-208-172-198.compute-1.amazonaws.com:80/flights?fromAirportId=${flightForm.fromAirportId}&toAirportId=${flightForm.toAirportId}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            flightNumber: flightForm.flightNumber,
            scheduledTime: flightForm.scheduledTime,
            status: flightForm.status,
          }),
        }
      );
      if (response.ok) {
        alert("Flight added successfully!");
        setFlightForm({
          flightNumber: "",
          fromAirportId: "",
          toAirportId: "",
          scheduledTime: "",
          status: "On Time",
        });
        loadData();
      } else {
        alert("Failed to add flight");
      }
    } catch (error) {
      console.error("Error adding flight:", error);
      alert("Error adding flight");
    }
  };

  const handleDeleteFlight = async (flightId) => {
    if (!window.confirm("Are you sure you want to delete this flight?")) return;
    try {
      const response = await fetch(
        `http://ec2-3-208-172-198.compute-1.amazonaws.com:80/flights/${flightId}`,
        { method: "DELETE" }
      );
      if (response.ok) {
        alert("Flight deleted successfully!");
        loadData();
      } else {
        alert("Failed to delete flight");
      }
    } catch (error) {
      console.error("Error deleting flight:", error);
      alert("Error deleting flight");
    }
  };

  const handleAirportFormChange = (e) => {
    setAirportForm({ ...airportForm, [e.target.name]: e.target.value });
  };

  const handleAddAirport = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://ec2-3-208-172-198.compute-1.amazonaws.com:80/airports?cityId=${airportForm.cityId}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: airportForm.name,
            code: airportForm.code,
          }),
        }
      );
      if (response.ok) {
        alert("Airport added successfully!");
        setAirportForm({ name: "", code: "", cityId: "1" });
        loadData();
      } else {
        alert("Failed to add airport");
      }
    } catch (error) {
      console.error("Error adding airport:", error);
      alert("Error adding airport");
    }
  };

  const handleDeleteAirport = async (airportId) => {
    if (!window.confirm("Are you sure you want to delete this airport?"))
      return;
    try {
      const response = await fetch(
        `http://ec2-3-208-172-198.compute-1.amazonaws.com:80/airports/${airportId}`,
        { method: "DELETE" }
      );
      if (response.ok) {
        alert("Airport deleted successfully!");
        loadData();
      } else {
        alert("Failed to delete airport");
      }
    } catch (error) {
      console.error("Error deleting airport:", error);
      alert("Error deleting airport");
    }
  };

  const handleAircraftFormChange = (e) => {
    setAircraftForm({ ...aircraftForm, [e.target.name]: e.target.value });
  };

  const handleAddAircraft = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://ec2-3-208-172-198.compute-1.amazonaws.com:80/aircrafts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: aircraftForm.type,
          airlineName: aircraftForm.airlineName,
          numberOfPassengers: parseInt(aircraftForm.numberOfPassengers),
        }),
      });
      if (response.ok) {
        alert("Aircraft added successfully!");
        setAircraftForm({ type: "", airlineName: "", numberOfPassengers: "" });
        loadData();
      } else {
        alert("Failed to add aircraft");
      }
    } catch (error) {
      console.error("Error adding aircraft:", error);
      alert("Error adding aircraft");
    }
  };

  const handleDeleteAircraft = async (aircraftId) => {
    if (!window.confirm("Are you sure you want to delete this aircraft?"))
      return;
    try {
      const response = await fetch(
        `http://ec2-3-208-172-198.compute-1.amazonaws.com:80/aircrafts/${aircraftId}`,
        { method: "DELETE" }
      );
      if (response.ok) {
        alert("Aircraft deleted successfully!");
        loadData();
      } else {
        alert("Failed to delete aircraft");
      }
    } catch (error) {
      console.error("Error deleting aircraft:", error);
      alert("Error deleting aircraft");
    }
  };

  const handleGateFormChange = (e) => {
    const { name, value } = e.target;
    setGateForm({ ...gateForm, [name]: value });
    if (name === "airportId" && value) {
      loadGates(value);
    }
  };

  const handleAddGate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://ec2-3-208-172-198.compute-1.amazonaws.com:80/airports/${gateForm.airportId}/gates`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            gateNumber: gateForm.gateNumber,
            terminal: gateForm.terminal,
            status: gateForm.status,
          }),
        }
      );

      if (response.ok) {
        alert("Gate added successfully!");
        setGateForm({
          gateNumber: "",
          terminal: "",
          airportId: gateForm.airportId,
          status: "AVAILABLE",
        });
        if (gateForm.airportId) {
          loadGates(gateForm.airportId);
        }
      } else {
        alert("Failed to add gate");
      }
    } catch (error) {
      console.error("Error adding gate:", error);
      alert("Error adding gate");
    }
  };

  const handleDeleteGate = async (gateNumber) => {
    if (!window.confirm("Are you sure you want to delete this gate?")) return;
    try {
      const response = await fetch(
        `http://ec2-3-208-172-198.compute-1.amazonaws.com:80/airports/gates/${gateNumber}`,
        { method: "DELETE" }
      );
      if (response.ok) {
        alert("Gate deleted successfully!");
        if (gateForm.airportId) {
          loadGates(gateForm.airportId);
        }
      } else {
        alert("Failed to delete gate");
      }
    } catch (error) {
      console.error("Error deleting gate:", error);
      alert("Error deleting gate");
    }
  };

  const handleCityFormChange = (e) => {
    setCityForm({ ...cityForm, [e.target.name]: e.target.value });
  };

  const handleAddCity = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://ec2-3-208-172-198.compute-1.amazonaws.com:80/cities", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: cityForm.name,
          state: cityForm.state,
          population: parseInt(cityForm.population),
        }),
      });
      if (response.ok) {
        alert("City added successfully!");
        setCityForm({ name: "", state: "", population: "" });
        loadData();
      } else {
        alert("Failed to add city");
      }
    } catch (error) {
      console.error("Error adding city:", error);
      alert("Error adding city");
    }
  };

  const handleDeleteCity = async (cityId) => {
    if (!window.confirm("Are you sure you want to delete this city?")) return;
    try {
      const response = await fetch(`http://ec2-3-208-172-198.compute-1.amazonaws.com:80/city/${cityId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        alert("City deleted successfully!");
        loadData();
      } else {
        alert("Failed to delete city");
      }
    } catch (error) {
      console.error("Error deleting city:", error);
      alert("Error deleting city");
    }
  };

  return (
    <div className="admin-container">
      <h1 className="main-title">Admin Dashboard</h1>

      <div className="admin-tabs">
        <button
          className={`tab-button ${activeTab === "flights" ? "active" : ""}`}
          onClick={() => setActiveTab("flights")}
        >
          Flights
        </button>
        <button
          className={`tab-button ${activeTab === "airports" ? "active" : ""}`}
          onClick={() => setActiveTab("airports")}
        >
          Airports
        </button>
        <button
          className={`tab-button ${activeTab === "aircraft" ? "active" : ""}`}
          onClick={() => setActiveTab("aircraft")}
        >
          Aircraft
        </button>
        <button
          className={`tab-button ${activeTab === "gates" ? "active" : ""}`}
          onClick={() => setActiveTab("gates")}
        >
          Gates
        </button>
        <button
          className={`tab-button ${activeTab === "cities" ? "active" : ""}`}
          onClick={() => setActiveTab("cities")}
        >
          Cities
        </button>
      </div>

      {activeTab === "flights" && (
        <>
          <div className="admin-section">
            <h2>Add New Flight</h2>
            <form onSubmit={handleAddFlight} className="admin-form">
              <div className="form-group">
                <label htmlFor="flightNumber">Flight Number:</label>
                <input
                  type="text"
                  id="flightNumber"
                  name="flightNumber"
                  value={flightForm.flightNumber}
                  onChange={handleFlightFormChange}
                  placeholder="e.g., AC123"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="fromAirportId">From Airport:</label>
                <select
                  id="fromAirportId"
                  name="fromAirportId"
                  value={flightForm.fromAirportId}
                  onChange={handleFlightFormChange}
                  required
                >
                  <option value="">Select Departure Airport</option>
                  {airports.map((airport) => (
                    <option key={airport.id} value={airport.id}>
                      {airport.code} - {airport.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="toAirportId">To Airport:</label>
                <select
                  id="toAirportId"
                  name="toAirportId"
                  value={flightForm.toAirportId}
                  onChange={handleFlightFormChange}
                  required
                >
                  <option value="">Select Arrival Airport</option>
                  {airports.map((airport) => (
                    <option key={airport.id} value={airport.id}>
                      {airport.code} - {airport.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="scheduledTime">Scheduled Time:</label>
                <input
                  type="datetime-local"
                  id="scheduledTime"
                  name="scheduledTime"
                  value={flightForm.scheduledTime}
                  onChange={handleFlightFormChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="status">Status:</label>
                <select
                  id="status"
                  name="status"
                  value={flightForm.status}
                  onChange={handleFlightFormChange}
                  required
                >
                  <option value="On Time">On Time</option>
                  <option value="Delayed">Delayed</option>
                  <option value="Cancelled">Cancelled</option>
                  <option value="Landed">Landed</option>
                </select>
              </div>

              <button type="submit" className="submit-button">
                Add Flight
              </button>
            </form>
          </div>

          <div className="admin-section">
            <h2>Existing Flights</h2>
            <div className="table-wrapper">
              <table className="flights-table">
                <thead>
                  <tr>
                    <th>Flight Number</th>
                    <th>From Airport</th>
                    <th>To Airport</th>
                    <th>Scheduled Time</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {flights.length === 0 ? (
                    <tr>
                      <td colSpan="6" className="empty-state">
                        No flights found
                      </td>
                    </tr>
                  ) : (
                    flights.map((flight) => (
                      <tr key={flight.id}>
                        <td className="flight-number">{flight.flightNumber}</td>
                        <td>{flight.fromAirport?.name || "Unknown"}</td>
                        <td>{flight.toAirport?.name || "Unknown"}</td>
                        <td>
                          {new Date(flight.scheduledTime).toLocaleString()}
                        </td>
                        <td>
                          <span
                            className={`status-badge status-${flight.status
                              .toLowerCase()
                              .replace(" ", "-")}`}
                          >
                            {flight.status}
                          </span>
                        </td>
                        <td>
                          <button
                            className="delete-button"
                            onClick={() => handleDeleteFlight(flight.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}

      {activeTab === "airports" && (
        <>
          <div className="admin-section">
            <h2>Add New Airport</h2>
            <form onSubmit={handleAddAirport} className="admin-form">
              <div className="form-group">
                <label htmlFor="airportName">Airport Name:</label>
                <input
                  type="text"
                  id="airportName"
                  name="name"
                  value={airportForm.name}
                  onChange={handleAirportFormChange}
                  placeholder="e.g., Toronto Pearson International"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="airportCode">Airport Code:</label>
                <input
                  type="text"
                  id="airportCode"
                  name="code"
                  value={airportForm.code}
                  onChange={handleAirportFormChange}
                  placeholder="e.g., YYZ"
                  maxLength="3"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="cityId">City:</label>
                <select
                  id="cityId"
                  name="cityId"
                  value={airportForm.cityId}
                  onChange={handleAirportFormChange}
                  required
                >
                  <option value="">Select City</option>
                  {cities.map((city) => (
                    <option key={city.id} value={city.id}>
                      {city.name}, {city.state}
                    </option>
                  ))}
                </select>
              </div>

              <button type="submit" className="submit-button">
                Add Airport
              </button>
            </form>
          </div>

          <div className="admin-section">
            <h2>Existing Airports</h2>
            <div className="table-wrapper">
              <table className="flights-table">
                <thead>
                  <tr>
                    <th>Code</th>
                    <th>Name</th>
                    <th>ID</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {airports.length === 0 ? (
                    <tr>
                      <td colSpan="4" className="empty-state">
                        No airports found
                      </td>
                    </tr>
                  ) : (
                    airports.map((airport) => (
                      <tr key={airport.id}>
                        <td className="flight-number">{airport.code}</td>
                        <td>{airport.name}</td>
                        <td>{airport.id}</td>
                        <td>
                          <button
                            className="delete-button"
                            onClick={() => handleDeleteAirport(airport.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}

      {activeTab === "aircraft" && (
        <>
          <div className="admin-section">
            <h2>Add New Aircraft</h2>
            <form onSubmit={handleAddAircraft} className="admin-form">
              <div className="form-group">
                <label htmlFor="aircraftType">Aircraft Type:</label>
                <input
                  type="text"
                  id="aircraftType"
                  name="type"
                  value={aircraftForm.type}
                  onChange={handleAircraftFormChange}
                  placeholder="e.g., Boeing 737"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="airlineName">Airline Name:</label>
                <input
                  type="text"
                  id="airlineName"
                  name="airlineName"
                  value={aircraftForm.airlineName}
                  onChange={handleAircraftFormChange}
                  placeholder="e.g., Air Canada"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="numberOfPassengers">
                  Number of Passengers:
                </label>
                <input
                  type="number"
                  id="numberOfPassengers"
                  name="numberOfPassengers"
                  value={aircraftForm.numberOfPassengers}
                  onChange={handleAircraftFormChange}
                  placeholder="e.g., 180"
                  required
                />
              </div>

              <button type="submit" className="submit-button">
                Add Aircraft
              </button>
            </form>
          </div>

          <div className="admin-section">
            <h2>Existing Aircraft</h2>
            <div className="table-wrapper">
              <table className="flights-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Type</th>
                    <th>Airline Name</th>
                    <th>Number of Passengers</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {aircrafts.length === 0 ? (
                    <tr>
                      <td colSpan="5" className="empty-state">
                        No aircraft found
                      </td>
                    </tr>
                  ) : (
                    aircrafts.map((aircraft) => (
                      <tr key={aircraft.id}>
                        <td className="flight-number">{aircraft.id}</td>
                        <td>{aircraft.type}</td>
                        <td>{aircraft.airlineName}</td>
                        <td>{aircraft.numberOfPassengers}</td>
                        <td>
                          <button
                            className="delete-button"
                            onClick={() => handleDeleteAircraft(aircraft.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}

      {activeTab === "gates" && (
        <>
          <div className="admin-section">
            <h2>Add New Gate</h2>
            <form onSubmit={handleAddGate} className="admin-form">
              <div className="form-group">
                <label htmlFor="gateAirportId">Airport:</label>
                <select
                  id="gateAirportId"
                  name="airportId"
                  value={gateForm.airportId}
                  onChange={handleGateFormChange}
                  required
                >
                  <option value="">Select Airport</option>
                  {airports.map((airport) => (
                    <option key={airport.id} value={airport.id}>
                      {airport.code} - {airport.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="terminal">Terminal:</label>
                <input
                  type="text"
                  id="terminal"
                  name="terminal"
                  value={gateForm.terminal}
                  onChange={handleGateFormChange}
                  placeholder="e.g., A, B, 1, 2"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="gateNumber">Gate Number:</label>
                <input
                  type="text"
                  id="gateNumber"
                  name="gateNumber"
                  value={gateForm.gateNumber}
                  onChange={handleGateFormChange}
                  placeholder="e.g., A12"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="gateStatus">Status:</label>
                <select
                  id="gateStatus"
                  name="status"
                  value={gateForm.status}
                  onChange={handleGateFormChange}
                  required
                >
                  <option value="AVAILABLE">Available</option>
                  <option value="OCCUPIED">Occupied</option>
                  <option value="MAINTENANCE">Maintenance</option>
                  <option value="CLOSED">Closed</option>
                </select>
              </div>

              <button type="submit" className="submit-button">
                Add Gate
              </button>
            </form>
          </div>

          <div className="admin-section">
            <h2>Existing Gates</h2>
            {!gateForm.airportId ? (
              <p className="empty-state">
                Please select an airport above to view its gates
              </p>
            ) : (
              <div className="table-wrapper">
                <table className="flights-table">
                  <thead>
                    <tr>
                      <th>Gate Number</th>
                      <th>Terminal</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {gates.length === 0 ? (
                      <tr>
                        <td colSpan="4" className="empty-state">
                          No gates found for this airport
                        </td>
                      </tr>
                    ) : (
                      gates.map((gate) => (
                        <tr key={gate.gateNumber}>
                          <td className="flight-number">{gate.gateNumber}</td>
                          <td>{gate.terminal}</td>
                          <td>
                            <span
                              className={`status-badge status-${gate.status.toLowerCase()}`}
                            >
                              {gate.status}
                            </span>
                          </td>
                          <td>
                            <button
                              className="delete-button"
                              onClick={() => handleDeleteGate(gate.gateNumber)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </>
      )}

      {activeTab === "cities" && (
        <>
          <div className="admin-section">
            <h2>Add New City</h2>
            <form onSubmit={handleAddCity} className="admin-form">
              <div className="form-group">
                <label htmlFor="cityName">City Name:</label>
                <input
                  type="text"
                  id="cityName"
                  name="name"
                  value={cityForm.name}
                  onChange={handleCityFormChange}
                  placeholder="e.g., Toronto"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="cityState">State/Province:</label>
                <input
                  type="text"
                  id="cityState"
                  name="state"
                  value={cityForm.state}
                  onChange={handleCityFormChange}
                  placeholder="e.g., Ontario"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="cityPopulation">Population:</label>
                <input
                  type="number"
                  id="cityPopulation"
                  name="population"
                  value={cityForm.population}
                  onChange={handleCityFormChange}
                  placeholder="e.g., 2930000"
                  required
                />
              </div>

              <button type="submit" className="submit-button">
                Add City
              </button>
            </form>
          </div>

          <div className="admin-section">
            <h2>Existing Cities</h2>
            <div className="table-wrapper">
              <table className="flights-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>State/Province</th>
                    <th>Population</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {cities.length === 0 ? (
                    <tr>
                      <td colSpan="5" className="empty-state">
                        No cities found
                      </td>
                    </tr>
                  ) : (
                    cities.map((city) => (
                      <tr key={city.id}>
                        <td className="flight-number">{city.id}</td>
                        <td>{city.name}</td>
                        <td>{city.state}</td>
                        <td>{city.population?.toLocaleString()}</td>
                        <td>
                          <button
                            className="delete-button"
                            onClick={() => handleDeleteCity(city.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
