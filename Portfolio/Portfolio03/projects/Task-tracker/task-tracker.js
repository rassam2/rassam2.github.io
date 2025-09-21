const textbar = document.getElementById('textbar');
const createTaskButton = document.getElementById('create-task-button');
const taskTableBody = document.getElementById('task-table').getElementsByTagName('tbody')[0];
const taskHeader = document.getElementById('task-header');


taskHeader.textContent = "Task";


createTaskButton.onclick = () => {
    const taskName = textbar.value.trim();

    if (taskName) {
        const newRow = taskTableBody.insertRow();


        const taskCell = newRow.insertCell();
        taskCell.textContent = taskName;
        // Make the task name cell editable
        taskCell.setAttribute('contenteditable', 'true'); //


        const completedCell = newRow.insertCell();
        completedCell.textContent = 'No';
        // Make the completed cell editable
        completedCell.setAttribute('contenteditable', 'true'); //




        const deleteCell = newRow.insertCell();
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';

        deleteButton.onclick = () => {
            newRow.remove();
        };
        deleteButton.style.backgroundColor = 'red'; //
        deleteButton.style.color = 'white'; // 



        deleteCell.appendChild(deleteButton);


        textbar.value = '';
    }
};