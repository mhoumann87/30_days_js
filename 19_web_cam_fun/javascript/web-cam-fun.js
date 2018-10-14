//copyright
const pos = document.querySelector('#copy');
const year = new Date().getFullYear();
(year === 2018) ? pos.innerHTML = `<i class="far fa-copyright"></i>2018`: pos.innerHTML = `<i class="far fa-copyright"></i>2018 - ${year}`;

/* 
 * Web cam fun
 */

// Get the checkboxes for selecting functtions
document.querySelector('form').addEventListener('change', chooseEffect);
const controls = document.querySelector('.controls');

function chooseEffect(event) {

  switch (event.target.value) {

    case 'photoBooth':
      photoBooth();
      break;
    case 'greenScreen':
      greenScreen();
      break;
    case 'rgb':
      rgb();
      break;
  }
}

function photoBooth() {
  controls.innerHTML = `<button class="take-photo">Take Photo</button>`;
}

function greenScreen() {
  controls.innerHTML = ``;
}

function rgb() {
  controls.innerHTML = `
      <div class="red slider">
        <label for="rmin">Red Min:</label>
        <input type="range" min=0 max=255 name="rmin">
        <label for="rmax">Red Max:</label>
        <input type="range" min=0 max=255 name="rmax">
      </div>
      <div class="green slider">
        <label for="gmin">Green Min:</label>
        <input type="range" min=0 max=255 name="gmin">
        <label for="gmax">Green Max:</label>
        <input type="range" min=0 max=255 name="gmax">
        </div>
      <div class="blue slider">
        <label for="bmin">Blue Min:</label>
        <input type="range" min=0 max=255 name="bmin">
        <label for="bmax">Blue Max:</label>
        <input type="range" min=0 max=255 name="bmax">
      </div>
  `;
}

photoBooth();