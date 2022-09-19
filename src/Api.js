export const CONFIDENCE_API_URL = "https://dev-api.confidence.org/v2/confidence/locations";

export const getLocations = async (startingIndex = 0) => {
    const myHeaders = new Headers();
    myHeaders.append("Username", "amitphatak$r5labs.com");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Access-Control-Allow-Origin", "*");

    var raw = JSON.stringify({
      "start": startingIndex,
      "limit": 3
    });
    
    var requestOptions = {
      mode: 'cors',
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };


    const response = await fetch("/confidence/locations", requestOptions);
    const jsonResponse = await response.json();
    return jsonResponse;
  }