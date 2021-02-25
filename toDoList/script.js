let itemsArray = [];
let listItem;

/**
 * This function creates list item
 * with the corresponding span.
 * @param {string} inputValue
 */
function createListItem(inputValue) {
  listItem = document.createElement('li');
  listItem.className = 'list__item';
  let itemSpan = document.createElement('SPAN');
  itemSpan.className = 'list__item-span'
  let textNode = document.createTextNode(inputValue);
  itemSpan.appendChild(textNode);
  listItem.appendChild(itemSpan);
}

/**
 * This function creates delete button
 * and appends it to created list item.
 */
function createDeleteButton() {
  let closeButton = document.createElement('SPAN');
  let closeButtonNode = document.createTextNode('x');
  closeButton.className = 'close';
  closeButton.appendChild(closeButtonNode);
  listItem.appendChild(closeButton);
  return closeButton;
}

/**
 * This function adds all saved items
 * to local storage.
 * @param {string} inputValue
 */
function addToLocalStorage(inputValue) {
  itemsArray.push(inputValue);
  localStorage.setItem('items', JSON.stringify(itemsArray));
}

/**
 * This function updates the content of local
 * storage after removing single item.
 * @param {*} eventTarget
 */
function removeFromLocalStorage(eventTarget) {
  let index = itemsArray.indexOf(eventTarget);
  itemsArray.splice(index, 1);
  localStorage.setItem('items', JSON.stringify(itemsArray));
}

/**
 * This function handles delete button actions.
 * @param {*} button
 */
function deleteButton(button) {
  button.addEventListener('click', function (e) {
    e.target.parentElement.remove();

    if (saveButton.classList.contains('save-button--clicked')) {
      removeFromLocalStorage(e.target.previousSibling.textContent);
    }
  }, false);
}

/**
 * This function adds new created item to the list.
 */
function addItem() {
  let inputValue = document.getElementById('input').value;
  createListItem(inputValue);
  inputValue ? document.getElementById('list').appendChild(listItem) : alert("Fill the field");
  document.getElementById('input').value = '';

  let closeButton = createDeleteButton();
  deleteButton(closeButton);

  if (saveButton.classList.contains('save-button--clicked')) {
    addToLocalStorage(inputValue);
  }
}

/**
 * This function handles the status of save button.
 * @param {*} e
 */
function changeButton(e) {
  e.target.classList.toggle('save-button--clicked');
}

let addButton = document.getElementById('addButton');
addButton.addEventListener('click', addItem, false);

let list = document.querySelector('ul');
list.addEventListener('click', function (e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('list__item--checked');
  }
}, false);

let saveButton = document.getElementById('saveButton');
saveButton.addEventListener('click', changeButton, false);

saveButton.addEventListener('click', function (e) {
  if (e.target.classList.contains('save-button--clicked')) {
    let listItems = document.getElementsByClassName('list__item-span');

    for (item of listItems) {
      itemsArray.push(item.textContent);
    }
    localStorage.setItem('items', JSON.stringify(itemsArray));
  } else {
    localStorage.removeItem('items');
    itemsArray = [];
  }
}, false);

/**
 * Ths=is function updates the DOM contnent
 * after the page reload.
 */
function updateDom() {
  let storageItems = localStorage.getItem('items');
  storageItems = JSON.parse(storageItems);

  for (item of storageItems) {
    createListItem(item);
    document.getElementById('list').appendChild(listItem);
    let closeButton = createDeleteButton();
    deleteButton(closeButton);

    if (saveButton.classList.contains('save-button--clicked')) {
      addToLocalStorage(item);
    }
  }
}

window.onload = updateDom();