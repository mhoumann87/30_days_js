//copyright
const pos = document.querySelector("#copy");
const year = new Date().getFullYear();
year === 2018
  ? (pos.innerHTML = `<i class="far fa-copyright"></i>2018`)
  : (pos.innerHTML = `<i class="far fa-copyright"></i>2018 - ${year}`);

/* 
 * Web cam fun
 */

// Get the selectors for the webcam
const video = document.querySelector(".player");
const canvas = document.querySelector(".photo");
const ctx = canvas.getContext("2d");
const strip = document.querySelector(".strip");
let pixels;

// Get the video feed from the webcam
function getVideo() {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then(localMediaStream => {
      video.srcObject = localMediaStream;
      video.play();
    })
    .catch(err => {
      console.error(err);
    });
}
function paintVideoToCanvas(pixels) {
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;

  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
    pixels = ctx.getImageData(0, 0, width, height);
    //pixels.rgbSplit(pixels);
    ctx.putImageData(pixels, 0, 0);
  }, 16);
}
// Get the checkboxes for selecting functtions
document.querySelector("form").addEventListener("change", chooseEffect);
const controls = document.querySelector(".controls");

function chooseEffect(event) {
  switch (event.target.value) {
    case "photoBooth":
      photoBooth();
      break;
    case "greenScreen":
      greenScreen();
      break;
    case 'redEffect':
      redEffect();
      break;
    case "rgb":
      rgb();
      break;
  }
}

function photoBooth() {
  controls.innerHTML = `<button class="takePhoto">Take Photo</button>`;
  document.querySelector('.takePhoto').addEventListener('click', function () {

    const data = canvas.toDataURL('image/jpeg');
    const link = document.createElement('a');
    link.href = data;
    link.setAttribute('download', 'picture');
    link.innerHTML = `<img src="${data}" alt="great picture">`;
    strip.insertBefore(link, strip.firstChild);
  });

  getVideo();
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

function redEffect() {
  controls.innerHTML = ``;
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i + 0] = pixels.data[i + 0] + 200;
    pixels.data[i + 1] = pixels.data[i + 1] - 50;
    pixels.data[i + 2] = pixels.data[i + 2] * 0.5;
  }
  drawImage(pixels);
  getVideo();
}

photoBooth();
video.addEventListener('canplay', paintVideoToCanvas);
