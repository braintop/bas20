function random() {
    let number = Math.floor(Math.random() * 100)
    console.log(number)
}

function cool(callback) {
    callback()
}

cool(random)