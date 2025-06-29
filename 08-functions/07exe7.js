function countNunInArr(numbers, num) {
    let count = 0
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] == num) {
            count++
        }
    }//end of for
    return count
}
let mynumberts = [1, 4, 4, 2, 4, 5, 4]
let targetNumber = 4
let c = countNunInArr(mynums, targetNumber)// 
alert(c)