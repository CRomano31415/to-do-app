function onReady(){
	var toDos = [];
	var addToDoForm = document.getElementById('addToDoForm');

	function createNewToDo(){
		var newToDoText = document.getElementById('newToDoText');
		toDos.push({
			title: newToDoText.value,
			complete: false
		});
		newToDoText.value = '';

		renderTheUI(toDos);
	}

	function renderTheUI(toDos){
		var todoList = document.getElementById('toDoList');

		toDoList.innerHTML = '';

		toDos.forEach(function(toDo){
			var newLi = document.createElement('li');
			var checkbox = document.createElement('input');
			var deleteBtn = document.createElement('button');
			var t = document.createTextNode("Delete Item");

			checkbox.type = "checkbox";
			deleteBtn.id = "delete";
			deleteBtn.appendChild(t);
			newLi.innerHTML = toDo.title;

			todoList.appendChild(newLi);
			newLi.appendChild(checkbox);
			newLi.appendChild(deleteBtn);

			deleteBtn.addEventListener('click', ()=>{
				todoList.removeChild(newLi);
			});

		});

	}

	addToDoForm.addEventListener('submit', function(event){
		event.preventDefault();
		createNewToDo();
	});


	renderTheUI(toDos);
}


window.onload = function(){
	onReady();
};

