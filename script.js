// Referencat e elementeve nga HTML
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// Funksioni për të shtuar një detyrë të re
function addTask() {
    const taskText = taskInput.value.trim(); // .trim() heq hapësirat e kota

    // Kontrolli nëse inputi është bosh
    if (taskText === "") {
        alert("Ju lutem shkruani një detyrëeeee!");
        return;
    }

    // 1. Krijimi i elementit <li> (rreshti i detyrës)
    const li = document.createElement('li');

    // 2. Vendosja e përmbajtjes brenda <li>
    // Këtu kemi tekstin e detyrës dhe butonin për fshirje
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn">Fshij</button>
    `;

    // 3. Shtimi i funksionalitetit "Delete" për butonin e sapokrijuar
    const deleteBtn = li.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', function() {
        li.remove(); // Fshin elementin <li> nga lista
    });

    // 4. Shtimi i <li> në listën kryesore <ul>
    taskList.appendChild(li);

    // 5. Pastrimi i kutisë së shkrimit dhe fokusimi përsëri tek ajo
    taskInput.value = "";
    taskInput.focus();
}

// Lidhja e funksionit me butonin "Shto"
addBtn.addEventListener('click', addTask);

// Opsionale: Lejon shtimin e detyrës edhe duke shtypur butonin "Enter"
taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});