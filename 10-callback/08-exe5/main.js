function randomColor() {
    let arr = ["green","blue","yellow","white" ]
    let index = Math.floor(Math.random()*arr.length)
    console.log(arr[index])
}
function cool(paintCallback) {
	paintCallback();
}
cool(randomColor)

