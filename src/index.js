const editTitle = document.querySelector('[data-edit-title]')
const titleInput = document.querySelector('[data-title-to-edit]')
const doneBtn = document.querySelector('[data-done-button]')
const todos = document.querySelector('[data-todos]')

const addListInput = document.querySelector('[data-list-input]')
const projects = document.querySelector('[data-my-projects]')

const deleteBtn = document.querySelector('[data-delete-button]')

const h3Title = document.querySelector('[data-project-title]')

const addForm = document.querySelector('[data-add-form]')


var myProjects = [{name:'today',selected:true,tasks:[]}];


function deleteProject() {
    deleteBtn.addEventListener('click',() => {
        let selected = document.querySelector('.selectedTask');
        selected.parentNode.removeChild(selected)

        console.log(selected.innerHTML)

        myProjects.forEach(project => {
            if (project.name === (selected.innerHTML).toLowerCase()) {
                for( var i = 0; i < myProjects.length; i++){ 
    
                    if ( myProjects[i] === project) { 
                
                        myProjects.splice(i, 1); 
                    }
                
                }
            }
        })

        // clearArray(myProjects)
    })
}

function makeSelectedCss() {
    projects.addEventListener('click',(e) => {
        makeTitle(e.target)
        if (document.querySelector('.selectedTask') === null) {
            projects.firstElementChild.classList.add('selectedTask')
            
        }

        if (e.target.classList[0] === 'myTasksList') {
            return
        }
        var prevSelected = document.querySelector('.selectedTask')
        prevSelected.classList.remove('selectedTask')
        e.target.classList.add('selectedTask')

        var selected = document.querySelector('.selectedTask');
        changeObjectSelected(selected.innerHTML,prevSelected.innerHTML);
    })
    
}

// function clearArray(arr) {
//     let newMyProjects = arr.filter(function (e) {
//         if (!(e.name = '')) {
//             return e
//         }
//     })

//     console.log(newMyProjects)
// }

// function checkEmpty(word) {
//     if (word === '') {
//         return true
//     }
// }

function makeSelected() {
    myProjects.forEach(project => {
        if (project.selected === true) {
            let selectedName = project.name;
        }
    })

    let lis = projects.getElementsByTagName('li')
    let lisArr = Array.prototype.slice.call(lis);
    lisArr.forEach(li => {
        if (selectedName === li.innerHTML) {
            projects.getEle
        }
    })
}

function makeTitle(title) {
    if (title.className === 'myTasksList') {
        return
    }
    h3Title.innerHTML = title.innerHTML;


}

function createProjectObject(name) {
    this.name = name;
    this.selected = false;
    this.tasks = [];
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

function changeObjectSelected(selection,previousSelection) {
    myProjects.forEach(project => {
        if (project.name === selection) {
            project.selected = true;
        }
        if (project.name === previousSelection) {
            project.selected = false;
        }
    })
}

addListInput.addEventListener('keydown',(e) => {
    
    if (e.key === 'Enter') {
        if (addListInput.value === "") {
            return
        }
        let checkIn = checkIfNameExists(addListInput.value);
        if (checkIn) {
            addListInput.value = ''
            return
        }
        else {
            addProject(addListInput.value)
            let namopoulos = addListInput.value
            namopoulos = namopoulos.toLowerCase()
            let projectObject = new createProjectObject(namopoulos)
            addListInput.value = ''
            myProjects.push(projectObject);
            console.log(myProjects)
        }
        
    }
    
})


function addProject(listName) {


    let projectLi = document.createElement('li');
    projectLi.id = listName

    projectLi.innerHTML = listName;

    projects.appendChild(projectLi);
}

function addProjectToMyProjects(projectName) {
    
}
function checkIfNameExists(namo) {
    namo = namo.toLowerCase()
    let check = false
    myProjects.forEach(project => {
        if (project.name === namo) {
            check = true;
        }
    })

    

    return check
}
function appendForm() {
    addForm.addEventListener('click',() => {
        const template = document.querySelector('#formTemplate')
        const templateContent = template.content

        const tempCopy = templateContent.cloneNode(true);

        todos.appendChild(tempCopy);

    })
}

// function createTaskObject()

// function checkSelected(myProjects) {
//     myProjects.forEach(project => {
//         if (project.selected === true) {

//         }
//     })
// }

displayProjects(myProjects);
makeSelectedCss();
deleteProject();
appendForm();
// checkSelected(;myProjects);
// makeSelected()
projects.firstElementChild.classList.add('selectedTask')