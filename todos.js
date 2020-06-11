var listElement = document.querySelector('#app ul')
var inputElement = document.querySelector('#app input')
var btnElement = document.querySelector('#app button')

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos() {
    listElement.innerHTML = "";

    for(todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);
        var linkElement = document.createElement('a')
        var divElement = document.createElement('div')
        var Trashcan = document.createElement('i')
        var doneElement = document.createElement('i')
        var spanElement = document.createElement('span')
        var pos = todos.indexOf(todo);
        
        divElement.setAttribute('class','div')

        Trashcan.setAttribute('class',"far fa-trash-alt")
        Trashcan.setAttribute('id', 'trash')

        doneElement.setAttribute('class', 'fas fa-check')
        doneElement.setAttribute('id','check')

        linkElement.setAttribute('onclick', 'deleteTodo('+ pos+')');
        linkElement.setAttribute('href', '#')


        spanElement.appendChild(doneElement);
        listElement.appendChild(divElement);
        linkElement.appendChild(Trashcan);
        todoElement.appendChild(todoText);
        divElement.appendChild(spanElement);
        divElement.appendChild(todoElement);
        divElement.appendChild(linkElement);
        spanElement.setAttribute('onclick', 'turnOn('+pos+')')
        spanElement.setAttribute('id',pos)
    }
}

renderTodos()

function addTodo() {
    var todoText = inputElement.value;    
    if(todoText==''){
        return window.alert("Digite algo")
    }

    todos.push(todoText);
    inputElement.value = "";
    renderTodos();
    saveToStorage();
};

btnElement.onclick=addTodo;

function deleteTodo(pos) {
    todos.splice(pos, 1)
    renderTodos();
    saveToStorage();
}
function turnOn(position) {
    document.getElementById(position).classList.toggle("checked");
}
function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos));
}