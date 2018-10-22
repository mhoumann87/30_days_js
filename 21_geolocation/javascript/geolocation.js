<<<<<<< HEAD
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
=======
//copyright info
const pos = document.querySelector('#copy');
const year = new Date().getFullYear();
(year === 2018) ? pos.innerHTML = `<i class="far fa-copyright"></i>2018`: pos.innerHTML = `<i class="far fa-copyright"></i>2018 - ${year}`;

console.log(config.api_key);
>>>>>>> 13ceef765f07f4eb9ea8aa23b4fcdedd546a63b1
