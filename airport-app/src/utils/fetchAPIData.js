export async function fetchAirportsData() {
    try {
        const airportsURL = "http://apiurl/airports";

        const response = await fetch(airportsURL);
        if (!response.ok) {
            throw new Error(`The API call to "${airportsURL}" resulted in a ${response.status} error.`);
        }

        const airportsData = await response.json();
        return airportsData;
    } catch (error) {
        console.error("Error: ", error);
    }
}


export async function fetchAircraftsData() {
    try {
        const aircraftsURL = "http://apiurl/airports";

        const response = await fetch(aircraftsURL);
        if (!response.ok) {
            throw new Error(`The API call to "${aircraftsURL}" resulted in a ${response.status} error.`);
        }

        const aircraftsData = await response.json();
        return aircraftsData;
    } catch (error) {
        console.error("Error: ", error);
    }
}