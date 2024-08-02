

const axios = require('axios');


// Define the function
async function scrapeData(prompt) {
  // Define the URL and headers
  const url = "https://api.binjie.fun/api/generateStream";
  const headers = {
    "Accept": "application/json, text/plain, */*",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "en-US,en;q=0.9",
    "Content-Type": "application/json",
    "Origin": "https://chat18.aichatos8.com",
    "Referer": "https://chat18.aichatos8.com/",
    "Sec-Ch-Ua": "\"Not-A.Brand\";v=\"99\", \"Chromium\";v=\"124\"",
    "Sec-Ch-Ua-Mobile": "?1",
    "Sec-Ch-Ua-Platform": "\"Android\"",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "cross-site",
  };

  // Define the data to be sent
  const data = {
    "prompt": prompt,
    "network": true,
    "stream": false,
    "system": {
      "withoutContext": false
    }
  };

  try {
    // Send the POST request
    const response = await axios.post(url, data, { headers });

    // Return the response data
    console.log(response.data); // for check output in console log
    return response.data;
  } catch (error) {
    // Handle any errors
    console.error(error);
    return null;
  }
}




