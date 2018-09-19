// Set the year for the copyright message in the footer on start up
(function() {
    const pos = document.getElementById("copy");
    let year = new Date().getFullYear();
    (year === 2018) ?
        pos.innerHTML = `<i class="far fa-copyright"></i>${year}` :
        pos.innerHTML = `<i class="far fa-copyright"></i>2018 - ${year}`;
})();

