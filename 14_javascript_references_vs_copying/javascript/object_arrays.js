//Copyright
const pos = document.getElementById('copy');
const year = new Date().getFullYear();
(year === 2018) ? pos.innerHTML = `<i class="far fa-copyright"></i>2018`: pos.innerHTML = `<i class="far fa-copyright"></i>2018 - ${year}`;