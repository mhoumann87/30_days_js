(function () {
  const date = new Date().getFullYear();
  const pos = document.querySelector('#copy');
  (date === 2018) ?
    pos.innerHTML = `<i class="far fa-copyright"></i>2018` :
    pos.innerHTML = `<i class="far fa-copyright"></i>2018 - ${date}`;
})();

const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 },
];

// Present the base data in the people array

function showPeople() {
  const showBasis = document.querySelector('.birth-table');
  let basisHtml = `<table>
                  <tr>
                  <th>Name</th>
                  <th>Birth Year</th>
                  </tr>`;

  for (let i = 0; i < people.length; i++) {
    basisHtml += `<tr><td>${people[i].name}</td><td>${people[i].year}</td></tr>`;
  }

  basisHtml += `</table>`;
  showBasis.innerHTML = basisHtml;
}

(function () {
  showPeople();
})();

// Get the user input and show it in the table
const peopleInput = document.querySelector('#people');
peopleInput.addEventListener('submit', addPost);

function addPost(event) {
  event.preventDefault();
  let error = document.querySelector('#error');
  let name = document.querySelector('#name').value;
  let year = document.querySelector('#year').value;

  //Check input
  if (name === '' || year === '') {
    error.innerText = 'You need to fill both fields';
  }

  people.push({ name: name, year: Number(year) });
  showPeople();
  error.innerText = '';
  peopleInput.reset();
}

