const editTitle = document.querySelector('[data-edit-title]')
const titleInput = document.querySelector('[data-title-to-edit]')
const doneBtn = document.querySelector('[data-done-button]')
const todos = document.querySelector('[data-todos]')

const addListInput = document.querySelector('[data-list-input]')
const projects = document.querySelector('[data-my-projects]')

const deleteBtn = document.querySelector('[data-delete-button]')

const h3Title = document.querySelector('[data-project-title]')

const addForm = document.querySelector('[data-add-form]')
const submitButtonHandler = document.querySelector('[data-submit-button]')

const listOfTodos = document.querySelector('[data-list-of-todos]')


// const forma = document.forms['.addForm']


var myProjects = [{name:'today',selected:true,tasks:[]}];

var id = 0;


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

        renderTasks()
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

        renderTasks();
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
function createTaskObject(title,dueDate,priority,specialId) {
    this.title = title;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = false;
    this.specialId = specialId;
    this.deleteTask = function() {
        console.log('works fine')
    }
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
        if (!(document.querySelector('.addForm') === null)) {
            document.querySelector('.addForm').parentNode.removeChild(document.querySelector('.addForm'));
            return
        }
        const template = document.querySelector('#formTemplate')
        const templateContent = template.content

        const tempCopy = templateContent.cloneNode(true);

        todos.appendChild(tempCopy);
        
        submitButton();
        
    })
}

function submitButton() {

    document.querySelector('.addForm').addEventListener('submit',(e) => {
        e.preventDefault()
        const title = document.querySelector('.addForm').elements['title'].value
        const dueDate = document.querySelector('.addForm').elements['dueDate'].value
        const priority = document.querySelector('.addForm').elements['priority'].value
        document.querySelector('.addForm').reset();
        
        addTaskToObject(title,dueDate,priority);
        renderTasks();
        console.log(myProjects)
    })
    
}
   
function addTaskToObject(title,dueDate,priority) {
    let newTaskObject = new createTaskObject(title,dueDate,priority,id)
    id++;
    const selectedName = document.querySelector('.selectedTask').innerHTML
    myProjects.forEach(project => {
        if (project.name === selectedName) {
            projectSelectedName = project
        }
    })
    projectSelectedName.tasks.push(newTaskObject);
}

function renderTasks() {
    if (document.querySelector('.selectedTask') === null) {
        listOfTodos.innerHTML = "";
        return
    }

    const selectedName = document.querySelector('.selectedTask').innerHTML
    

    myProjects.forEach(project => {
        if (project.name === selectedName) {
            projectSelectedName = project
        }
    })
    listOfTodos.innerHTML = "";
    projectSelectedName.tasks.forEach(task => {
        appendTask(task)
    })

    renderTasksRemaining(projectSelectedName);
    // deleteTask();
}

function appendTask(task) {
    const taskTemplate = document.querySelector('#taskTemplate')
    const taskTemplateContent = taskTemplate.content
    const taskTempCopy = taskTemplateContent.cloneNode(true)

    let li = taskTempCopy.querySelector('li');
    li.classList.add(task.priority)
    li.dataset.specialId = task.specialId;

    let p = taskTempCopy.querySelector('[data-task-content]');
    p.innerHTML = `${task.title} ${task.dueDate}`;

    let btns = taskTempCopy.querySelector('[data-todo-btns]');

    let delBtn = btns.querySelector('[data-delete-task]')

    delBtn.addEventListener('click',() =>{
        task.deleteTask();
    })


    listOfTodos.appendChild(taskTempCopy);
    
}

function renderTasksRemaining(selected) {
    let length = selected.tasks.length;
    const p = document.querySelector('[data-task-remaining]')
    if (length === 1) {
        p.innerHTML = `${length} task remaining`
    }
    else {
        p.innerHTML = `${length} tasks remaining`
    }
}

// function deleteTask() {
//     const deleteTaskBtn = document.querySelector('[data-delete-task]')
//     deleteTaskBtn.addEventListener('click',() => {
//         let parent = deleteTaskBtn.parentNode;
//         let grandParent = parent.parentNode;
//         let deleteId = deleteTaskBtn.dataset.deleteId;

//         console.log(deleteId)
//     })
// }
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
renderTasks();



// checkSelected(;myProjects);
// makeSelected()
projects.firstElementChild.classList.add('selectedTask')