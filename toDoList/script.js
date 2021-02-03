function addItem() {
  let listItem = document.createElement('li');
  listItem.className = 'list__item';
  let inputValue = document.getElementById('input').value;
  let textNode = document.createTextNode(inputValue);
  listItem.appendChild(textNode);

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
    }, false);
  }
}

let addButton = document.getElementById('addButton');
addButton.addEventListener('click', addItem, false);

let list = document.querySelector('ul');
list.addEventListener('click', function (e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('list__item--checked');
  }
}, false);