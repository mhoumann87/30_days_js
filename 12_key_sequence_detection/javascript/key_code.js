const pos = document.querySelector('#copy');
const year = new Date().getFullYear();

(year === 2018) ? pos.innerHTML = `<i class="far fa-copyright"></i>2018`: pos.innerHTML = `<i class="far fa-copyright"></i>2018 - ${year}`;

/* 
 * The page script
 */
const code = 'webdev';
// Get the elements
const revealButton = document.getElementById('reveal');
const printCode = document.getElementById('codePrint');
//Set the text for the button
revealButton.innerText = 'Reveal Code';
printCode.innerText = '';
let reveal = false;


function revealCode() {
  reveal = !reveal;
  (reveal) ? revealButton.innerText = 'Hide Code': revealButton.innerText = 'Reveal Code';
  (reveal) ? printCode.innerText = printCode.innerText = code + ' is cool': printCode.innerText = '';
}

revealButton.addEventListener('click', revealCode);