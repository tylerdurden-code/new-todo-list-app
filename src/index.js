const editTitle = document.querySelector('[data-edit-title]')
const titleInput = document.querySelector('[data-title-to-edit]')
const doneBtn = document.querySelector('[data-done-button]')

const addListInput = document.querySelector('[data-list-input]')
const projects = document.querySelector('[data-my-projects]')


var myProjects = new Array();
myProjects


function createProjectObject(name) {
    this.name = name;
}

editTitle.addEventListener('click',() => {
    let title = document.querySelector('[data-title-to-edit]')

    title.parentNode.removeChild(title)

    let inputTitle = document.createElement('input')
    inputTitle.classList.add('inputNewList')
    inputTitle.dataset.titleToInput = '';
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

function displayProjects(myProjects) {
    myProjects.forEach(project => {
        let li = document.createElement('li')
        li.innerHTML = project.name
        projects.appendChild(li)
    });
}

addListInput.addEventListener('keydown',(e) => {
    if (e.key === 'Enter') {
        addProject(addListInput.value)
        let projectObject = new createProjectObject(addListInput.value)
        addListInput.value = ''
        myProjects.push(projectObject);
        console.log(myProjects)
    }
    
})


function addProject(listName) {


    let projectLi = document.createElement('li');

    projectLi.innerHTML = listName;

    projects.appendChild(projectLi);
}

function addProjectToMyProjects(projectName) {
    
}

displayProjects();