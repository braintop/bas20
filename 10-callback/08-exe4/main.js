function amazing(callback) {
    const num = callback(42, 128, 37, 81, 66);
    console.log("Num: " + num);
}
function t(x1, x2, x3, x4, x5) {
    let index = Math.floor(Math.random() * 5) // 0, 1, ,2, 3, 4 
    let arr = [x1, x2, x3, x4, x5]
    return arr[index]
}
amazing(t)

// function sum(a,b){
//     return a+b
// }
