function randomColor() {
    let arr = ["green", "blue", "yellow", "white","black"]
    let index = Math.floor(Math.random() * arr.length)
    console.log(arr[index])
    document.body.style.background = arr[index]
}
setInterval(randomColor, 1000);

