//console.log(config.api_key);
const msg = document.querySelector('.message');

function getGeolocation() {
  msg.innerHTML = `Your browser do not support geolocation`;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getLocation)
  } else {
    msg.innerHTML = `Your browser do not support geolocation`;
  }
}

function getLocation(position) {
  console.log(position);
}

getGeolocation();