function onReady(){
	const addToDoForm = document.getElementById('addToDoForm');
	const newToDoText = document.getElementById('newToDoText');
	const toDoList = document.getElementById('toDoList');


	addToDoForm.addEventListener('submit', () => {
		event.preventDefault();

		//if the button clicked was Add, then add
		//otherwise if it was Delete, then delete

		let title = newToDoText.value;

		let checkbox = document.createElement('input');
		let button = document.createElement('button');
		let del = document.createTextNode('Nevermind, Delete This');
		let newLi = document.createElement('li');

		checkbox.type = "checkbox";
		button.value = "delete";

		newLi.textContent = title;

		toDoList.appendChild(newLi);
		newLi.appendChild(checkbox);
		newLi.appendChild(button);
		button.appendChild(del);

		newToDoText.value = '';

		button.addEventListener('click', () =>{
			toDoList.removeChild(newLi);

		});
	});

}	

window.onload = function(){
	onReady();
};

