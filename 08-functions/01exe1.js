function minInArray(arr) {
    let min = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }
    }//end of for 
    return min
}


let numbers = [10, 5, 18, 300, 22]
let m = minInArray(numbers)
console.log("min is :" + m)