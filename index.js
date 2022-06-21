let dataHolder = document.querySelector('#data-holder');
let data = document.querySelector('#data');
let params = new URLSearchParams(window.location.search);
let token = params.get('token');

let formed_json = {
  userAgent: window.navigator.userAgent,
  screenWidth: window.screen.width,
  screenHeight: window.screen.height,
  colorDepth: window.screen.colorDepth,
  deviceCPUCores: navigator.hardwareConcurrency,
}

if (token != null) {
  formed_json.token = token;
  formed_json.decodedToken = atob(token).split('_');
  formed_json.phoneNumber = decoded_token[0];
  formed_json.inviteUID = decoded_token[1];
}

const displayData = (object) => {
  for (const [key, value] of Object.entries(object)) {
    p = document.createElement('p');
    p.textContent = `${key}: ${value}`;
    dataHolder.appendChild(p);
  }
}

formed_json.keyValuePair = [formed_json.userAgent, `${formed_json.screenWidth}x${formed_json.screenHeight}`, formed_json.colorDepth, formed_json.deviceCPUCores].join('|');

displayData(formed_json);

// Redirect to appstore
// window.location.replace("https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwjF5qf1x774AhXt_CoKHYy6BlQQFnoECBcQAQ&url=https%3A%2F%2Fapps.apple.com%2Fua%2Fapp%2Fpeer%2Fid1585616081%3Fl%3Dru&usg=AOvVaw1jO_5x_TLE1N80DEKfBruV")

// GEOLOCATION API LOGIC
//
// const accessAllowed = (callback) => {
//   formed_json.geo_latitude = callback.coords.latitude;
//   formed_json.geo_longitude = callback.coords.longitude;

//   displayData(formed_json);
// };

// const accessDenied = (callback) => {
//   console.log(callback);

//   displayData(formed_json);
// };
// GEOLOCATION API CALL
//
// navigator.geolocation.getCurrentPosition(accessAllowed, accessDenied);

