export async function createAirport(cityId, airportName, airportCode) {
    try {
        const newAirportData = {
            name: airportName,
            code: airportCode
        };

        const response = await fetch(`http://localhost:8080/airports?cityId=${cityId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newAirportData)
        });

        return await response.json();
    } catch (error) {
        console.error("Error: ", error);
    }
}

export async function createFlight(fromAirportId, toAirportId, flightNumber, flightScheduledTime, flightStatus) {
    try {
        const newFlightData = {
            flightNumber,
            scheduledTime: flightScheduledTime,
            status: flightStatus
        };

        const response = await fetch(`http://localhost:8080/flights?fromAirportId=${fromAirportId}&toAirportId=${toAirportId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newFlightData)
        });

        return await response.json();
    } catch (error) {
        console.error("Error: ", error);
    }
}

export async function createAirportGate(airportId, gateNumber, gateTerminal, gateStatus) {
    try {
        const newAirportGateData = {
            gateNumber,
            terminal: gateTerminal,
            status: gateStatus
        };

        const response = await fetch(`http://localhost:8080/airports/${airportId}/gates`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newAirportGateData)
        });

        return await response.json();
    } catch (error) {
        console.error("Error: ", error);
    }
}

export async function createAircraft(aircraftType, aircraftAirlineName, aircraftNumberOfPassengers) {
    try {
        const newAircraftData = {
	        type: aircraftType,
            airlineName: aircraftAirlineName,
            numberOfPassengers: aircraftNumberOfPassengers
        };

        const response = await fetch("http://localhost:8080/aircrafts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newAircraftData)
        });

        return await response.json();
    } catch (error) {
        console.error("Error: ", error);
    }
}

export async function createPassenger(passengerFirstName, passengerLastName, passengerPhoneNumber) {
    try {
        const newPassengerData = {
	        firstName: passengerFirstName,
            lastName: passengerLastName,
            phoneNumber: passengerPhoneNumber
        };

        const response = await fetch("http://localhost:8080/passengers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPassengerData)
        });

        return await response.json();
    } catch (error) {
        console.error("Error: ", error);
    }
}

export async function createCity(cityName, cityState, cityPopulation) {
    try {
        const newCityData = {
	        name: cityName,
            state: cityState,
            population: cityPopulation
        };

        const response = await fetch("http://localhost:8080/cities", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newCityData)
        });

        return await response.json();
    } catch (error) {
        console.error("Error: ", error);
    }
}


export async function updateAirport(airportId, airportUpdatedName, airportUpdatedCode) {
    try {
        const updatedAirportData = {
            name: airportUpdatedName,
            code: airportUpdatedCode
        };

        const response = await fetch(`http://localhost:8080/airports/${airportId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedAirportData)
        });

        return await response.json();
    } catch (error) {
        console.error("Error: ", error);
    }
}

export async function updateFlight(fromAirportId, toAirportId, updatedflightNumber, flightUpdatedScheduledTime, flightUpdatedStatus) {
    try {
        const updatedFlightData = {
            flightNumber: updatedflightNumber,
            scheduledTime: flightUpdatedScheduledTime,
            status: flightUpdatedStatus
        };

        const response = await fetch(`http://localhost:8080/flights?fromAirportId=${fromAirportId}&toAirportId=${toAirportId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedFlightData)
        });

        return await response.json();
    } catch (error) {
        console.error("Error: ", error);
    }
}

export async function updateAirportGate(airportId, updatedGateNumber, gateUpdatedTerminal, gateUpdatedStatus) {
    try {
        const updatedAirportGateData = {
            gateNumber: updatedGateNumber,
            terminal: gateUpdatedTerminal,
            status: gateUpdatedStatus
        };

        const response = await fetch(`http://localhost:8080/airports/${airportId}/gates`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedAirportGateData)
        });

        return await response.json();
    } catch (error) {
        console.error("Error: ", error);
    }
}

export async function updateAircraft(aircraftId, aircraftUpdatedType, aircraftUpdatedAirlineName, aircraftUpdatedNumberOfPassengers) {
    try {
        const updatedAircraftData = {
	        type: aircraftUpdatedType,
            airlineName: aircraftUpdatedAirlineName,
            numberOfPassengers: aircraftUpdatedNumberOfPassengers
        };

        const response = await fetch(`http://localhost:8080/aircrafts/${aircraftId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedAircraftData)
        });

        return await response.json();
    } catch (error) {
        console.error("Error: ", error);
    }
}

export async function updatePassenger(passengerId, passengerUpdatedFirstName, passengerUpdatedLastName, passengerUpdatedPhoneNumber) {
    try {
        const updatedPassengerData = {
	        firstName: passengerUpdatedFirstName,
            lastName: passengerUpdatedLastName,
            phoneNumber: passengerUpdatedPhoneNumber
        };

        const response = await fetch(`http://localhost:8080/passengers/${passengerId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedPassengerData)
        });

        return await response.json();
    } catch (error) {
        console.error("Error: ", error);
    }
}

export async function updateCity(cityId, cityUpdatedName, cityUpdatedState, cityUpdatedPopulation) {
    try {
        const updatedCityData = {
	        name: cityUpdatedName,
            state: cityUpdatedState,
            population: cityUpdatedPopulation
        };

        const response = await fetch(`http://localhost:8080/cities/${cityId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedCityData)
        });

        return await response.json();
    } catch (error) {
        console.error("Error: ", error);
    }
}


export async function deleteAirport(airportId) {
    try {
        const response = await fetch(`http://localhost:8080/airports/${airportId}`, {
            method: "DELETE"
        });

        return await response.json();
    } catch (error) {
        console.error("Error: ", error);
    }
}

export async function deleteFlight(flightId) {
    try {
        const response = await fetch(`http://localhost:8080/flights/${flightId}`, {
            method: "DELETE"
        });

        return await response.json();
    } catch (error) {
        console.error("Error: ", error);
    }
}

export async function deleteAirportGate(airportId, airportGateNumber) {
    try {
        const response = await fetch(`http://localhost:8080/airports/${airportId}/gates/${airportGateNumber}`, {
            method: "DELETE"
        });

        return await response.json();
    } catch (error) {
        console.error("Error: ", error);
    }
}

export async function deleteAircraft(aircraftId) {
    try {
        const response = await fetch(`http://localhost:8080/aircrafts/${aircraftId}`, {
            method: "DELETE"
        });

        return await response.json();
    } catch (error) {
        console.error("Error: ", error);
    }
}

export async function deletePassenger(passengerId) {
    try {
        const response = await fetch(`http://localhost:8080/passengers/${passengerId}`, {
            method: "DELETE"
        });

        return await response.json();
    } catch (error) {
        console.error("Error: ", error);
    }
}

export async function deleteCity(cityId) {
    try {
        const response = await fetch(`http://localhost:8080/cities/${cityId}`, {
            method: "DELETE"
        });

        return await response.json();
    } catch (error) {
        console.error("Error: ", error);
    }
}