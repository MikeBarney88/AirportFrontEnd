export async function fetchAirportsData() {
  try {
    const airportsURL = "http://ec2-3-208-172-198.compute-1.amazonaws.com:80/airports";

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
    const aircraftsURL = "http://ec2-3-208-172-198.compute-1.amazonaws.com:80/aircrafts";

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
    const flightsURL = "http://ec2-3-208-172-198.compute-1.amazonaws.com:80/flights";

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

export async function fetchCitiesData() {
    try {
        const citiesURL = "http://ec2-3-208-172-198.compute-1.amazonaws.com:80/cities";

        const response = await fetch(citiesURL);
        if (!response.ok) {
            throw new Error(`The API call to "${citiesURL}" resulted in a ${response.status} error.`);
        }

        const citiesData = await response.json();
        return citiesData;
    } catch (error) {
        console.error("Error: ", error);
    }
}


export async function fetchFlightsByAirport(airportCode) {
  try {
    const flightsURL = `http://ec2-3-208-172-198.compute-1.amazonaws.com:80/flights/airport/${airportCode}`;
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


export async function fetchAirportGatesData(airportId) {
  try {
    const airportGatesURL = `http://ec2-3-208-172-198.compute-1.amazonaws.com:80/airports/${airportid}/gates`;
    const response = await fetch(airportGatesURL);
    if (!response.ok) {
      throw new Error(
        `The API call to "${airportGatesURL}" resulted in a ${response.status} error.`
      );
    }
    const airportGatesData = await response.json();
    return airportGatesData;
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
}