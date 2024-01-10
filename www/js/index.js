window.onload = function () {
    const addButton = document.getElementById('addButton');
    const resetButton = document.getElementById('resetButton');
    const taskTodoList = document.getElementById('taskTodoList');
    const taskDoneList = document.getElementById('taskDoneList');

    addButton.onclick = ajouterTache;
    resetButton.onclick = reinitialiserTache;

    function ajouterTache() {
        const tache = document.getElementById('tache');

        if (tache.value.trim() !== "") {
            let newItem = document.createElement('li');
            newItem.innerHTML = tache.value;

            // Ajouter un gestionnaire d'événements pour basculer entre les listes
            newItem.onclick = function () {
                toggleTaskList(this);
            };

            // Ajouter les gestes de balayage
            $(newItem).on('swiperight', function () {
                toggleTaskList(this);
            });

            // Ajouter la classe 'todo' pour indiquer que la tâche est à faire
            $(newItem).addClass('todo');

            taskTodoList.appendChild(newItem);
            tache.value = '';

            // Mettre à jour le texte du bouton pour la liste des tâches à faire
            addButton.value = '-';
        }
    }

    function toggleTaskList(task) {
        if (task.classList.contains('todo')) {
            // Si la tâche est à faire, la déplacer vers la liste des tâches terminées
            taskDoneList.appendChild(task);
            // Changer la classe pour indiquer que la tâche est terminée
            $(task).removeClass('todo').addClass('done');
        } else {
            // Sinon, la tâche est terminée, la déplacer vers la liste des tâches à faire
            taskTodoList.appendChild(task);
            // Changer la classe pour indiquer que la tâche est à faire
            $(task).removeClass('done').addClass('todo');
        }

        // Mettre à jour le texte du bouton pour la liste des tâches terminées
        addButton.value = '-';
    }

    function reinitialiserTache() {
        const tache = document.getElementById('tache');
        tache.value = '';

        taskTodoList.innerHTML = '';
        taskDoneList.innerHTML = '';

        // Réinitialiser le bouton à son état initial pour la liste des tâches à faire
        addButton.value = '+';
    }
}
