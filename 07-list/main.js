let arr = []
let numbers = [1, 2, 33, 4, 50]
console.log(numbers)
console.log(numbers[0])
console.log(numbers[numbers.length - 1])
numbers.push(1000)
//הערך של האיבר במיקום מרובעות 

console.log(numbers)
let x = numbers.pop()
console.log(x)
console.log(numbers)
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
        console.log(numbers[i])
        console.log("we love blab lalalal")
    }
}

let nums = []
for (let i = 0; i < 10; i++) {
    let num = Math.floor(Math.random() * 100)
    nums.push(num)
}
console.log(nums)



