function newArrWithBiggerThan50(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 50) {
            newArr.push(arr[i])
        }
    }//end of for 
    return newArr;
}
function newArrWithBiggerThan50(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 50) {
            newArr.push(arr[i])
        }
    }//end of for 
    return newArr;
}
let newArrWithBiggerThan50v2 = (arr) => {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 50) {
            newArr.push(arr[i])
        }
    }//end of for 
    return newArr;
}

let nums = [1, 200, 3, 400, 40]
let a = newArrWithBiggerThan50(nums)
console.log(a)
