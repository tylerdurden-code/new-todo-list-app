const editTitle = document.querySelector('[data-edit-title]')
const titleInput = document.querySelector('[data-title-to-edit]')
const doneBtn = document.querySelector('[data-done-button]')


editTitle.addEventListener('click',() => {
    let title = document.querySelector('[data-title-to-edit]')

    title.parentNode.removeChild(title)

    let inputTitle = document.createElement('input')
    inputTitle.classList.add('inputNewList')
    inputTitle.dataset.titleToEdit = '';
    // inputTitle.maxLength = '10'
    // inputTitle.setAttribute('onkeydown',title())
    if (editTitle.parentNode.querySelector('[data-done-button') !== null) {
        editTitle.parentNode.removeChild(doneBtn)
    }

    let button = document.createElement('button')
    button.dataset.doneButton ='';
    button.innerHTML = 'Done'
    button.classList.add('addButtono')
    button.addEventListener('click', () => {
        let value = inputTitle.value

        editTitle.parentNode.removeChild(button)
        editTitle.parentNode.removeChild(inputTitle)
        

        let newTitle = document.createElement('divs')
        newTitle.classList.add('menuHeaderTitle')
        newTitle.dataset.titleToEdit='';
        newTitle.innerHTML = value;

        editTitle.parentNode.prepend(newTitle)
    })

    editTitle.parentNode.prepend(button);
    
    editTitle.parentNode.prepend(inputTitle);

    
})

