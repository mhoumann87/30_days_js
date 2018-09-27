(function () {
  const year = new Date().getFullYear();
  const pos = document.querySelector('#copy');
  (year !== 2018) ?
    pos.innerHTML = `<i class="far fa-copyright"></i>2018 - ${year}` :
    pos.innerHTML = `<i class="far fa-copyright"></i>2018`;
})();