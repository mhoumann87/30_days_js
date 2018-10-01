//set copyright date
const copy = document.querySelector('#copy');
const year = new Date().getFullYear();
(year === 2018) ? copy.innerHTML = `<i class="far fa-copyright"></i>2018`: copy.innerHTML = `<i class="far fa-copyright"></i>2018 - ${year}`;