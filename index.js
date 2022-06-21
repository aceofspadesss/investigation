let dataHolder = document.querySelector('#data-holder');
let data = document.querySelector('#data');

let formed_json = {
  userAgent: window.navigator.userAgent,
  screenWidth: window.screen.width,
  screenHeight: window.screen.height,
  colorDepth: window.screen.colorDepth
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