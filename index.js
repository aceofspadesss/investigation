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

var ratio = window.devicePixelRatio || 1;
var is_touch_device = 'ontouchstart' in document.documentElement;
var touch_status = (is_touch_device) ? 'touch' : 'no-touch';
touch_status = ' ts:' + touch_status;
var width_height = 'wh:' + screen.width + 'x' + screen.height;
var client_width_height = ' cwh:' + document.documentElement.clientWidth + 'x' + document.documentElement.clientHeight;
var rw = screen.width * ratio;
var rh = screen.height * ratio;
var ratio_width_height = ' r:' + ratio + ' rwh:' + rw + 'x' + rh;
var data_string = width_height + client_width_height + ratio_width_height + touch_status;

// get mobile phone device info
let deviceInfo = {
  userAgent: window.navigator.userAgent,
  screenWidth: window.screen.width,
  screenHeight: window.screen.height,
  colorDepth: window.screen.colorDepth,
  deviceCPUCores: navigator.hardwareConcurrency,
  devicePixelRatio: window.devicePixelRatio,
  deviceIsTouch: is_touch_device,
  deviceTouchStatus: touch_status,
  deviceWidthHeight: width_height,
  deviceClientWidthHeight: client_width_height,
  deviceRatioWidthHeight: ratio_width_height,
  deviceDataString: data_string,
}

displayData(deviceInfo);

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

