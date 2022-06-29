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
        let selected = document.querySelector('.selectedTask')

        myProjects.forEach(project => {
            if (project.name === selected.innerHTML) {
                 nameProject = project;
            }
        })

        nameProject.tasks.forEach(task => {
            if (task === this) {
                for( var i = 0; i < nameProject.tasks.length; i++){ 
    
                    if ( nameProject.tasks[i] === this) { 
                
                        nameProject.tasks.splice(i, 1); 
                    }
                
                }
            }
        })
        renderTasks();
    }
    this.editTask = function() {
        appendEditForm(this)
    }
    this.makeCompleted = function() {
        if (this.completed) {
            this.completed = false;
            renderTasks();
            return
        }
        this.completed = true;
        renderTasks();
        
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

function clearCompletedTasks() {
    const clearCompletedTasksBtn = document.querySelector('[data-clear-tasks]')

    clearCompletedTasksBtn.addEventListener('click',() => {
        let selected = document.querySelector('.selectedTask')

        myProjects.forEach(project => {
            if (project.name === selected.innerHTML) {
                selectedProjectName = project;
            }
        })

        selectedProjectName.tasks.forEach(task => {
            if (task.completed === true) {
                task.deleteTask();
            }
        }) 
    })
}

function appendEditForm(taskThis) {
    if (!(document.querySelector('.addEditForm') === null)) {
        document.querySelector('.addEditForm').parentNode.removeChild(document.querySelector('.addEditForm'));
        return
    }
    const template = document.querySelector('#formEditTemplate')
    const templateContent = template.content

    const tempCopy = templateContent.cloneNode(true);

    todos.appendChild(tempCopy);

    submitEditButon(taskThis);
}

function submitEditButon(taskThis) {
    document.querySelector('.addEditForm').addEventListener('submit',(e) => {
        e.preventDefault()
        const title = document.querySelector('.addEditForm').elements['title'].value
        const dueDate = document.querySelector('.addEditForm').elements['dueDate'].value
        const priority = document.querySelector('.addEditForm').elements['priority'].value
        document.querySelector('.addEditForm').reset();
        
        // addTaskToObject(title,dueDate,priority);
        taskThis.title = title;
        taskThis.dueDate = dueDate;
        taskThis.priority = priority;
        renderTasks();
        console.log(myProjects)
        document.querySelector('.addEditForm').parentNode.removeChild(document.querySelector('.addEditForm'))
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
    // localStorage.setItem('projects',JSON.stringify(myProjects))
    
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
    let editBtn = btns.querySelector('[data-edit-task]')
    let completedBtn = taskTempCopy.querySelector('[data-tick-button]')

    if (task.completed) {
        completedBtn.dataset.completed = 'true'
    } 
    if (task.completed === false) {
        completedBtn.dataset.completed = 'false'
    }

    delBtn.addEventListener('click',() =>{
        let li = delBtn.parentNode.parentNode;
        li.parentNode.removeChild(li)
        task.deleteTask();
    })

    editBtn.addEventListener('click',() => {
        task.editTask();
    })
    
    completedBtn.addEventListener('click',() => {
        task.makeCompleted();
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

function firstRender() {

    if (localStorage.getItem('projects') === null) {
        return
    }
    
    let projects = localStorage.getItem('projects')
    let savedMyProjects = JSON.parse(projects);

    savedMyProjects.forEach(savedProject => {
        myProjects.push(savedProject);
    })
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

// firstRender();

displayProjects(myProjects);
makeSelectedCss();
deleteProject();
appendForm();
renderTasks();
clearCompletedTasks()



// checkSelected(;myProjects);
// makeSelected()
projects.firstElementChild.classList.add('selectedTask')