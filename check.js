function checkbox() {
    let data = document.getElementById("tasks").innerHTML

    if (!data) {
        document.getElementById("tasks").innerHTML = '<p id="checkBox">No Task To show...</p>'
    }
}

