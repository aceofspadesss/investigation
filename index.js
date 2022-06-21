dataHolder = document.querySelector('#data-holder');
data = document.querySelector('#data');

formed_json = {
  userAgent: window.navigator.userAgent,
  screenWidth: window.screen.width,
  screenHeight: window.screen.height,
  colorDepth: window.screen.colorDepth
}

data.textContent = formed_json.userAgent;

for (const [key, value] of Object.entries(formed_json)) {
  p = document.createElement('p');
  p.textContent = `${key}: ${value}`;
  dataHolder.appendChild(p);
}