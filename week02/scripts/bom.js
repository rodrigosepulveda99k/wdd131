const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#chapterList');

button.addEventListener('click', function() {
  if (input.value.trim() !== '') {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    
    li.textContent = input.value.trim();
    deleteButton.textContent = '❌';
    deleteButton.classList.add('deleteButton');
    
    deleteButton.addEventListener('click', function () {
      list.removeChild(li);
      input.focus();
    });
    
    li.appendChild(deleteButton);
    list.appendChild(li);
    
    input.value = '';
    input.focus();
  } else {
    // If input is blank, provide a message or at least do nothing and return focus to the input field
    input.focus();
  }
});
