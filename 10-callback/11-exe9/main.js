function randomArr() {
    let arr = []
    for (let i = 0; i < 100; i++) {
        let number = Math.floor(Math.random() * 100)
        arr.push(number)
    }//end of for 
    console.log(arr)
}
setInterval(randomArr, 3000);

