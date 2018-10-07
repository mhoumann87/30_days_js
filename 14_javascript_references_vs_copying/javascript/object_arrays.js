//Copyright
const pos = document.getElementById('copy');
const year = new Date().getFullYear();
(year === 2018) ? pos.innerHTML = `<i class="far fa-copyright"></i>2018`: pos.innerHTML = `<i class="far fa-copyright"></i>2018 - ${year}`;

// * strings, numbers, booleans
let firstName;
document.getElementById('let').innerText = `firstName =${firstName};`;

firstName = 'Michael';
document.getElementById('name').innerText = `firstName = ${firstName};`;

let firstName2 = firstName;
document.getElementById('name2').innerText = `firstName = ${firstName}, firstName2 = ${firstName2};`;

firstName = 'Mike';
document.getElementById('changedName').innerText = `firstName = ${firstName}, firstName2 = ${firstName2};`;

let beatles = ['John', 'Paul', 'George', 'Pete'];
document.getElementById('first').innerText = `beatles = ${beatles};`;

let betterBeatles = beatles;
document.getElementById('firstCopy').innerHTML = `<span>beatles = ${beatles},</span><br><span>betterBeatles = ${betterBeatles}</span>;`;

beatles[3] = 'Ringo';
document.getElementById('arrayCopy2').innerHTML = `<span>beatles = ${beatles},</span><br><span>betterBeatles = ${betterBeatles}</span>;`;

let newBeatles = ['John', 'Paul', 'George', 'Pete'];
document.getElementById('newBeatles').innerText = `newBeatles = ${newBeatles};`;

let oldBeatles = [...newBeatles];
document.getElementById('bothBeatles').innerHTML = `<span>newBeatles = ${newBeatles},</span><br><span>oldBeatles = ${oldBeatles}</span>;`;

newBeatles[3] = 'Ringo';
document.getElementById('alteredBeatles').innerHTML = `<span>newBeatles = ${newBeatles},</span><br><span>oldBeatles = ${oldBeatles}</span>;`;