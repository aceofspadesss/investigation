let dataHolder = document.querySelector('#data-holder');
let data = document.querySelector('#data');
let params = new URLSearchParams(window.location.search);
let token = params.get('token');
let decoded_token = atob(token).split('_');
let phone_number = decoded_token[0];
let invite_uid = decoded_token[1];



let formed_json = {
  userAgent: window.navigator.userAgent,
  screenWidth: window.screen.width,
  screenHeight: window.screen.height,
  colorDepth: window.screen.colorDepth,
  deviceCPUCores: navigator.hardwareConcurrency,
  token: params.get('token'),
  phone_number: phone_number,
  invite_uid: invite_uid
}

const accessAllowed = (callback) => {
  formed_json.geo_latitude = callback.coords.latitude;
  formed_json.geo_longitude = callback.coords.longitude;

  displayData(formed_json);
};

const accessDenied = (callback) => {
  console.log(callback);

  displayData(formed_json);
};

const displayData = (object) => {
  for (const [key, value] of Object.entries(object)) {
    p = document.createElement('p');
    p.textContent = `${key}: ${value}`;
    dataHolder.appendChild(p);
  }
}

navigator.geolocation.getCurrentPosition(accessAllowed, accessDenied);