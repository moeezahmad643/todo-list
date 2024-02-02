setInterval(() => {

    let date = new Date()

    document.getElementById("calender").innerHTML = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`
    document.getElementById("clock").innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`



},1000)