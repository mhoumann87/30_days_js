// Copyright
const pos = document.querySelector('#copy');
const year = new Date().getFullYear();
(year === 2018) ? pos.innerHTML = `<i class="far fa-copyright"></i>2018`: pos.innerHTML = `<i class="far fa-copyright"></i>2018 - ${year}`;

/* 
 * Speech synthesis function
 */

// Get the elements
const message = new SpeechSynthesisUtterance();
let voices = [];
const select = document.querySelector('[name=voice]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakBtn = document.querySelector('#speak');
const stopBtn = document.querySelector('#stop');
message.text = document.querySelector('[name=text]').value;

console.log(message.text);