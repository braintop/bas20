function avgArray(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }//end of for 
    return sum / arr.length
}

let avgArray = (arr) => {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }//end of for 
    return sum / arr.length
}

let numbers1 = [10, 5, 20, 30]
let average = avgArray(numbers1)
console.log("average is :" + average)