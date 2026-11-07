const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
const errorMessage = document.querySelector('#error-message');


button.addEventListener('click', function() {
    if (input.value.trim() !== '') {

        errorMessage.textContent = '';
        
        const li = document.createElement('li');
        li.textContent = input.value;
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        
        deleteButton.addEventListener('click', function() {
        list.removeChild(li);
        input.focus();
    });
        
        li.append(deleteButton);
        list.append(li);
        input.value = ''
        input.focus();
    } else {
        errorMessage.textContent = 'Please enter text.';
    }

});

