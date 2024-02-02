


if (!(window.location.href.includes('showdelete'))) {

    function showTask() {

        // URL does not contain 'showdelete'
        console.log('The URL does not contain "showdelete"');
        document.getElementById('toggleDelete').innerHTML = `
            <i class="bi bi-trash3-fill"></i>
            <p>Deleted Tasks</p>
    `;


        let tasks = JSON.parse(localStorage.getItem('tasks'))
        if (tasks) {
            document.getElementById("tasks").innerHTML = ""


            if (document.getElementById("office").checked) tasks = tasks.filter(task => task.category === 'Office')
            if (document.getElementById("home").checked) tasks = tasks.filter(task => task.category === 'Home')
            if (document.getElementById("weekend").checked) tasks = tasks.filter(task => task.category === 'Weekend')
            // if (document.getElementById("all").checked) 

            let query = document.getElementById('Search').value
            console.log(query)
            if (query != null) {
                console.log(query)
                tasks = tasks.filter(task => task.title.includes(query) || task.desc.includes(query))

            }
            tasks = tasks.filter(task => task.condition === 'true')


            tasks.forEach(task => {


                // console.log(task)
                // console.log(task.condition)


                let taskBox = document.createElement('div')
                taskBox.setAttribute('class', 'task')
                let element = ''
                if (task.category == 'Office') element = "<i class='bi bi-building-fill'></i>"
                if (task.category == 'Home') element = "<i class='bi bi-house-fill'></i>"
                if (task.category == 'Weekend') element = "<i class='bi bi-airplane-fill'></i> "

                taskBox.innerHTML = `

                    <i class="bi bi-x-lg" onclick='deleteTask(this)'></i>

                    <h3>${element} ${task.title}</h3>
                    <p>${task.desc}</p>
         `;

                document.getElementById("tasks").appendChild(taskBox)
            });
        }
        document.getElementById("mainHeading").innerHTML = 'Your Tasks'
    }

    showTask()
}

