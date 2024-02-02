function deleteTask(icon) {
    let taskBox = icon.parentElement;
    let taskTitle = taskBox.querySelector('p').innerText;

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    console.log(tasks)

    let deletedTask = tasks.find(task => task.desc === taskTitle);

    let updatedTasks = tasks.filter(task => task.desc !== taskTitle);

    localStorage.setItem("tasks", JSON.stringify(updatedTasks));


    let deletedTasks = JSON.parse(localStorage.getItem('deletetasks')) || [];

    console.log(deletedTask)

    deletedTasks.push(deletedTask);

    localStorage.setItem("deletetasks", JSON.stringify(deletedTasks));

    document.getElementById("tasks").removeChild(taskBox);

    checkbox()
}