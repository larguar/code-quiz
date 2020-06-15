var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

init();

function renderTodos() {
	// Clear todoList element and update todoCountSpan
	todoList.innerHTML = "";
	todoCountSpan.textContent = todos.length;

	// Render a new li for each todo
	for (var i = 0; i < todos.length; i++) {
		var todo = todos[i];

		var li = document.createElement("li");
		li.setAttribute('data-index', i);
		li.innerHTML = todo + '<button>Complete</button>';

		todoList.appendChild(li);
	}
}

function init() {
	var storedTodos = JSON.parse(localStorage.getItem('todos'));

	if (storedTodos !== null) {
		todos = storedTodos;
	}

	renderTodos();
}

todoForm.addEventListener("submit", function(event) {
	event.preventDefault();

	var todoText = todoInput.value.trim();

	if (todoText === '') {
		return;
	}

	todos.push(todoText);
	todoInput.value = '';

	localStorage.setItem('todos', JSON.stringify(todos));
	renderTodos();
});

todoList.addEventListener('click', function(event) {	
	if (event.target.matches('button') === true) {

		var index = event.target.parentElement.getAttribute('data-index');
		todos.splice(index, 1);

		localStorage.setItem('todos', JSON.stringify(todos));
		renderTodos();

	}
});