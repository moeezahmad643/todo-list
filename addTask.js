
function createTemporaryElement() {
    // Create a div element for the temporary element
    const tempElement = document.createElement("div");
    tempElement.setAttribute('id', "tempElement")
    tempElement.innerHTML = `
        <i class="bi bi-file-earmark-plus"></i>
        <input type='text' id='title' placeholder='Title'>
        <select id="category" name="category">
            <option value="Office">Office</option>
            <option value="Home">Home</option>
            <option value="Weekend">Weekend</option>
        </select>    
        <textarea type='text' id='desc' placeholder='Desc'></textarea>
        <p id='emptyAlert'></p>
        <button onclick='addTask()'><i class="bi bi-plus-circle-fill"></i> Add Task</button>
        `;

    document.body.appendChild(tempElement);
}
function addTask() {

    let title = document.getElementById("title").value
    let desc = document.getElementById("desc").value
    let category = document.getElementById("category").value;
    let condition = 'true'

    if (!title || !desc) {
        document.getElementById("emptyAlert").innerHTML = "Plz Fill To Continue."
    }
    else {
        let newTask = { title, desc, category, condition };
        console.log(newTask);

        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

        console.log(tasks);
        console.log(typeof tasks);

        tasks.push(newTask);
        console.log(tasks);

        localStorage.setItem("tasks", JSON.stringify(tasks));
        document.body.removeChild(document.getElementById('tempElement'));

        window.location.reload()
    }
}