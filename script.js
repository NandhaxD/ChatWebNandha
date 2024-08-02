const axios = require('axios');
var chatBox = document.getElementById('chatLog');
var userInput = document.getElementById('userInput');

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

async function sendMessage() {
  // Create a new message element
  let newMessage = document.createElement('li');
  
  let prompt = userInput.value;
  if (prompt === '') {
    alert('Please enter something to ask!');
    return;
  } else {
    // Create a new message text element for the user's prompt
    let messageText = document.createElement('p');
    messageText.textContent = prompt;
    messageText.setAttribute('id', 'user-prompt'); 
    newMessage.appendChild(messageText);

    // Scrape data from the API
    let systemText = await scrapeData(prompt);
    messageText = document.createElement('p');
    messageText.textContent = systemText;
    messageText.setAttribute('id', 'system-prompt'); 
    newMessage.appendChild(messageText);

    // Append the new message to the chat log
    chatBox.children[0].appendChild(newMessage);
    userInput.value = '';
  }
