// Copyright info
const pos = document.querySelector('#copy');
const year = new Date().getFullYear();
(year === 2018) ? pos.innerHTML = `<i class="far fa-copyright"></i>2018`: pos.innerHTML = `<i class="far fa-copyright"></i>2018 - ${year}`;
console.log(year)

/* 
 * Once - Demostration of the once option in  the addEventListner function
 */

//Get all the elements for the demo
const moreButton = document.querySelector('#moreTimes');
const moreText = document.querySelector('#moreText');
const onceButton = document.querySelector('#oneTime');
const onceText = document.querySelector('#onceText');

console.log(onceButton);
let more = 0;
let once = 0;
let moreTime;
let oneTime;

function moreClicks() {
  more = more + 1;
  (more !== 1) ? moreTime = 'times': moreTime = 'time';
  moreText.innerHTML = `You have clicked me ${more} ${moreTime}`;
}

function oneClick() {
  once = once + 1;
  onceButton.disabled = true;
  (once !== 1) ? oneTime = 'times': oneTime = 'time';
  onceText.innerHTML = `You have clicked me ${once} ${oneTime}`;
}


(more !== 1) ? moreTime = 'times': moreTime = 'time';
moreText.innerHTML = `You have clicked me ${more} ${moreTime}`;
moreButton.addEventListener('click', moreClicks);

(once !== 1) ? oneTime = 'times': oneTime = 'time';
onceText.innerHTML = `You have clicked me ${once} ${oneTime}`;
onceButton.addEventListener('click', oneClick, {
  once: true
});