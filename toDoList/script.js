function addItem() {
  let listItem = document.createElement('li');
  listItem.className = 'list__item';
  let itemSpan = document.createElement('SPAN');
  itemSpan.className = 'list__item-span'
  let inputValue = document.getElementById('input').value;
  let textNode = document.createTextNode(inputValue);
  itemSpan.appendChild(textNode);
  listItem.appendChild(itemSpan);

  inputValue ? document.getElementById('list').appendChild(listItem) : alert("Fill the field");

  document.getElementById('input').value = '';

  let closeButton = document.createElement('SPAN');
  let closeButtonNode = document.createTextNode('x');
  closeButton.className = 'close';
  closeButton.appendChild(closeButtonNode);
  listItem.appendChild(closeButton);

  let closeButtons = document.getElementsByClassName('close');
  for (button of closeButtons) {
    button.addEventListener('click', function () {
      this.parentElement.style.display = 'none';
      if (saveButton.classList.contains('save-button--clicked')) {
        localStorage.removeItem();
        storageItemIndex--;
      }
    }, false);
  }

  if(saveButton.classList.contains('save-button--clicked')) {
    localStorage.setItem(`item${storageItemIndex++}`, inputValue);
  }
}

function changeButton() {
  this.classList.toggle('save-button--clicked');
}


let storageItemIndex = 0;

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


saveButton.addEventListener('click', function () {
  if (this.classList.contains('save-button--clicked')) {
    let listItems = document.getElementsByClassName('list__item-span');
    for (item of listItems) {
      localStorage.setItem(`item${storageItemIndex++}`, item.textContent);
    }
  } else {
    localStorage.clear();
    storageItemIndex = 0;
  }
}, false);

