export async function fetchAirportsData() {
  try {
    const airportsURL = "http://localhost:8080/airports";

    const response = await fetch(airportsURL);
    if (!response.ok) {
      throw new Error(
        `The API call to "${airportsURL}" resulted in a ${response.status} error.`
      );
    }

    const airportsData = await response.json();
    return airportsData;
  } catch (error) {
    console.error("Error: ", error);
  }
}

export async function fetchAircraftsData() {
  try {
    const aircraftsURL = "http://localhost:8080/aircrafts";

    const response = await fetch(aircraftsURL);
    if (!response.ok) {
      throw new Error(
        `The API call to "${aircraftsURL}" resulted in a ${response.status} error.`
      );
    }

    const aircraftsData = await response.json();
    return aircraftsData;
  } catch (error) {
    console.error("Error: ", error);
  }
}

export async function fetchFlightsData() {
  try {
    const flightsURL = "http://localhost:8080/flights";

    const response = await fetch(flightsURL);
    if (!response.ok) {
      throw new Error(
        `The API call to "${flightsURL}" resulted in a ${response.status} error.`
      );
    }

    const flightsData = await response.json();
    return flightsData;
  } catch (error) {
    console.error("Error: ", error);
  }
}

export async function fetchFlightsByAirport(airportCode) {
  try {
    const flightsURL = `http://localhost:8080/flights/airport/${airportCode}`;
    const response = await fetch(flightsURL);
    if (!response.ok) {
      throw new Error(
        `The API call to "${flightsURL}" resulted in a ${response.status} error.`
      );
    }
    const flightsData = await response.json();
    return flightsData;
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
}
