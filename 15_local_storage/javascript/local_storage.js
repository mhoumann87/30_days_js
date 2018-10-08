const pos = document.querySelector('#copy');
const year = new Date().getFullYear();
(year === 2018) ? pos.innerHTML = `<i class="far fa-copyright"></i>2018`: pos.innerHTML = `<i class="far fa-copyright"></i>2018 - ${year}`;

//* Local storage app

// Get the items on the page
const addItems = document.querySelector('.add-items');
const itemList = document.querySelector('.item-list');
const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(event) {
  event.preventDefault();

  const text = (this.querySelector('[name=item]')).value;

  const item = {
    text,
    done: false
  };

  items.push(item);
  fillList(items, itemList);
  localStorage.setItem('items', JSON.stringify(items));
  this.reset();
}

function fillList(listItems = [], list) {
  list.innerHTML = listItems.map((item, i) => {
    return `
    <li>
    <input type="checkbox" data-index=${i} id="item${i}" ${item.done ? 'checked' : ''}>
    <label for="item${i}">${item.text}</label>
    </li>
    `;
  }).join('');
}

function toggleDone(event) {
  if (!event.target.matches('input')) return;
  const el = event.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem('items', JSON.stringify(items));
  fillList(items, itemList);
}

addItems.addEventListener('submit', addItem);
itemList.addEventListener('click', toggleDone);

fillList(items, itemList);