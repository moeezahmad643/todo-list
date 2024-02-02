function deleteTaskForever(icon) {
    let taskBox = icon.parentElement;
    let taskTitle = taskBox.querySelector('h3').innerText.trim(); // Trim to remove leading/trailing spaces

    let tasks = JSON.parse(localStorage.getItem('deletetasks')) || [];

    tasks = tasks.filter(task => task.title !== taskTitle);

    localStorage.setItem("deletetasks", JSON.stringify(tasks));

    document.getElementById("tasks").removeChild(taskBox);

    checkbox();
}
