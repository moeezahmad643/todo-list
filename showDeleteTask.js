function showAll() {
    window.location.href = "/";
}
function delAll() {
    
}


if (window.location.href.includes('showdelete')) {


    document.getElementById('toggleDelete').addEventListener('click', showAll)
    document.getElementById('toggleDelete').innerHTML = `
    <i class="bi bi-list-task"></i>
    <p>Show All Task</p>
    `;

 

    let tasks = JSON.parse(localStorage.getItem('deletetasks')) || null
    // console.log(tasks)
    if (tasks) {

        document.getElementById("tasks").innerHTML = ""

        tasks.forEach(task => {
            // console.log(task)
            let taskBox = document.createElement('div')
            taskBox.setAttribute('class', 'task')
            
     
            
            let element = ''
            if (task.category == 'Office') element = "<i class='bi bi-building-fill'></i>"
            if (task.category == 'Home') element = "<i class='bi bi-house-fill'></i>"
            if (task.category == 'Weekend') element = "<i class='bi bi-airplane-fill'></i> "

            console.log(task)

            taskBox.innerHTML = `
            <i class="bi bi-x-lg" onclick='deleteTaskForever(this)'></i>

            <h3>${element} ${task.title}</h3>
            <p>${task.desc}</p>
         `;

            document.getElementById("tasks").appendChild(taskBox)

        });
    }
    document.getElementById("mainHeading").innerHTML = 'Deleted Tasks'

    checkbox()

}
function checkbox() {
    let data = document.getElementById("tasks").innerHTML

    if (!data) {
        document.getElementById("tasks").innerHTML = '<p id="checkBox">No Task To show...</p>'
    }
}
